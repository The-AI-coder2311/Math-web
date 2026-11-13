---
order: 3
difficulty: easy
lesson: 02-distance-midpoints-circles
choices: ["5","7","12","13","25"]
answer: A
mistakes:
  B: "That's $3 + 4$, the walking distance along the grid. The straight line is shorter."
  C: "That's $3 \\times 4$. Use the Pythagorean Theorem: square, add, and take the square root."
  D: "That's from a 5-12-13 triangle. The legs here are 3 and 4, which make a 3-4-5 triangle."
  E: "That's the distance squared. You still need to take the square root."
verify: "Math.hypot(4 - 1, 5 - 1)"
---

What is the distance between the points $(1, 1)$ and $(4, 5)$?

## Hint

Draw a right triangle between the points. How long are its level and upright sides?

## Hint 2

The legs are 3 and 4. The distance is the hypotenuse.

## Solution

The legs are $4 - 1 = 3$ and $5 - 1 = 4$. So the distance is the hypotenuse of a 3-4-5 triangle, which is 5.

**Answer: (A) 5**
