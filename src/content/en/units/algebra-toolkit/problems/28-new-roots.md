---
order: 28
difficulty: medium
lesson: 03-quadratics-and-vieta
choices: ["5","7","9","11"]
answer: D
mistakes:
  A: "Don't forget that the product has a term of 4, from 2 times 2."
  B: "That's the new sum, the coefficient of $x$. The question asks for the constant."
  C: "Multiply it out: $rs + 2(r + s) + 4$. Check the middle term."
verify: "(() => { const d = Math.sqrt(9 - 4); const r = (3 + d) / 2; const s = (3 - d) / 2; return Math.round((r + 2) * (s + 2)); })()"
---

Let $r$ and $s$ be the solutions of $x^2 - 3x + 1 = 0$. A quadratic $x^2 - bx + c = 0$ has solutions $r + 2$ and $s + 2$. What is $c$?

## Hint

$c$ is the product of the new solutions.

## Hint 2

$(r + 2)(s + 2) = rs + 2(r + s) + 4$.

## Solution

We know that $r + s = 3$ and $rs = 1$. So $c = (r + 2)(s + 2) = rs + 2(r + s) + 4 = 1 + 6 + 4 = 11$.

**Answer: (D) 11**
