---
order: 3
difficulty: easy
from: primes-remainders/03-gcf-and-lcm
choices: ["2","4","6","12","24"]
answer: D
mistakes:
  A: "2 is a common factor, but it isn't the greatest one."
  B: "That divides both, but it isn't the largest."
  C: "That divides both, but it isn't the largest."
  E: "24 doesn't divide 36."
verify: "gcd(36, 60)"
---

What is the greatest common factor of 36 and 60?

## Hint

Write each number as primes.

## Hint 2

$36 = 2^2 \times 3^2$ and $60 = 2^2 \times 3 \times 5$.

## Solution

Use the smaller power of each shared prime: $2^2 \times 3 = 12$.

**Answer: (D) 12**
