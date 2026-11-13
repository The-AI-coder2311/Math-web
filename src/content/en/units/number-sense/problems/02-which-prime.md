---
order: 2
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["15","21","25","27","31"]
answer: E
mistakes:
  A: "That's $3 \\times 5$, so it isn't prime."
  B: "That's $3 \\times 7$, so it isn't prime."
  C: "$25 = 5 \\times 5$, so it isn't prime."
  D: "That's $3 \\times 9$, so it isn't prime."
verify: "[15, 21, 27, 31, 33].filter(isPrime).join()"
---

Which of these numbers is prime?

## Hint

A prime number has only one factor pair: 1 and itself. Try dividing each choice by small numbers like 3 and 5.

## Hint 2

Test each one by dividing by 3 and by 5. Use the digit-sum test for 3.

## Solution

**Step 1.** Look for a factor pair of each number, other than 1 and the number itself:

- $15 = 3 \times 5$
- $21 = 3 \times 7$
- $27 = 3 \times 9$
- $33 = 3 \times 11$

So none of these four numbers are prime.

**Step 2.** Now try 31. It isn't divisible by 2, 3, or 5. We can stop there because $6 \times 6 = 36$ is already more than 31, so any factor pair would have to include a number smaller than 6. That means its only pair is 1 and 31.

**Answer: (E) 31**
