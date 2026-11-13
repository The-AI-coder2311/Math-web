// Works out the value of an answer choice, so numeric choices can be kept in
// ascending order, like the real AMC. Used by the answer checker.
//
// A choice counts as numeric when it's one value: a whole number or decimal
// (12, 1,000, -3, 2.5), a fraction ($\frac{1}{3}$ or 1/3), a multiple of pi
// ($16\pi$, $\frac{\pi}{4}$), or a square root ($5\sqrt{2}$). Words, points,
// ratios, and expressions like $16 - 4\pi$ give null, and a problem with any
// such choice is exempt from the ordering rule.

const NUMBER = '-?\\d+(?:\\.\\d+)?';

/** The value of one choice, or null when it isn't a single number. */
export function choiceValue(choice) {
  const text = String(choice)
    .replace(/\$/g, '')
    .replace(/\\,/g, '')
    .replace(/(\d),(?=\d{3})/g, '$1')
    .replace(/\s+/g, '');
  let match;
  if (new RegExp(`^${NUMBER}$`).test(text)) return Number(text);
  if ((match = text.match(/^(-?)\\frac\{(\d+)\}\{(\d+)\}$/))) return (match[1] ? -1 : 1) * (Number(match[2]) / Number(match[3]));
  if ((match = text.match(/^(-?\d+)\/(\d+)$/))) return Number(match[1]) / Number(match[2]);
  if ((match = text.match(new RegExp(`^(${NUMBER})?\\\\pi$`)))) return (match[1] === undefined ? 1 : Number(match[1])) * Math.PI;
  if ((match = text.match(/^\\frac\{(\d*)\\pi\}\{(\d+)\}$/))) return ((match[1] === '' ? 1 : Number(match[1])) * Math.PI) / Number(match[2]);
  if ((match = text.match(/^(\d+)?\\sqrt\{(\d+)\}$/))) return (match[1] === undefined ? 1 : Number(match[1])) * Math.sqrt(Number(match[2]));
  return null;
}

/** True when every choice is a number and they aren't in ascending order. */
export function numericChoicesOutOfOrder(choices) {
  const values = choices.map(choiceValue);
  if (values.length < 2 || values.some((value) => value === null)) return false;
  return values.some((value, i) => i > 0 && value < values[i - 1]);
}
