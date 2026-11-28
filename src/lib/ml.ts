import { getCollection } from 'astro:content';
import { renderMarkdown } from './markdown';
import type { Locale } from '../i18n/config';

/** The two question sets every Machine Learning topic has. */
export const mlSets = ['concepts', 'math'] as const;
export type MlSet = (typeof mlSets)[number];

/** The key a set's progress is saved under, next to the math units, such as "ml-loss-functions-math". */
export const mlProgressKey = (unit: string, set: MlSet) => `ml-${unit}-${set}`;

const inLang = (lang: Locale) => (entry: { id: string }) => entry.id.startsWith(`${lang}/`);
const unitOf = (id: string) => id.split('/')[2];

/** Every ML level in order, with its topics. A topic is available once it has a lesson. */
export async function getMlLevels(lang: Locale) {
  const [path] = (await getCollection('mlPath')).filter(inLang(lang));
  if (!path) return [];
  const lessons = (await getCollection('mlLessons')).filter(inLang(lang));
  const questions = (await getCollection('mlQuestions')).filter(inLang(lang));
  return path.data.levels.map((level, index) => ({
    ...level,
    number: index + 1,
    units: level.units.map((unit) => {
      const lesson = lessons.find((entry) => unitOf(entry.id) === unit.slug);
      const sets = questions.find((entry) => unitOf(entry.id) === unit.slug)?.data;
      return {
        ...unit,
        level: index + 1,
        levelTitle: level.title,
        available: Boolean(lesson),
        lesson: lesson && { ...lesson.data, html: lesson.rendered?.html ?? '' },
        // The slug of every question in each set, for progress bars.
        slugs: {
          concepts: (sets?.concepts ?? []).map((question) => question.slug),
          math: (sets?.math ?? []).map((question) => question.slug),
        },
      };
    }),
  }));
}

/** Every available ML topic in path order. */
export async function getMlUnits(lang: Locale) {
  return (await getMlLevels(lang)).flatMap((level) => level.units).filter((unit) => unit.available);
}

/** One question set, shaped like a unit's practice problems so the same Problem card can show it. */
export async function getMlQuestions(lang: Locale, unit: string, set: MlSet) {
  const file = (await getCollection('mlQuestions')).find((entry) => entry.id === `${lang}/ml/${unit}/questions`);
  return (file?.data[set] ?? []).map((question) => ({
    ...question,
    question: renderMarkdown(question.question),
    hint: renderMarkdown(question.hint),
    hint2: question.hint2 ? renderMarkdown(question.hint2) : '',
    solution: renderMarkdown(question.solution),
    another: '',
  }));
}
