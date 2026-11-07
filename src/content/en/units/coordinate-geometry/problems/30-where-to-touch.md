---
order: 30
difficulty: hard
lesson: 04-geometry-with-coordinates
choices: ["$\\frac{3}{2}$","$\\frac{7}{4}$","$2$","$\\frac{5}{2}$"]
answer: B
mistakes:
  A: "Test it: use the reflected point, (4, -3), and find where the straight line crosses the axis."
  C: "Check the proportion. The line drops 1 out of a total of 4, in the first part."
  D: "That's the midpoint in $x$. The points are at different heights, so the touch point isn't in the middle."
verify: "(() => { const dist = (i) => Math.hypot(i / 100 - 1, 1) + Math.hypot(4 - i / 100, 3); const best = range(100, 400).reduce((a, b) => (dist(b) < dist(a) ? b : a)); return fraction(best, 100); })()"
---

You walk from $(1, 1)$ to $(4, 3)$, touching the $x$-axis along the way by the shortest route. What is the $x$-coordinate of the point where you touch?

## Hint

Reflect $(4, 3)$ across the axis. Then find where the straight line crosses.

## Hint 2

The line goes from $(1, 1)$ to $(4, -3)$. It drops 4 in all, and it needs to drop 1 to reach the axis.

## Solution

Reflect the end point to $(4, -3)$. The straight line from $(1, 1)$ drops 4 while moving 3 across. It reaches the axis after dropping 1, which is $\frac{1}{4}$ of the way. So $x = 1 + \frac{3}{4} = \frac{7}{4}$.

**Answer: (B) $\frac{7}{4}$**
