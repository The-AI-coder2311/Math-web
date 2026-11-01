---
order: 17
difficulty: hard
from: basic-geometry/01-perimeter-and-area
choices: ["192","112","48","196","768"]
answer: A
mistakes:
  C: "That's $3 \\times 4 \\times 4$. Find both sides first: 12 and 16."
  B: "That's $4 \\times 28$. Find both sides, and multiply them."
  D: "That's $14 \\times 14$, a square. The sides are in a ratio of 3 to 4."
  E: "That doubles the sides by using the whole perimeter. The sides add up to 28, not 56."
verify: "(() => { const u = range(1, 20).find((x) => 2 * (3 * x + 4 * x) === 56); return 3 * u * (4 * u); })()"
---

A rectangle has a perimeter of 56, and its sides are in a ratio of 3 to 4. What is its area?

## Hint

Half of the perimeter is one short side plus one long side. Use boxes for the sides.

## Hint 2

The sides add up to 28, in 7 boxes. So each box holds 4.

## Solution

The sides add up to 28. With 7 boxes, each holds 4. So the sides are 12 and 16, and the area is $12 \times 16 = 192$.

**Answer: (A) 192**
