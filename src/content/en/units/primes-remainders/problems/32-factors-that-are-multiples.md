---
order: 32
difficulty: medium
lesson: 02-counting-divisors
choices: ["9","12","15","18","27"]
answer: B
mistakes:
  A: "That's $3 \\times 3$. Check each prime: the 2s have 3 options, and the 3s and the 5s have 2 options each."
  C: "That's $27 - 12$, the number of factors that are **not** multiples of 15."
  D: "That requires a 3 or a 5, but not both. A multiple of 15 needs at least one 3 and at least one 5."
  E: "That's every factor of 900. Only some of them are multiples of 15."
verify: "factors(900).filter((d) => d % 15 === 0).length"
---

How many of the positive factors of 900 are multiples of 15?

## Hint

Start with the prime factorization: $900 = 2^2 \times 3^2 \times 5^2$. What must a multiple of 15 contain?

## Hint 2

A multiple of 15 needs at least one 3 and at least one 5. So the 3s can be used 1 or 2 times, and so can the 5s. The 2s are free.

## Solution

**Step 1.** Factor the number: $900 = 2^2 \times 3^2 \times 5^2$.

**Step 2.** Since $15 = 3 \times 5$, the factor must use at least one 3 and at least one 5. Count the options for each prime:

- The 2s: use 0, 1, or 2 of them. That's 3 options.
- The 3s: use 1 or 2 of them. That's 2 options.
- The 5s: use 1 or 2 of them. That's 2 options.

**Step 3.** Multiply:

$$3 \times 2 \times 2 = 12$$

**Answer: (B) 12**

## Another way

Every multiple of 15 that divides 900 is 15 times a factor of $900 \div 15 = 60$. Since $60 = 2^2 \times 3 \times 5$ has $3 \times 2 \times 2 = 12$ factors, the answer is 12.
