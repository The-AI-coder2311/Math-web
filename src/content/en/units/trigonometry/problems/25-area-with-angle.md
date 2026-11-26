---
order: 25
difficulty: easy
lesson: 05-trig-area
choices: ["15","20","30","45","60"]
answer: A
mistakes:
  B: "Recheck: $\\frac{1}{2} \\times 6 \\times 10 = 30$, and $\\sin 30^\\circ = \\frac{1}{2}$."
  C: "That forgets $\\sin 30^\\circ$. The height is $6 \\sin 30^\\circ = 3$."
  D: "That uses $\\sin 30^\\circ = \\frac{3}{2}$. Sine is never more than 1."
  E: "That's $6 \\times 10$, a rectangle. A triangle needs one half and the sine."
verify: "Math.round(0.5 * 6 * 10 * Math.sin(30*Math.PI/180))"
---

A triangle has two sides of length 6 and 10, and the angle between them is $30^\circ$. What is its area?

## Hint

Use area $= \frac{1}{2}ab\sin C$.

## Hint 2

$\sin 30^\circ = \frac{1}{2}$.

## Solution

The area is $\frac{1}{2} \cdot 6 \cdot 10 \cdot \frac{1}{2} = 15$.

**Answer: (A) 15**
