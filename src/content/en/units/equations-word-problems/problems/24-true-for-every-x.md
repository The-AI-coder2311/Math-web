---
order: 24
difficulty: medium
lesson: 01-solving-and-translating
choices: ["3","4","7","12"]
answer: D
mistakes:
  A: "That doesn't multiply the 4 by the 3 outside the parentheses."
  B: "That's the number inside the parentheses. It gets multiplied by 3."
  C: "That adds 3 and 4. Multiply them instead."
verify: "[3, 4, 7, 12].find((k) => range(0, 9).every((x) => 6 * x + k === 3 * (2 * x + 4)))"
---

What value of $k$ makes $6x + k = 3(2x + 4)$ true for every $x$?

## Hint

Multiply out the right side.

## Hint 2

The right side is $6x + 12$.

## Solution

The right side is $6x + 12$. The $x$ terms already match, so $k$ must be 12.

**Answer: (D) 12**
