---
order: 6
difficulty: easy
lesson: 04-harder-probability
choices: ["$\\frac{3}{16}$","$\\frac{1}{4}$","$\\frac{3}{8}$","$\\frac{1}{2}$","$\\frac{5}{8}$"]
answer: C
mistakes:
  A: "That counts 3 ways. List them: HHTT, HTHT, HTTH, THHT, THTH, TTHH. There are 6."
  B: "That's 4 out of 16, which is the count for exactly 1 head."
  D: "It feels like half, since half of the coins are heads. But exactly 2 heads is only one of several results."
  E: "That's 10 out of 16. Only 6 outcomes have exactly 2 heads."
verify: "fraction(product([0, 1], [0, 1], [0, 1], [0, 1]).filter((x) => sum(x) === 2).length, 16)"
---

You flip 4 fair coins. What is the probability of getting exactly 2 heads?

## Hint

How many outcomes are there in all? How can you count the ones with exactly 2 heads?

## Hint 2

There are 16 outcomes. Choose which 2 of the 4 flips are heads: $\binom{4}{2}$.

## Solution

There are $2^4 = 16$ outcomes. Choosing which 2 flips are heads gives $\binom{4}{2} = 6$. So the probability is $\frac{6}{16} = \frac{3}{8}$.

**Answer: (C) $\frac{3}{8}$**
