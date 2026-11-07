---
order: 27
difficulty: medium
lesson: 03-helper-lines
choices: ["48","80","96","120"]
answer: C
mistakes:
  A: "That forgets to add the two parallel sides before halving. Use their average."
  B: "That uses a height of 6.67. The height comes from a 6-8-10 triangle, so it's 8."
  D: "That uses the slanted side of 10 as the height. The height is shorter."
verify: "((6 + 18) * Math.sqrt(10 ** 2 - ((18 - 6) / 2) ** 2)) / 2"
---

A trapezoid has parallel sides of 6 and 18, and both slanted sides have a length of 10. What is its area?

## Hint

Drop two heights. How wide is the overhang on each end?

## Hint 2

Each overhang is 6, and the slanted side is 10.

## Solution

Each overhang is $\frac{18 - 6}{2} = 6$. With a slanted side of 10, that's a 6-8-10 triangle, so the height is 8. The area is $\frac{(6 + 18) \times 8}{2} = 96$.

**Answer: (C) 96**
