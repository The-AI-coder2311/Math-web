---
order: 10
difficulty: medium
lesson: 02-trig-identities
choices: ["-6","-3","-1","3","6"]
answer: B
mistakes:
  A: "That forgets to divide by 2. Squaring gives $1 + 2\\sin x\\cos x$."
  C: "Squaring $\\frac{1}{2}$ gives $\\frac{1}{4}$, so $2\\sin x\\cos x = -\\frac{3}{4}$."
  D: "Check the sign: $\\frac{1}{4} - 1$ is negative."
  E: "That has the wrong sign and forgets to divide by 2."
verify: "(() => { const x = Math.asin(0.5/Math.SQRT2) - Math.PI/4; return Math.round(8*Math.sin(x)*Math.cos(x)); })()"
---

A number $x$ satisfies $\sin x + \cos x = \frac{1}{2}$. What is $8\sin x\cos x$?

## Hint

Square both sides of the equation.

## Hint 2

After squaring, use $\sin^2 x + \cos^2 x = 1$.

## Solution

**Step 1.** Squaring gives $\sin^2 x + 2\sin x\cos x + \cos^2 x = \frac{1}{4}$.

**Step 2.** So $1 + 2\sin x\cos x = \frac{1}{4}$, and $2\sin x \cos x = -\frac{3}{4}$.

**Step 3.** Then $8\sin x\cos x = 4 \cdot \left(-\frac{3}{4}\right) = -3$.

**Answer: (B) -3**
