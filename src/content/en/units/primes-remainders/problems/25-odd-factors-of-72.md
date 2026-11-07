---
order: 25
difficulty: easy
lesson: 02-counting-divisors
choices: ["3","4","6","12"]
answer: A
mistakes:
  B: "Check the powers of 3 in 72. Since $72 = 2^3 \\times 3^2$, there are only 3 choices."
  C: "Check the powers of 3: 1, 3, and 9 are all you can use."
  D: "That's all of the factors of 72, including the even ones."
verify: "factors(72).filter((d) => d % 2 === 1).length"
---

How many odd factors does 72 have?

## Hint

Write 72 as a product of primes.

## Hint 2

$72 = 2^3 \times 3^2$. An odd factor has no 2s.

## Solution

Since $72 = 2^3 \times 3^2$, an odd factor can only use the 3s. So the odd factors are 1, 3, and 9, which makes 3.

**Answer: (A) 3**
