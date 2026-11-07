---
order: 22
difficulty: easy
lesson: 02-median-tables-graphs
choices: ["3","5","7","25"]
answer: B
mistakes:
  A: "That's the second number when sorted. The median is the third."
  C: "That's the fourth number when sorted. The median is the third."
  D: "That's the sum."
verify: "[3, 9, 1, 7, 5].sort((a, b) => a - b)[2]"
---

What is the median of 3, 9, 1, 7, and 5?

## Hint

Put the numbers in order first.

## Hint 2

In order, they're 1, 3, 5, 7, 9.

## Solution

In order, the numbers are 1, 3, 5, 7, and 9. The middle one is 5.

**Answer: (B) 5**
