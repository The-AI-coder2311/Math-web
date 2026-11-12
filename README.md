# Count Me In

A free, beginner-friendly website that helps students from underserved schools get into math competitions (AMC 8 and MATHCOUNTS level), and helps teachers with no competition background start a math team.

It's a static [Astro](https://astro.build) site. Lessons and problems are plain text files, so you can add content without touching code. There's no login, tracking, or ads, and practice progress is saved only in the student's own browser.

## Before you launch

- [ ] Choose a final name and set it in `src/site.config.ts`. "Count Me In" is a placeholder, so check that the name and web address are available.
- [ ] Replace the placeholder email in `src/site.config.ts`.
- [ ] Decide about visitor counts. Analytics is off until you fill in `analytics.siteId` in `src/site.config.ts` (see [Analytics](#analytics-off-by-default)).
- [ ] Have a Spanish speaker read the Spanish pages, especially the Level 1 lessons and problems.
- [ ] Set your real web address in `astro.config.mjs` (the `site` line), or in `SITE_URL` in the deploy workflow. It's `https://example.org` until then, and `sitemap.xml`, `robots.txt`, and canonical links all use it.
- [ ] Read `src/content/en/pages/about.md` and make it true for your team. Add names if you'd like.
- [ ] Have a second person solve every problem. The answer check catches wrong answers, but not confusing wording.
- [ ] Open every outside link on the teacher pages once a year, because the official sites can change.

## Run it locally

You need [Node.js](https://nodejs.org) version 22.23.4 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:4321>. The page updates as you save files.

| Command | What it does |
|---|---|
| `npm run dev` | Runs the site locally while you edit |
| `npm run verify` | Checks every answer key |
| `npm run build` | Checks answers, builds the final site into `dist/`, checks every page's title, description, and heading, and writes `sitemap.xml` and `robots.txt` |
| `npm run preview` | Shows the built site, after you run `npm run build` |
| `npm run a11y` | Checks every built page for accessibility problems, after you run `npm run build`. It needs Chrome or Edge installed |

**Tip:** if this folder is in OneDrive or Dropbox, installs and builds can be slow or fail with "file busy" errors. Moving the project to a folder that doesn't sync will fix it.

## Where things live

```
src/
  site.config.ts          Site name, contact email, contest scoring, and the analytics switch
  i18n/config.ts          The languages, and which sections aren't translated yet
  i18n/en.ts, es.ts       Button labels and short interface text, one file per language
  content/en/
    pathway.yaml          The levels, and the ordered units in each one
    teacher-plans.yaml    The six-week plans on the teacher pages
    formulas.yaml         The Formulas page, with its practice examples
    glossary.yaml         The Glossary page, and which lesson links to each word
    placement.yaml        The placement quiz at /pathway/start/
    strategy.yaml         Practice questions for the contest strategy lesson
    units/counting/
      lessons/*.md        The unit's lessons, in order (3 to 5 of them)
      problems/*.md       One file per practice problem
    contests/<name>/      Practice contests: contest.yaml plus problems/*.md
    problem-sets/*.yaml   Printable sets for teachers, weeks 1 to 16
    pages/*.md            About, Accessibility, Get Involved, contest strategy, teacher pages,
                          club plan, and the recruiting kit
  content/es/             The Spanish version (see "The Spanish version" below)
  data/lessons.json       Every lesson's details, written by a script (don't edit it)
  components/, layouts/, pages/, scripts/, styles/    The code
templates/                Files to copy when adding content
scripts/verify-answers.mjs        The answer checker
scripts/build-lesson-data.mjs     Writes src/data/lessons.json
scripts/generate-sitemap.mjs      Writes sitemap.xml and robots.txt, and checks every page
scripts/check-accessibility.mjs   The accessibility checker
public/images/            Pictures and diagrams
```

## How the teacher pages stay up to date

`src/data/lessons.json` lists every lesson with its topic, difficulty, time, and competition. A script rebuilds it each time the site runs or builds, using the lesson files and `pathway.yaml`, so you never edit it by hand. A new lesson shows up on the lesson index, the six-week plans, and the Sitemap page by itself.

- **To change a level's difficulty or competitions,** edit `difficulty` and `competitions` for that level in `pathway.yaml`.
- **To change a plan,** edit `src/content/en/teacher-plans.yaml`. Each week names one unit, and its lessons fill in by themselves.
- **Worksheets and answer keys** are built for every unit with problems and every practice contest.

Answer keys stay behind a toggle so students won't see them by accident. It isn't a lock, because this is a public site with no logins.

## The sitemap

`npm run build` writes `sitemap.xml` and `robots.txt` into `dist/` from the pages it really built, so you never edit them by hand. A page's date comes from when its source files last changed in git. The build stops if two pages share a title or description, if a page doesn't have exactly one `<h1>`, or if a page isn't linked from the Sitemap page. To list a new kind of page, add it to `src/pages/[...lang]/sitemap.astro`.

On GitHub Pages, a site at `https://YOUR-USERNAME.github.io/YOUR-REPO/` can't control the `robots.txt` at the top of that address, so search engines only read it once you use your own domain. On Vercel, its shallow git history can make older pages show newer dates.

## Features at a glance

| Page | Address | Where its content lives |
|---|---|---|
| Placement quiz | `/pathway/start/` | `placement.yaml` |
| Practice contests | `/contests/` | `contests/<name>/` |
| Contest strategy lesson | `/contests/strategy/` | `pages/contest-strategy.md` and `strategy.yaml` |
| Formula and strategy sheet, one per level | `/pathway/level-1/cheat-sheet/` | Built from each lesson's "Remember this" card |
| Completion certificate, one per level | `/pathway/level-1/certificate/` | Built from `pathway.yaml`. It unlocks when every problem in the level is solved on that device |
| Glossary | `/glossary/` | `glossary.yaml` |
| Problem of the Week | Home page | Picked from the medium problems in Levels 1 and 2 (see below) |
| Recruiting kit | `/teachers/recruiting-kit/` | `pages/recruiting-kit.md` |
| Get Involved | `/get-involved/` | `pages/get-involved.md` |

**Progress codes.** The pathway page has a "Move your progress to another device" panel. It turns everything saved on the device (solved problems, read lessons, and best practice test scores) into a short text code that starts with `CMI1-`. Loading a code adds to what's already there and never erases anything. No server is involved. The saved-progress keys, including `count-me-in-progress-v1`, never change.

**Problem of the Week.** The home page shows one problem a week, from a pool of 52 medium problems in Levels 1 and 2. The page is built with the current week's problem, and the browser swaps in the right one from `problem-of-the-week.json` if the site was built in an earlier week, so it changes every Monday without a rebuild.

## Add a practice problem

1. Copy `templates/problem-template.md` into `src/content/en/units/<unit>/problems/`.
2. Rename it, like `11-pizza-toppings.md`, and fill it in.
3. Run `npm run verify`, and fix anything it reports.

The progress bar's total updates by itself. Once a problem is live, don't rename its file, since that's how a student's progress is remembered.

## Add a new unit

1. Find the unit's `slug` in `src/content/en/pathway.yaml`, such as `number-sense`.
2. Copy `templates/lesson-template.md` to `src/content/en/units/number-sense/lessons/01-short-name.md`, and fill it in. Repeat for each lesson. The number at the start of the file name sets the order.
3. Add problems to `src/content/en/units/number-sense/problems/`. A problem with `lesson: 01-short-name` in its settings can appear in that lesson's "Try it now" section, which shows the unit's first 3 tagged problems.

The unit stops saying "Coming soon" and becomes clickable as soon as it has a lesson, so make sure it has problems too. To add or reorder units or levels, edit `pathway.yaml`.

## Add a lesson

Copy `templates/lesson-template.md` into the unit's `lessons/` folder and follow the notes in it. Number the file so it lands in the right place. Run `npm run verify`, which checks that the lesson has its required parts: a big idea, 3 to 5 worked examples, a check-yourself question, a Going deeper section, common traps, a contest strategy box, connections, and a summary card, in 900 to 1,500 words.

### The levels

| Level | Who it's for | Status |
|---|---|---|
| 1: First Steps | Complete beginners, early AMC 8 questions | All 6 units are written |
| 2: Contest Ready | Middle and later AMC 8 questions, MATHCOUNTS | All 7 units are written |
| 3: Road to the AMC 10 | Students who finished Level 2 | All 7 units are written |
| 4: Toward the AMC 12 | High school contest math | Planned, with no units written yet |

Problems can be marked `easy`, `medium`, or `hard`. Use `hard` for problems that combine ideas or need a step the student has to come up with on their own.

The topic order for Levels 3 and 4 follows the chapters of *Mastering AMC 10/12* from OmegaLearn. Use a book like that as a guide to **what to cover**, but don't copy its text, examples, or problems. Many of its problems are real AMC problems.

## Add a review set or a practice contest

**A level review** is a unit marked `review: true` in `pathway.yaml`. It has problems but no lessons. Each problem uses `from: unit/lesson-file` in place of `lesson:`, which adds a link back to that lesson.

**A practice contest** (also called a practice test) lives in `src/content/en/contests/<name>/`:

- `contest.yaml` sets the `title`, `summary`, `style` (`AMC 8` or `AMC 10`), `level` (the pathway level whose ideas it uses, so the pathway page can link to it), `order`, and `minutes`.
- `problems/01.md`, `problems/02.md`, and so on hold 15 or 25 questions, easiest first. Each one needs `order`, `topic`, `from`, 5 `choices`, `answer`, and `verify`, followed by the question and a `## Solution` section ending in the `**Answer: (C) 12**` line.

The test page explains the rules, has an optional timer, lets students mark questions to come back to, and shows a numbered list of every question. The results screen shows the score, every solution, and a "what to review" list of the units the student missed most. The best score is saved under `count-me-in-contests-v1`.

Scoring lives in `contestRules` in `src/site.config.ts`. **Check those numbers against the official rules once a year**, because the contests can change them.

## Add a glossary word

Add an entry to `src/content/en/glossary.yaml` with the `term`, any other `forms` of it (like a plural), a short `definition`, an optional `example`, and the `lesson` that teaches it. The first time the word appears in that lesson's text, it becomes a link to the Glossary. `npm run verify` checks that the word really appears in that lesson.

## Add a placement quiz question

Edit `src/content/en/placement.yaml`. Each question has a `level`, 4 `choices`, an `answer`, a `verify` line, and an `explanation`. The quiz suggests Level 1 unless every Level 1 question is right. It suggests Level 3 when nearly all of the Level 2 questions and at least one Level 3 question are right, and Level 2 otherwise.

## Add a printable problem set

Copy `templates/problem-set-template.yaml` to `src/content/en/problem-sets/`, name it like `week-9.yaml`, and fill it in. It appears on the problem sets page by itself. To link to it from the club plan, edit `src/content/en/pages/club-plan.md`.

## Writing math

Put math between dollar signs: `$3 \times 4 = 12$`, or `$$3 \times 4 = 12$$` for its own line. For fractions, write `$\frac{1}{2}$`. To show an actual dollar sign, write `\$40`.

## The content rules

- **Every problem must be original.** Never copy or lightly reword a real AMC or MATHCOUNTS problem, because they're copyrighted. To use past official problems, link to the [AoPS wiki](https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions) instead.
- **Don't write dates or fees on the site.** They change every year, so link to the official sites instead.
- **Write for a 6th to 8th grader who has never competed.** Explain every step, and never tell a reader that a step is "obvious" or "simple."

## How answers get checked

`npm run verify` runs before every build. If it finds a mistake, the build stops and nothing gets published. It checks unit problems, practice tests, problem sets, the Formulas page, the placement quiz, the strategy questions, and the glossary. For every problem, it checks that:

- The `verify` code gets the same answer as the answer key.
- The `**Answer: (C) 12**` line in the solution matches the answer key.
- All of the answer choices are different, and both hints and the solution exist.
- Every wrong choice has a mistake note, and the problem has a `lesson:` tag.
- No single letter is the answer to more than 40% of a unit's or contest's problems, so guessing one letter doesn't pay off.
- Each unit has at least 30 problems (a level review has at least 20), close to 30% easy, 45% medium, and 25% hard, and each lesson has at least 2 tagged problems.
- A mistake note only uses a letter that's a real choice, and never the correct answer.
- The arithmetic in each formula is correct. For example, `$5 \times 3 = 16$` gets flagged. It also checks formulas in lessons and teacher pages.

It can't tell whether a problem is worded clearly, or whether your `verify` code solves the right question. That's why a second person should still solve each one.

### Writing verify code

`verify` is one line of JavaScript. Try to count by brute force rather than repeating the math from your solution. That way, the same mistake can't get into both.

| Helper | What it gives you | Example |
|---|---|---|
| `range(a, b)` | Whole numbers from a to b | `range(1, 3)` gives `[1, 2, 3]` |
| `product(x, y, ...)` | Every way to take one item from each list | `product([1, 2], [3, 4]).length` gives `4` |
| `perms(list)` | Every ordering of a list | `perms(['a', 'b', 'c']).length` gives `6` |
| `combos(list, k)` | Every group of k items | `combos([1, 2, 3, 4], 2).length` gives `6` |
| `digits(n)` | The digits of a number | `digits(305)` gives `[3, 0, 5]` |
| `sum(list)` | Adds up a list | `sum([1, 2, 3])` gives `6` |
| `isPrime(n)`, `factors(n)` | Tests for a prime, or lists factors | `factors(6)` gives `[1, 2, 3, 6]` |
| `gcd(a, b)`, `lcm(a, b)` | Greatest common factor, least common multiple | `lcm(4, 6)` gives `12` |
| `fraction(n, d)` | A fraction in lowest terms | `fraction(2, 6)` gives `"1/3"` |
| `pi(n)` | An answer written with $\pi$ | `pi(16)` matches the choice `$16\pi$` |

Here's an example: "How many three-digit numbers have only odd digits?"

```yaml
verify: "range(100, 999).filter((n) => digits(n).every((d) => d % 2 === 1)).length"
```

## Deploy for free

### Option A: Vercel (easiest)

1. Put the project on GitHub (see steps 1 and 2 below).
2. Sign in at [vercel.com](https://vercel.com) with your GitHub account, and import the repository.
3. Vercel detects Astro, so keep its default settings and click **Deploy**.

Every push to `main` updates the site. Check Vercel's current terms to make sure your project fits its free plan.

### Option B: GitHub Pages

1. [Create an empty repository](https://github.com/new) on GitHub.
2. In this folder, run these commands, using your own username and repository name:

   ```bash
   git init
   ```

   ```bash
   git add .
   ```

   ```bash
   git commit -m "First version of the site"
   ```

   ```bash
   git branch -M main
   ```

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   ```

   ```bash
   git push -u origin main
   ```

3. On GitHub, go to **Settings > Pages**, and under **Source**, choose **GitHub Actions**.
4. The included workflow in `.github/workflows/deploy.yml` runs on each push. Follow its progress in the **Actions** tab. Your site will appear at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

If you later use a custom domain, or a repository named `YOUR-USERNAME.github.io`, change the workflow's `BASE_PATH` to `/` and `SITE_URL` to your real address.

## Analytics (off by default)

The site counts nothing until you turn it on. To turn on cookieless visitor counts, fill in `analytics` in `src/site.config.ts`:

- **GoatCounter:** set `provider: 'goatcounter'` and `siteId` to your code, as in `https://YOURCODE.goatcounter.com`.
- **Plausible:** set `provider: 'plausible'` and `siteId` to your domain.

Both count page views without cookies or personal data. The privacy promise on the About page (the `{{privacy}}` line) and the footer change by themselves to match the setting, so they're always accurate.

## The Spanish version

Spanish pages live at `/es/`, and the language switcher in the header links each page to its other-language version. Students' progress carries over between languages, because units and problems keep the same file names.

**What's translated:** all interface text (`src/i18n/es.ts`), the home page, the Learning Pathway page, the placement quiz, every Level 1 lesson and problem (including the Level 1 review, formula sheet, and certificate), the teacher kit (For Teachers, Start a Math Team, Club Plan, and Club Tips), the recruiting kit, About, Accessibility, and Get Involved.

**Still English-only:**

- Levels 2 and 3 (the Spanish pathway page links to the English units and marks them "solo en inglés")
- Practice contests and the contest strategy lesson
- The Formulas page and the Glossary
- The six-week teaching plans and the weekly problem sets
- The words inside the SVG diagrams in `public/images/` (each diagram's description is translated)

**How untranslated sections work:** `untranslated` in `src/i18n/config.ts` lists the sections that aren't built in Spanish yet. Links to them from Spanish pages go to the English page. A unit appears in Spanish as soon as it has Spanish lessons. When you translate a section, remove it from that list.

**To translate more:**

1. Copy the files from `src/content/en/` to the same place in `src/content/es/`, and keep the file names, `slug` values, and settings like `choices`, `answer`, and `verify` the same.
2. Translate the text. Keep the `## Hint`, `## Hint 2`, `## Solution`, and `## Another way` headings in English, since the site uses them to split a problem into parts and never shows them. End each solution with `**Respuesta: (C) 12**`. In lessons, use `**La gran idea:**` and `## Ejemplo` headings.
3. If a choice is a word (like a color or a day), translate it in `choices` and in the `verify` code too, so they still match.
4. Point links at `/es/...` for pages that exist in Spanish, and at the English page for the rest.
5. Run `npm run verify`. It checks Spanish files the same way as English ones. Spanish lessons may be up to 1,900 words, since translations run longer.

**To add another language:** add its code to `locales` and `untranslated` in `src/i18n/config.ts`, add `src/i18n/<code>.ts` with the same shape as `en.ts`, register it in `strings`, and create `src/content/<code>/` with at least `pathway.yaml`, `placement.yaml`, and the pages in `pages/`.

## License

Before accepting outside contributions, choose licenses for the code and the content. [Creative Commons](https://creativecommons.org/share-your-work/cclicenses/) licenses are a common choice for educational materials.
