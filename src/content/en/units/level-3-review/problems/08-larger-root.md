---
order: 8
difficulty: medium
from: algebra-toolkit/03-quadratics-and-vieta
choices: ["-3","3","8","11","24"]
answer: C
mistakes:
  A: "Check the sign: $(x - 3)$ is zero when $x$ is positive 3."
  B: "That's the smaller solution."
  D: "That's the sum of the solutions."
  E: "That's the product of the solutions."
verify: "Math.max(...range(-30, 30).filter((x) => x * x - 11 * x + 24 === 0))"
---

What is the larger solution of $x^2 - 11x + 24 = 0$?

## Hint

Find two numbers that multiply to 24 and add to $-11$.

## Hint 2

$(x - 3)(x - 8) = 0$.

## Solution

$(x - 3)(x - 8) = 0$, so $x$ is 3 or 8. The larger is 8.

**Answer: (C) 8**
