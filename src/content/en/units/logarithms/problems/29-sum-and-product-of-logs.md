---
order: 29
difficulty: hard
lesson: 04-logs-in-contests
choices: ["10","21","128","136","1024"]
answer: D
mistakes:
  A: "That's the sum of the logs. Convert each log back to a number."
  B: "That's the product of the logs. Find each log, then convert."
  C: "That's only the larger number. Add $2^3$ too."
  E: "That's $ab$. The question asks for $a + b$."
verify: "(() => { for (const a of range(1, 2000)) for (const b of range(a, 2000)) { const p = Math.log2(a), q = Math.log2(b); if (Math.abs(p + q - 10) < 1e-9 && Math.abs(p * q - 21) < 1e-9) return a + b; } })()"
---

Positive numbers $a$ and $b$ satisfy $\log_2 a + \log_2 b = 10$ and $(\log_2 a)(\log_2 b) = 21$. What is $a + b$?

## Hint

The two logs have a known sum and product. What quadratic do they solve?

## Hint 2

The logs are the roots of $u^2 - 10u + 21 = 0$.

## Solution

By [Vieta's formulas](/pathway/algebra-toolkit/03-quadratics-and-vieta/), the logs are the roots of $u^2 - 10u + 21 = 0$, which are 3 and 7. So $a$ and $b$ are $2^3 = 8$ and $2^7 = 128$, and $a + b = 136$.

**Answer: (D) 136**
