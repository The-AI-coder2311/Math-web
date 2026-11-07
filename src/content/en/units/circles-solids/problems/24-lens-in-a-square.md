---
order: 24
difficulty: medium
lesson: 02-shaded-regions
choices: ["$9\\pi - 18$","$18\\pi - 36$","$36 - 9\\pi$","$36\\pi - 36$"]
answer: B
mistakes:
  A: "That's only one half of the lens. Double it."
  C: "That's the area outside one quarter circle."
  D: "That uses the whole circle. Each part uses only a quarter circle."
verify: "Math.abs(2 * ((Math.PI * 36) / 4 - 18) - (18 * Math.PI - 36)) < 1e-9 ? '18\\\\pi - 36' : 'no match'"
---

A square has sides of 6. Two quarter circles of radius 6 are drawn inside it, centered at opposite corners. What is the area where they overlap?

## Hint

The diagonal splits the overlap into two equal parts.

## Hint 2

Each part is a quarter circle minus a right triangle.

## Solution

Each part is a quarter circle minus a triangle: $\frac{1}{4} \times \pi \times 36 - \frac{1}{2} \times 6 \times 6 = 9\pi - 18$. Two parts make $18\pi - 36$.

**Answer: (B) $18\pi - 36$**
