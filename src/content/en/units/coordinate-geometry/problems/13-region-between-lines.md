---
order: 13
difficulty: medium
lesson: 03-areas-on-a-grid
choices: ["8","12","16","24","32"]
answer: C
mistakes:
  A: "That's the length of the base. You still need to multiply by the height and halve."
  B: "That uses a base of 6, which starts from 0. The left line meets the axis at $x = -2$."
  D: "That uses a height of 6. The height is the $y$-coordinate of the crossing point, 4."
  E: "That's the box around the triangle. The triangle is half of it."
verify: "Math.round(sum(range(-200, 600).map((i) => { const x = (i + 0.5) / 100; return Math.max(0, Math.min(x + 2, -x + 6)) * 0.01; })))"
---

What is the area of the region bounded by the lines $y = x + 2$ and $y = -x + 6$ and the $x$-axis?

## Hint

Find the three corners first. Where does each line cross the $x$-axis? Where do the lines cross each other?

## Hint 2

The lines cross at $(2, 4)$. They meet the $x$-axis at $x = -2$ and $x = 6$.

## Solution

**Step 1.** The lines cross where $x + 2 = -x + 6$, which gives $x = 2$ and $y = 4$.

**Step 2.** They meet the $x$-axis at $x = -2$ and $x = 6$, so the base is 8.

**Step 3.** The area is $\frac{1}{2} \times 8 \times 4 = 16$.

**Answer: (C) 16**
