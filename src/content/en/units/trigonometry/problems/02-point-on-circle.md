---
order: 2
difficulty: easy
lesson: 01-unit-circle
choices: ["-5","-1","1","3","5"]
answer: E
mistakes:
  A: "That flips both signs. The point has $\\sin\\theta = \\frac{4}{5}$, which is positive."
  B: "Check which coordinate is which. Cosine is the $x$-coordinate and sine is the $y$-coordinate."
  C: "Recheck the products: $10 \\times \\frac{4}{5}$ is 8, and $5 \\times \\left(-\\frac{3}{5}\\right)$ is $-3$."
  D: "That's only the $-3$ part with the sign dropped. Add $8$ and $-3$."
verify: "Math.round(10*(4/5) + 5*(-3/5))"
---

The point $\left(-\frac{3}{5}, \frac{4}{5}\right)$ lies on the unit circle at angle $\theta$. What is $10\sin\theta + 5\cos\theta$?

## Hint

The point at angle $\theta$ on the unit circle is $(\cos\theta, \sin\theta)$.

## Hint 2

So $\cos\theta = -\frac{3}{5}$ and $\sin\theta = \frac{4}{5}$.

## Solution

The point at angle $\theta$ is $(\cos\theta, \sin\theta)$, so $\cos\theta = -\frac{3}{5}$ and $\sin\theta = \frac{4}{5}$.

Then $10 \cdot \frac{4}{5} + 5 \cdot \left(-\frac{3}{5}\right) = 8 - 3 = 5$.

**Answer: (E) 5**
