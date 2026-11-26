---
order: 1
difficulty: easy
from: aime-algebra/01-symmetric-sums
choices: ["14","16","25","36","58"]
answer: A
mistakes:
  B: "Check the middle step. Square the sum to get 36, then subtract twice 11, not twice 10."
  C: "That squares 5. Expand the square of the sum and subtract twice the pair sum."
  D: "That's the square of the sum. It still includes twice the pair sum, which you need to subtract."
  E: "That's $36 + 22$. Subtract twice the pair sum instead of adding it."
verify: "(() => { const r = range(-10, 10).filter((x) => x ** 3 - 6 * x ** 2 + 11 * x - 6 === 0); return sum(r.map((x) => x * x)); })()"
---

Real numbers $a$, $b$, and $c$ satisfy $a + b + c = 6$, $ab + bc + ca = 11$, and $abc = 6$. What is $a^2 + b^2 + c^2$?

## Hint

Square the sum $a + b + c$ and see which extra terms appear.

## Hint 2

$(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$.

## Solution

Expanding the square of the sum gives $(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$. So

$$a^2 + b^2 + c^2 = 6^2 - 2 \times 11 = 14$$

The product $abc$ isn't needed. As a check, $a$, $b$, $c$ are the roots of $x^3 - 6x^2 + 11x - 6$, which are 1, 2, and 3, and $1 + 4 + 9 = 14$.

**Answer: (A) 14**
