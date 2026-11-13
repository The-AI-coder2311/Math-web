---
order: 2
difficulty: easy
lesson: 01-pascal-and-binomials
choices: ["14","49","64","127","128"]
answer: E
mistakes:
  A: "That's $2 \\times 7$. Each row's sum is double the row before it, so row 7 adds up to seven 2s multiplied together."
  B: "That's $7^2$. The row sum is 2 multiplied by itself 7 times, not 7 multiplied by itself."
  C: "That's $2^6$, the sum of row 6. Rows are counted starting from 0, so row 7 gives $2^7$."
  D: "That leaves out one subset, such as the empty one. The whole row includes both 1s."
verify: "sum(range(0, 7).map((k) => combos(range(1, 7), k).length))"
---

What is the sum of all of the numbers in row 7 of Pascal's triangle? (The top of the triangle is row 0.)

## Hint

Add up the first few rows. What do you notice about the sums 1, 2, 4, 8?

## Hint 2

Row $n$ adds up to $2^n$.

## Solution

Row $n$ adds up to $2^n$, since it counts all of the subsets of $n$ things. So row 7 adds up to $2^7 = 128$.

**Answer: (E) 128**
