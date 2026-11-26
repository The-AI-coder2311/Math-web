---
order: 3
difficulty: easy
lesson: 01-what-logs-mean
choices: ["7","10","13","22","28"]
answer: D
mistakes:
  A: "That solves $x + 3 = 10$. The log equation means $5^2 = x + 3$."
  B: "That's $5 \\times 2$. The exponent form is $5^2 = x + 3$."
  C: "That's $5 \\times 2 + 3$. Use $5^2$, not $5 \\times 2$."
  E: "That's $25 + 3$. Subtract 3 instead: $x + 3 = 25$."
verify: "range(1, 100).find((x) => Math.abs(Math.log(x + 3) / Math.log(5) - 2) < 1e-9)"
---

Solve $\log_5 (x + 3) = 2$ for $x$.

## Hint

Rewrite the equation in exponent form.

## Hint 2

The exponent form is $5^2 = x + 3$.

## Solution

In exponent form, $5^2 = x + 3$, so $25 = x + 3$ and $x = 22$. The input is 25, which is positive, so the solution is allowed.

**Answer: (D) 22**
