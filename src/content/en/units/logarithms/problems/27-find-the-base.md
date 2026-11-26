---
order: 27
difficulty: medium
lesson: 04-logs-in-contests
choices: ["2","4","8","16","64"]
answer: B
mistakes:
  A: "Check it: $\\log_2 64$ is 6, not 3."
  C: "Check it: $\\log_8 64$ is 2, not 3."
  D: "Check it: $16^3$ is 4096, not 64."
  E: "That's the combined input. Solve $b^3 = 64$."
verify: "range(2, 100).find((b) => Math.abs((Math.log(2) + Math.log(4) + Math.log(8)) / Math.log(b) - 3) < 1e-9)"
---

If $\log_b 2 + \log_b 4 + \log_b 8 = 3$ and $b > 0$, what is $b$?

## Hint

Combine the left side into one log.

## Hint 2

$2 \times 4 \times 8 = 64$.

## Solution

The product rule gives $\log_b 64 = 3$, so $b^3 = 64$ and $b = 4$.

**Answer: (B) 4**
