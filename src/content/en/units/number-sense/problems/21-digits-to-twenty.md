---
order: 21
difficulty: easy
lesson: 01-place-value
choices: ["20","29","31","40"]
answer: C
mistakes:
  A: "That's how many numbers there are. Many of them have 2 digits."
  B: "Count the two-digit numbers again. From 10 to 20, there are 11 of them, not 10."
  D: "That counts all 20 numbers as having 2 digits. The numbers from 1 to 9 have only 1."
verify: "sum(range(1, 20).map((n) => String(n).length))"
---

You write the whole numbers from 1 to 20 in a row. How many digits do you write?

## Hint

Split the numbers into one-digit and two-digit numbers.

## Hint 2

There are 9 one-digit numbers. How many numbers go from 10 to 20, counting both ends?

## Solution

The numbers 1 to 9 use 9 digits. The numbers 10 to 20 are 11 numbers with 2 digits each, which makes 22 digits. In all, $9 + 22 = 31$.

**Answer: (C) 31**
