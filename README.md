# Count Me In

A free, beginner-friendly website that helps students from underserved schools get into math competitions (AMC 8 and MATHCOUNTS level), and helps teachers with no competition background start a math team.

It's a static [Astro](https://astro.build) site. Lessons and problems are plain text files, so you can add content without touching code. There's no login, tracking, or ads, and practice progress is saved only in the student's own browser.

## Before you launch

- [ ] Choose a final name and set it in `src/site.config.ts`. "Count Me In" is a placeholder, so check that the name and web address are available.
- [ ] Replace the placeholder email in `src/site.config.ts`.
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
| `npm run build` | Checks answers, then builds the final site into `dist/` |
| `npm run preview` | Shows the built site, after you run `npm run build` |

**Tip:** if this folder is in OneDrive or Dropbox, installs and builds can be slow or fail with "file busy" errors. Moving the project to a folder that doesn't sync will fix it.

## Where things live

```
src/
  site.config.ts          Site name and contact email
  i18n/en.ts              Button labels and short interface text
  content/en/
    pathway.yaml          The levels, and the ordered units in each one
    units/counting/
      lessons/*.md        The unit's lessons, in order (3 to 5 of them)
      problems/*.md       One file per practice problem
    problem-sets/*.yaml   Printable sets for teachers
    pages/*.md            About, teacher guide, and club plan
  components/, layouts/, pages/, scripts/, styles/    The code
templates/                Files to copy when adding content
scripts/verify-answers.mjs    The answer checker
public/images/            Pictures and diagrams
```

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

Copy `templates/lesson-template.md` into the unit's `lessons/` folder and follow the notes in it. Number the file so it lands in the right place. Run `npm run verify`, which checks that the lesson has its required parts: a big idea, 3 to 5 worked examples, a check-yourself question, common traps, a contest strategy box, connections, and a summary card, in 900 to 1,500 words.

### The levels

| Level | Who it's for | Status |
|---|---|---|
| 1: First Steps | Complete beginners, early AMC 8 questions | All 6 units are written |
| 2: Contest Ready | Middle and later AMC 8 questions, MATHCOUNTS | All 6 units are written |
| 3: Road to the AMC 10 | Students who finished Level 2 | All 6 units are written |
| 4: Toward the AMC 12 | High school contest math | Planned, with no units written yet |

Problems can be marked `easy`, `medium`, or `hard`. Use `hard` for problems that combine ideas or need a step the student has to come up with on their own.

The topic order for Levels 3 and 4 follows the chapters of *Mastering AMC 10/12* from OmegaLearn. Use a book like that as a guide to **what to cover**, but don't copy its text, examples, or problems. Many of its problems are real AMC problems.

## Add a review set or a practice contest

**A level review** is a unit marked `review: true` in `pathway.yaml`. It has problems but no lessons. Each problem uses `from: unit/lesson-file` in place of `lesson:`, which adds a link back to that lesson.

**A practice contest** lives in `src/content/en/contests/<name>/`:

- `contest.yaml` sets the `title`, `summary`, `style` (`AMC 8` or `AMC 10`), `order`, and `minutes`.
- `problems/01.md`, `problems/02.md`, and so on hold 15 or 25 questions, easiest first. Each one needs `order`, `topic`, `from`, 5 `choices`, `answer`, and `verify`, followed by the question and a `## Solution` section ending in the `**Answer: (C) 12**` line.

Scoring lives in `contestRules` in `src/site.config.ts`. **Check those numbers against the official rules once a year**, because the contests can change them.

## Add a printable problem set

Copy `templates/problem-set-template.yaml` to `src/content/en/problem-sets/`, name it like `week-9.yaml`, and fill it in. It appears on the problem sets page by itself. To link to it from the club plan, edit `src/content/en/pages/club-plan.md`.

## Writing math

Put math between dollar signs: `$3 \times 4 = 12$`, or `$$3 \times 4 = 12$$` for its own line. For fractions, write `$\frac{1}{2}$`. To show an actual dollar sign, write `\$40`.

## The content rules

- **Every problem must be original.** Never copy or lightly reword a real AMC or MATHCOUNTS problem, because they're copyrighted. To use past official problems, link to the [AoPS wiki](https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions) instead.
- **Don't write dates or fees on the site.** They change every year, so link to the official sites instead.
- **Write for a 6th to 8th grader who has never competed.** Explain every step, and never tell a reader that a step is "obvious" or "simple."

## How answers get checked

`npm run verify` runs before every build. If it finds a mistake, the build stops and nothing gets published. For every problem, it checks that:

- The `verify` code gets the same answer as the answer key.
- The `**Answer: (C) 12**` line in the solution matches the answer key.
- All of the answer choices are different, and both hints and the solution exist.
- Every wrong choice has a mistake note, and the problem has a `lesson:` tag.
- No single letter is the answer to more than 40% of a unit's or contest's problems, so guessing one letter doesn't pay off.
- Each unit has at least 20 problems, close to 30% easy, 45% medium, and 25% hard, and each lesson has at least 2 tagged problems.
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

## Add a Spanish version later

Each piece of the site is already separated by language:

1. Add `'es'` to `locales` in `src/i18n/config.ts`, then import the new file and add it to `strings`.
2. Copy `src/i18n/en.ts` to `src/i18n/es.ts`. Translate the text, and rename the export to `es`.
3. Copy `src/content/en/` to `src/content/es/` and translate it. Keep the file names the same, along with the `slug` values and the `## Hint` and `## Solution` headings. Change internal links in the Spanish pages to start with `/es/`.
4. Add a language switcher link to `src/layouts/Base.astro`.

Spanish pages will appear at `/es/`, and students' progress carries over between languages. The answer checker covers every language folder automatically.

## License

Before accepting outside contributions, choose licenses for the code and the content. [Creative Commons](https://creativecommons.org/share-your-work/cclicenses/) licenses are a common choice for educational materials.
