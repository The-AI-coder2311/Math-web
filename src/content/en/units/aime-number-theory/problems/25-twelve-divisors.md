---
order: 25
difficulty: easy
lesson: 05-nt-constructions
choices: ["48","60","72","84","96"]
answer: B
mistakes:
  A: "48 is $2^4 \\times 3$, which has $5 \\times 2 = 10$ divisors."
  C: "72 has 12 divisors, but 60 is smaller. Try three different primes."
  D: "84 has 12 divisors, but 60 is smaller."
  E: "96 has 12 divisors, but it isn't the smallest. Try $2^2 \\times 3 \\times 5$."
verify: "range(1, 200).find((n) => factors(n).length === 12)"
---

What is the smallest positive integer with exactly 12 positive divisors?

## Hint

List the exponent patterns whose "plus one" values multiply to 12.

## Hint 2

The patterns are $(11)$, $(5, 1)$, $(3, 2)$, and $(2, 1, 1)$. Put the biggest exponent on 2.

## Solution

The exponent patterns are $(11)$, $(5, 1)$, $(3, 2)$, and $(2, 1, 1)$. Using the smallest primes, they give 2048, 96, 72, and $2^2 \times 3 \times 5 = 60$. The smallest is 60.

**Answer: (B) 60**
