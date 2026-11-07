---
order: 30
difficulty: hard
lesson: 04-one-minus
choices: ["$\\frac{5}{18}$","$\\frac{1}{2}$","$\\frac{13}{18}$","$\\frac{5}{6}$"]
answer: C
mistakes:
  A: "That's the chance that all four are different. Subtract it from 1."
  B: "Find the exact chance of all different, and subtract it from 1."
  D: "That's the chance that two particular dice differ."
verify: "fraction(product(range(1, 6), range(1, 6), range(1, 6), range(1, 6)).filter((d) => new Set(d).size < 4).length, 1296)"
---

Four dice are rolled. What is the probability that at least two of them show the same number?

## Hint

Find the chance that all four are different.

## Hint 2

That's $\frac{6 \times 5 \times 4 \times 3}{6^4}$.

## Solution

All four are different with a probability of $\frac{6 \times 5 \times 4 \times 3}{1296} = \frac{360}{1296} = \frac{5}{18}$. So at least two match with a probability of $1 - \frac{5}{18} = \frac{13}{18}$.

**Answer: (C) $\frac{13}{18}$**
