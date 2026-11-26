---
order: 11
difficulty: easy
lesson: 02-log-rules
choices: ["3","5","8","13","15"]
answer: E
mistakes:
  A: "That's $\\log_2 8$. You still need the power of 5."
  B: "That's the exponent outside. Multiply it by $\\log_2 8$."
  C: "That's the base inside. Multiply 5 by $\\log_2 8$."
  D: "That adds 8 and 5. The power rule multiplies."
verify: "Math.round(5 * Math.log(8) / Math.log(2))"
---

What is $\log_2 (8^5)$?

## Hint

Bring the exponent down in front of the log.

## Hint 2

$\log_2 (8^5) = 5 \log_2 8$.

## Solution

By the power rule, $\log_2 (8^5) = 5 \log_2 8$. Since $\log_2 8 = 3$, this is $5 \times 3 = 15$.

**Answer: (E) 15**
