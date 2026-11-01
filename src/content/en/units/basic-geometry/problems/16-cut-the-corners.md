---
order: 16
difficulty: hard
lesson: 04-split-or-subtract
choices: ["18","64","82","91","94"]
answer: C
mistakes:
  A: "That's the area cut off. Subtract it from the square."
  B: "That's $100 - 36$, which treats each corner as a full 3 by 3 square. Each corner triangle is half of that."
  D: "That cuts off only 2 corners. There are 4."
  E: "Check your corners: 4 triangles of 4.5 make 18."
verify: "10 * 10 - 4 * ((3 * 3) / 2)"
---

A square has sides of 10. A right triangle is cut off at each of its 4 corners, and each triangle has two legs of length 3 along the sides of the square. What is the area of the shape that remains?

## Hint

Subtract the part you don't want. What's the area of one corner triangle?

## Hint 2

Each triangle has an area of $\frac{1}{2} \times 3 \times 3 = 4.5$.

## Solution

The square has an area of 100. Each triangle has an area of 4.5, and there are 4 of them, for a total of 18. So $100 - 18 = 82$.

**Answer: (C) 82**
