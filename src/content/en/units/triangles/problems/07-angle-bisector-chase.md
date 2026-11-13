---
order: 10
difficulty: medium
lesson: 01-angle-chasing
choices: ["36","54","72","90","108"]
answer: C
mistakes:
  A: "That's angle $DBC$. Use triangle $BDC$ to find angle $BDC$."
  B: "Angle $C$ is 72°, and angle $DBC$ is 36°. Those leave 72° for angle $BDC$."
  D: "The problem doesn't say that this is a right angle. Use the angle sum of triangle $BDC$."
  E: "That's the outside angle at $D$, angle $ADB$. The question asks for angle $BDC$."
verify: "(() => { const a = 36; const b = (180 - a) / 2; const c = b; return 180 - b / 2 - c; })()"
---

Triangle $ABC$ has $AB = AC$, and angle $A$ measures 36°. A line from $B$ cuts angle $B$ exactly in half and meets side $AC$ at point $D$. How many degrees does angle $BDC$ measure?

## Hint

Draw it and fill in every angle you can. Start with angles $B$ and $C$. Then look at triangle $BDC$.

## Hint 2

Angles $B$ and $C$ are each 72°, so angle $DBC$ is 36°.

## Solution

**Step 1.** Since $AB = AC$, angles $B$ and $C$ are equal. They share $180 - 36 = 144$ degrees, so each is $144 \div 2 = 72$ degrees.

**Step 2.** The line cuts angle $B$ in half, so angle $DBC$ is $72 \div 2 = 36$ degrees.

**Step 3.** In triangle $BDC$, the angles add up to 180°. So angle $BDC$ is $180 - 36 - 72 = 72$ degrees.

**Answer: (C) 72**
