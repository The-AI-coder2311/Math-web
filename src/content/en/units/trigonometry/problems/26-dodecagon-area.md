---
order: 26
difficulty: medium
lesson: 05-trig-area
choices: ["12","24","32","36","48"]
answer: E
mistakes:
  A: "That uses radius 2 or forgets to square the radius."
  B: "That's half the answer. Each of the 12 triangles has area 4."
  C: "Recheck the central angle: $\\frac{360^\\circ}{12} = 30^\\circ$."
  D: "That uses 9 triangles or the wrong sine. Each triangle has area $\\frac{1}{2} \\cdot 16 \\cdot \\frac{1}{2} = 4$."
verify: "Math.round(12 * 0.5 * 4 * 4 * Math.sin(30*Math.PI/180))"
---

A regular 12-sided polygon has all of its corners on a circle of radius 4. What is the area of the polygon?

## Hint

Connect the center to every corner.

## Hint 2

You get 12 triangles, each with two sides of length 4 and an angle of $30^\circ$ between them.

## Solution

**Step 1.** Lines from the center to the corners make 12 triangles with two sides of 4 and an angle of $30^\circ$.

**Step 2.** Each has area $\frac{1}{2} \cdot 4 \cdot 4 \cdot \frac{1}{2} = 4$.

**Step 3.** The polygon has area $12 \times 4 = 48$.

**Answer: (E) 48**
