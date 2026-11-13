import { t, type Locale } from '../i18n/config';

/** The data attributes src/scripts/practice.ts reads, for any group of problems. */
export const practiceData = (lang: Locale, unit: string) => {
  const text = t(lang).practice;
  return {
    'data-practice': true,
    'data-unit': unit,
    'data-pick-first': text.pickFirst,
    'data-correct': text.correct,
    'data-wrong': text.wrong('{letter}'),
    'data-already-solved': text.alreadySolved,
    'data-reset-confirm': text.resetConfirm,
    'data-next-unsolved': text.nextUnsolved('{n}'),
    'data-nav-item': text.navItem('{n}', '{state}'),
    'data-nav-solved': text.navSolved,
    'data-nav-unsolved': text.navUnsolved,
    'data-showing-all': text.showingAll('{n}'),
    'data-showing-unsolved': text.showingUnsolved('{n}'),
    'data-showing-one-unsolved': text.showingOneUnsolved,
    'data-showing-none': text.showingNone,
  };
};
