---
order: 11
difficulty: medium
lesson: 01-prime-factorization
choices: ["2","7","14","49","98"]
answer: A
mistakes:
  B: "The 7s are already paired. It's the 2 that needs a partner."
  C: "That also adds a 7, which spoils the pair. Only the 2 needs a partner."
  D: "That's already a perfect square, so multiplying by it doesn't fix the odd exponent on 2."
  E: "Multiplying a number by itself always works, but it isn't the smallest."
verify: "range(1, 100).find((k) => Number.isInteger(Math.sqrt(98 * k)))"
---

What is the smallest positive whole number you can multiply 98 by to get a perfect square?

## Hint

Break 98 into primes. Which exponents are odd?

## Hint 2

$98 = 2 \times 7^2$. The 2 has no partner.

## Solution

$98 = 2 \times 7^2$. The 7s are already paired, but the 2 isn't. Multiplying by 2 gives $196 = 14 \times 14$.

**Answer: (A) 2**
