---
order: 4
difficulty: easy
from: advanced-counting/01-pascal-and-binomials
choices: ["10","16","25","64","32"]
answer: E
mistakes:
  A: "That's one number in the row. Add them all."
  B: "That's row 4. Rows start from 0."
  C: "That's $5^2$. The row sum is 2 multiplied by itself 5 times."
  D: "That's row 6. Rows start from 0."
verify: "sum(range(0, 5).map((k) => combos(range(1, 5), k).length))"
---

What is the sum of the numbers in row 5 of Pascal's triangle? (The top of the triangle is row 0.)

## Hint

What do the first few rows add up to?

## Hint 2

Row $n$ adds up to $2^n$.

## Solution

Row $n$ adds up to $2^n$, so row 5 adds up to $2^5 = 32$.

**Answer: (E) 32**
