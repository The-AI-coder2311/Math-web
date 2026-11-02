---
order: 3
difficulty: easy
lesson: 01-if-then-reasoning
choices: ["2","3","9","15"]
answer: A
mistakes:
  B: "3 is prime and odd, so it fits the claim. A counterexample has to break it."
  C: "9 is odd, but it isn't prime. The claim is only about primes."
  D: "15 is odd, but it isn't prime. The claim is only about primes."
verify: "[2, 3, 9, 15].find((n) => isPrime(n) && n % 2 === 0)"
---

Someone claims, "Every prime number is odd." Which number proves the claim false?

## Hint

A number that breaks the claim has to be prime, and it has to be not odd.

## Hint 2

Look for an even prime.

## Solution

We need a prime that isn't odd. The number 2 is prime, and it's even. So this one number proves the claim false.

**Answer: (A) 2**
