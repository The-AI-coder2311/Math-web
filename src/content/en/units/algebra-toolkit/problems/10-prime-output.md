---
order: 19
difficulty: hard
lesson: 03-quadratics-and-vieta
choices: ["0","1","2","3","4"]
answer: C
mistakes:
  A: "Try $n = 6$: $1 \\times 3 = 3$, which is prime."
  B: "That misses a case. Try both $n = 6$ and $n = 2$."
  D: "Test all of the cases. $n = 4$ gives $-1$, which isn't prime."
  E: "Test all of the cases. $n = 4$ gives $-1$, which isn't prime."
verify: "range(1, 1000).filter((n) => isPrime(n * n - 8 * n + 15)).length"
---

For how many positive whole numbers $n$ is $n^2 - 8n + 15$ a prime number?

## Hint

Factor the expression. A prime number can only be split into a product in one way: 1 times itself. Be careful, since a product of two negative numbers is positive.

## Hint 2

$(n - 3)(n - 5)$ can only be prime if one factor is 1 or $-1$. Test those cases.

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
