---
order: 9
difficulty: medium
from: modular-arithmetic/02-giant-powers
choices: ["6","2","3","5","1"]
answer: E
mistakes:
  B: "Replace 6 with $-1$. Even powers of $-1$ are 1."
  C: "Replace 6 with $-1$. Even powers of $-1$ are 1."
  D: "Replace 6 with $-1$. Even powers of $-1$ are 1."
  A: "That's for an odd exponent. Here, 50 is even."
verify: "range(1, 50).reduce((r) => (r * 6) % 7, 1)"
---

What is the remainder when $6^{50}$ is divided by 7?

## Hint

Can you write 6 as a negative number, mod 7?

## Hint 2

$6 \equiv -1 \pmod{7}$, and the exponent is even.

## Solution

Since $6 \equiv -1 \pmod{7}$, we have $6^{50} \equiv (-1)^{50} = 1$.

**Answer: (E) 1**
