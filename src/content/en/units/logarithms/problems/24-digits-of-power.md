---
order: 24
difficulty: easy
lesson: 04-logs-in-contests
choices: ["15","16","17","25","50"]
answer: B
mistakes:
  A: "That forgets the plus one. A log of 15.05 means 16 digits."
  C: "Check the multiplication: $50 \\times 0.30103$ is about 15.05."
  D: "That's half of 50. Use the log of 2."
  E: "That's the exponent. Multiply it by $\\log 2$."
verify: "String(2n ** 50n).length"
---

Using $\log 2 \approx 0.30103$, how many digits does $2^{50}$ have?

## Hint

Find $\log (2^{50})$ with the power rule.

## Hint 2

$\log (2^{50}) \approx 15.05$.

## Solution

$\log (2^{50}) = 50 \log 2 \approx 15.05$, so $2^{50}$ is between $10^{15}$ and $10^{16}$. Such numbers have 16 digits.

**Answer: (B) 16**
