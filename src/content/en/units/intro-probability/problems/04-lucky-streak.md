---
order: 4
difficulty: easy
choices: ['$\frac{1}{64}$', '$\frac{1}{7}$', '$\frac{1}{2}$', '$\frac{6}{7}$', '1']
answer: C
verify: "(() => { const c = [0, 1]; const all = product(c, c, c, c, c, c, c).filter((f) => f.slice(0, 6).every((x) => x === 1)); return fraction(all.filter((f) => f[6] === 1).length, all.length); })()"
---

A fair coin has just landed on heads 6 times in a row. What is the probability that it lands on heads on the next flip?

## Hint

Does the coin know what it did before?

## Solution

The coin has no memory, so earlier flips can't change the next one. On any flip of a fair coin, heads and tails are equally likely, so the probability is $\frac{1}{2}$.

**Answer: (C) $\frac{1}{2}$**
