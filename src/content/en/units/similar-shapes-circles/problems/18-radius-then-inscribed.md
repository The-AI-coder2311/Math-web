---
order: 18
difficulty: hard
lesson: 02-inscribed-angles
choices: ["25","65","50","115","130"]
answer: B
mistakes:
  A: "That's the angle you were given. You need to use it to find the center angle."
  C: "That's $25 + 25$. The center angle is what's left over from 180°."
  D: "That's the angle for a point on the shorter arc. Here, $C$ is on the longer arc."
  E: "That's the center angle. Angle $ACB$ is at the edge, so it's half as large."
verify: "(() => { const P = ((deg) => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)]); const ang = ((c, a, b) => { const u = [a[0] - c[0], a[1] - c[1]]; const v = [b[0] - c[0], b[1] - c[1]]; return Math.round((Math.acos((u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))) * 180) / Math.PI); }); const a = P(205); const b = P(335); const o = [0, 0]; const atA = ang(a, o, b); return atA === 25 ? ang(P(90), a, b) : -1; })()"
---

Points $A$, $B$, and $C$ are on a circle with center $O$, and $C$ is on the longer arc from $A$ to $B$. Angle $OAB$ measures 25°. How many degrees does angle $ACB$ measure?

## Hint

Draw $OA$ and $OB$. What kind of triangle is $OAB$?

## Hint 2

It's isosceles, so angle $OBA$ is also 25°. Find angle $AOB$, then take half.

## Solution

**Step 1.** $OA$ and $OB$ are radii, so triangle $OAB$ is isosceles, and angle $OBA$ is also 25°.

**Step 2.** Angle $AOB$ is $180 - 25 - 25 = 130$ degrees.

**Step 3.** Angle $ACB$ is half of that: $130 \div 2 = 65$ degrees.

**Answer: (B) 65**
