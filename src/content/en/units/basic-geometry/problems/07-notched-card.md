---
order: 8
difficulty: medium
lesson: 04-split-or-subtract
choices: ["28","30","36","32","56"]
answer: D
mistakes:
  A: "That subtracts the cut part from the perimeter. The notch also adds 2 new sides."
  B: "That subtracts 2. The cut removes 4 inches and adds 4 inches back."
  C: "That adds the 2 new sides without taking anything away from the old ones."
  E: "That's the area of the new shape. The question asks for the perimeter."
verify: "(() => { const p = [[0, 0], [10, 0], [10, 4], [8, 4], [8, 6], [0, 6]]; return sum(p.map(([x, y], i) => { const [a, b] = p[(i + 1) % 6]; return Math.abs(a - x) + Math.abs(b - y); })); })()"
---

A rectangular piece of cardboard measures 10 inches by 6 inches. A square with 2-inch sides is cut out of one corner. What is the perimeter of the new shape, in inches?

## Hint

Draw it and label every side, including the two new sides made by the cut. There will be 6 sides in all.

## Hint 2

Slide the two sides of the notch outward. They fill the gaps, so the perimeter matches the whole rectangle.

## Solution

**Step 1.** Draw the shape. Walking around it, the 6 sides are 10, 4, 2, 2, 8, and 6. (The side that was 6 is now split into a 4 and a 2, and the side that was 10 now has a piece of 8 at the top.)

**Step 2.** Add them up:

$$10 + 4 + 2 + 2 + 8 + 6 = 32$$

**Notice:** That's the same as the perimeter of the whole rectangle, since $10 + 6 + 10 + 6 = 32$. The cut removes 2 inches from each of two sides, and the notch adds those same 4 inches back.

**Answer: (D) 32**
