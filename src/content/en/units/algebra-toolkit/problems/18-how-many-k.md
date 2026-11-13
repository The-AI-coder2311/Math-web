---
order: 14
difficulty: medium
lesson: 03-quadratics-and-vieta
choices: ["2","3","4","6","9"]
answer: B
mistakes:
  A: "That misses one. The pairs are 1 and 18, 2 and 9, and 3 and 6."
  C: "That counts a pair that isn't there. Only 3 pairs multiply to 18."
  D: "That's how many factors 18 has. Each pair uses two of them."
  E: "That's the smallest value of $k$. The question asks how many values there are."
verify: "new Set(product(range(1, 18), range(1, 18)).filter(([a, b]) => a < b && a * b === 18).map(([a, b]) => a + b)).size"
---

For how many whole numbers $k$ does $x^2 - kx + 18 = 0$ have two different positive whole-number solutions?

## Hint

The solutions multiply to 18, and $k$ is their sum.

## Hint 2

List the pairs of different positive whole numbers that multiply to 18.

## Solution

The pairs are 1 and 18, 2 and 9, and 3 and 6. Those give $k$ values of 19, 11, and 9. So there are 3 values.

**Answer: (B) 3**
