---
order: 30
difficulty: hard
lesson: 05-nt-constructions
choices: ["49","64","81","100","343"]
answer: A
mistakes:
  B: "That's $8 \\times 8$. Check the count for one prime: $16 - 9 = 7$."
  C: "That's $9 \\times 9$. Count the exponent pairs whose maximum is exactly 3."
  D: "Count exponent pairs for each prime: 16 total minus 9 where both are below 3."
  E: "That's $7^3$. There are only two primes, 2 and 5, so multiply two 7s."
verify: "product(factors(1000), factors(1000)).filter(([a, b]) => lcm(a, b) === 1000).length"
---

How many ordered pairs of positive integers $(a, b)$ have least common multiple 1000?

## Hint

Handle the primes 2 and 5 separately, then multiply.

## Hint 2

For the prime 2, the exponents in $a$ and $b$ are each from 0 to 3, and the larger one must be 3.

## Solution

Since $1000 = 2^3 \times 5^3$, both $a$ and $b$ are divisors of 1000. For the prime 2, the exponent pair $(i, j)$ ranges over $4 \times 4 = 16$ options, and the maximum is 3 unless both are at most 2, which is 9 options. So there are 7 good pairs. The prime 5 also gives 7. The total is $7 \times 7 = 49$.

**Answer: (A) 49**
