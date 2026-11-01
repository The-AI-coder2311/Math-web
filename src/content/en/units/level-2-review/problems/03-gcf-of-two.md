---
order: 3
difficulty: easy
from: primes-remainders/03-gcf-and-lcm
choices: ["4","6","24","12","180"]
answer: D
mistakes:
  A: "That divides both, but it isn't the largest."
  B: "That divides both, but it isn't the largest."
  C: "24 doesn't divide 36."
  E: "That's the LCM. The GCF has to be small enough to divide both."
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
