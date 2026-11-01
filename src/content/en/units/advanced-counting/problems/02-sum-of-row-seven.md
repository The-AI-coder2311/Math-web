---
order: 2
difficulty: easy
lesson: 01-pascal-and-binomials
choices: ["128","64","127","49","256"]
answer: A
mistakes:
  D: "That's $7^2$. The row sum is 2 multiplied by itself 7 times, not 7 multiplied by itself."
  B: "That's $2^6$, the sum of row 6. Rows are counted starting from 0, so row 7 gives $2^7$."
  C: "That leaves out one subset, such as the empty one. The whole row includes both 1s."
  E: "That's $2^8$, the sum of row 8."
verify: "sum(range(0, 7).map((k) => combos(range(1, 7), k).length))"
---

What is the sum of all of the numbers in row 7 of Pascal's triangle? (The top of the triangle is row 0.)

## Hint

Add up the first few rows. What do you notice about the sums 1, 2, 4, 8?

## Hint 2

Row $n$ adds up to $2^n$.

## Solution

Row $n$ adds up to $2^n$, since it counts all of the subsets of $n$ things. So row 7 adds up to $2^7 = 128$.

**Answer: (A) 128**
