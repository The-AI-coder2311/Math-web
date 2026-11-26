---
order: 14
difficulty: medium
from: inequalities-optimization/02-cauchy-schwarz
choices: ["4","6","8","10","12"]
answer: E
mistakes:
  A: "That's the square root of 16. The coefficients 1, 2, 2 stretch it by a factor of 3."
  B: "That's 4 plus 2. Apply Cauchy-Schwarz with the coefficients 1, 2, and 2."
  C: "That puts everything into one variable with coefficient 2. Spread the 16 across all three, in the ratio 1 to 2 to 2."
  D: "Close, but not the maximum. Cauchy-Schwarz gives the exact bound, and the equality case reaches it."
verify: "(() => { let best = 0; for (let i = 0; i <= 400; i++) for (let j = 0; j <= 800; j++) { const t = (Math.PI * i) / 400, p = (2 * Math.PI * j) / 800; const x = 4 * Math.sin(t) * Math.cos(p), y = 4 * Math.sin(t) * Math.sin(p), z = 4 * Math.cos(t); best = Math.max(best, x + 2 * y + 2 * z); } return Math.round(best); })()"
---

Real numbers $x$, $y$, and $z$ satisfy $x^2 + y^2 + z^2 = 16$. What is the largest possible value of $x + 2y + 2z$?

## Hint

Use the Cauchy-Schwarz inequality.

## Hint 2

$(x + 2y + 2z)^2 \le (1^2 + 2^2 + 2^2)(x^2 + y^2 + z^2)$.

## Solution

By Cauchy-Schwarz,

$$(x + 2y + 2z)^2 \le (1 + 4 + 4)(x^2 + y^2 + z^2) = 9 \times 16$$

That's 144, so $x + 2y + 2z$ is at most 12.

Equality holds when $(x, y, z)$ is a positive multiple of $(1, 2, 2)$. Try $x = \frac{4}{3}$ and $y = z = \frac{8}{3}$. The squares add to $\frac{16}{9} + \frac{64}{9} + \frac{64}{9} = 16$, and the sum is $\frac{4}{3} + \frac{16}{3} + \frac{16}{3} = 12$. So 12 is reached.

**Answer: (E) 12**
