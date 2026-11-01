---
order: 5
difficulty: easy
lesson: 02-median-tables-graphs
choices: ["5","12","9","7","14"]
answer: B
mistakes:
  A: "That's the count of numbers. The range is biggest minus smallest."
  D: "That's the median. The range is biggest minus smallest."
  C: "Check the numbers. The biggest is 14, and the smallest is 2."
  E: "That's the biggest number. Subtract the smallest."
verify: "Math.max(3, 9, 14, 2, 7) - Math.min(3, 9, 14, 2, 7)"
---

What is the range of these numbers: 3, 9, 14, 2, 7?

## Hint

The range is the biggest number minus the smallest.

## Hint 2

The biggest is 14. What's the smallest?

## Solution

The biggest is 14 and the smallest is 2, so the range is $14 - 2 = 12$.

**Answer: (B) 12**
