---
order: 27
difficulty: medium
lesson: 02-giant-powers
choices: ["1","3","7","9"]
answer: B
mistakes:
  A: "That would need the exponent to be a multiple of 4. It has a remainder of 3."
  C: "That would need a remainder of 1 mod 4. Odd powers of $-1$ give $-1$, which is 3."
  D: "That would need a remainder of 2 mod 4. The exponent is odd."
verify: "Number(7n ** (7n ** 7n % 4n + 4n) % 10n)"
---

What is the last digit of $7^{7^7}$?

## Hint

The last digits of powers of 7 have a cycle of 4. So what do you need to know about the exponent?

## Hint 2

$7 \equiv -1 \pmod 4$, so $7^7 \equiv -1 \equiv 3 \pmod 4$.

## Solution

The cycle of last digits is 7, 9, 3, 1, with a length of 4. The exponent $7^7$ has a remainder of 3 mod 4, since $7 \equiv -1$ and the power is odd. So the last digit matches $7^3 = 343$, which is 3.

**Answer: (B) 3**
