---
order: 20
difficulty: easy
lesson: 04-p-adic-valuation
choices: ["25","45","46","47","48"]
answer: D
mistakes:
  A: "That counts only the even numbers. Multiples of 4, 8, 16 and 32 give extra factors of 2."
  B: "Check the quotients: 50 divided by 8 is 6, rounded down."
  C: "That leaves out 32, which contributes a fifth factor of 2."
  E: "Check the sum: $25 + 12 + 6 + 3 + 1 = 47$."
verify: "(() => { let s = 0, q = 2; while (q <= 50) { s += Math.floor(50 / q); q *= 2; } return s; })()"
---

What is the largest integer $k$ such that $2^k$ divides $50!$?

## Hint

Use Legendre's formula with powers of 2 up to 32.

## Hint 2

The quotients are 25, 12, 6, 3, and 1.

## Solution

Legendre's formula gives $25 + 12 + 6 + 3 + 1 = 47$. As a check, 50 is 110010 in base 2, with digit sum 3, and $50 - 3 = 47$.

**Answer: (D) 47**
