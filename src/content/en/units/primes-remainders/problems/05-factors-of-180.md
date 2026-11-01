---
order: 7
difficulty: medium
lesson: 02-counting-divisors
choices: ["9","12","16","24","18"]
answer: E
mistakes:
  A: "That leaves out the 5. Its exponent of 1 gives a factor of 2."
  B: "Check the exponents: 2, 2, and 1 become 3, 3, and 2."
  C: "Check the exponents: 2, 2, and 1 become 3, 3, and 2."
  D: "Check the exponents: 2, 2, and 1 become 3, 3, and 2."
verify: "factors(180).length"
---

How many positive factors does 180 have?

## Hint

Write 180 as a product of primes with exponents. Then add 1 to each exponent and multiply.

## Hint 2

$180 = 2^2 \times 3^2 \times 5^1$. Add 1 to each exponent.

## Solution

**Step 1.** Break 180 into primes: $180 = 2^2 \times 3^2 \times 5^1$.

**Step 2.** Add 1 to each exponent, which gives 3, 3, and 2.

**Step 3.** Multiply: $3 \times 3 \times 2 = 18$.

**Answer: (E) 18**
