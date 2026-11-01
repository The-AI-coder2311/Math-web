---
order: 12
difficulty: medium
from: primes-remainders/04-units-digits-and-remainders
choices: ["0","1","3","7","9"]
answer: E
mistakes:
  A: "Powers of 9 never end in 0."
  B: "That's for even exponents. Here, 77 is odd."
  C: "That's a digit from the powers of 3. Powers of 9 end only in 9 or 1."
  D: "That's a digit from the powers of 7. Powers of 9 end only in 9 or 1."
verify: "range(1, 77).reduce((u) => (u * 9) % 10, 1)"
---

What is the last digit of $9^{77}$?

## Hint

Write the last digits of the first few powers of 9.

## Hint 2

They go 9, 1, 9, 1. An odd exponent lands on which one?

## Solution

The last digits go 9, 1, 9, 1, so odd powers end in 9. Since 77 is odd, the answer is 9.

**Answer: (E) 9**
