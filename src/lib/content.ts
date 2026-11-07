import { getCollection } from 'astro:content';
import { analytics, analyticsOn, site } from '../site.config';
import { t } from '../i18n/config';
import lessonData from '../data/lessons.json';
import { isTranslated, type Locale } from '../i18n/config';

/** Every lesson and unit with its teacher details. scripts/build-lesson-data.mjs writes this file. */
export const getLessonData = (lang: Locale) => (lessonData as Record<string, typeof lessonData.en>)[lang] ?? { units: [], lessons: [] };

/** True when a page (an address like "pathway/counting/") is built in this language. */
export function pageExists(lang: Locale, path: string) {
  if (!isTranslated(lang, path)) return false;
  const { units } = getLessonData(lang);
  const ready = (unit: { lessons: number; problems: number; review: boolean }) => (unit.review ? unit.problems > 0 : unit.lessons > 0);
  const parts = path.split('/').filter(Boolean);
  if (parts[0] === 'pathway' && parts[1] && parts[1] !== 'start') {
    const level = parts[1].match(/^level-(\d+)$/);
    if (level) {
      const inLevel = units.filter((unit) => unit.level === Number(level[1]));
      return inLevel.length > 0 && inLevel.every(ready);
    }
    const unit = units.find((other) => other.slug === parts[1]);
    return Boolean(unit && ready(unit));
  }
  if (parts[0] === 'teachers' && parts[1] === 'answer-keys' && parts[2]) {
    return units.some((unit) => unit.slug === parts[2] && unit.problems > 0);
  }
  return true;
}

const inLang = (lang: Locale) => (entry: { id: string }) => entry.id.startsWith(`${lang}/`);
const lastPart = (id: string) => id.split('/').pop() as string;

/** A unit's lessons in order. File names start with a number, which sets the order. */
export async function getLessons(lang: Locale, unit: string) {
  const prefix = `${lang}/units/${unit}/lessons/`;
  const entries = (await getCollection('lessons')).filter((entry) => entry.id.startsWith(prefix));
  return entries
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((entry) => ({ ...entry.data, slug: lastPart(entry.id), html: entry.rendered?.html ?? '' }));
}

/** Every level in order, with its units. A unit is available once it has lessons (or, for a review, problems). */
export async function getLevels(lang: Locale) {
  const [pathway] = (await getCollection('pathway')).filter(inLang(lang));
  const lessons = (await getCollection('lessons')).filter(inLang(lang));
  const problems = (await getCollection('problems')).filter(inLang(lang));
  const has = (entries: { id: string }[], path: string) => entries.some((entry) => entry.id.startsWith(path));
  return pathway.data.levels.map((level) => ({
    ...level,
    units: level.units.map((unit) => ({
      ...unit,
      contest: level.contest,
      available: unit.review
        ? has(problems, `${lang}/units/${unit.slug}/problems/`)
        : has(lessons, `${lang}/units/${unit.slug}/lessons/`),
    })),
  }));
}

/** Every unit in pathway order, across all levels. */
export async function getUnits(lang: Locale) {
  return (await getLevels(lang)).flatMap((level) => level.units);
}

/** The title and path of a lesson named like counting/03-overcount-then-divide. */
async function lessonRef(lang: Locale, from: string | undefined) {
  if (!from) return undefined;
  const [unit, slug] = from.split('/');
  const lessons = await getCollection('lessons');
  const lesson = lessons.find((entry) => entry.id === `${lang}/units/${unit}/lessons/${slug}`);
  const unitTitle = (await getUnits(lang)).find((other) => other.slug === unit)?.title ?? unit;
  return lesson && { title: lesson.data.title, path: `pathway/${unit}/${slug}/`, unit, unitTitle, unitPath: `pathway/${unit}/` };
}

/** Practice contests in order. */
export async function getContests(lang: Locale) {
  const contests = (await getCollection('contests')).filter(inLang(lang));
  return contests
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => ({ ...entry.data, slug: entry.id.split('/')[2] }));
}

/** Practice contests for one level of the pathway (1 is the first level). */
export async function getContestsForLevel(lang: Locale, level: number) {
  return (await getContests(lang)).filter((contest) => contest.level === level);
}

/** A contest's questions in order, each with its solution and the lesson it comes from. */
export async function getContestProblems(lang: Locale, contest: string) {
  const prefix = `${lang}/contests/${contest}/problems/`;
  const entries = (await getCollection('contestProblems')).filter((entry) => entry.id.startsWith(prefix));
  const sorted = entries.sort((a, b) => a.data.order - b.data.order);
  return Promise.all(
    sorted.map(async (entry) => {
      const [question, solution] = (entry.rendered?.html ?? '').split(/<h2[^>]*>\s*Solution\s*<\/h2>/i);
      return { ...entry.data, slug: lastPart(entry.id), question, solution, lesson: await lessonRef(lang, entry.data.from) };
    }),
  );
}

