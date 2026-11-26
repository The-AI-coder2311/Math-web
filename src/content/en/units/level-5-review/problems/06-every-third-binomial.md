---
order: 6
difficulty: easy
from: advanced-trig-complex/03-roots-of-unity-filter
choices: ["342","683","1024","1365","1366"]
answer: E
mistakes:
  A: "That divides 4096 by 12. The filter averages three evaluations, so it divides by 3."
  B: "That's about $2^{11}$ divided by 3. Start from $2^{12}$, the sum of all the binomial coefficients."
  C: "That's $2^{10}$. Use the filter with cube roots of unity instead of guessing a power of 2."
  D: "That treats the two complex terms as adding to negative 1. Here each one equals 1, since 1 plus omega raised to the 12th power is 1."
verify: "(() => { const C = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i; return Math.round(r); }; return sum(range(0, 12).filter((k) => k % 3 === 0).map((k) => C(12, k))); })()"
---

What is $\binom{12}{0} + \binom{12}{3} + \binom{12}{6} + \binom{12}{9} + \binom{12}{12}$?

## Hint

Use the roots of unity filter with the cube roots of unity.

## Hint 2

Let $\omega$ be a primitive cube root of unity. The sum is one third of $2^{12} + (1 + \omega)^{12} + (1 + \omega^2)^{12}$.

## Solution

Averaging $(1 + x)^{12}$ over $x = 1, \omega, \omega^2$ keeps exactly the terms whose power of $x$ is a multiple of 3, because $1 + \omega^k + \omega^{2k}$ is 3 when 3 divides $k$ and 0 otherwise.

Since $1 + \omega + \omega^2 = 0$, we have $1 + \omega = -\omega^2$, so $(1 + \omega)^{12} = \omega^{24} = 1$. In the same way, $(1 + \omega^2)^{12} = 1$. The sum is

$$\frac{4096 + 1 + 1}{3} = 1366$$

As a check, $1 + 220 + 924 + 220 + 1 = 1366$.

**Answer: (E) 1366**
