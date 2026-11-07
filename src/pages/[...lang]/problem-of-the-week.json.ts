import type { APIRoute } from 'astro';
import { getWeeklyPool } from '../../lib/problem-of-the-week';
import { href, localePaths, type Locale } from '../../i18n/config';

// Every Problem of the Week, in order. The home page picks one by the week number.
export const getStaticPaths = () => localePaths();

export const GET: APIRoute = async ({ props }) => {
  const lang = props.lang as Locale;
  const pool = (await getWeeklyPool(lang)).map((entry) => ({ ...entry, href: href(lang, entry.path), unitHref: href(lang, `pathway/${entry.unit}/`) }));
  return new Response(JSON.stringify(pool), { headers: { 'Content-Type': 'application/json' } });
};
