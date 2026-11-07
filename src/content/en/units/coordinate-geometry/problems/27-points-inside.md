---
order: 27
difficulty: medium
lesson: 03-areas-on-a-grid
choices: ["15","17","21","24"]
answer: B
mistakes:
  A: "Check the boundary count. It's 16."
  C: "Check the formula: the area equals $I$ plus half of $B$, minus 1."
  D: "That's the area. Use Pick's theorem to find the points inside."
verify: "product(range(1, 5), range(1, 7)).filter(([x, y]) => 8 * x + 6 * y < 48).length"
---

A triangle has corners at $(0, 0)$, $(6, 0)$, and $(0, 8)$. How many grid points are strictly inside it?

## Hint

Use Pick's theorem: $A = I + \frac{B}{2} - 1$.

## Hint 2

The area is 24. The boundary has $6 + 8 + 2 = 16$ points.

## Solution

The area is 24. The sides have 6, 8, and $\gcd(6, 8) = 2$ steps, so $B = 16$. Then $24 = I + 8 - 1$, so $I = 17$.

**Answer: (B) 17**
