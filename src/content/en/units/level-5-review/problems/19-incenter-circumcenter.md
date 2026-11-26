---
order: 19
difficulty: hard
from: aime-geometry/04-coordinate-trig-bash
choices: ["33","56","64","65","84"]
answer: D
mistakes:
  A: "That's 8 times the height of the circumcenter. Find the distance from O to I."
  B: "Check the incenter. Weight each corner by the length of the side across from it."
  C: "That's the denominator n, not the numerator m."
  E: "That's the area of the triangle. Compute the distance between the two centers."
verify: "(() => { const A = [5, 12], B = [0, 0], C = [14, 0]; const d = (P, Q) => Math.hypot(P[0] - Q[0], P[1] - Q[1]); const a = d(B, C), b = d(C, A), c = d(A, B), s = a + b + c; const I = [(a * A[0] + b * B[0] + c * C[0]) / s, (a * A[1] + b * B[1] + c * C[1]) / s]; const ox = 7, oy = (A[0] ** 2 + A[1] ** 2 - 14 * A[0]) / (2 * A[1]); return Math.round(64 * ((I[0] - ox) ** 2 + (I[1] - oy) ** 2)); })()"
---

Triangle $ABC$ has $AB = 13$, $BC = 14$, and $CA = 15$. Let $O$ be the center of the circle through its corners and $I$ the center of the circle inside it. Then $OI^2 = \frac{m}{n}$, where $m$ and $n$ are positive integers with no common factor. What is $m$?

## Hint

Place the triangle on a grid with $B = (0, 0)$ and $C = (14, 0)$. Where is $A$?

## Hint 2

$A = (5, 12)$. The incenter is the average of the corners weighted by the opposite side lengths, and the circumcenter lies on the line $x = 7$.

## Solution

With $A = (5, 12)$, the distances check out: $5^2 + 12^2 = 169$ and $9^2 + 12^2 = 225$.

**Incenter.** Weight $A$, $B$, $C$ by 14, 15, 13, which add to 42. The $x$-coordinate is $\frac{14 \times 5 + 13 \times 14}{42} = 6$, and the $y$-coordinate is $\frac{14 \times 12}{42} = 4$.

**Circumcenter.** It's on $x = 7$, at some height $k$ that is equally far from $B$ and $A$: $49 + k^2 = 4 + (12 - k)^2$. This gives $24k = 99$, so $k = \frac{33}{8}$.

The centers differ by 1 across and by one eighth up, so

$$OI^2 = 1 + \left(\frac{1}{8}\right)^2 = \frac{65}{64}$$

This matches Euler's formula $OI^2 = R(R - 2r)$ with $R = \frac{65}{8}$ and $r = 4$. So $m$ is 65.

**Answer: (D) 65**
