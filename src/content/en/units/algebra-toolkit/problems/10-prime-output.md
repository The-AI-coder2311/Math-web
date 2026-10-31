---
order: 10
difficulty: hard
choices: [0, 1, 2, 3, 4]
answer: C
verify: "range(1, 1000).filter((n) => isPrime(n * n - 8 * n + 15)).length"
---

For how many positive whole numbers $n$ is $n^2 - 8n + 15$ a prime number?

## Hint

Factor the expression. A prime number can only be split into a product in one way: 1 times itself. Be careful, since a product of two negative numbers is positive.

## Solution

**Step 1.** Factor: $n^2 - 8n + 15 = (n - 3)(n - 5)$.

**Step 2.** For this product to be prime, one factor must be 1 or $-1$. (If both factors were bigger than 1, or both less than $-1$, the product wouldn't be prime.)

**Step 3.** Try each case:

| Case | Value of $n$ | The other factor | Product |
|---|---|---|---|
| $n - 3 = 1$ | 4 | $-1$ | $-1$, not prime |
| $n - 3 = -1$ | 2 | $-3$ | 3, prime |
| $n - 5 = 1$ | 6 | 3 | 3, prime |
| $n - 5 = -1$ | 4 | 1 | $-1$, not prime |

**Step 4.** Only $n = 2$ and $n = 6$ work, so there are 2 values.

**Answer: (C) 2**
