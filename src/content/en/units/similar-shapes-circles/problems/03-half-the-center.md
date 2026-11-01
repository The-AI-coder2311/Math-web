---
order: 3
difficulty: easy
lesson: 02-inscribed-angles
choices: ["20","40","80","100","160"]
answer: B
mistakes:
  A: "That halves it twice. One halving takes you from the center to the edge."
  C: "That's the center angle. An angle at the edge is half as large."
  D: "That's $180 - 80$. These two angles aren't on a straight line."
  E: "That doubles the angle. The center angle is the larger of the two, so go down, not up."
verify: "((c, a, b) => { const u = [a[0] - c[0], a[1] - c[1]]; const v = [b[0] - c[0], b[1] - c[1]]; return Math.round((Math.acos((u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))) * 180) / Math.PI); })(((deg) => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)])(270), ((deg) => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)])(50), ((deg) => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)])(130))"
---

Points $A$, $B$, and $C$ are on a circle with center $O$. Angle $AOB$ measures 80°, and $C$ is on the longer arc from $A$ to $B$. How many degrees does angle $ACB$ measure?

## Hint

Angle $AOB$ has its corner at the center. Where does angle $ACB$ have its corner?

## Hint 2

An angle with its corner on the circle is half of the center angle that looks at the same arc.

## Solution

Angle $ACB$ has its corner on the circle, and it looks at the same arc as the center angle. So it's half as large: $80 \div 2 = 40$ degrees.

**Answer: (B) 40**
