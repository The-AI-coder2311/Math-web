---
order: 2
difficulty: easy
from: aime-number-theory/01-crt-and-order
choices: ["2","8","23","105","128"]
answer: C
mistakes:
  A: "2 leaves remainder 2 when divided by 3 and by 7, but its remainder when divided by 5 is 2, not 3."
  B: "8 works for 3 and 5, but it leaves remainder 1 when divided by 7."
  D: "105 is the product of the three divisors. It leaves remainder 0 for each of them."
  E: "128 works, but it's $23 + 105$. Look for a smaller one."
verify: "range(1, 500).find((n) => n % 3 === 2 && n % 5 === 3 && n % 7 === 2)"
---

What is the smallest positive integer $n$ that leaves remainder 2 when divided by 3, remainder 3 when divided by 5, and remainder 2 when divided by 7?

## Hint

Two of the conditions share the remainder 2. Combine those first.

## Hint 2

Since 3 and 7 share no factor, $n \equiv 2 \pmod{21}$. Try 2, 23, 44, and so on.

## Solution

From $n \equiv 2 \pmod 3$ and $n \equiv 2 \pmod 7$, the number $n - 2$ is a multiple of both 3 and 7, so $n \equiv 2 \pmod{21}$. The candidates are 2, 23, 44, and so on.

Check them modulo 5. The number 2 leaves remainder 2, and 23 leaves remainder 3. By the Chinese Remainder Theorem, the solutions repeat every $3 \times 5 \times 7 = 105$, so 23 is the smallest positive one.

**Answer: (C) 23**
