---
order: 8
difficulty: medium
lesson: 02-inscribed-angles
choices: ["70","90","290","140","110"]
answer: E
mistakes:
  A: "That would be true for opposite angles of a parallelogram. In a circle, opposite angles add up to 180°."
  B: "That's only true if a side is a diameter or if the angle given were also 90°."
  D: "That doubles the angle. It's the center angle looking at the same arc, not the opposite corner."
  C: "That's $360 - 70$. Inscribed angles are half of their arcs, so the two opposite corners add up to 180°, not 360°."
verify: "(() => { const P = ((deg) => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)]); const ang = ((c, a, b) => { const u = [a[0] - c[0], a[1] - c[1]]; const v = [b[0] - c[0], b[1] - c[1]]; return Math.round((Math.acos((u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))) * 180) / Math.PI); }); return ang(P(250), P(0), P(140)) === 70 ? ang(P(70), P(0), P(140)) : -1; })()"
---

Four points on a circle form a four-sided shape $ABCD$, with the corners in that order. Angle $A$ measures 70°. How many degrees does angle $C$ measure?

## Hint

Corners $A$ and $C$ are across from each other. What do you know about opposite angles of a shape whose corners are on a circle?

## Hint 2

They look at the two arcs that make up the whole circle, so they add up to 180°.

## Solution

Opposite angles of a cyclic quadrilateral add up to 180°. So angle $C$ is $180 - 70 = 110$ degrees.

**Answer: (E) 110**
