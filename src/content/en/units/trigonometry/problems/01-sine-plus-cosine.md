---
order: 1
difficulty: easy
lesson: 01-unit-circle
choices: ["-1","-1/2","0","1/2","1"]
answer: E
mistakes:
  A: "That makes both values negative. $150^\\circ$ is in quadrant II, where sine is positive, and $300^\\circ$ is in quadrant IV, where cosine is positive."
  B: "Check the sign of $\\sin 150^\\circ$. The point is above the $x$-axis."
  C: "That would need the two values to be opposites. Both are positive here."
  D: "That's only one of the two values. Add $\\sin 150^\\circ$ and $\\cos 300^\\circ$."
verify: "Math.round(Math.sin(150*Math.PI/180) + Math.cos(300*Math.PI/180))"
---

What is the value of $\sin 150^\circ + \cos 300^\circ$?

## Hint

Find each reference angle, then use the quadrant to choose the sign.

## Hint 2

Both reference angles are special: $30^\circ$ for $150^\circ$ and $60^\circ$ for $300^\circ$.

## Solution

**Step 1.** $150^\circ$ is in quadrant II with reference angle $30^\circ$. Sine is positive there, so $\sin 150^\circ = \frac{1}{2}$.

**Step 2.** $300^\circ$ is in quadrant IV with reference angle $60^\circ$. Cosine is positive there, so $\cos 300^\circ = \frac{1}{2}$.

**Step 3.** The sum is $\frac{1}{2} + \frac{1}{2} = 1$.

**Answer: (E) 1**
