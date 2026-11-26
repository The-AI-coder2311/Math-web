---
order: 5
difficulty: easy
from: inequalities-optimization/01-am-gm-power-mean
choices: ["12","13","15","18","36"]
answer: A
mistakes:
  B: "That's the value at $x = 1$. A smaller value is possible."
  C: "That's the value at $x = 3$, which is 12 plus 3. Try a value between 1 and 3."
  D: "That's twice 9. AM-GM gives twice the square root of the product, and the product is 36."
  E: "That's the product of the two terms. The minimum is twice its square root."
verify: "Math.round(Math.min(...range(1, 100000).map((k) => 4 * (k / 10000) + 9 / (k / 10000))))"
---

What is the smallest value of $4x + \frac{9}{x}$ for positive real numbers $x$?

## Hint

The product of the two terms doesn't depend on $x$.

## Hint 2

Use AM-GM: the sum of two positive numbers is at least twice the square root of their product.

## Solution

By AM-GM, $4x + \frac{9}{x} \ge 2\sqrt{4x \cdot \frac{9}{x}} = 2\sqrt{36}$, which is 12.

Equality holds when the two terms are equal, $4x = \frac{9}{x}$, so $x^2 = \frac{9}{4}$ and $x = \frac{3}{2}$. At that point the terms are 6 and 6, and $6 + 6 = 12$. So the minimum really is reached.

**Answer: (A) 12**
