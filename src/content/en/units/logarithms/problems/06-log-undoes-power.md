---
order: 6
difficulty: medium
lesson: 01-what-logs-mean
choices: ["12","13","14","35","45"]
answer: C
mistakes:
  A: "Check each piece. The first is 5 and the second is 9."
  B: "Check each piece. The first is 5 and the second is 9."
  D: "That multiplies 7 by 5. Raising 7 to the power $\\log_7 5$ gives 5."
  E: "That multiplies 5 by 9. The two pieces are added."
verify: "Math.round(Math.pow(7, Math.log(5) / Math.log(7)) + Math.log(Math.pow(4, 9)) / Math.log(4))"
---

What is $7^{\log_7 5} + \log_4 (4^9)$?

## Hint

Logs and exponents with the same base undo each other.

## Hint 2

The first term is 5. What power of 4 is $4^9$?

## Solution

$7^{\log_7 5}$ is 7 raised to the power that turns 7 into 5, which is 5. And $\log_4 (4^9)$ asks what power of 4 gives $4^9$, which is 9. The sum is 14.

**Answer: (C) 14**
