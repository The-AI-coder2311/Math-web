---
order: 9
difficulty: medium
from: aime-number-theory/02-lifting-the-exponent
choices: ["6","7","8","9","10"]
answer: C
mistakes:
  A: "That's only the exponent of 2 in 64. Add the contributions from 3 minus 1 and 3 plus 1, then subtract 1."
  B: "That counts 3 plus 1 as one factor of 2. It's 4, which has two."
  D: "That forgets to subtract 1. The lifting the exponent formula for the prime 2 ends with minus 1."
  E: "That counts 64 as having seven factors of 2. It's 2 to the 6th power."
verify: "(() => { let x = 3n ** 64n - 1n; let k = 0; while (x % 2n === 0n) { x /= 2n; k++; } return k; })()"
---

What is the largest integer $k$ such that $2^k$ divides $3^{64} - 1$?

## Hint

Use the lifting the exponent lemma for the prime 2 with an even exponent.

## Hint 2

For odd $a$ and even $n$, the exponent of 2 in $a^n - 1$ is the exponent of 2 in $a - 1$, plus the exponent in $a + 1$, plus the exponent in $n$, minus 1.

## Solution

Here $3 - 1 = 2$ has one factor of 2, $3 + 1 = 4$ has two, and $64 = 2^6$ has six. By lifting the exponent, the answer is $1 + 2 + 6 - 1 = 8$.

You can also see it by factoring repeatedly:

$$3^{64} - 1 = (3 - 1)(3 + 1)(3^2 + 1)(3^4 + 1)(3^8 + 1)(3^{16} + 1)(3^{32} + 1)$$

The first two factors give $1 + 2 = 3$ factors of 2. Each of the other five is an odd square plus 1, which is 2 more than a multiple of 4, so each gives exactly one more. That's $3 + 5 = 8$.

**Answer: (C) 8**
