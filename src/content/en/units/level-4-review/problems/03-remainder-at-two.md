---
order: 3
difficulty: easy
from: polynomials/03-remainder-factor
choices: ["1","9","13","17","21"]
answer: B
mistakes:
  A: "That's the value at $x = -2$. Dividing by $x - 2$ means you plug in positive 2."
  C: "That's $8 + 5$. Include the $-2x$ term, which is $-4$ at $x = 2$."
  D: "That's $8 + 4 + 5$. The middle term is $-2x$, so it subtracts 4."
  E: "That's $16 + 5$. At $x = 2$, the cube $x^3$ is 8, not 16."
verify: "(() => { let r = 0; for (const c of [1, 0, -2, 5]) r = r * 2 + c; return r; })()"
---

What is the remainder when $x^3 - 2x + 5$ is divided by $x - 2$?

## Hint

You don't need long division. Use the Remainder Theorem.

## Hint 2

The remainder when dividing $p(x)$ by $x - a$ is $p(a)$. Here $a$ is 2.

## Solution

By the Remainder Theorem, the remainder when $p(x)$ is divided by $x - 2$ is $p(2)$.

$$p(2) = 8 - 4 + 5 = 9.$$

You can check with synthetic division on the coefficients 1, 0, $-2$, 5. Bringing them down gives 1, 2, 2, and a remainder of 9.

**Answer: (B) 9**
