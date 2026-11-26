---
order: 9
difficulty: medium
from: polynomials/02-vietas-higher
choices: ["14","22","25","36","58"]
answer: A
mistakes:
  B: "That's $2 \\times 11$. Subtract it from the square of the sum."
  C: "That's $36 - 11$. You need to subtract twice the pair sum."
  D: "That's the square of the sum. It still contains the cross terms."
  E: "That adds $2 \\times 11$ instead of subtracting it."
verify: "(() => { const p = (x) => x ** 3 - 6 * x ** 2 + 11 * x - 6; const roots = range(-10, 10).filter((x) => p(x) === 0); return roots.length === 3 ? sum(roots.map((x) => x * x)) : NaN; })()"
---

The roots of $x^3 - 6x^2 + 11x - 6$ are $r$, $s$, and $t$. What is $r^2 + s^2 + t^2$?

## Hint

Vieta's formulas give the sum of the roots and the sum of their products in pairs.

## Hint 2

$(r + s + t)^2 = r^2 + s^2 + t^2 + 2(rs + st + tr)$.

## Solution

By Vieta's formulas, $r + s + t = 6$ and $rs + st + tr = 11$. Squaring the sum gives the squares plus twice the pair sum, so

$$r^2 + s^2 + t^2 = 6^2 - 2 \times 11 = 36 - 22 = 14.$$

Check: the roots are 1, 2, 3, and $1 + 4 + 9 = 14$.

**Answer: (A) 14**
