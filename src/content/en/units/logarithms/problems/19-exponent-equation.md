---
order: 19
difficulty: medium
lesson: 03-change-of-base
choices: ["2","3","4","6","12"]
answer: D
mistakes:
  A: "Check it: $4^2$ is 16, but $8^0$ is 1."
  B: "Check it: $4^3$ is 64, but $8^1$ is 8."
  C: "Check it: $4^4$ is 256, but $8^2$ is 64."
  E: "That doubles the answer. Solve $2x = 3x - 6$."
verify: "range(-20, 50).find((x) => Math.abs(2 * x - 3 * (x - 2)) < 1e-9)"
---

Solve $4^x = 8^{x - 2}$.

## Hint

Write both sides as powers of 2.

## Hint 2

The equation becomes $2^{2x} = 2^{3x - 6}$.

## Solution

Since $4 = 2^2$ and $8 = 2^3$, the equation is $2^{2x} = 2^{3(x - 2)}$. Matching exponents gives $2x = 3x - 6$, so $x = 6$. Check: $4^6 = 4096$ and $8^4 = 4096$.

**Answer: (D) 6**
