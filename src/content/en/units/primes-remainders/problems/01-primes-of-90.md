---
order: 1
difficulty: easy
choices: [2, 3, 4, 5, 6]
answer: B
verify: "factors(90).filter(isPrime).length"
---

How many different prime numbers divide 90?

## Hint

Break 90 into primes. Start with $90 = 9 \times 10$.

## Solution

**Step 1.** Split 90: $90 = 9 \times 10$.

**Step 2.** Keep splitting: $9 = 3 \times 3$ and $10 = 2 \times 5$. So $90 = 2 \times 3 \times 3 \times 5$.

**Step 3.** The different primes are 2, 3, and 5, which makes 3 primes.

**Answer: (B) 3**
