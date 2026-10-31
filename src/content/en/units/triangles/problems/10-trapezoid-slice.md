---
order: 10
difficulty: hard
choices: [12, 20, 42, 50, 72]
answer: C
verify: "(() => { const ratio = (4 + 6) / 4; const whole = 8 * ratio * ratio; return whole - 8; })()"
---

In triangle $ABC$, point $D$ is on side $AB$ and point $E$ is on side $AC$, so that $DE$ is parallel to $BC$. We know that $AD = 4$ and $DB = 6$. The small triangle $ADE$ has an area of 8. What is the area of the four-sided region $DBCE$?

## Hint

Triangles $ADE$ and $ABC$ are similar. What's the scale factor? Remember how area changes when lengths are scaled.

## Solution

**Step 1.** Since $DE$ is parallel to $BC$, the triangles $ADE$ and $ABC$ have matching angles, so they're similar.

**Step 2.** The side $AB$ is $4 + 6 = 10$, so the scale factor from the small triangle to the big one is $10 \div 4 = 2.5$.

**Step 3.** Area scales by the scale factor squared: $2.5 \times 2.5 = 6.25$. So triangle $ABC$ has an area of $8 \times 6.25 = 50$.

**Step 4.** The region $DBCE$ is what's left over: $50 - 8 = 42$.

**Answer: (C) 42**
