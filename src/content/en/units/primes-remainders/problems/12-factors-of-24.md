---
order: 6
difficulty: easy
lesson: 02-counting-divisors
choices: ["4","6","8","10","12"]
answer: C
mistakes:
  A: "That uses only the 2s. The 3 has an exponent of 1, which doubles the count."
  B: "That adds $4 + 2$. Multiply them, since you choose 2s **and** 3s."
  D: "List them: 1, 2, 3, 4, 6, 8, 12, 24. There are 8."
  E: "That's half of 24. List them: 1, 2, 3, 4, 6, 8, 12, 24."
verify: "factors(24).length"
---

The number 24 equals $2^3 \times 3$. How many positive factors does it have?

## Hint

Add 1 to each exponent, and multiply. What's the exponent on the 3?

## Hint 2

The exponents are 3 and 1, which become 4 and 2.

## Solution

The exponents are 3 and 1. Adding 1 to each gives 4 and 2, and $4 \times 2 = 8$.

**Answer: (C) 8**
