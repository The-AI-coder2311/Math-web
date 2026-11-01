---
order: 11
difficulty: medium
lesson: 03-areas-on-a-grid
choices: ["8","10","12","20","25"]
answer: B
mistakes:
  A: "You may have used a height of 4. The height is $6 - 1 = 5$."
  C: "You may have used a height of 6. The base sits at height 1, so the height is $6 - 1$."
  D: "That's the box around the triangle. The triangle is half of it."
  E: "That's $5 \\times 5$. The base is 4, and you also need to halve."
verify: "((p) => Math.abs(sum(p.map(([x, y], i) => { const [a, b] = p[(i + 1) % p.length]; return x * b - a * y; }))) / 2)([[1, 1], [5, 1], [3, 6]])"
---

What is the area of the triangle with corners $(1, 1)$, $(5, 1)$, and $(3, 6)$?

## Hint

Two of the corners have the same $y$-coordinate. What does that tell you?

## Hint 2

The base is level, and it's 4 long. The height is the difference in $y$.

## Solution

The base from $(1, 1)$ to $(5, 1)$ is 4 long. The height is $6 - 1 = 5$. So the area is $\frac{1}{2} \times 4 \times 5 = 10$.

**Answer: (B) 10**
