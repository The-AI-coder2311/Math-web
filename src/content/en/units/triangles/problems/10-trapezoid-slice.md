---
order: 17
difficulty: hard
lesson: 04-similar-triangles
choices: ["42","20","12","50","72"]
answer: A
mistakes:
  C: "That multiplies 8 by 2.5 and subtracts. Area scales by the scale factor squared."
  B: "That multiplies 8 by 2.5. Area scales by the scale factor squared."
  D: "That's the whole triangle. Subtract the small triangle."
  E: "That's $8 \\times 9$. Compare 4 with the whole side of 10, not 6."
verify: "(() => { const ratio = (4 + 6) / 4; const whole = 8 * ratio * ratio; return whole - 8; })()"
---

In triangle $ABC$, point $D$ is on side $AB$ and point $E$ is on side $AC$, so that $DE$ is parallel to $BC$. We know that $AD = 4$ and $DB = 6$. The small triangle $ADE$ has an area of 8. What is the area of the four-sided region $DBCE$?

## Hint

Triangles $ADE$ and $ABC$ are similar. What's the scale factor? Remember how area changes when lengths are scaled.

## Hint 2

The scale factor is 2.5, so the area is multiplied by $2.5 \times 2.5 = 6.25$.

## Solution

**Step 1.** Since $DE$ is parallel to $BC$, the triangles $ADE$ and $ABC$ have matching angles, so they're similar.

**Step 2.** The side $AB$ is $4 + 6 = 10$, so the scale factor from the small triangle to the big one is $10 \div 4 = 2.5$.

**Step 3.** Area scales by the scale factor squared: $2.5 \times 2.5 = 6.25$. So triangle $ABC$ has an area of $8 \times 6.25 = 50$.

**Step 4.** The region $DBCE$ is what's left over: $50 - 8 = 42$.

**Answer: (A) 42**
