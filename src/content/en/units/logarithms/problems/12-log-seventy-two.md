---
order: 12
difficulty: medium
lesson: 02-log-rules
choices: ["1.255","1.556","1.857","2.158","2.334"]
answer: C
mistakes:
  A: "That's $\\log 18$, which has one 2 and two 3s. 72 has three 2s."
  B: "That's $\\log 36$, which has two 2s and two 3s. 72 has three 2s."
  D: "That's $\\log 144$, which has four 2s. 72 has three."
  E: "That's $\\log 216$, which has three 3s. 72 has two."
verify: "(3 * 0.301 + 2 * 0.477).toFixed(3)"
---

Using $\log 2 \approx 0.301$ and $\log 3 \approx 0.477$, where both logs are base 10, which is closest to $\log 72$?

## Hint

Factor 72 into 2s and 3s.

## Hint 2

$72 = 2^3 \times 3^2$.

## Solution

Since $72 = 2^3 \times 3^2$, we get $\log 72 = 3\log 2 + 2\log 3$. That's about $3 \times 0.301 + 2 \times 0.477 = 1.857$.

**Answer: (C) 1.857**
