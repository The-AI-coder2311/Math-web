---
order: 29
difficulty: hard
lesson: 03-areas-on-a-grid
choices: ["5","6","7","8"]
answer: C
mistakes:
  A: "Check the boundary count. The side from (5, 0) to (2, 4) has only 1 step."
  B: "Check the side from (0, 0) to (2, 4). It has 2 steps."
  D: "That's the number of points on the boundary."
verify: "product(range(1, 4), range(1, 3)).filter(([x, y]) => 2 * x - y > 0 && 4 * x + 3 * y < 20).length"
---

A triangle has corners at $(0, 0)$, $(5, 0)$, and $(2, 4)$. How many grid points are strictly inside it?

## Hint

Find the area, and count the boundary points using GCFs.

## Hint 2

The area is 10. The sides have $\gcd(5, 0) = 5$, $\gcd(3, 4) = 1$, and $\gcd(2, 4) = 2$ steps.

## Solution

The area is $\frac{1}{2} \times 5 \times 4 = 10$. The sides have 5, 1, and 2 steps, so $B = 8$. Pick's theorem gives $10 = I + 4 - 1$, so $I = 7$.

**Answer: (C) 7**
