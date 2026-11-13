---
order: 15
difficulty: medium
from: coordinate-geometry/03-areas-on-a-grid
choices: ["11","12","15","30","60"]
answer: C
mistakes:
  A: "That's $6 + 5$. Area multiplies, and then halves."
  B: "That uses a height of 4. The height is the $y$-coordinate, 5."
  D: "That's the box around the triangle. The triangle is half of it."
  E: "That doubles the box. The area is half of base times height."
verify: "Math.abs(6 * 5 - 2 * 0) / 2"
---

What is the area of the triangle with corners $(0, 0)$, $(6, 0)$, and $(2, 5)$?

## Hint

One side is level. How long is it? How high is the third corner?

## Hint 2

The base is 6, and the height is 5.

## Solution

The base is 6, and the height is 5. The area is $\frac{1}{2} \times 6 \times 5 = 15$.

**Answer: (C) 15**
