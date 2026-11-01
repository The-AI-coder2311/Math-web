// Runs after every build. It writes dist/sitemap.xml and dist/robots.txt from the
// pages that were really built, so a new page gets listed by itself.
//
// Web addresses come from each page's canonical link, which Astro builds from the `site`
// setting in astro.config.mjs (or SITE_URL). Dates come from when a page's source files
// last changed in git.
//
// It also stops the build if any page breaks these rules: a unique title and
// description, exactly one <h1>, and a link from the human-readable Sitemap page.
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const today = new Date().toISOString().slice(0, 10);
const errors = [];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const git = (...args) => {
  try {
    return execFileSync('git', ['-c', 'core.quotepath=off', ...args], { encoding: 'utf8', maxBuffer: 1 << 28 });
  } catch {
    return '';
  }
};

// The newest commit date for each file, read in one pass. Files with uncommitted changes count as today.
const changed = new Map();
let date = '';
for (const line of git('log', '--format=date:%cs', '--name-only').split('\n')) {
  if (line.startsWith('date:')) date = line.slice(5);
  else if (line && !changed.has(line)) changed.set(line, date);
}
for (const line of git('status', '--porcelain', '--no-renames', '--untracked-files=all').split('\n')) {
  if (line.length > 3) changed.set(line.slice(3).replace(/^"|"$/g, ''), today);
}

const dateOf = (source) => {
  let newest = '';
  for (const [file, when] of changed) {
    if ((file === source || file.startsWith(`${source}/`)) && when > newest) newest = when;
  }
  return newest;
};

/** The source files behind a page, given its address without the language. */
function sourcesFor(page, lang) {
  const content = `src/content/${lang}`;
  const templates = `src/pages/[...lang]`;
  const parts = page.split('/').filter(Boolean);
  if (parts[0] === 'pathway' && parts.length === 3) {
    return [`${content}/units/${parts[1]}/${parts[2] === 'practice' ? 'problems' : `lessons/${parts[2]}.md`}`];
  }
  if (parts[0] === 'pathway' && parts.length === 2) return [`${content}/units/${parts[1]}/lessons`, `${content}/pathway.yaml`];
  if (parts[0] === 'contests' && parts.length === 2) return [`${content}/contests/${parts[1]}`];
  if (parts[1] === 'problem-sets' && parts.length === 3) return [`${content}/problem-sets/${parts[2]}.yaml`];
  if (parts[1] === 'answer-keys' && parts.length === 3) {
    return [`${content}/units/${parts[2]}/problems`, `${content}/contests/${parts[2]}`, `${templates}/teachers/answer-keys/[set].astro`];
  }
  const named = {
    '': [`${templates}/index.astro`],
    pathway: [`${templates}/pathway/index.astro`, `${content}/pathway.yaml`],
    contests: [`${templates}/contests/index.astro`, `${content}/contests`],
    about: [`${content}/pages/about.md`],
    accessibility: [`${content}/pages/accessibility.md`],
    sitemap: [`${templates}/sitemap.astro`, 'src/data/lessons.json'],
    teachers: [`${templates}/teachers/index.astro`, `${content}/pages/for-teachers.md`, `${content}/pages/club-tips.md`, `${content}/teacher-plans.yaml`],
    'teachers/plans': [`${templates}/teachers/plans.astro`, `${content}/teacher-plans.yaml`, 'src/data/lessons.json'],
    'teachers/lessons': [`${templates}/teachers/lessons.astro`, 'src/data/lessons.json'],
    'teachers/club-plan': [`${content}/pages/club-plan.md`],
    'teachers/start-a-team': [`${content}/pages/teachers.md`],
    'teachers/problem-sets': [`${templates}/teachers/problem-sets/index.astro`, `${content}/problem-sets`],
    'teachers/answer-keys': [`${templates}/teachers/answer-keys/index.astro`, 'src/data/lessons.json'],
  };
  return named[parts.join('/')] ?? [];
}

const attribute = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

const pages = walk(DIST)
  .filter((file) => file.endsWith('index.html'))
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    const address = file.slice(DIST.length + 1).replace(/\\/g, '/').replace(/index\.html$/, '');
    const lang = html.match(/<html lang="([^"]+)"/)?.[1] ?? 'en';
    const page = address.startsWith(`${lang}/`) ? address.slice(lang.length + 1) : address;
    const canonical = attribute(html.match(/<link[^>]*rel="canonical"[^>]*>/)?.[0] ?? '', 'href');
    const description = attribute(html.match(/<meta[^>]*name="description"[^>]*>/)?.[0] ?? '', 'content');
    return {
      where: `/${address}`,
      page,
      lang,
      canonical,
      description,
      title: html.match(/<title>([^<]*)<\/title>/)?.[1],
      headings: (html.match(/<h1[\s>]/g) ?? []).length,
    };
  })
  .sort((a, b) => a.where.localeCompare(b.where));

function checkUnique(field) {
  const seen = new Map();
  for (const page of pages) {
    if (!page[field]) errors.push(`${page.where}: has no ${field}`);
    else if (seen.has(page[field])) errors.push(`${page.where}: has the same ${field} as ${seen.get(page[field])}`);
    else seen.set(page[field], page.where);
  }
}
checkUnique('title');
checkUnique('description');

const sitemapPage = existsSync(join(DIST, 'sitemap/index.html')) ? readFileSync(join(DIST, 'sitemap/index.html'), 'utf8') : '';
const linked = new Set([...sitemapPage.matchAll(/href="([^"]+)"/g)].map((match) => match[1]));
for (const page of pages) {
  if (page.headings !== 1) errors.push(`${page.where}: has ${page.headings} <h1> headings, and a page needs exactly 1`);
  if (!page.canonical) errors.push(`${page.where}: has no canonical link`);
  else if (!linked.has(new URL(page.canonical).pathname)) errors.push(`${page.where}: isn't linked from the Sitemap page`);
}

errors.forEach((error) => console.error(`ERROR    ${error}`));
if (errors.length) {
  console.error(`\nPage check: ${errors.length} errors, so no sitemap was written.`);
  process.exit(1);
}

const urls = pages.map(({ page, lang, canonical }) => {
  const dates = sourcesFor(page, lang).map(dateOf).filter(Boolean).sort();
  return `  <url>\n    <loc>${canonical}</loc>\n    <lastmod>${dates.at(-1) ?? today}</lastmod>\n  </url>`;
});
writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);

const home = pages.find(({ page }) => page === '')?.canonical;
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', home).href}\n`);
console.log(`Page check: ${pages.length} pages passed. Wrote sitemap.xml and robots.txt for ${home}`);
