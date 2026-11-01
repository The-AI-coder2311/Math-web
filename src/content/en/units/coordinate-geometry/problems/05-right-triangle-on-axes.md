---
order: 5
difficulty: easy
lesson: 03-areas-on-a-grid
choices: ["5","10","12","24","52"]
answer: C
mistakes:
  A: "That's half of $6 + 4$. Area uses base times height."
  B: "That's $6 + 4$. Area multiplies them, and then halves."
  D: "That's the box around the triangle. The triangle is half of it."
  E: "That's $6^2 + 4^2$, which would give the square of the slanted side, not the area."
verify: "((p) => Math.abs(sum(p.map(([x, y], i) => { const [a, b] = p[(i + 1) % p.length]; return x * b - a * y; }))) / 2)([[0, 0], [6, 0], [0, 4]])"
---

What is the area of the triangle with corners $(0, 0)$, $(6, 0)$, and $(0, 4)$?

## Hint

Sketch it. Two of its sides lie along the axes.

## Hint 2

The base is 6 and the height is 4.

## Solution

The legs lie along the axes, so the base is 6 and the height is 4. The area is $\frac{1}{2} \times 6 \times 4 = 12$.

**Answer: (C) 12**
