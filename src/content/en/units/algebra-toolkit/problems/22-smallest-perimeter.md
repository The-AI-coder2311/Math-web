---
order: 22
difficulty: medium
lesson: 05-am-gm-inequality
choices: ["16","32","34","40","65"]
answer: B
mistakes:
  A: "That's the sum of two sides, $8 + 8$. The perimeter counts all four sides."
  C: "That's close, but no. A square with an area of 64 has sides of 8. Check its perimeter."
  D: "That's a 4 by 16 rectangle. A shape closer to a square has a smaller perimeter."
  E: "That's the sum of the area and 1. Look for the sides of the rectangle first."
verify: "Math.min(...factors(64).map((w) => 2 * (w + 64 / w)))"
---

A rectangle has an area of 64. What is its smallest possible perimeter?

## Hint

The product of the sides is fixed. So what shape makes their sum smallest?

## Hint 2

Equal sides give the smallest sum. What are the sides of a square with an area of 64?

## Solution

The product of the sides is fixed, so the sum is smallest when they're equal. That's a square with sides of 8, and its perimeter is $4 \times 8 = 32$.

**Answer: (B) 32**
