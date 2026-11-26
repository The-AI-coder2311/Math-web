---
order: 15
difficulty: hard
lesson: 02-log-rules
choices: ["1","2","4","8","16"]
answer: C
mistakes:
  A: "That's only the solution $x = 1$. There's another one."
  B: "That's a value of $\\log_2 x$. Convert back to $x$."
  D: "That's the sum of the two values of $x$ plus 3. Multiply them."
  E: "That squares the solution 4. Multiply 1 and 4."
verify: "range(1, 1000).filter((x) => Math.abs(Math.log2(x * x) - Math.log2(x) ** 2) < 1e-9).reduce((a, b) => a * b, 1)"
---

Find the product of all real numbers $x$ with $\log_2 (x^2) = (\log_2 x)^2$.

## Hint

Let $u = \log_2 x$, and use the power rule on the left.

## Hint 2

The equation becomes $2u = u^2$.

## Solution

The right side needs $x > 0$, so the power rule gives $\log_2 (x^2) = 2\log_2 x$. With $u = \log_2 x$, we get $2u = u^2$, so $u = 0$ or $u = 2$. That means $x = 1$ or $x = 4$, and the product is 4.

**Answer: (C) 4**
