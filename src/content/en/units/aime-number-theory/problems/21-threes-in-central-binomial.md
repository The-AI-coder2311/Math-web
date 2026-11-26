---
order: 21
difficulty: medium
lesson: 04-p-adic-valuation
choices: ["0","1","2","3","4"]
answer: E
mistakes:
  A: "Kummer counts carries in base 3, not base 10. In base 3, the columns carry."
  B: "Count every column. Carries from earlier columns cause more carries."
  C: "There's a carry in all 4 columns of $1212 + 1212$ in base 3."
  D: "Include the carry into the third column: $2 + 2 + 1$ also carries."
verify: "(() => { let s = 0, q = 3; while (q <= 100) { s += Math.floor(100 / q); q *= 3; } return s; })() - 2 * (() => { let s = 0, q = 3; while (q <= 50) { s += Math.floor(50 / q); q *= 3; } return s; })()"
---

What is the largest integer $k$ such that $3^k$ divides $\binom{100}{50}$?

## Hint

Use Kummer's theorem: count the carries when adding 50 and 50 in base 3.

## Hint 2

In base 3, 50 is written 1212.

## Solution

In base 3, 50 is written 1212. Adding 1212 and 1212 in base 3, every one of the 4 columns carries. So $k = 4$.

**Check with Legendre:** $v_3(100!) = 48$ and $v_3(50!) = 22$, and $48 - 22 - 22 = 4$.

**Answer: (E) 4**
