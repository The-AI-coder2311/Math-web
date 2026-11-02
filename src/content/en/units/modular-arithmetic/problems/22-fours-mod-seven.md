---
order: 22
difficulty: medium
lesson: 05-fermat-and-euler
choices: ["0","1","2","4","6"]
answer: C
mistakes:
  A: "A remainder of 0 would mean that 7 divides a power of 4. But 7 is prime, and it doesn't divide 4."
  B: "That would be true if 50 were a multiple of 6. Find the leftover exponent."
  D: "The leftover exponent is 2, not 1. Find $4^2$ mod 7."
  E: "The exponent reduces using 6, and there's a leftover of 2. So you want $4^2$ mod 7."
verify: "Number(4n ** 50n % 7n)"
---

What is the remainder when $4^{50}$ is divided by 7?

## Hint

By Fermat's theorem, $4^6 \equiv 1 \pmod 7$. Break up the exponent using 6.

## Hint 2

$50 = 6 \times 8 + 2$. So what's left?

## Solution

By Fermat's theorem, $4^6 \equiv 1 \pmod 7$. Since $50 = 6 \times 8 + 2$, we get $4^{50} \equiv 1 \times 4^2 = 16$. And $16 = 7 \times 2 + 2$, so the remainder is 2.

**Answer: (C) 2**
