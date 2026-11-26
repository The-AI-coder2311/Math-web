---
order: 4
difficulty: easy
from: aime-geometry/01-mass-point
choices: ["1","2","3","4","6"]
answer: C
mistakes:
  A: "That treats P as the midpoint of AD. The masses at A and D aren't equal."
  B: "That's the ratio DC to BD. Find the masses first, then compare the mass at D with the mass at A."
  D: "Check the mass at D. It's the sum of the masses at B and C, which is 3."
  E: "That multiplies the two given ratios. Use masses so that the lengths balance."
verify: "(() => { const A = [0, 3], D = [1, 0], B = [0, 0], E = [1.5, 1.5]; const dx = D[0] - A[0], dy = D[1] - A[1], ex = E[0] - B[0], ey = E[1] - B[1]; const det = dx * -ey + ex * dy; const t = ((B[0] - A[0]) * -ey + ex * (B[1] - A[1])) / det; return Math.round(t / (1 - t)); })()"
---

In triangle $ABC$, point $D$ lies on side $BC$ with $BD : DC = 1 : 2$, and $E$ is the midpoint of side $AC$. Segments $AD$ and $BE$ meet at $P$. What is the ratio $AP : PD$, written as a single number?

## Hint

Give $B$ and $C$ masses that balance at $D$. The heavier mass goes at the nearer endpoint.

## Hint 2

Mass 2 at $B$ and mass 1 at $C$ balance at $D$. Then $A$ needs the same mass as $C$, since $E$ is a midpoint.

## Solution

For $D$ to be the balance point with $BD : DC = 1 : 2$, put mass 2 at $B$ and mass 1 at $C$. Since $E$ is the midpoint of $AC$, the masses at $A$ and $C$ are equal, so $A$ gets mass 1.

The point $D$ carries the combined mass $2 + 1 = 3$. On segment $AD$, mass 1 at $A$ and mass 3 at $D$ balance at $P$, so $P$ is three times as far from $A$ as from $D$. That gives $AP : PD = 3 : 1$.

**Answer: (C) 3**
