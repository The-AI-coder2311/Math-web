// Checks the answer keys before every build. Run it with: npm run verify
//
// It independently re-solves each problem by running its `verify:` code, which
// usually brute-forces the answer instead of repeating the written solution.
// It also checks the arithmetic in every math formula, and that each problem is
// complete. Any error stops the build so a wrong key can't be published.
//
// To check a different folder (such as a test copy): node scripts/verify-answers.mjs <folder>
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';

const root = process.argv[2] || 'src/content';
const errors = [];
const warnings = [];
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

// ---- Interactive problems (one Markdown file each) ----
function checkProblem(file) {
  const where = relative('.', file);
  const source = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return errors.push(`${where}: missing the --- settings block at the top`);

  const data = parse(match[1]);
  const body = match[2];
  const [question, hint, solution] = body.split(/^## (?:Hint|Solution)\s*$/m);

  if (!/^## Hint\s*$/m.test(body) || !/^## Solution\s*$/m.test(body) || solution === undefined) {
    return errors.push(`${where}: needs "## Hint" and "## Solution" sections, in that order`);
  }
  if (!question.trim()) errors.push(`${where}: the question is empty`);
  if (!hint.trim()) errors.push(`${where}: the hint is empty`);

  const choices = (data.choices || []).map(normalize);
  const letters = 'ABCDEF';
  const correct = choices[letters.indexOf(data.answer)];
  if (correct === undefined) return errors.push(`${where}: answer "${data.answer}" doesn't match any choice`);
  if (new Set(choices).size !== choices.length) errors.push(`${where}: two answer choices are the same`);

  checkVerify(data.verify, correct, where);
  checkArithmetic(body, where);

  const stated = solution.match(/\*\*Answer: \(([A-F])\) ([^*]+)\*\*/);
  if (!stated) {
    errors.push(`${where}: the solution must end with a line like **Answer: (C) 12**`);
  } else if (stated[1] !== data.answer || normalize(stated[2]) !== correct) {
    errors.push(`${where}: the solution says (${stated[1]}) ${stated[2]} but the answer key says (${data.answer}) ${correct}`);
  }
  if (hint.includes(`(${data.answer}) ${correct}`)) errors.push(`${where}: the hint gives away the answer`);
  return data;
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

const unitsSeen = {};
for (const file of walk(root)) {
  const path = file.replace(/\\/g, '/');
  if (/\/units\/[^/]+\/problems\/[^/]+\.md$/.test(path)) {
    const data = checkProblem(file);
    if (data?.order !== undefined) {
      const unit = path.replace(/\/problems\/.*$/, '');
      unitsSeen[unit] ??= new Set();
      if (unitsSeen[unit].has(data.order)) errors.push(`${relative('.', file)}: another problem already uses order ${data.order}`);
      unitsSeen[unit].add(data.order);
    }
  } else if (/\/problem-sets\/[^/]+\.ya?ml$/.test(path)) {
    checkProblemSet(file);
  } else if (/\.md$/.test(path)) {
    checkArithmetic(readFileSync(file, 'utf8'), relative('.', file));
  }
}

warnings.forEach((warning) => console.warn(`WARNING  ${warning}`));
errors.forEach((error) => console.error(`ERROR    ${error}`));
console.log(
  `\nAnswer check: ${counts.checked} answers confirmed by code, ${counts.unchecked} without verify code, ` +
    `${counts.arithmetic} formulas checked, ${errors.length} errors.`,
);
if (errors.length) process.exit(1);
