---
order: 18
difficulty: hard
lesson: 03-areas-on-a-grid
choices: ["13","14","15","14.5","29"]
answer: D
mistakes:
  A: "That may come from a slip in a corner triangle. Try the shoelace method to check."
  B: "Don't round. An area on a grid can end in .5."
  C: "Don't round. The shoelace difference is 29, and half of that is 14.5."
  E: "That's the shoelace difference. You still need to halve it."
verify: "((p) => Math.abs(sum(p.map(([x, y], i) => { const [a, b] = p[(i + 1) % p.length]; return x * b - a * y; }))) / 2)([[0, 0], [4, 0], [5, 3], [1, 4]])"
---

A four-sided shape has corners $(0, 0)$, $(4, 0)$, $(5, 3)$, and $(1, 4)$, in that order. What is its area?

## Hint

Try the shoelace method. List the corners in order, and repeat the first at the end.

## Hint 2

Going down and to the right gives $0 + 12 + 20 + 0 = 32$. Going down and to the left gives $0 + 0 + 3 + 0 = 3$.

## Solution

**Step 1.** Down and to the right: $0 \times 0 + 4 \times 3 + 5 \times 4 + 1 \times 0 = 32$.

**Step 2.** Down and to the left: $0 \times 4 + 0 \times 5 + 3 \times 1 + 4 \times 0 = 3$.

**Step 3.** Half of the difference is $(32 - 3) \div 2 = 14.5$.

**Answer: (D) 14.5**
