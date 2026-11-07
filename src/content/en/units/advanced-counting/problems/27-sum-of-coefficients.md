---
order: 27
difficulty: easy
lesson: 01-pascal-and-binomials
choices: ["1","16","81","256"]
answer: B
mistakes:
  A: "That uses $x = 1$ with a difference of 1. Here, $3 - 1 = 2$."
  C: "That's $3^4$. Put $x = 1$ into the whole thing."
  D: "That's $4^4$. Put $x = 1$ into the whole thing."
verify: "(3 * 1 - 1) ** 4"
---

What do the coefficients of $(3x - 1)^4$ add up to?

## Hint

The coefficients of a polynomial add up to its value at $x = 1$.

## Hint 2

Put $x = 1$ into $(3x - 1)^4$.

## Solution

Put in $x = 1$: $(3 - 1)^4 = 2^4 = 16$.

**Answer: (B) 16**
