// Checks every built page for accessibility problems. Run it with: npm run a11y
// (Run `npm run build` first. It needs Chrome or Edge installed, but no download.)
//
// Each page is scanned with axe-core in light and dark mode, with its hidden parts
// opened: hints, solutions, answer keys, and a finished practice contest. It also
// checks what axe can't: tap targets on a phone, and sideways scrolling at the
// width a page has when zoomed to 200%.
//
// To check only some pages: node scripts/check-accessibility.mjs teachers contests
import { createReadStream, existsSync, readdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { extname, join } from 'node:path';
import { chromium } from 'playwright-core';

const DIST = 'dist';
const axePath = createRequire(import.meta.url).resolve('axe-core/axe.min.js');
const filters = process.argv.slice(2);
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const paths = walk(DIST)
  .filter((file) => file.endsWith('.html'))
  .map((file) => `/${file.slice(DIST.length + 1).replace(/\\/g, '/').replace(/index\.html$/, '')}`)
  .filter((path) => !filters.length || filters.some((filter) => path.includes(filter)));

const server = createServer((request, response) => {
  const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const file = join(DIST, path.endsWith('/') ? `${path}index.html` : path);
  if (!existsSync(file)) return response.writeHead(404).end();
  response.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(response);
});
await new Promise((resolve) => server.listen(0, resolve));
const origin = `http://localhost:${server.address().port}`;

const launch = async () => {
  for (const channel of ['chrome', 'msedge']) {
    try {
      return await chromium.launch({ channel });
    } catch {
      // Not installed: try the next one.
    }
  }
  throw new Error('This check needs Chrome or Edge installed.');
};

/** Opens everything a student or teacher could open, so axe scans it too. */
const openEverything = async (page) => {
  await page.evaluate(() => document.querySelectorAll('details').forEach((details) => (details.open = true)));
  if (await page.locator('[data-start]').isVisible().catch(() => false)) {
    await page.click('[data-start]');
    await page.click('[data-finish]');
  }
  const check = page.locator('[data-problem] button[type=submit]').first();
  if (await check.isVisible().catch(() => false)) {
    await page.locator('[data-problem] input[type=radio]').first().check();
    await check.click();
  }
};

const runAxe = (page) =>
  page.evaluate(async () => {
    const { violations } = await window.axe.run(document, {
      runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
    });
    return violations.map((rule) => ({
      id: rule.id,
      impact: rule.impact,
      help: rule.help,
      nodes: rule.nodes.map((node) => node.target.join(' ')),
    }));
  });

/** Controls smaller than 44 by 44. Links inside a sentence are exempt, as in WCAG. */
const smallTargets = (page) =>
  page.evaluate(() => {
    const visible = (element) => element.getClientRects().length > 0 && getComputedStyle(element).visibility !== 'hidden';
    const inSentence = (element) =>
      getComputedStyle(element).display === 'inline' && element.parentElement.textContent.trim() !== element.textContent.trim();
    return [...document.querySelectorAll('a, button, summary, select, input:not([type=radio]):not([type=checkbox])')]
      .filter((element) => visible(element) && !inSentence(element) && !element.classList.contains('skip-link'))
      .map((element) => ({ element, box: element.getBoundingClientRect() }))
      .filter(({ box }) => Math.round(box.height) < 44 || Math.round(box.width) < 44)
      .map(({ element, box }) => `${element.tagName.toLowerCase()} "${element.textContent.trim().slice(0, 30)}" ${Math.round(box.width)}x${Math.round(box.height)}`);
  });

const browser = await launch();
const problems = new Map();
const report = (key, help, path, detail) => {
  const entry = problems.get(key) ?? { help, pages: new Set(), details: new Set() };
  entry.pages.add(path);
  detail.forEach((item) => entry.details.add(item));
  problems.set(key, entry);
};

for (const colorScheme of ['light', 'dark']) {
  const context = await browser.newContext({ colorScheme, viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  page.on('dialog', (dialog) => dialog.accept());
  for (const path of paths) {
    await page.goto(origin + path);
    await openEverything(page);
    await page.addScriptTag({ path: axePath });
    for (const rule of await runAxe(page)) {
      report(`axe ${rule.id} (${rule.impact}, ${colorScheme})`, rule.help, path, rule.nodes);
    }
  }
  await context.close();
}

const phone = await browser.newContext({ viewport: { width: 375, height: 812 }, hasTouch: true });
const phonePage = await phone.newPage();
phonePage.on('dialog', (dialog) => dialog.accept());
for (const path of paths) {
  await phonePage.goto(origin + path);
  const small = await smallTargets(phonePage);
  if (small.length) report('tap-target', 'Controls should be at least 44 by 44 pixels', path, small);
}
await phone.close();

const zoomed = await browser.newContext({ viewport: { width: 320, height: 640 } });
const zoomedPage = await zoomed.newPage();
zoomedPage.on('dialog', (dialog) => dialog.accept());
for (const path of paths) {
  await zoomedPage.goto(origin + path);
  await openEverything(zoomedPage);
  const overflow = await zoomedPage.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (overflow > 0) report('reflow', 'Pages should not scroll sideways at 320 pixels wide (200% zoom)', path, [`${overflow}px too wide`]);
}
await zoomed.close();

await browser.close();
server.close();

for (const [key, entry] of problems) {
  console.log(`\n${key}: ${entry.help}`);
  console.log(`  ${entry.pages.size} page(s), such as ${[...entry.pages].slice(0, 3).join('  ')}`);
  [...entry.details].slice(0, 6).forEach((detail) => console.log(`    ${detail}`));
}
console.log(`\nAccessibility check: ${paths.length} pages, ${problems.size} kinds of problem.`);
if (problems.size) process.exit(1);
