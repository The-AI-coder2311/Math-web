---
order: 16
difficulty: hard
from: aime-algebra/05-polynomial-techniques
choices: ["36","120","144","156","276"]
answer: D
mistakes:
  A: "That's 6 squared, as if P were x squared. P has degree 4, so there's an extra term."
  B: "That's only the product $5 \\times 4 \\times 3 \\times 2$. Add 6 squared to it."
  C: "That multiplies 36 by 4. P(6) is 36 plus the product of four factors, not a multiple of 36."
  E: "That doubles the product. The leading coefficient is 1, so the product isn't scaled."
verify: "(() => { const p = [1, 4, 9, 16]; p.push(25 + 24); while (p.length < 6) { const n = p.length; p.push(24 + 4 * p[n - 1] - 6 * p[n - 2] + 4 * p[n - 3] - p[n - 4]); } return p[5]; })()"
---

A polynomial $P(x)$ has degree 4 and leading coefficient 1, and $P(k) = k^2$ for $k = 1, 2, 3, 4$. What is $P(6)$?

## Hint

Look at $P(x) - x^2$. What are its roots?

## Hint 2

$P(x) - x^2$ is a degree 4 polynomial with leading coefficient 1 and roots 1, 2, 3, and 4.

## Solution

Let $Q(x) = P(x) - x^2$. Subtracting $x^2$ doesn't change the leading term, so $Q$ has degree 4 and leading coefficient 1. Also $Q(k) = 0$ for $k = 1, 2, 3, 4$. A degree 4 polynomial with those four roots and leading coefficient 1 must be

$$Q(x) = (x - 1)(x - 2)(x - 3)(x - 4)$$

So $P(6) = 36 + 5 \times 4 \times 3 \times 2 = 156$.

**Answer: (D) 156**
