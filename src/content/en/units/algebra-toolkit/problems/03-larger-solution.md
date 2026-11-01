---
order: 2
difficulty: easy
lesson: 03-quadratics-and-vieta
choices: ["4","3","2","7","12"]
answer: A
mistakes:
  C: "Put it in: $4 - 14 + 12$ is 2, not 0."
  B: "That's the smaller solution."
  D: "That's the sum of the solutions."
  E: "That's the product of the solutions."
verify: "Math.max(...range(-20, 20).filter((x) => x * x - 7 * x + 12 === 0))"
---

What is the larger solution of $x^2 - 7x + 12 = 0$?

## Hint

Look for two numbers that multiply to 12 and add to $-7$.

## Hint 2

$(x - 3)(x - 4) = 0$.

## Solution

**Step 1.** The numbers $-3$ and $-4$ multiply to 12 and add to $-7$, so:

$$x^2 - 7x + 12 = (x - 3)(x - 4)$$

**Step 2.** The product is zero only when one factor is zero, so $x = 3$ or $x = 4$. The larger one is 4.

**Answer: (A) 4**
