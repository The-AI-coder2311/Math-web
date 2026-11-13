---
order: 11
difficulty: medium
from: sequences-series/02-fast-sums
choices: ["430","817","820","860","1640"]
answer: D
mistakes:
  A: "That divides by 2 twice. Multiply 20 by 86, and divide by 2 once."
  B: "That's $19 \\times 43$. There are 20 numbers, because $(81 - 5) \\div 4 + 1 = 20$."
  C: "Check the first plus the last: $5 + 81 = 86$. With 20 terms, the sum is $20 \\times 86 \\div 2$."
  E: "That's $20 \\times 82$, without halving. Use first plus last, 86, and then divide by 2."
verify: "sum(range(5, 81).filter((n) => (n - 5) % 4 === 0))"
---

What is the value of $5 + 9 + 13 + \cdots + 81$?

## Hint

How many terms are there?

## Hint 2

The climb is 76 in steps of 4, so there are 19 steps and 20 terms.

## Solution

There are 20 terms, so the sum is $\frac{20 \times (5 + 81)}{2} = 860$.

**Answer: (D) 860**
