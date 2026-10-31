---
order: 10
difficulty: medium
choices: [1, 2, 3, 4, 7]
answer: D
verify: "range(1, 50).filter((n) => factors(n).length === 3).length"
---

How many whole numbers from 1 to 50 have exactly 3 positive factors?

## Hint

An odd number of factors means the number must be a perfect square. Test the perfect squares up to 50, and count the factors of each one.

## Solution

**Step 1.** Only perfect squares have an odd number of factors. The perfect squares from 1 to 50 are 1, 4, 9, 16, 25, 36, and 49.

**Step 2.** Count the factors of each one:

- 1 has 1 factor.
- 4 has 3 factors: 1, 2, and 4.
- 9 has 3 factors: 1, 3, and 9.
- 16 has 5 factors: 1, 2, 4, 8, and 16.
- 25 has 3 factors: 1, 5, and 25.
- 36 has 9 factors.
- 49 has 3 factors: 1, 7, and 49.

**Step 3.** The numbers with exactly 3 factors are 4, 9, 25, and 49, so there are 4 of them.

**A pattern to notice:** each of these is a prime number times itself, like $5 \times 5 = 25$.

**A common mistake:** answering 7 by counting all the perfect squares.

**Answer: (D) 4**
