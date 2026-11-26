---
order: 13
difficulty: medium
from: aime-geometry/02-power-of-a-point
choices: ["5","6","8","9","10"]
answer: A
mistakes:
  B: "That's half the tangent length. Use the power of the point to find PB first."
  C: "That's PA. The radius is half of AB."
  D: "That's half of PB. Only the part of PB inside the circle is a diameter."
  E: "That's the diameter AB. Divide by 2 to get the radius."
verify: "(() => { const PB = (12 * 12) / 8; return (PB - 8) / 2; })()"
---

From a point $P$ outside a circle, the tangent segment $PT$ has length 12. A line through $P$ and the center of the circle meets the circle at $A$ and $B$, with $A$ between $P$ and $B$ and $PA = 8$. What is the radius of the circle?

## Hint

Use the power of the point $P$.

## Hint 2

The power of a point says $PT^2 = PA \cdot PB$.

## Solution

By the power of the point, $PA \cdot PB = PT^2$, so

$$PB = \frac{12^2}{8} = 18$$

Then the chord inside the circle has length $18 - 8 = 10$. The line passes through the center, so that chord is a diameter, and the radius is 5.

**Answer: (A) 5**
