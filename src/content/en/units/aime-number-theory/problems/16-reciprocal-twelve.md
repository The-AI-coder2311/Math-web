---
order: 16
difficulty: medium
lesson: 03-diophantine-equations
choices: ["8","12","15","16","30"]
answer: C
mistakes:
  A: "That counts unordered pairs. Ordered pairs count $(13, 156)$ and $(156, 13)$ separately."
  B: "Count the divisors of 144 with the exponents: $(4 + 1)(2 + 1)$."
  D: "That's the count for $2^4 \\times 3$. But $144 = 2^4 \\times 3^2$."
  E: "Negative factor pairs don't work, because both $x$ and $y$ must be greater than 12."
verify: "range(13, 200).filter((x) => (12 * x) % (x - 12) === 0).length"
---

How many ordered pairs of positive integers $(x, y)$ satisfy $\frac{1}{x} + \frac{1}{y} = \frac{1}{12}$?

## Hint

Clear the denominators and use Simon's Favorite Factoring Trick.

## Hint 2

You get $(x - 12)(y - 12) = 144$, with both factors positive.

## Solution

Multiplying by $12xy$ gives $xy - 12x - 12y = 0$, so $(x - 12)(y - 12) = 144$. Since $x$ and $y$ are both greater than 12, both factors are positive. Each positive divisor of $144 = 2^4 \times 3^2$ gives one solution, and there are $5 \times 3 = 15$ of them.

**Answer: (C) 15**
