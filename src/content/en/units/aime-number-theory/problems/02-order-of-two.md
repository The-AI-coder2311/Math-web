---
order: 2
difficulty: easy
lesson: 01-crt-and-order
choices: ["1","2","4","5","10"]
answer: E
mistakes:
  A: "$2^1 = 2$, which isn't 1 mod 11."
  B: "$2^2$ is 4, which isn't 1 mod 11."
  C: "$2^4 = 16$, which leaves remainder 5. Also, the order must divide 10."
  D: "$2^5 = 32$, which leaves remainder 10, not 1. It's $-1$ mod 11."
verify: "(() => { let k = 1, p = 2; while (p % 11 !== 1) { p = (p * 2) % 11; k++; } return k; })()"
---

What is the smallest positive integer $k$ such that $2^k$ leaves a remainder of 1 when divided by 11?

## Hint

The answer must divide 10, by Fermat's Little Theorem. Test the divisors of 10.

## Hint 2

Compute $2^2$ and $2^5$ mod 11.

## Solution

By Fermat, the order of 2 mod 11 divides 10, so it is 1, 2, 5, or 10.

- $2^2 = 4$, not 1 mod 11.
- $2^5 = 32$, and $32 \equiv 10 \pmod{11}$, not 1.

So the order is 10.

**Answer: (E) 10**
