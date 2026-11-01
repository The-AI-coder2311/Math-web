// Checks the answer keys before every build. Run it with: npm run verify
//
// It independently re-solves each problem by running its `verify:` code, which
// usually brute-forces the answer instead of repeating the written solution.
// It also checks the arithmetic in every math formula, and that each problem is
// complete. Any error stops the build so a wrong key can't be published.
//
// Every unit is held to the full writing standard. A new unit stays exempt only
// while it has fewer than 3 lessons and 20 problems, if you set
// REQUIRE_FULL_STANDARD to false while drafting. Add --standards to list every gap.
//
// To check a different folder (such as a test copy): node scripts/verify-answers.mjs <folder>
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';

const args = process.argv.slice(2);
const listGaps = args.includes('--standards');
const root = args.find((arg) => !arg.startsWith('--')) || 'src/content';
const REQUIRE_FULL_STANDARD = true;
const errors = [];
const warnings = [];
const gaps = [];
const counts = { checked: 0, unchecked: 0, arithmetic: 0 };

// ---- Helpers available inside `verify:` code ----
const helpers = {
  /** Whole numbers from a to b, including both ends. */
  range: (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i),
  /** Every way to take one item from each list. */
  product: (...lists) => lists.reduce((all, list) => all.flatMap((xs) => list.map((x) => [...xs, x])), [[]]),
  /** Every ordering of a list. */
  perms: (list) =>
    list.length <= 1
      ? [list]
      : list.flatMap((x, i) => helpers.perms([...list.slice(0, i), ...list.slice(i + 1)]).map((rest) => [x, ...rest])),
  /** Every group of k items from a list, ignoring order. */
  combos: (list, k) =>
    k === 0
      ? [[]]
      : list.flatMap((x, i) => helpers.combos(list.slice(i + 1), k - 1).map((rest) => [x, ...rest])),
  digits: (n) => String(n).split('').map(Number),
  sum: (list) => list.reduce((a, b) => a + b, 0),
  isPrime: (n) => {
    if (n < 2) return false;
    for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
    return true;
  },
  factors: (n) => helpers.range(1, n).filter((d) => n % d === 0),
  gcd: (a, b) => (b === 0 ? a : helpers.gcd(b, a % b)),
  lcm: (a, b) => (a * b) / helpers.gcd(a, b),
  /** An answer written with pi: pi(16) gives "16\pi", the same as a choice written $16\pi$. */
  pi: (n) => (n === 1 ? '\\pi' : `${n}\\pi`),
  /** A fraction in lowest terms as text: fraction(2, 6) gives "1/3". */
  fraction: (n, d) => {
    const g = helpers.gcd(n, d);
    return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`;
  },
};

const runVerify = (code) => new Function(...Object.keys(helpers), `return (${code});`)(...Object.values(helpers));

/** Makes "$\frac{1}{3}$", "1/3" and "1,000" comparable as plain values. */
const normalize = (value) =>
  String(value)
    .replace(/\$/g, '')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
    .replace(/(\d),(?=\d{3})/g, '$1')
    .replace(/\\,/g, '')
    .trim();

// ---- Arithmetic inside math formulas, such as $5 \times 3 = 15$ ----
function toJs(tex) {
  let js = tex
    .replace(/\\left|\\right/g, '')
    .replace(/\\times|\\cdot/g, '*')
    .replace(/\\div/g, '/')
    .replace(/\\,/g, '')
    .replace(/(\d+(?:\.\d+)?)\\%/g, '($1/100)');
  while (/\\frac/.test(js)) {
    const next = js.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))');
    if (next === js) return null;
    js = next;
  }
  js = js.replace(/\^\{([^{}]*)\}/g, '**($1)').replace(/\^/g, '**');
  return /^[\d\s+\-*/().]+$/.test(js) && /\d/.test(js) ? js : null;
}

const evaluate = (js) => {
  try {
    const value = new Function(`return (${js});`)();
    return typeof value === 'number' && Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
};

function checkArithmetic(text, where) {
  const formulas = String(text).replace(/\\\$/g, '').match(/\$\$[\s\S]+?\$\$|\$[^$]+\$/g) || [];
  for (const formula of formulas) {
    const sides = formula.replace(/\$/g, '').split('=').map((side) => evaluate(toJs(side) ?? 'x'));
    for (let i = 0; i + 1 < sides.length; i++) {
      if (sides[i] === null || sides[i + 1] === null) continue;
      counts.arithmetic++;
      if (Math.abs(sides[i] - sides[i + 1]) > 1e-9) {
        errors.push(`${where}: wrong arithmetic in ${formula.trim()}`);
      }
    }
  }
}

// ---- Shared check: does the verify code agree with the answer key? ----
function checkVerify(code, expected, where) {
  if (!code) {
    counts.unchecked++;
    warnings.push(`${where}: no verify code, so only a person has checked this answer`);
    return;
  }
  try {
    const result = runVerify(code);
    if (normalize(result) !== normalize(expected)) {
      errors.push(`${where}: answer key says "${normalize(expected)}" but verify code computed "${normalize(result)}"`);
    } else {
      counts.checked++;
    }
  } catch (error) {
    errors.push(`${where}: verify code failed to run (${error.message})`);
  }
}

// ---- The writing standard ----
const BANNED_WORDS = /\b(obviously|clearly|simply|just)\b/gi;
const PLACEHOLDER = /\b(placeholder|todo|fixme|lorem ipsum)\b/i;

/** Text a reader sees, without settings, math, tags or picture addresses. */
const readableText = (source) =>
  source
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/\$\$[\s\S]+?\$\$/g, ' ')
    .replace(/\\\$/g, 'USD')
    .replace(/\$[^$\n]+\$/g, ' x ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/<[^>]+>/g, ' ');

function checkAllWriting(source, where) {
  if (PLACEHOLDER.test(source)) errors.push(where + ': contains unfinished placeholder text');
  return [...readableText(source).matchAll(BANNED_WORDS)].map((match) => where + ': avoid the word "' + match[0] + '"');
}

const sectionsOf = (body) => {
  const parts = body.split(/^## (Hint 2|Hint|Solution|Another way)\s*$/m);
  const sections = { question: parts[0] };
  for (let i = 1; i < parts.length; i += 2) sections[parts[i]] = parts[i + 1];
  return sections;
};

// ---- Lessons (one Markdown file each) ----
const lessonsSeen = {};

function checkLesson(file, unitPath) {
  const where = relative('.', file);
  const source = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const data = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!data) return errors.push(where + ': missing the --- settings block at the top');
  const settings = parse(data[1]);
  for (const field of ['title', 'summary', 'minutes']) {
    if (!settings[field]) errors.push(where + ': missing ' + field);
  }
  checkArithmetic(source, where);
  (lessonsSeen[unitPath] ??= []).push(file.replace(/\\/g, '/').split('/').pop().replace(/\.md$/, ''));

  const found = checkAllWriting(source, where);
  const words = readableText(source).split(/\s+/).filter(Boolean).length;
  if (words < 900 || words > 1500) found.push(where + ': has ' + words + ' words, and a lesson should have 900 to 1,500');
  if (!/\*\*The big idea/.test(source)) found.push(where + ': needs a "**The big idea" statement');
  const examples = (source.match(/^##+ Example/gm) || []).length;
  if (examples < 3 || examples > 5) found.push(where + ': has ' + examples + ' worked examples, and a lesson should have 3 to 5');
  if (!/<details class="check">/.test(source)) found.push(where + ': needs a check-yourself question');
  for (const box of ['traps', 'strategy', 'connections', 'summary']) {
    if (!source.includes('<section data-box="' + box + '">')) found.push(where + ': needs a <section data-box="' + box + '">');
  }
  for (const picture of source.matchAll(/!\[([^\]]*)\]\(([^)]*)\)/g)) {
    if (picture[1].length < 40) found.push(where + ': picture ' + picture[2] + ' needs a fuller description');
  }
  return found;
}

// ---- Interactive problems (one Markdown file each) ----
function checkProblem(file) {
  const where = relative('.', file);
  const source = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    errors.push(where + ': missing the --- settings block at the top');
    return {};
  }

  const data = parse(match[1]);
  const body = match[2];
  const sections = sectionsOf(body);
  const { question, Hint: hint, Solution: solution } = sections;
  const gaps = checkAllWriting(source, where);

  if (hint === undefined || solution === undefined) {
    errors.push(where + ': needs "## Hint" and "## Solution" sections, in that order');
    return { data, gaps };
  }
  if (!question.trim()) errors.push(where + ': the question is empty');
  if (!hint.trim()) errors.push(where + ': the hint is empty');

  const choices = (data.choices || []).map(normalize);
  const letters = 'ABCDEF';
  const correct = choices[letters.indexOf(data.answer)];
  if (correct === undefined) {
    errors.push(where + ': answer "' + data.answer + '" doesn\'t match any choice');
    return { data, gaps };
  }
  if (new Set(choices).size !== choices.length) errors.push(where + ': two answer choices are the same');

  checkVerify(data.verify, correct, where);
  checkArithmetic(body, where);
  Object.values(data.mistakes || {}).forEach((note) => checkArithmetic(note, where));

  const stated = solution.match(/\*\*Answer: \(([A-F])\) ([^*]+)\*\*/);
  if (!stated) {
    errors.push(where + ': the solution must end with a line like **Answer: (C) 12**');
  } else if (stated[1] !== data.answer || normalize(stated[2]) !== correct) {
    errors.push(where + ': the solution says (' + stated[1] + ') ' + stated[2] + ' but the answer key says (' + data.answer + ') ' + correct);
  }
  for (const text of [hint, sections['Hint 2'] ?? '']) {
    if (text.includes('(' + data.answer + ') ' + correct)) errors.push(where + ': a hint gives away the answer');
  }

  const wrongLetters = letters.slice(0, choices.length).split('').filter((letter) => letter !== data.answer);
  const notes = data.mistakes || {};
  if (notes[data.answer]) errors.push(where + ': has a mistake note for the correct answer');
  for (const letter of Object.keys(notes)) {
    if (!wrongLetters.includes(letter)) errors.push(where + ': has a mistake note for ' + letter + ', which isn\'t a choice');
  }

  if (!sections['Hint 2']?.trim()) gaps.push(where + ': needs a "## Hint 2" section');
  if (!data.verify) gaps.push(where + ': needs verify code');
  if (!data.lesson) gaps.push(where + ': needs a lesson: tag');
  for (const letter of wrongLetters) {
    if (!notes[letter]?.trim()) gaps.push(where + ': needs a mistakes note for choice ' + letter);
  }
  return { data, gaps };
}

// ---- Printable problem sets (one YAML file each) ----
function checkProblemSet(file) {
  const where = relative('.', file);
  const data = parse(readFileSync(file, 'utf8'));
  checkArithmetic(data.teacherNote, where);
  (data.problems || []).forEach((problem, i) => {
    const label = `${where} problem ${i + 1}`;
    for (const field of ['question', 'answer', 'explanation']) {
      if (problem[field] === undefined || problem[field] === '') errors.push(`${label}: missing ${field}`);
    }
    checkVerify(problem.verify, problem.answer, label);
    checkArithmetic(problem.question, label);
    checkArithmetic(problem.explanation, label);
  });
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const units = {};
const unitOf = (name) => (units[name] ??= { lessonGaps: [], lessonCount: 0, problemGaps: [], problems: [] });

for (const file of walk(root)) {
  const path = file.replace(/\\/g, '/');
  const inUnit = path.match(/^(.*\/units\/[^/]+)\/(lessons|problems)\/[^/]+\.md$/);
  if (inUnit && inUnit[2] === 'lessons') {
    const unit = unitOf(inUnit[1]);
    unit.lessonCount++;
    unit.lessonGaps.push(...(checkLesson(file, inUnit[1]) || []));
  } else if (inUnit) {
    const unit = unitOf(inUnit[1]);
    const { data, gaps: found = [] } = checkProblem(file);
    unit.problemGaps.push(...found);
    if (data) unit.problems.push({ ...data, where: relative('.', file) });
  } else if (/\/problem-sets\/[^/]+\.ya?ml$/.test(path)) {
    checkProblemSet(file);
  } else if (/\.md$/.test(path)) {
    const source = readFileSync(file, 'utf8');
    checkArithmetic(source, relative('.', file));
    gaps.push(...checkAllWriting(source, relative('.', file)));
  }
}

for (const [name, unit] of Object.entries(units)) {
  const seen = new Set();
  for (const problem of unit.problems) {
    if (seen.has(problem.order)) errors.push(problem.where + ': another problem already uses order ' + problem.order);
    seen.add(problem.order);
    if (problem.lesson && !(lessonsSeen[name] || []).includes(problem.lesson)) {
      errors.push(problem.where + ': lesson "' + problem.lesson + '" doesn\'t match a file in lessons/');
    }
  }
  const short = name.split('/').pop();
  const isReview = !unit.lessonCount;
  const lessonsDone = unit.lessonCount >= 3;
  const problemsDone = unit.problems.length >= 20;
  const count = (level) => unit.problems.filter((problem) => problem.difficulty === level).length;
  const share = (level) => count(level) / (unit.problems.length || 1);

  if (!isReview && !lessonsDone) unit.lessonGaps.push(short + ': has ' + unit.lessonCount + ' lessons, and a unit should have 3 to 5');
  if (unit.lessonCount > 5) unit.lessonGaps.push(short + ': has ' + unit.lessonCount + ' lessons, and a unit should have 3 to 5');
  if (!problemsDone) unit.problemGaps.push(short + ': has ' + unit.problems.length + ' problems, and a unit should have at least 20');
  if (share('easy') < 0.2 || share('easy') > 0.4) unit.problemGaps.push(short + ': ' + count('easy') + ' easy problems is outside the 30% target');
  if (share('medium') < 0.35 || share('medium') > 0.55) unit.problemGaps.push(short + ': ' + count('medium') + ' medium problems is outside the 45% target');
  if (share('hard') < 0.15 || share('hard') > 0.35) unit.problemGaps.push(short + ': ' + count('hard') + ' hard problems is outside the 25% target');
  for (const lesson of lessonsSeen[name] || []) {
    const tagged = unit.problems.filter((problem) => problem.lesson === lesson).length;
    if (tagged < 2) unit.problemGaps.push(short + '/' + lesson + ': has ' + tagged + ' "try it now" problems, and needs at least 2');
  }
  (lessonsDone || REQUIRE_FULL_STANDARD ? errors : gaps).push(...unit.lessonGaps);
  (problemsDone || REQUIRE_FULL_STANDARD ? errors : gaps).push(...unit.problemGaps);
}

warnings.forEach((warning) => console.warn(`WARNING  ${warning}`));
if (listGaps) gaps.forEach((gap) => console.log(`GAP      ${gap}`));
errors.forEach((error) => console.error(`ERROR    ${error}`));
console.log(
  `\nAnswer check: ${counts.checked} answers confirmed by code, ${counts.unchecked} without verify code, ` +
    `${counts.arithmetic} formulas checked, ${errors.length} errors, ` +
    `${gaps.length} gaps in units still being upgraded.`,
);
if (errors.length) process.exit(1);
