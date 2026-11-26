---
order: 22
difficulty: hard
lesson: 03-change-of-base
choices: ["5","6","12","32","64"]
answer: D
mistakes:
  A: "That's the sum of the values of $\\log_2 x$. Convert to $x$ and multiply."
  B: "That's the product of the values of $\\log_2 x$. Convert to $x$."
  C: "That's $4 + 8$. The question asks for the product."
  E: "Check: the values of $x$ are 4 and 8, and $4 \\times 8$ is 32."
verify: "range(1, 1000).filter((x) => Math.abs(Math.log2(x) ** 2 - 5 * Math.log2(x) + 6) < 1e-9).reduce((a, b) => a * b, 1)"
---

Find the product of all solutions of $(\log_2 x)^2 - 5\log_2 x + 6 = 0$.

## Hint

Let $u = \log_2 x$.

## Hint 2

The equation is $u^2 - 5u + 6 = 0$.

## Solution

With $u = \log_2 x$, we get $(u - 2)(u - 3) = 0$, so $x = 4$ or $x = 8$. The product is $4 \times 8 = 32$. Shortcut: the values of $u$ add to 5, so the product of the values of $x$ is $2^5 = 32$.

**Answer: (D) 32**
