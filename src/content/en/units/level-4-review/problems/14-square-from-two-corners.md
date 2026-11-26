---
order: 14
difficulty: medium
from: complex-numbers/04-complex-geometry
choices: ["5","11","15","17","21"]
answer: D
mistakes:
  A: "That's the clockwise square, which multiplies by $-i$. Counterclockwise means multiply by $i$."
  B: "That's the sum of the coordinates of A and B."
  C: "Check D. It's A plus the rotated side, which lands at the point $(0, 6)$."
  E: "Check the rotation. Multiplying $4 + i$ by $i$ gives $-1 + 4i$, not $1 + 4i$."
verify: "(() => { const [ax, ay, bx, by] = [1, 2, 5, 3]; const [dx, dy] = [bx - ax, by - ay]; const [rx, ry] = [-dy, dx]; const cross = dx * ry - dy * rx; return cross > 0 ? (bx + rx) + (by + ry) + (ax + rx) + (ay + ry) : NaN; })()"
---

Square $ABCD$ has its corners in counterclockwise order, with $A = (1, 2)$ and $B = (5, 3)$. What is the sum of all four coordinates of $C$ and $D$?

## Hint

Treat points as complex numbers. Turning a side 90° counterclockwise means multiplying by $i$.

## Hint 2

The side from A to B is $4 + i$. Rotate it to get the side from B to C.

## Solution

Write the side from A to B as $4 + i$. Rotating 90° counterclockwise multiplies by $i$, which gives $-1 + 4i$. That's the direction from B to C, and also from A to D.

- $C = (5 + 3i) + (-1 + 4i)$, the point $(4, 7)$.
- $D = (1 + 2i) + (-1 + 4i)$, the point $(0, 6)$.

The sum is $4 + 7 + 0 + 6 = 17$.

**Answer: (D) 17**
