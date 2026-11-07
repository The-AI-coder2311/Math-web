---
order: 27
difficulty: medium
lesson: 02-counting-divisors
choices: ["4","6","8","15"]
answer: B
mistakes:
  A: "Check the choices for the power of 2. It can be 0, 2, or 4."
  C: "A perfect square needs even exponents, so check how many there are."
  D: "That's all of the factors of 144, not only the squares."
verify: "factors(144).filter((d) => Number.isInteger(Math.sqrt(d))).length"
---

How many of the factors of 144 are perfect squares?

## Hint

$144 = 2^4 \times 3^2$. What must be true of the exponents in a perfect square?

## Hint 2

The exponents have to be even.

## Solution

Since $144 = 2^4 \times 3^2$, the power of 2 can be 0, 2, or 4, and the power of 3 can be 0 or 2. That's $3 \times 2 = 6$ square factors: 1, 4, 9, 16, 36, and 144.

**Answer: (B) 6**
