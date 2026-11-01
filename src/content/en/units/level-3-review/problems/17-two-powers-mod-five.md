---
order: 17
difficulty: hard
from: modular-arithmetic/02-giant-powers
choices: ["0","1","2","3","4"]
answer: C
mistakes:
  A: "That would need the remainders to add up to a multiple of 5. Each leaves 1."
  B: "That's only one of the two powers. Add both."
  D: "Each power leaves 1, so the sum leaves 2."
  E: "Each power leaves 1, so the sum leaves 2."
verify: "(range(1, 100).reduce((r) => (r * 2) % 5, 1) + range(1, 100).reduce((r) => (r * 3) % 5, 1)) % 5"
---

What is the remainder when $2^{100} + 3^{100}$ is divided by 5?

## Hint

Find the remainders of the powers of 2 and the powers of 3, mod 5.

## Hint 2

$2^4 \equiv 1$ and $3^4 \equiv 1$. And 100 is a multiple of 4.

## Solution

Since $2^4 = 16$ and $3^4 = 81$ both leave 1, and 100 is a multiple of 4, each power leaves 1. So the sum leaves $1 + 1 = 2$.

**Answer: (C) 2**
