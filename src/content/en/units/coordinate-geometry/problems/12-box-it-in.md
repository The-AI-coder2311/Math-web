---
order: 12
difficulty: medium
lesson: 03-areas-on-a-grid
choices: ["13","12","11","14","30"]
answer: A
mistakes:
  C: "Check your corner triangles. They should have areas of 6, 6, and 5, which add up to 17."
  B: "You may have subtracted 18 for the corners. They add up to 17."
  D: "You may have subtracted 16 for the corners. They add up to 17."
  E: "That's the box. You still need to subtract the three corner triangles."
verify: "((p) => Math.abs(sum(p.map(([x, y], i) => { const [a, b] = p[(i + 1) % p.length]; return x * b - a * y; }))) / 2)([[1, 1], [7, 3], [3, 6]])"
---

What is the area of the triangle with corners $(1, 1)$, $(7, 3)$, and $(3, 6)$?

## Hint

No side is level. Draw a box around the triangle. How big is the box?

## Hint 2

The box is 6 by 5, so its area is 30. Now subtract the three corner triangles, which have legs of 6 and 2, 4 and 3, and 2 and 5.

## Solution

**Step 1.** The box is $6 \times 5 = 30$.

**Step 2.** The corner triangles have areas of $\frac{1}{2} \times 6 \times 2 = 6$, $\frac{1}{2} \times 4 \times 3 = 6$, and $\frac{1}{2} \times 2 \times 5 = 5$.

**Step 3.** The area is $30 - 6 - 6 - 5 = 13$.

**Answer: (A) 13**

## Another way

Use the shoelace method. Going down and to the right gives $1 \times 3 + 7 \times 6 + 3 \times 1 = 48$. Going down and to the left gives $1 \times 7 + 3 \times 3 + 6 \times 1 = 22$. Half of the difference is $(48 - 22) \div 2 = 13$.
