---
order: 27
difficulty: medium
lesson: 03-multi-step-chance
choices: ["$\\frac{1}{6}$","$\\frac{1}{3}$","$\\frac{1}{2}$","$\\frac{5}{6}$"]
answer: C
mistakes:
  A: "That's the chance that both hit."
  B: "That's only the path where Al hits and Bo misses."
  D: "That's the chance that at least one hits, which includes both hitting."
verify: "fraction(1 * 2 + 1 * 1, 2 * 3)"
---

Al hits a target with a chance of $\frac{1}{2}$, and Bo hits it with a chance of $\frac{1}{3}$. They each take one shot, independently. What is the probability that exactly one of them hits?

## Hint

Two paths work: Al hits and Bo misses, or Al misses and Bo hits.

## Hint 2

Multiply along each path, and add.

## Solution

Al hits and Bo misses: $\frac{1}{2} \times \frac{2}{3} = \frac{1}{3}$. Al misses and Bo hits: $\frac{1}{2} \times \frac{1}{3} = \frac{1}{6}$. Adding gives $\frac{1}{3} + \frac{1}{6} = \frac{1}{2}$.

**Answer: (C) $\frac{1}{2}$**
