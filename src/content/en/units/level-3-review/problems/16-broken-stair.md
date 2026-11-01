---
order: 16
difficulty: hard
from: advanced-counting/03-counting-step-by-step
choices: ["6","8","9","13","21"]
answer: A
mistakes:
  B: "Put a 0 at stair 4, and rebuild from there."
  C: "That counts 3 ways from stair 5 to stair 7. There are only 2."
  D: "Put a 0 at stair 4, and rebuild from there."
  E: "That's the count with nothing broken."
verify: "(() => { const w = { 0: 1 }; range(1, 7).forEach((s) => { w[s] = s === 4 ? 0 : (w[s - 1] || 0) + (w[s - 2] || 0); }); return w[7]; })()"
---

You climb 7 stairs, taking 1 or 2 stairs at a time. Stair 4 is broken, so you can't step on it. How many ways can you reach stair 7?

## Hint

Make a table of ways to reach each stair. What goes at stair 4?

## Hint 2

Stairs 1 to 3 have 1, 2, and 3 ways. Stair 4 has 0.

## Solution

Stairs 1 to 3 have 1, 2, and 3 ways, and stair 4 has 0. Stair 5 has $0 + 3 = 3$. Stair 6 has $3 + 0 = 3$. Stair 7 has $3 + 3 = 6$.

**Answer: (A) 6**
