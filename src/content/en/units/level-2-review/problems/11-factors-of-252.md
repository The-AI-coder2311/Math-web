---
order: 11
difficulty: medium
from: primes-remainders/02-counting-divisors
choices: ["12","18","24","27","36"]
answer: B
mistakes:
  A: "Check the factorization: the exponents are 2, 2, and 1."
  C: "Check the factorization: the exponents are 2, 2, and 1."
  D: "That's $3 \\times 3 \\times 3$, which treats the 7 as if it appeared twice. The 7 appears once, so it gives only 2 options."
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

**Answer: (B) 18**
