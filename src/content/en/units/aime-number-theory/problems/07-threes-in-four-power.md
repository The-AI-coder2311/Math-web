---
order: 7
difficulty: easy
lesson: 02-lifting-the-exponent
choices: ["1","3","4","9","27"]
answer: C
mistakes:
  A: "That's only $v_3(4 - 1)$. LTE adds $v_3(27)$."
  B: "That's $v_3(27)$. Add the factor of 3 from $4 - 1$."
  D: "LTE adds exponents. It doesn't multiply them."
  E: "That's the exponent itself. You want how many times 3 divides the number."
verify: "(() => { let x = 4n ** 27n - 1n, k = 0; while (x % 3n === 0n) { x /= 3n; k++; } return k; })()"
---

What is the largest integer $k$ such that $3^k$ divides $4^{27} - 1$?

## Hint

Use LTE with $a = 4$ and $b = 1$.

## Hint 2

Find $v_3(4 - 1)$ and $v_3(27)$, then add.

## Solution

The prime 3 divides $4 - 1 = 3$ exactly once, and doesn't divide 4. By LTE,

$$v_3(4^{27} - 1) = v_3(3) + v_3(27) = 1 + 3$$

So $k = 4$.

**Answer: (C) 4**
