---
order: 1
difficulty: easy
lesson: 01-prime-factorization
choices: ["3","4","5","6","12"]
answer: A
mistakes:
  B: "That counts the 3 twice. The question asks for different primes."
  C: "That counts some composite factors too. Only primes count."
  D: "That counts factors like 6 and 9, which aren't prime."
  E: "That's how many factors 90 has in all. Only 2, 3, and 5 are prime."
verify: "factors(90).filter(isPrime).length"
---

How many different prime numbers divide 90?

## Hint

Break 90 into primes. Start with $90 = 9 \times 10$.

## Hint 2

$90 = 2 \times 3 \times 3 \times 5$. Count the different primes.

## Solution

**Step 1.** Split 90: $90 = 9 \times 10$.

**Step 2.** Keep splitting: $9 = 3 \times 3$ and $10 = 2 \times 5$. So $90 = 2 \times 3 \times 3 \times 5$.

**Step 3.** The different primes are 2, 3, and 5, which makes 3 primes.

**Answer: (A) 3**
