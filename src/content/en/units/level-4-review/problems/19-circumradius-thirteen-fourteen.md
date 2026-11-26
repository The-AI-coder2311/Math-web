---
order: 19
difficulty: hard
from: trigonometry/05-trig-area
choices: ["56","60","64","65","70"]
answer: D
mistakes:
  A: "That uses 7, half of the middle side, as the radius. The circumradius is $\\frac{abc}{4K}$."
  B: "That's 8 times 7.5, half of the longest side. Only a right triangle has its circumradius equal to half the longest side."
  C: "That's 8 times 8. Work out $\\frac{abc}{4K}$ exactly instead of rounding."
  E: "That's $5 \\times 14$. Use the area to find the circumradius."
verify: "(() => { const [a, b, c] = [13, 14, 15]; const cosA = (b * b + c * c - a * a) / (2 * b * c); const sinA = Math.sqrt(1 - cosA * cosA); return Math.round(8 * a / (2 * sinA)); })()"
---

A triangle has sides 13, 14, and 15. Its circumradius, the radius of the circle through all three corners, is $R$. What is $8R$?

## Hint

Find the area first, with Heron's formula or by splitting the triangle into two right triangles.

## Hint 2

The area is 84. Then use $R = \frac{abc}{4K}$.

## Solution

The semiperimeter is 21, so Heron's formula gives $K^2 = 21 \times 8 \times 7 \times 6 = 7056$, and $K = 84$.

Since $K = \frac{abc}{4R}$,

$$R = \frac{13 \times 14 \times 15}{4 \times 84} = \frac{2730}{336} = \frac{65}{8}.$$

So $8R = 65$.

**Answer: (D) 65**