/** A unit's problems in order, with the question, hints and solutions separated. */
export async function getProblems(lang: Locale, unit: string) {
  const prefix = `${lang}/units/${unit}/problems/`;
  const entries = (await getCollection('problems')).filter((entry) => entry.id.startsWith(prefix));
  const refs = await Promise.all(entries.map((entry) => lessonRef(lang, entry.data.from)));
  const refFor = new Map(entries.map((entry, i) => [entry.id, refs[i]]));
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => {
      const [question, ...parts] = (entry.rendered?.html ?? '').split(
        /<h2[^>]*>\s*(Hint 2|Hint|Solution|Another way)\s*<\/h2>/i,
      );
      const section = (name: string) => {
        const i = parts.findIndex((part, index) => index % 2 === 0 && part.toLowerCase() === name);
        return i < 0 ? '' : parts[i + 1];
      };
      return {
        ...entry.data,
        slug: lastPart(entry.id),
        question,
        hint: section('hint'),
        hint2: section('hint 2'),
        solution: section('solution'),
        another: section('another way'),
        refresher: refFor.get(entry.id),
      };
    });
}

export async function getPage(lang: Locale, name: string) {
  const pages = await getCollection('pages');
  const page = pages.find((entry) => entry.id === `${lang}/pages/${name}`)!;
  const privacy = t(lang).privacy;
  // {{privacy}} in a page becomes the privacy promise that matches the analytics setting.
  const promise = analyticsOn
    ? privacy.on(analytics.provider === 'plausible' ? 'Plausible Analytics' : 'GoatCounter')
    : privacy.off;
  const fill = (text: string) => text.replaceAll('{{siteName}}', site.name).replaceAll('{{privacy}}', promise);
  return { ...page.data, description: fill(page.data.description), html: fill(page.rendered?.html ?? '') };
}

/** The teacher plans, with each week's unit and lessons filled in from the lesson data. */
export async function getPlans(lang: Locale) {
  const { units, lessons } = getLessonData(lang);
  const unitNamed = (slug: string, where: string) => {
    const unit = units.find((other) => other.slug === slug);
    if (!unit) throw new Error(`teacher-plans.yaml: ${where} names "${slug}", which isn't in pathway.yaml`);
    return unit;
  };
  const contests = await getContests(lang);
  const [file] = (await getCollection('teacherPlans')).filter(inLang(lang));
  if (!file) return [];
  return file.data.plans.map((plan) => {
    const contest = contests.find((other) => other.slug === plan.finish.contest);
    if (!contest) throw new Error(`teacher-plans.yaml: ${plan.slug} names contest "${plan.finish.contest}", which doesn't exist`);
    return {
      ...plan,
      weeks: plan.weeks.map((week) => {
        const unit = unitNamed(week.unit, plan.slug);
        const unitLessons = lessons.filter((lesson) => lesson.unit === week.unit);
        return { ...week, unit, lessons: unitLessons, minutes: unitLessons.reduce((total, lesson) => total + lesson.minutes, 0) };
      }),
      review: unitNamed(plan.finish.review, plan.slug),
      contest,
    };
  });
}

/** Every worksheet with an answer key: one per unit with problems, and one per contest. */
export async function getAnswerKeys(lang: Locale) {
  const units = getLessonData(lang).units.filter((unit) => unit.problems > 0);
  const contests = await getContests(lang);
  return [
    ...units.map((unit) => ({
      slug: unit.slug,
      title: unit.title,
      group: unit.levelTitle,
      kind: 'unit' as const,
      questions: unit.problems,
    })),
    ...(await Promise.all(
      contests.map(async (contest) => ({
        slug: contest.slug,
        title: contest.title,
        group: '',
        kind: 'contest' as const,
        questions: (await getContestProblems(lang, contest.slug)).length,
      })),
    )),
  ];
}

/** The Formulas page, with each group's lesson filled in from the lesson data. */
export async function getFormulas(lang: Locale) {
  const { lessons } = getLessonData(lang);
  const [file] = (await getCollection('formulas')).filter(inLang(lang));
  const lessonNamed = (name: string | undefined, where: string) => {
    if (!name) return undefined;
    const lesson = lessons.find((other) => other.path === `pathway/${name}/`);
    if (!lesson) throw new Error(`formulas.yaml: "${where}" names lesson "${name}", which doesn't exist`);
    return lesson;
  };
  return {
    ...file.data,
    sections: file.data.sections.map((section) => ({
      ...section,
      groups: section.groups.map((group) => ({
        ...group,
        lesson: lessonNamed(group.lesson, group.title),
        items: group.items?.map((item) => ({ ...item, lesson: lessonNamed(item.lesson, item.name) })),
      })),
    })),
  };
}

export async function getProblemSets(lang: Locale) {
  const sets = (await getCollection('problemSets')).filter(inLang(lang));
  return sets
    .sort((a, b) => a.data.week - b.data.week)
    .map((set) => ({ ...set.data, slug: lastPart(set.id) }));
}

/** The placement quiz questions, easiest first. */
export async function getPlacement(lang: Locale) {
  const [file] = (await getCollection('placement')).filter(inLang(lang));
  return file.data.questions;
}

/** The contest strategy lesson's practice questions, shaped like unit problems. */
export async function getStrategyQuestions(lang: Locale) {
  const { renderMarkdown } = await import('./markdown');
  const [file] = (await getCollection('strategy')).filter(inLang(lang));
  return file.data.questions.map((question) => ({
    ...question,
    difficulty: 'easy' as const,
    question: renderMarkdown(question.question),
    hint: renderMarkdown(question.hint),
    hint2: '',
    solution: renderMarkdown(question.solution),
    another: '',
  }));
}
