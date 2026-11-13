---
order: 30
difficulty: hard
lesson: 04-similar-triangles
choices: ["$5$","$\\frac{20}{3}$","$5\\sqrt{2}$","$7.5$"]
answer: C
mistakes:
  A: "That cuts the length in half, which cuts the area to a fourth."
  B: "Check the ratio. The length ratio has to be the square root of one half."
  D: "That gives an area ratio of about 0.56, not 0.5."
verify: "Math.abs(10 / Math.SQRT2 - 5 * Math.SQRT2) < 1e-9 ? '5\\\\sqrt{2}' : 'no match'"
---

A triangle has a base of 10. A line parallel to the base cuts the triangle into two parts with equal areas. How long is the part of that line inside the triangle?

## Hint

The small top triangle has half of the area. What's its length ratio?

## Hint 2

The length ratio is the square root of $\frac{1}{2}$.

## Solution

The top triangle is similar to the whole, with $\frac{1}{2}$ of the area. So the length ratio is $\frac{1}{\sqrt{2}}$, and the segment has a length of $\frac{10}{\sqrt{2}} = 5\sqrt{2}$.

**Answer: (C) $5\sqrt{2}$**
