---
order: 10
difficulty: medium
from: advanced-trig-complex/04-complex-techniques
choices: ["63","64","127","128","255"]
answer: C
mistakes:
  A: "That's $2^6 - 1$. The product equals x to the 7th minus 1, divided by x minus 1, at x equal to 2."
  B: "That's $2^6$, as if every root were 0. Use the factorization with the 7th roots of unity."
  D: "That's $2^7$. You still need to subtract 1."
  E: "That's $2^8 - 1$. The roots are 7th roots of unity, so the power is 7."
verify: "(() => { let re = 1, im = 0; for (let k = 1; k <= 6; k++) { const a = 2 - Math.cos((2 * Math.PI * k) / 7), b = -Math.sin((2 * Math.PI * k) / 7); [re, im] = [re * a - im * b, re * b + im * a]; } return Math.round(re); })()"
---

Let $\omega = \cos\frac{2\pi}{7} + i\sin\frac{2\pi}{7}$. What is the value of

$$(2 - \omega)(2 - \omega^2)(2 - \omega^3)(2 - \omega^4)(2 - \omega^5)(2 - \omega^6)?$$

## Hint

The numbers $\omega, \omega^2, \ldots, \omega^6$ are the 7th roots of unity other than 1.

## Hint 2

Write $(x - \omega)(x - \omega^2) \cdots (x - \omega^6)$ as a polynomial, then plug in $x = 2$.

## Solution

The 7th roots of unity are the roots of $x^7 - 1$, and removing the root 1 leaves

$$(x - \omega)(x - \omega^2) \cdots (x - \omega^6) = \frac{x^7 - 1}{x - 1}$$

Plugging in $x = 2$ gives

$$\frac{2^7 - 1}{2 - 1} = 127$$

The complex numbers multiply out to a whole number, which is typical when you take a symmetric product over all the roots of unity.

**Answer: (C) 127**
