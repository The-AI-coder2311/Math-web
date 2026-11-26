---
order: 8
difficulty: easy
lesson: 02-lifting-the-exponent
choices: ["2","3","4","5","100"]
answer: B
mistakes:
  A: "That's only $v_5(100)$. Add $v_5(6 - 1)$, which is 1."
  C: "Check $v_5(100)$: $100 = 4 \\times 25$, which has two factors of 5, not three."
  D: "That's $1 + 4$. The 4 in $100 = 4 \\times 25$ isn't a power of 5."
  E: "That's the exponent. LTE counts factors of 5, which is much smaller."
verify: "(() => { let x = 6n ** 100n - 1n, k = 0; while (x % 5n === 0n) { x /= 5n; k++; } return k; })()"
---

What is the largest integer $k$ such that $5^k$ divides $6^{100} - 1$?

## Hint

The prime 5 divides $6 - 1$. Use LTE.

## Hint 2

$100 = 4 \times 25$ has two factors of 5.

## Solution

By LTE, $v_5(6^{100} - 1) = v_5(6 - 1) + v_5(100)$. The first term is 1. The second is 2, since $100 = 4 \times 25$. So $k = 3$.

**Answer: (B) 3**
