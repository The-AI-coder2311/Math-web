---
order: 17
difficulty: hard
from: aime-number-theory/03-diophantine-equations
choices: ["8","9","10","12","15"]
answer: E
mistakes:
  A: "That counts unordered pairs. The question asks for ordered pairs, so (13, 156) and (156, 13) are different."
  B: "That's the number of divisors of 36. After clearing fractions, the product is 144."
  C: "That's the number of divisors of 48. After clearing fractions, the product is 144."
  D: "That's the number of divisors of 72. After clearing fractions, the product is 144."
verify: "product(range(13, 200), range(13, 200)).filter(([x, y]) => 12 * (x + y) === x * y).length"
---

How many ordered pairs of positive integers $(x, y)$ satisfy

$$\frac{1}{x} + \frac{1}{y} = \frac{1}{12}?$$

## Hint

Clear the fractions, then factor by adding a constant to both sides.

## Hint 2

The equation becomes $(x - 12)(y - 12) = 144$.

## Solution

Multiply both sides by $12xy$ to get $12x + 12y = xy$. Then $xy - 12x - 12y + 144 = 144$, which factors as

$$(x - 12)(y - 12) = 144$$

Could both factors be negative? Since $x$ and $y$ are positive, each factor is at least $-11$, so a product of two negative factors is at most 121, which is too small. So both factors are positive divisors that multiply to 144.

Since $144 = 2^4 \times 3^2$, it has $(4 + 1) \times (2 + 1) = 15$ positive divisors. Each divisor $d$ gives the pair $x = 12 + d$ and $y = 12 + \frac{144}{d}$, so there are 15 ordered pairs.

**Answer: (E) 15**
