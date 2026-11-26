---
order: 13
difficulty: easy
lesson: 03-diophantine-equations
choices: ["2","3","4","5","6"]
answer: B
mistakes:
  A: "That counts unordered pairs. The pairs $(4, 12)$ and $(12, 4)$ are different."
  C: "Check the negative factor pairs. Each one makes $x$ or $y$ zero or negative."
  D: "9 has 3 positive divisors, so there are 3 positive factor pairs."
  E: "The negative factor pairs don't give positive solutions."
verify: "product(range(1, 100), range(1, 100)).filter(([x, y]) => x * y - 3 * x - 3 * y === 0).length"
---

How many ordered pairs of positive integers $(x, y)$ satisfy $xy - 3x - 3y = 0$?

## Hint

Add 9 to both sides and factor.

## Hint 2

$(x - 3)(y - 3) = 9$. List the factor pairs of 9, including negative ones.

## Solution

Adding 9 to both sides gives $(x - 3)(y - 3) = 9$.

The positive factor pairs $(1, 9)$, $(3, 3)$, and $(9, 1)$ give $(4, 12)$, $(6, 6)$, and $(12, 4)$. The negative pairs give a value of $x$ or $y$ that is 0 or negative. So there are 3 ordered pairs.

**Answer: (B) 3**
