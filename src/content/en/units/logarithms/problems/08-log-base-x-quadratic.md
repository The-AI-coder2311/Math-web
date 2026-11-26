---
order: 8
difficulty: hard
lesson: 01-what-logs-mean
choices: ["2","4","6","8","12"]
answer: C
mistakes:
  A: "That's only one solution. Both 2 and 4 work."
  B: "That's only one solution. Both 2 and 4 work."
  D: "That's the product of the solutions. The question asks for the sum."
  E: "That's $6 \\times 2$. Solve $x^2 = 6x - 8$."
verify: "sum(range(2, 100).filter((x) => 6 * x - 8 > 0 && Math.abs(Math.log(6 * x - 8) / Math.log(x) - 2) < 1e-9))"
---

Find the sum of all real numbers $x$ that satisfy $\log_x (6x - 8) = 2$.

## Hint

Rewrite in exponent form, and remember the base rules.

## Hint 2

The exponent form is $x^2 = 6x - 8$.

## Solution

In exponent form, $x^2 = 6x - 8$, so $x^2 - 6x + 8 = 0$, which factors as $(x - 2)(x - 4) = 0$. Both bases are positive and not 1, and the inputs $6 \times 2 - 8 = 4$ and $6 \times 4 - 8 = 16$ are positive. So both work, and the sum is 6.

**Answer: (C) 6**
