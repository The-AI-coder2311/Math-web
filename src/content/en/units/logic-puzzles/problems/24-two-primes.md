---
order: 24
difficulty: medium
lesson: 01-if-then-reasoning
choices: ["3 and 5","5 and 7","2 and 3","11 and 13"]
answer: C
mistakes:
  A: "They add up to 8, which is even, so they fit the claim."
  B: "They add up to 12, which is even, so they fit the claim."
  D: "They add up to 24, which is even, so they fit the claim."
verify: "[[3, 5], [5, 7], [2, 3], [11, 13]].filter(([a, b]) => (a + b) % 2 === 1).map(([a, b]) => a + ' and ' + b).join()"
---

Someone claims, "The sum of two different primes is always even." Which pair proves the claim false?

## Hint

A counterexample needs an odd sum.

## Hint 2

Odd plus odd is even. So one of the primes must be even. Which prime is even?

## Solution

An odd sum needs one odd number and one even number. The only even prime is 2. So 2 and 3 work, with a sum of 5.

**Answer: (C) 2 and 3**
