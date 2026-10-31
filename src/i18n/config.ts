import { en } from './en';

// To add a language: add its code here, add src/i18n/<code>.ts, register it in
// `strings` below, and create src/content/<code>/. The README has the steps.
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const strings: Record<Locale, typeof en> = { en };

/** UI text for a language. */
export const t = (lang: Locale) => strings[lang];

/** The [...lang] URL segment: English lives at /, other languages at /es/ etc. */
export const langParam = (lang: Locale) => (lang === defaultLocale ? undefined : lang);

/** Static paths for pages that only vary by language. */
export const localePaths = () =>
  locales.map((lang) => ({ params: { lang: langParam(lang) }, props: { lang } }));

/** Builds an internal URL, including the hosting base path and language. */
export function href(lang: Locale, path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = lang === defaultLocale ? '' : `/${lang}`;
  return `${base}${prefix}/${path}`;
}
