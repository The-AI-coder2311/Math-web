---
order: 12
difficulty: medium
lesson: 01-prime-factorization
choices: ["3","5","15","45","225"]
answer: D
mistakes:
  A: "That gives $3^2 \\times 5^2$. Every exponent has to reach 3."
  B: "That gives $3 \\times 5^3$. The 3 also needs to reach an exponent of 3."
  C: "That gives $3^2 \\times 5^3$. The 3 needs one more."
  E: "That gives $3^3 \\times 5^4$, and an exponent of 4 isn't a multiple of 3. Find what's missing from each exponent."
verify: "range(1, 300).find((k) => Number.isInteger(Math.round(Math.cbrt(75 * k))) && Math.round(Math.cbrt(75 * k)) ** 3 === 75 * k)"
---

What is the smallest positive whole number you can multiply 75 by to get a perfect cube?

## Hint

In a perfect cube, every exponent is a multiple of 3. What is 75 as primes?

## Hint 2

$75 = 3 \times 5^2$. How many more 3s and 5s do you need?

## Solution

$75 = 3^1 \times 5^2$. To reach exponents of 3, you need two more 3s and one more 5: $3 \times 3 \times 5 = 45$.

**Check:** $75 \times 45 = 3375 = 15 \times 15 \times 15$.

**Answer: (D) 45**
