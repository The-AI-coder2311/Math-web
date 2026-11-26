---
order: 7
difficulty: easy
lesson: 02-trig-identities
choices: ["24","30","32","48","50"]
answer: A
mistakes:
  B: "Check the cosine: if $\\sin\\theta = \\frac{3}{5}$ for an acute angle, then $\\cos\\theta = \\frac{4}{5}$."
  C: "That uses $\\cos\\theta$ twice. The formula is $2\\sin\\theta\\cos\\theta$."
  D: "That doubles twice. The formula has one factor of 2."
  E: "That's $25 \\times 2$. Multiply $\\sin\\theta$ and $\\cos\\theta$ too."
verify: "Math.round(25 * Math.sin(2 * Math.asin(3/5)))"
---

An acute angle $\theta$ has $\sin\theta = \frac{3}{5}$. What is $25\sin 2\theta$?

## Hint

Use $\sin 2\theta = 2\sin\theta\cos\theta$.

## Hint 2

First find $\cos\theta$ with the Pythagorean identity.

## Solution

**Step 1.** $\cos\theta = \frac{4}{5}$, since $\theta$ is acute and $\frac{9}{25} + \frac{16}{25} = 1$.

**Step 2.** $\sin 2\theta = 2 \cdot \frac{3}{5} \cdot \frac{4}{5} = \frac{24}{25}$.

**Step 3.** $25\sin 2\theta = 24$.

**Answer: (A) 24**
