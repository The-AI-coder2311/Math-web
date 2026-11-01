---
order: 20
difficulty: hard
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{20}$","$\\frac{5}{99}$","$\\frac{1}{9}$","$\\frac{1}{10}$","$\\frac{1}{18}$"]
answer: E
mistakes:
  A: "That uses 100 as the total. There are 90 two-digit numbers, from 10 to 99."
  B: "That uses 99 as the total. The numbers from 1 to 9 aren't 2-digit numbers."
  D: "That's 9 out of 90. Only 5 numbers work."
  C: "That's 10 out of 90. Only 5 numbers work."
verify: "fraction(range(10, 99).filter((n) => sum(digits(n)) === 5).length, 90)"
---

A 2-digit number is chosen at random. What is the probability that its digits add up to 5?

## Hint

How many 2-digit numbers are there? Be careful: they don't start at 1.

## Hint 2

There are 90 of them. List the ones whose digits add up to 5: 14, 23, ...

## Solution

There are 90 two-digit numbers. The ones we want are 14, 23, 32, 41, and 50. That's 5 numbers, so the probability is $\frac{5}{90} = \frac{1}{18}$.

**Answer: (E) $\frac{1}{18}$**
