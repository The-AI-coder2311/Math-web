---
order: 8
difficulty: medium
lesson: 02-shaded-regions
choices: ["$64 - 4\\pi$","$64 - 16\\pi$","$64 - 8\\pi$","$64 - 64\\pi$","$32 - 16\\pi$"]
answer: B
mistakes:
  A: "That doesn't square the radius. The area is $\\pi \\times 4^2$."
  C: "That's the circumference, $2 \\pi r$. Subtract the area."
  D: "That uses a radius of 8. The diameter is 8, so the radius is 4."
  E: "That halves the square. The square's whole area is 64."
verify: "`${8 * 8} - ${pi(4 * 4)}`"
---

The largest possible circle is drawn inside a square with sides of 8. What is the area of the part of the square that is **outside** the circle?

## Hint

Sketch it. The circle touches all four sides, so what's its diameter? Then subtract.

## Hint 2

The circle's diameter is 8, so its radius is 4. Subtract its area from the square.

## Solution

**Step 1.** The square's area is $8 \times 8 = 64$.

**Step 2.** The circle's diameter equals the square's side, 8. So its radius is 4, and its area is $16\pi$.

**Step 3.** Subtract the circle from the square: $64 - 16\pi$.

**Answer: (B) $64 - 16\pi$**
