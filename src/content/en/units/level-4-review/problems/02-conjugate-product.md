---
order: 2
difficulty: easy
from: complex-numbers/01-complex-arithmetic
choices: ["5","9","12","13","15"]
answer: D
mistakes:
  A: "That's $9 - 4$. Since $i^2$ is $-1$, the last term $-4i^2$ is positive 4."
  B: "That's only $3 \\times 3$. Don't forget the $-4i^2$ term, which equals 4."
  C: "That's 3 times 4. Multiply term by term instead."
  E: "That's $9 + 6$. The middle terms $-6i$ and $6i$ cancel each other."
verify: "(() => { const [a, b, c, d] = [3, 2, 3, -2]; const re = a * c - b * d; const im = a * d + b * c; return im === 0 ? re : NaN; })()"
---

What is $(3 + 2i)(3 - 2i)$?

## Hint

Multiply term by term, and remember that $i^2$ is $-1$.

## Hint 2

The two middle terms cancel. What is $-4i^2$?

## Solution

Multiply term by term:

$$(3 + 2i)(3 - 2i) = 9 - 6i + 6i - 4i^2.$$

The middle terms cancel, and $-4i^2$ is positive 4 because $i^2$ is $-1$. That leaves $9 + 4 = 13$.

A number times its conjugate is always the real number $a^2 + b^2$, here $3^2 + 2^2 = 13$.

**Answer: (D) 13**
