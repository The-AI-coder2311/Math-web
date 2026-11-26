---
order: 5
difficulty: medium
lesson: 01-unit-circle
choices: ["-22","-14","-2","2","22"]
answer: A
mistakes:
  B: "That uses a positive tangent. In quadrant II, tangent is negative because cosine is negative."
  C: "That uses a positive cosine. In quadrant II, the $x$-coordinate is negative."
  D: "Recheck: $26\\cos\\theta = -10$ and $5\\tan\\theta = -12$."
  E: "That has the right size but the wrong sign. Both pieces are negative in quadrant II."
verify: "(() => { const t = Math.PI - Math.asin(12/13); return Math.round(26*Math.cos(t) + 5*Math.tan(t)); })()"
---

An angle $\theta$ is between $90^\circ$ and $180^\circ$, and $\sin\theta = \frac{12}{13}$. What is $26\cos\theta + 5\tan\theta$?

## Hint

Use $\cos^2\theta + \sin^2\theta = 1$ to find the size of $\cos\theta$, then pick its sign.

## Hint 2

In quadrant II, $\cos\theta = -\frac{5}{13}$.

## Solution

**Step 1.** $\cos^2\theta = 1 - \frac{144}{169} = \frac{25}{169}$, and cosine is negative in quadrant II, so $\cos\theta = -\frac{5}{13}$.

**Step 2.** $\tan\theta = \frac{\sin\theta}{\cos\theta} = -\frac{12}{5}$.

**Step 3.** $26 \cdot \left(-\frac{5}{13}\right) + 5 \cdot \left(-\frac{12}{5}\right) = -10 - 12 = -22$.

**Answer: (A) -22**
