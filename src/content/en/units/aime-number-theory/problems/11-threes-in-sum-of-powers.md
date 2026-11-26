---
order: 11
difficulty: medium
lesson: 02-lifting-the-exponent
choices: ["3","4","5","6","81"]
answer: C
mistakes:
  A: "Check $v_3(81)$. Since $81 = 3^4$, it's 4."
  B: "That's $v_3(81)$ alone. Add the factor of 3 from $2 + 1$."
  D: "Check the sum: $v_3(2 + 1)$ is 1, not 2."
  E: "That's the exponent itself, not the number of factors of 3."
verify: "(() => { let x = 2n ** 81n + 1n, k = 0; while (x % 3n === 0n) { x /= 3n; k++; } return k; })()"
---

What is the largest integer $k$ such that $3^k$ divides $2^{81} + 1$?

## Hint

The exponent 81 is odd, and 3 divides $2 + 1$. Use the sum version of LTE.

## Hint 2

$81 = 3^4$.

## Solution

Since 81 is odd and 3 divides $2 + 1 = 3$, LTE gives $v_3(2^{81} + 1) = v_3(3) + v_3(81) = 1 + 4$. So $k = 5$.

**Answer: (C) 5**
