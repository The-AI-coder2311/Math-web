---
order: 5
difficulty: easy
lesson: 02-median-tables-graphs
choices: ["4","5","7","9","12"]
answer: E
mistakes:
  A: "That's $7 - 3$, the last number in the list minus the first. The range uses the largest and the smallest."
  B: "That's the count of numbers. The range is biggest minus smallest."
  C: "That's the median. The range is biggest minus smallest."
  D: "Check the numbers. The biggest is 14, and the smallest is 2."
verify: "Math.max(3, 9, 14, 2, 7) - Math.min(3, 9, 14, 2, 7)"
---

What is the range of these numbers: 3, 9, 14, 2, 7?

## Hint

The range is the biggest number minus the smallest.

## Hint 2

The biggest is 14. What's the smallest?

## Solution

The biggest is 14 and the smallest is 2, so the range is $14 - 2 = 12$.

**Answer: (E) 12**
