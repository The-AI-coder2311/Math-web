---
order: 9
difficulty: medium
choices: ['$\frac{5}{12}$', '$\frac{1}{3}$', '$\frac{1}{2}$', '$\frac{5}{36}$', '$\frac{7}{18}$']
answer: A
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => isPrime(a + b)).length, 36)"
---

You roll two standard dice. What is the probability that the sum is a prime number?

## Hint

Which prime numbers can two dice add up to? For each, how many ways are there to make it? The table of totals in the Intro to Probability unit can help.

## Solution

**Step 1.** The possible sums go from 2 to 12. The primes among them are 2, 3, 5, 7, and 11.

**Step 2.** Count the ways to roll each one:

| Sum | 2 | 3 | 5 | 7 | 11 |
|---|---|---|---|---|---|
| Ways | 1 | 2 | 4 | 6 | 2 |

**Step 3.** That's $1 + 2 + 4 + 6 + 2 = 15$ ways out of 36. The probability is $\frac{15}{36}$, which simplifies to $\frac{5}{12}$.

**Answer: (A) $\frac{5}{12}$**
