---
order: 19
difficulty: easy
lesson: 04-p-adic-valuation
choices: ["200","240","248","249","250"]
answer: D
mistakes:
  A: "That counts multiples of 5 only. Multiples of 25 and 125 give extra factors of 5."
  B: "That leaves out the multiples of 125 and 625."
  C: "That leaves out 625, which contributes a fourth factor of 5."
  E: "That's $1000 / 4$, an estimate. Legendre's formula gives the exact count."
verify: "(() => { let s = 0, q = 5; while (q <= 1000) { s += Math.floor(1000 / q); q *= 5; } return s; })()"
---

How many zeros are at the end of $1000!$?

## Hint

Count the factors of 5 in $1000!$, using Legendre's formula.

## Hint 2

Add the quotients from dividing 1000 by 5, 25, 125, and 625, rounded down.

## Solution

The number of zeros is the number of factors of 5. The quotients are 200, 40, 8, and 1, so the total is $200 + 40 + 8 + 1 = 249$.

**Answer: (D) 249**
