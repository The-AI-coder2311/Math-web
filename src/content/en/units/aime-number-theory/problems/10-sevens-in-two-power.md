---
order: 10
difficulty: medium
lesson: 02-lifting-the-exponent
choices: ["1","2","3","6","7"]
answer: B
mistakes:
  A: "That's only $v_7(8 - 1)$. Add $v_7(14)$, which is 1."
  C: "After rewriting as $8^{14} - 1$, use $v_7(14)$, not $v_7(42)$ plus extra."
  D: "That's $42 / 7$. LTE uses the exponent of 7 in 14, not division."
  E: "That's the prime itself. Count how many times 7 divides the number."
verify: "(() => { let x = 2n ** 42n - 1n, k = 0; while (x % 7n === 0n) { x /= 7n; k++; } return k; })()"
---

What is the largest integer $k$ such that $7^k$ divides $2^{42} - 1$?

## Hint

7 doesn't divide $2 - 1$. Find a power of 2 that is 1 mod 7.

## Hint 2

$2^3 = 8$, so $2^{42} - 1 = 8^{14} - 1$.

## Solution

Since $2^3 = 8 \equiv 1 \pmod 7$, rewrite the number as $8^{14} - 1$. By LTE, $v_7(8^{14} - 1) = v_7(8 - 1) + v_7(14) = 1 + 1$. So $k = 2$.

**Answer: (B) 2**
