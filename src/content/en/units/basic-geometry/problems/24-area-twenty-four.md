---
order: 24
difficulty: medium
lesson: 01-perimeter-and-area
choices: ["20","22","28","50"]
answer: A
mistakes:
  B: "That's a 3 by 8 rectangle. A shape closer to a square does better."
  C: "That's a 2 by 12 rectangle. A shape closer to a square does better."
  D: "That's a 1 by 24 rectangle, which has the largest perimeter."
verify: "Math.min(...factors(24).map((w) => 2 * (w + 24 / w)))"
---

A rectangle has whole-number sides and an area of 24. What is the smallest perimeter it can have?

## Hint

List the pairs of whole numbers that multiply to 24.

## Hint 2

The pairs are 1 and 24, 2 and 12, 3 and 8, and 4 and 6.

## Solution

The pairs of sides are 1 and 24, 2 and 12, 3 and 8, and 4 and 6. The closest pair gives the smallest perimeter: $2 \times (4 + 6) = 20$.

**Answer: (A) 20**
