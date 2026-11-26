---
order: 17
difficulty: hard
from: conic-sections/02-ellipses-hyperbolas
choices: ["3","4","6","8","9"]
answer: E
mistakes:
  A: "That's $b$, the short half-axis."
  B: "That's $c$, the distance from the center to a focus."
  C: "That's half of $4 \\times 3$, from treating $b$ and $c$ as the legs. The legs are the distances from P to the foci."
  D: "That's the distance between the foci, not the area."
verify: "(() => { let best = Infinity, area = 0; for (let k = 0; k <= 200000; k++) { const t = (k / 200000) * (Math.PI / 2); const x = 5 * Math.cos(t), y = 3 * Math.sin(t); const dot = (x - 4) * (x + 4) + y * y; if (Math.abs(dot) < best) { best = Math.abs(dot); area = 0.5 * 8 * y; } } return Math.round(area); })()"
---

The ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ has foci $F_1$ and $F_2$. A point $P$ on the ellipse makes $\angle F_1PF_2 = 90^\circ$. What is the area of triangle $PF_1F_2$?

## Hint

Find the foci first. Then use the defining property: $PF_1 + PF_2$ is the same for every point on the ellipse.

## Hint 2

Call the two distances $u$ and $v$. You know $u + v$ and, from the right angle, $u^2 + v^2$.

## Solution

Here $a^2 = 25$ and $b^2 = 9$, so $c^2 = 25 - 9 = 16$ and the foci are 8 apart.

Let $u = PF_1$ and $v = PF_2$. On the ellipse, $u + v = 2a$, which is 10. The right angle at P gives $u^2 + v^2 = 64$. Since $(u+v)^2 = u^2 + v^2 + 2uv$, we get $100 - 64 = 36$ for $2uv$, so $uv = 18$.

The legs are $u$ and $v$, so the area is half of 18, which is 9. You never needed to find P.

**Answer: (E) 9**
