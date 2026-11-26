---
order: 9
difficulty: medium
lesson: 02-lifting-the-exponent
choices: ["5","6","7","8","64"]
answer: D
mistakes:
  A: "Check $v_2(64)$. It's 6, since $64 = 2^6$."
  B: "That's $v_2(64)$ alone. Add $v_2(3 - 1)$ and $v_2(3 + 1)$, then subtract 1."
  C: "That's the odd prime formula, $1 + 6$. For the prime 2, use the special version with $v_2(3 + 1)$."
  E: "That's the exponent. Count the factors of 2 instead."
verify: "(() => { let x = 3n ** 64n - 1n, k = 0; while (x % 2n === 0n) { x /= 2n; k++; } return k; })()"
---

What is the largest integer $k$ such that $2^k$ divides $3^{64} - 1$?

## Hint

The prime is 2 and the exponent is even, so use the special form of LTE.

## Hint 2

$v_2(3^n - 1) = v_2(3 - 1) + v_2(3 + 1) + v_2(n) - 1$ for even $n$.

## Solution

For $p = 2$ and even $n$:

$$v_2(3^{64} - 1) = v_2(2) + v_2(4) + v_2(64) - 1 = 1 + 2 + 6 - 1$$

So $k = 8$.

**Answer: (D) 8**
