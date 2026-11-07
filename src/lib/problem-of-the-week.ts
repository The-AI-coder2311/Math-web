import { getLevels, getProblems } from './content';
import { renderInline } from './markdown';
import type { Locale } from '../i18n/config';

// Problem of the Week: medium problems from the first two levels, picked by the week
// number, so it changes every Monday with no server. The home page shows the week the
// site was built, and the browser swaps in the current week from problem-of-the-week.json.

/** Weeks since Monday, January 1, 2024. The same formula runs in the browser. */
export const weekNumber = (date: Date) =>
  Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(2024, 0, 1)) / 604800000);

const POOL_SIZE = 52;

export async function getWeeklyPool(lang: Locale) {
  const levels = (await getLevels(lang)).slice(0, 2);
  const units = levels.flatMap((level) => level.units).filter((unit) => unit.available && !unit.review);
  const all = (
    await Promise.all(
      units.map(async (unit) =>
        (await getProblems(lang, unit.slug))
          .filter((problem) => problem.difficulty === 'medium')
          .map((problem) => ({ unit, problem })),
      ),
    )
  ).flat();
  // Take evenly spaced problems, so the weeks rotate through every unit.
  const step = Math.max(1, all.length / POOL_SIZE);
  const picked = Array.from({ length: Math.min(POOL_SIZE, all.length) }, (_, i) => all[Math.floor(i * step)]);
  return picked.map(({ unit, problem }) => ({
    unit: unit.slug,
    unitTitle: unit.title,
    path: `pathway/${unit.slug}/practice/#p-${problem.slug}`,
    question: problem.question,
    choices: problem.choices.map((choice) => renderInline(choice)),
  }));
}
