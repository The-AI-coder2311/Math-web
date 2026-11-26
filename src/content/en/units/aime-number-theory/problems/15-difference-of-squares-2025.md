---
order: 15
difficulty: medium
lesson: 03-diophantine-equations
choices: ["5","6","7","8","15"]
answer: C
mistakes:
  A: "Count the divisors of 2025 again. It has 15 of them."
  B: "Each pair of divisors with $d$ less than $\\frac{2025}{d}$ gives one solution. There are 7 such pairs."
  D: "That includes $d = 45$, which makes $y = 0$. $y$ must be positive."
  E: "That's the number of divisors. Each solution uses a pair of divisors, and $x - y$ must be the smaller one."
verify: "product(range(1, 1100), range(1, 1100)).filter(([x, y]) => x * x - y * y === 2025).length"
---

How many ordered pairs of positive integers $(x, y)$ satisfy $x^2 - y^2 = 2025$?

## Hint

Factor as $(x - y)(x + y) = 2025$.

## Hint 2

$2025 = 3^4 \times 5^2$ has 15 divisors. Pair each divisor with its partner, and remember $y$ must be positive.

## Solution

Write $(x - y)(x + y) = 2025$ with $x - y < x + y$. Both factors are odd, so $x$ and $y$ are integers.

Since $2025 = 3^4 \times 5^2$, it has $5 \times 3 = 15$ divisors. The divisor 45 pairs with itself, which would make $y = 0$. The other 14 divisors form 7 pairs with a smaller and a larger factor. So there are 7 solutions.

**Answer: (C) 7**
