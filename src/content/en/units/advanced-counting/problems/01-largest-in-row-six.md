---
order: 1
difficulty: easy
lesson: 01-pascal-and-binomials
choices: ["6","15","20","30","64"]
answer: C
mistakes:
  A: "That's the second number in the row. The numbers grow toward the middle."
  B: "That's the third number, but the row keeps growing until its middle."
  D: "That's $6 \\times 5$, which counts ordered picks. The largest entry is $\\binom{6}{3}$, which divides out the orders."
  E: "That's $2^6$, the sum of the entire row, not its largest number."
verify: "Math.max(...range(0, 6).map((k) => combos(range(1, 6), k).length))"
---

Row 6 of Pascal's triangle starts 1, 6, 15, ... What is the largest number in row 6?

## Hint

Each number is the sum of the two above it. Row 5 is 1, 5, 10, 10, 5, 1.

## Hint 2

The middle of row 6 sits below the two 10s in row 5.

## Solution

Build row 6 from row 5: $1 + 5 = 6$, $5 + 10 = 15$, and $10 + 10 = 20$. Then it mirrors, so the row is 1, 6, 15, 20, 15, 6, 1. The largest number is 20.

**Answer: (C) 20**
