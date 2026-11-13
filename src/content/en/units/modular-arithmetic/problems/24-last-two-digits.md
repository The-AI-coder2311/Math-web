---
order: 24
difficulty: hard
lesson: 05-fermat-and-euler
choices: ["01","03","07","09","27"]
answer: E
mistakes:
  A: "That would be true if 123 were a multiple of 40. Find the leftover exponent."
  B: "That's $3^1$. The leftover exponent is 3, not 1."
  C: "The digits 07 belong to $3^{15}$. The last two digits repeat every 20 powers, so $3^{123}$ matches $3^3 = 27$."
  D: "That's $3^2$. The leftover exponent is 3, not 2."
verify: "String(3n ** 123n % 100n).padStart(2, '0')"
---

What are the last two digits of $3^{123}$?

## Hint

The last two digits mean the remainder mod 100. What is $\varphi(100)$?

## Hint 2

$\varphi(100) = 40$, and $123 = 40 \times 3 + 3$.

## Solution

Since 3 shares no factors with 100, and $\varphi(100) = 40$, Euler's theorem says that $3^{40} \equiv 1 \pmod{100}$. Since $123 = 40 \times 3 + 3$, we get $3^{123} \equiv 3^3 = 27$.

**Answer: (E) 27**
