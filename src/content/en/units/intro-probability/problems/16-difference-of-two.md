---
order: 16
difficulty: hard
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{9}$","$\\frac{1}{6}$","$\\frac{2}{9}$","$\\frac{5}{18}$","$\\frac{1}{3}$"]
answer: C
mistakes:
  A: "That counts 4 outcomes, treating (1, 3) and (3, 1) as the same. Each pair has 2 orders."
  B: "That counts 6 outcomes. There are 4 pairs, each with 2 orders."
  D: "That's the chance that they differ by exactly 1, which has 10 outcomes."
  E: "That counts 12 outcomes. There are 4 pairs, each with 2 orders."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => Math.abs(a - b) === 2).length, 36)"
---

You roll two standard dice. What is the probability that the two numbers differ by exactly 2?

## Hint

List the pairs that differ by 2, like (1, 3). Remember that (3, 1) is a different outcome.

## Hint 2

The smaller number can be 1, 2, 3, or 4. Each gives 2 outcomes.

## Solution

The pairs are 1 and 3, 2 and 4, 3 and 5, and 4 and 6. Each can happen in 2 orders, which makes 8 outcomes. So the probability is $\frac{8}{36} = \frac{2}{9}$.

**Answer: (C) $\frac{2}{9}$**
