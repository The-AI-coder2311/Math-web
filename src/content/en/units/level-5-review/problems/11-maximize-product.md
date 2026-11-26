---
order: 11
difficulty: medium
from: inequalities-optimization/04-optimization-techniques
choices: ["216","243","250","256","324"]
answer: D
mistakes:
  A: "That's $6^2 \\times 6$, from splitting 12 evenly. Since x is squared, it deserves a bigger share."
  B: "That's 3 to the 5th power. Try x equal to 8 and y equal to 4."
  C: "Try x equal to 8 and y equal to 4. That gives a larger value."
  E: "That's $9^2 \\times 4$, but then x plus y is 13. Keep the sum equal to 12."
verify: "Math.round(Math.max(...range(0, 12000).map((k) => (k / 1000) ** 2 * (12 - k / 1000))))"
---

Positive real numbers $x$ and $y$ satisfy $x + y = 12$. What is the largest possible value of $x^2 y$?

## Hint

Use AM-GM on three terms with a fixed sum. Split $x$ into two equal halves.

## Hint 2

The three numbers $\frac{x}{2}$, $\frac{x}{2}$, and $y$ add up to 12.

## Solution

The numbers $\frac{x}{2}$, $\frac{x}{2}$, and $y$ have sum 12. By AM-GM, their product is at most $\left(\frac{12}{3}\right)^3$, which is 64. Their product is $\frac{x^2 y}{4}$, so $x^2 y$ is at most $4 \times 64 = 256$.

Equality needs all three numbers equal: $\frac{x}{2}$ equals $y$. With $x + y = 12$, that gives $x = 8$ and $y = 4$, and $64 \times 4 = 256$.

**Answer: (D) 256**
