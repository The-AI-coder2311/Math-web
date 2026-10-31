---
order: 7
difficulty: medium
choices: [36, 54, 72, 90, 108]
answer: C
verify: "(() => { const a = 36; const b = (180 - a) / 2; const c = b; return 180 - b / 2 - c; })()"
---

Triangle $ABC$ has $AB = AC$, and angle $A$ measures 36°. A line from $B$ cuts angle $B$ exactly in half and meets side $AC$ at point $D$. How many degrees does angle $BDC$ measure?

## Hint

Draw it and fill in every angle you can. Start with angles $B$ and $C$. Then look at triangle $BDC$.

## Solution

**Step 1.** Since $AB = AC$, angles $B$ and $C$ are equal. They share $180 - 36 = 144$ degrees, so each is $144 \div 2 = 72$ degrees.

**Step 2.** The line cuts angle $B$ in half, so angle $DBC$ is $72 \div 2 = 36$ degrees.

**Step 3.** In triangle $BDC$, the angles add up to 180°. So angle $BDC$ is $180 - 36 - 72 = 72$ degrees.

**Answer: (C) 72**
