import { getCollection } from 'astro:content';
import { site } from '../site.config';
import type { Locale } from '../i18n/config';

const inLang = (lang: Locale) => (entry: { id: string }) => entry.id.startsWith(`${lang}/`);
const lastPart = (id: string) => id.split('/').pop() as string;

/** Every level in order, with its units. A unit's `available` is true once its lesson file exists. */
export async function getLevels(lang: Locale) {
  const [pathway] = (await getCollection('pathway')).filter(inLang(lang));
  const lessons = (await getCollection('lessons')).filter(inLang(lang));
  return pathway.data.levels.map((level) => ({
    ...level,
    units: level.units.map((unit) => ({
      ...unit,
      contest: level.contest,
      available: lessons.some((lesson) => lesson.id === `${lang}/units/${unit.slug}/lesson`),
    })),
  }));
}

/** Every unit in pathway order, across all levels. */
export async function getUnits(lang: Locale) {
  return (await getLevels(lang)).flatMap((level) => level.units);
}

export async function getLesson(lang: Locale, unit: string) {
  const lessons = await getCollection('lessons');
  return lessons.find((lesson) => lesson.id === `${lang}/units/${unit}/lesson`)!;
}

/** A unit's problems in order, with the question, hint and solution separated. */
export async function getProblems(lang: Locale, unit: string) {
  const prefix = `${lang}/units/${unit}/problems/`;
  const entries = (await getCollection('problems')).filter((entry) => entry.id.startsWith(prefix));
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => {
      const [question, , hint, , solution] = (entry.rendered?.html ?? '').split(
        /<h2[^>]*>\s*(Hint|Solution)\s*<\/h2>/i,
      );
      return { ...entry.data, slug: lastPart(entry.id), question, hint, solution };
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
