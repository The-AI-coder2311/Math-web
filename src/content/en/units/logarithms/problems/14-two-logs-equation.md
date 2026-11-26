---
order: 14
difficulty: medium
lesson: 02-log-rules
choices: ["-2","4","6","8","10"]
answer: B
mistakes:
  A: "That solves the quadratic, but $\\log_2 (-2)$ isn't allowed."
  C: "Check it: $6 \\times 4$ is 24, not 8."
  D: "That's $2^3$. Set the product $x(x - 2)$ equal to 8."
  E: "Check it: $10 \\times 8$ is 80, not 8."
verify: "range(3, 100).find((x) => Math.abs(Math.log(x) / Math.log(2) + Math.log(x - 2) / Math.log(2) - 3) < 1e-9)"
---

Solve $\log_2 x + \log_2 (x - 2) = 3$.

## Hint

Combine the left side into one log.

## Hint 2

The equation becomes $x(x - 2) = 2^3$.

## Solution

Combining gives $\log_2 (x(x - 2)) = 3$, so $x^2 - 2x = 8$. That factors as $(x - 4)(x + 2) = 0$. The value $x = -2$ makes the logs undefined, so the only solution is $x = 4$.

**Answer: (B) 4**
