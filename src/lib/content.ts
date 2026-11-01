import { getCollection } from 'astro:content';
import { site } from '../site.config';
import type { Locale } from '../i18n/config';

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
  return lesson && { title: lesson.data.title, path: `pathway/${unit}/${slug}/` };
}

/** Practice contests in order. */
export async function getContests(lang: Locale) {
  const contests = (await getCollection('contests')).filter(inLang(lang));
  return contests
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => ({ ...entry.data, slug: entry.id.split('/')[2] }));
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
  return {
    ...page.data,
    html: (page.rendered?.html ?? '').replaceAll('{{siteName}}', site.name),
  };
}

export async function getProblemSets(lang: Locale) {
  const sets = (await getCollection('problemSets')).filter(inLang(lang));
  return sets
    .sort((a, b) => a.data.week - b.data.week)
    .map((set) => ({ ...set.data, slug: lastPart(set.id) }));
}
