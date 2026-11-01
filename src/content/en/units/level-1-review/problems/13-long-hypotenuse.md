---
order: 13
difficulty: medium
from: basic-geometry/05-right-triangles
choices: ["17","19","23","120","289"]
answer: A
mistakes:
  B: "Check it: $19 \\times 19$ is 361."
  C: "That's $8 + 15$. The hypotenuse is shorter than the two legs put together."
  D: "That's $8 \\times 15$. Square the legs, and add."
  E: "That's the hypotenuse squared. Take the square root."
verify: "range(1, 40).find((c) => c * c === 8 * 8 + 15 * 15)"
---

A right triangle has legs of length 8 and 15. How long is its hypotenuse?

## Hint

Use $a^2 + b^2 = c^2$.

## Hint 2

$64 + 225 = 289$. Which number times itself is 289?

## Solution

$8^2 + 15^2 = 64 + 225 = 289$, and $17 \times 17 = 289$. So the hypotenuse is 17.

**Answer: (A) 17**
