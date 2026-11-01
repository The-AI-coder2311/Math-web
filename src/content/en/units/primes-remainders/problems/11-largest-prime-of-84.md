---
order: 5
difficulty: easy
lesson: 01-prime-factorization
choices: ["2","3","7","12","21"]
answer: C
mistakes:
  A: "That's the smallest prime that divides 84."
  B: "That's a prime factor, but there's a larger one."
  D: "That divides 84, but it isn't prime."
  E: "That divides 84, but it isn't prime: $21 = 3 \\times 7$."
verify: "Math.max(...factors(84).filter(isPrime))"
---

What is the largest prime number that divides 84?

## Hint

Break 84 into primes. Start with $84 = 4 \times 21$.

## Hint 2

$84 = 2 \times 2 \times 3 \times 7$.

## Solution

$84 = 2 \times 2 \times 3 \times 7$, so the primes are 2, 3, and 7. The largest is 7.

**Answer: (C) 7**
