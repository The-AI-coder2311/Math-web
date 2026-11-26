---
order: 2
difficulty: easy
lesson: 01-what-logs-mean
choices: ["-9","-6","-4","-3","-2"]
answer: E
mistakes:
  A: "The input is one ninth, but the log is the exponent, not the input."
  B: "That multiplies 3 by the exponent. The log is the exponent itself."
  C: "Check it: $3^{-4}$ is one eighty-first, not one ninth."
  D: "Check it: $3^{-3}$ is one twenty-seventh, not one ninth."
verify: "Math.round(Math.log(1 / 9) / Math.log(3))"
---

What is $\log_3 \frac{1}{9}$?

## Hint

Negative exponents make fractions. What power of 3 is 9?

## Hint 2

$3^2 = 9$, so one ninth is $3$ raised to a negative power.

## Solution

Since $3^2 = 9$, we have $3^{-2} = \frac{1}{9}$. So $\log_3 \frac{1}{9} = -2$.

**Answer: (E) -2**
