---
order: 29
difficulty: hard
lesson: 05-trig-area
choices: ["169","289","409","578","818"]
answer: D
mistakes:
  A: "That's only the $60^\\circ$ case. The angle could also be $120^\\circ$."
  B: "That's $8^2 + 15^2$, a right angle. The area says $\\sin C = \\frac{\\sqrt{3}}{2}$."
  C: "That's only the $120^\\circ$ case. Add the $60^\\circ$ case too."
  E: "That counts one case twice. The two values are 169 and 409."
verify: "(() => { const vals = [Math.PI/3, 2*Math.PI/3].map(C => 64 + 225 - 240*Math.cos(C)); return Math.round(sum(vals)); })()"
---

Two sides of a triangle have lengths 8 and 15, and its area is $30\sqrt{3}$. What is the sum of all possible values of the square of the third side?

## Hint

Use the area to find the sine of the angle between the given sides.

## Hint 2

$\sin C = \frac{\sqrt{3}}{2}$ has two solutions between $0^\circ$ and $180^\circ$.

## Solution

**Step 1.** $\frac{1}{2} \cdot 8 \cdot 15 \sin C = 30\sqrt{3}$, so $\sin C = \frac{\sqrt{3}}{2}$ and $C$ is $60^\circ$ or $120^\circ$.

**Step 2.** For $60^\circ$: $64 + 225 - 120 = 169$. For $120^\circ$: $64 + 225 + 120 = 409$.

**Step 3.** The sum is $169 + 409 = 578$.

**Answer: (D) 578**
