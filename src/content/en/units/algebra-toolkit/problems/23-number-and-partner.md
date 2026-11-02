---
order: 23
difficulty: medium
lesson: 05-am-gm-inequality
choices: ["5","8","10","12","26"]
answer: C
mistakes:
  A: "That's the value of $x$ that gives the smallest value. The question asks for the smallest value itself."
  B: "Test this one. No positive $x$ makes the expression as low as 8."
  D: "That's a value the expression can reach, but there's a smaller one, at $x = 5$."
  E: "That's the value at $x = 1$. The terms should be equal instead."
verify: "Math.round(Math.min(...range(1, 10000).map((i) => i / 100 + 25 / (i / 100))))"
---

For $x > 0$, what is the smallest possible value of $x + \frac{25}{x}$?

## Hint

The two terms multiply to a constant. What is it?

## Hint 2

Use AM-GM: the sum is at least 2 times the square root of the product.

## Solution

The terms multiply to 25, so AM-GM says that the sum is at least $2\sqrt{25} = 10$. We reach it when $x = \frac{25}{x}$, which means that $x = 5$, and $5 + 5 = 10$.

**Answer: (C) 10**
