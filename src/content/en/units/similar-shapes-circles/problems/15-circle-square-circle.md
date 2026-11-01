---
order: 15
difficulty: medium
lesson: 04-mixed-circle-problems
choices: ["$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{1}{2}$","$\\frac{2}{3}$","$\\frac{3}{4}$"]
answer: C
mistakes:
  A: "That compares radii of 1 and 2. The large radius is the distance to a corner, which is less than 2."
  B: "Try a friendly size, and compute both areas. With a square of side 2, they're $\\pi$ and $2\\pi$."
  D: "Try a friendly size, and compute both areas. With a square of side 2, they're $\\pi$ and $2\\pi$."
  E: "That's close to how much of a square a circle covers, but this compares two circles."
verify: "(() => { const side = 2; const small = (side / 2) ** 2; const big = (side / 2) ** 2 + (side / 2) ** 2; return fraction(small, big); })()"
---

A circle fits exactly inside a square, touching all four sides. That square fits exactly inside a larger circle, with its corners on the circle. The smaller circle's area is what fraction of the larger circle's area?

## Hint

The answer doesn't depend on the size, so choose a friendly one. Let the square have sides of 2.

## Hint 2

The small radius is 1. The large circle's diameter is the square's diagonal, so its radius squared is $1^2 + 1^2$.

## Solution

**Step 1.** Let the square have sides of 2. The small circle has a radius of 1, so its area is $\pi$.

**Step 2.** The large circle's radius goes from the center to a corner. Its square is $1^2 + 1^2 = 2$, so the area is $2\pi$.

**Step 3.** The fraction is $\frac{1}{2}$.

**Answer: (C) $\frac{1}{2}$**
