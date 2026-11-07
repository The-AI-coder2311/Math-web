---
order: 23
difficulty: easy
lesson: 04-one-minus
choices: ["$\\frac{1}{4}$","$\\frac{1}{2}$","$\\frac{3}{4}$","$1$"]
answer: C
mistakes:
  A: "That's the chance of no tails. Subtract it from 1."
  B: "That's the chance of exactly one tail. Two tails also counts."
  D: "Two heads is possible, so it isn't certain."
verify: "fraction(product([0, 1], [0, 1]).filter((f) => f.includes(1)).length, 4)"
---

A coin is flipped twice. What is the probability of getting at least one tail?

## Hint

What's the opposite of "at least one tail"?

## Hint 2

The opposite is two heads, which has a chance of $\frac{1}{4}$.

## Solution

The opposite is two heads, with a probability of $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. So the answer is $1 - \frac{1}{4} = \frac{3}{4}$.

**Answer: (C) $\frac{3}{4}$**
