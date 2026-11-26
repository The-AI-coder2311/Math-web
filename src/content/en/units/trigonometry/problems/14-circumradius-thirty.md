---
order: 14
difficulty: easy
lesson: 03-law-of-sines-cosines
choices: ["3","6","9","12","18"]
answer: B
mistakes:
  A: "That's half the radius. $\\frac{a}{\\sin A}$ is the diameter, $2R$."
  C: "Check the division: $\\frac{6}{1/2} = 12$, and that's $2R$."
  D: "That's the diameter. Divide by 2 for the radius."
  E: "That multiplies instead of dividing by $\\sin 30^\\circ$ correctly. $2R = 12$."
verify: "Math.round(6 / Math.sin(30*Math.PI/180) / 2)"
---

In a triangle, the side opposite a $30^\circ$ angle has length 6. What is the radius of the circle that passes through all three corners of the triangle?

## Hint

Use the Law of Sines.

## Hint 2

$\frac{a}{\sin A} = 2R$.

## Solution

By the Law of Sines, $2R = \frac{6}{\sin 30^\circ} = 12$, so $R = 6$.

**Answer: (B) 6**
