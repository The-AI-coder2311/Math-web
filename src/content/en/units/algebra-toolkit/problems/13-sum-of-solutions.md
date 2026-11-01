---
order: 5
difficulty: easy
lesson: 03-quadratics-and-vieta
choices: ["-9","4","9","5","20"]
answer: C
mistakes:
  A: "Check the sign. With a minus sign in the equation, the solutions add up to positive 9."
  B: "That's one solution. Add the other."
  D: "That's one solution. Add the other."
  E: "That's the product of the solutions."
verify: "sum(range(-30, 30).filter((x) => x * x - 9 * x + 20 === 0))"
---

What is the sum of the two solutions of $x^2 - 9x + 20 = 0$?

## Hint

You can factor it, or use what you know about the middle number.

## Hint 2

It factors as $(x - 4)(x - 5)$.

## Solution

Factoring gives $(x - 4)(x - 5) = 0$, so the solutions are 4 and 5. Their sum is 9.

**Answer: (C) 9**

## Another way

For $x^2 - bx + c = 0$, the solutions add up to $b$, which is 9.
