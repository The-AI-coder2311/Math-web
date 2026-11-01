---
order: 11
difficulty: medium
from: primes-remainders/02-counting-divisors
choices: ["18","12","9","24","36"]
answer: A
mistakes:
  C: "That leaves out the 7. Its exponent of 1 doubles the count."
  B: "Check the factorization: the exponents are 2, 2, and 1."
  D: "Check the factorization: the exponents are 2, 2, and 1."
  E: "That's twice the right answer. Check your exponents plus 1: 3, 3, and 2."
verify: "factors(252).length"
---

How many positive factors does 252 have?

## Hint

Write 252 as primes.

## Hint 2

$252 = 2^2 \times 3^2 \times 7$.

## Solution

$252 = 2^2 \times 3^2 \times 7^1$. Adding 1 to each exponent gives 3, 3, and 2, and $3 \times 3 \times 2 = 18$.

**Answer: (A) 18**
