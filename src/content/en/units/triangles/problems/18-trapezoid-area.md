---
order: 18
difficulty: hard
lesson: 03-helper-lines
choices: ["80","84","100","112","140"]
answer: D
mistakes:
  A: "That's $10 \\times 8$. Use the average of the parallel sides, which is 14."
  B: "That uses 6 as the height. The 6 is the bottom of the small right triangle at each end, and the height is its other leg, 8."
  C: "Find the height first. It comes from a right triangle with sides 6, 8, and 10."
  E: "That uses the slanted side of 10 as the height. The height is 8."
verify: "(() => { const h = range(1, 20).find((x) => x * x + 6 * 6 === 10 * 10); return ((8 + 20) * h) / 2; })()"
---

A trapezoid has parallel sides of 8 and 20, and its two slanted sides each have a length of 10. What is its area?

## Hint

Drop a height from each top corner. What pieces do you get?

## Hint 2

A rectangle 8 wide, and two right triangles, each with a base of 6 and a hypotenuse of 10.

## Solution

**Step 1.** The two end triangles share $20 - 8 = 12$, so each has a base of 6. With a hypotenuse of 10, the height is 8.

**Step 2.** The area is the average of the parallel sides times the height: $\frac{(8 + 20) \times 8}{2} = 112$.

**Answer: (D) 112**
