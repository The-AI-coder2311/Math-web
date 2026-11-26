---
order: 10
difficulty: easy
lesson: 02-log-rules
choices: ["3","9","25","27","52"]
answer: A
mistakes:
  B: "That's $3^2$. The quotient is 27, and $3^3 = 27$."
  C: "That halves 52. Subtracting logs divides the inputs."
  D: "That's the combined input. Take its log in base 3."
  E: "That subtracts the inputs. Subtracting logs divides them."
verify: "Math.round((Math.log(54) - Math.log(2)) / Math.log(3))"
---

What is $\log_3 54 - \log_3 2$?

## Hint

Subtracting logs with the same base divides their inputs.

## Hint 2

$54 \div 2 = 27$.

## Solution

By the quotient rule, $\log_3 54 - \log_3 2 = \log_3 27$. Since $3^3 = 27$, the answer is 3.

**Answer: (A) 3**
