---
order: 29
difficulty: medium
lesson: 01-prime-factorization
choices: ["45","225","675","1125"]
answer: D
mistakes:
  A: "Test it: 5 times 45 is 225, a square, but 3 times 45 is 135, which isn't a cube."
  B: "Test it: 5 times 225 is 1125, which isn't a square."
  C: "Test it: 5 times 675 is 3375, which isn't a square."
verify: "range(1, 2000).find((n) => Number.isInteger(Math.sqrt(5 * n)) && Number.isInteger(Math.round(Math.cbrt(3 * n))) && Math.round(Math.cbrt(3 * n)) ** 3 === 3 * n)"
---

What is the smallest positive whole number $n$ such that $5n$ is a perfect square and $3n$ is a perfect cube?

## Hint

Write $n = 3^a \times 5^b$, and handle each prime on its own.

## Hint 2

For $a$: it must be even, and $a + 1$ must be a multiple of 3. For $b$: $b + 1$ must be even, and $b$ must be a multiple of 3.

## Solution

Write $n = 3^a \times 5^b$. For the 3s, $a$ must be even, and $a + 1$ must be a multiple of 3, so $a = 2$. For the 5s, $b + 1$ must be even, and $b$ must be a multiple of 3, so $b = 3$. So $n = 9 \times 125 = 1125$. Check: $5n = 5625 = 75^2$, and $3n = 3375 = 15^3$.

**Answer: (D) 1125**
