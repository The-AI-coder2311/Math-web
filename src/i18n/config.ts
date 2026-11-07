import { en } from './en';
import { es } from './es';

// To add a language: add its code here, add src/i18n/<code>.ts, register it in
// `strings` below, and create src/content/<code>/. The README has the steps.
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const strings: Record<Locale, typeof en> = { en, es };

/**
 * Sections that aren't translated yet, by the start of their address. These pages are
 * only built in English, and links to them from another language go to the English page.
 * Units are handled separately: a unit appears in a language once it has lessons there.
 */
export const untranslated: Record<Locale, string[]> = {
  en: [],
  es: ['contests/', 'formulas/', 'glossary/', 'teachers/plans/', 'teachers/problem-sets/'],
};

/** UI text for a language. */
export const t = (lang: Locale) => strings[lang];

/** The [...lang] URL segment: English lives at /, other languages at /es/ etc. */
export const langParam = (lang: Locale) => (lang === defaultLocale ? undefined : lang);

/** True when the page at `path` (like "contests/") is built in this language. */
export const isTranslated = (lang: Locale, path: string) => !untranslated[lang].some((prefix) => path.startsWith(prefix));

/** Static paths for pages that only vary by language. Pass the page's path to skip languages it isn't translated into. */
export const localePaths = (path = '') =>
  locales
    .filter((lang) => isTranslated(lang, path))
    .map((lang) => ({ params: { lang: langParam(lang) }, props: { lang } }));

/** Builds an internal URL, including the hosting base path and language. Untranslated pages link to English. */
export function href(lang: Locale, path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const shown = isTranslated(lang, path) ? lang : defaultLocale;
  const prefix = shown === defaultLocale ? '' : `/${shown}`;
  return `${base}${prefix}/${path}`;
}

/** The same as href, but always in the given language, for the language switcher. */
export function hrefIn(lang: Locale, path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${lang === defaultLocale ? '' : `/${lang}`}/${path}`;
}
