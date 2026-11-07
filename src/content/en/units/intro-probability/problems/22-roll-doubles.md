---
order: 22
difficulty: easy
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{36}$","$\\frac{1}{12}$","$\\frac{1}{6}$","$\\frac{1}{2}$"]
answer: C
mistakes:
  A: "That's the chance of one particular double, such as two 4s."
  B: "That only counts half of the doubles. There are 6 doubles."
  D: "Most rolls aren't doubles. List them: only 6 of the 36 are."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a === b).length, 36)"
---

Two dice are rolled. What is the probability that they show the same number?

## Hint

How many outcomes are there for two dice?

## Hint 2

There are 36 outcomes. List the ones that match: 1 and 1, 2 and 2, and so on.

## Solution

There are 36 outcomes, and 6 of them match. So the probability is $\frac{6}{36} = \frac{1}{6}$.

**Answer: (C) $\frac{1}{6}$**
