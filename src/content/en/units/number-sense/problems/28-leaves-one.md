---
order: 28
difficulty: hard
lesson: 04-factors-primes-leftovers
choices: ["41","61","121","181"]
answer: B
mistakes:
  A: "Test it: 41 divided by 3 leaves 2, not 1."
  C: "This works, but a smaller number also works."
  D: "This works, but a smaller number also works."
verify: "range(2, 999).find((n) => n % 3 === 1 && n % 4 === 1 && n % 5 === 1)"
---

What is the smallest whole number greater than 1 that leaves a remainder of 1 when divided by 3, by 4, and by 5?

## Hint

What can you say about the number that's 1 less?

## Hint 2

One less than the number divides evenly by 3, 4, and 5.

## Solution

If the number leaves a remainder of 1 each time, then 1 less than it is a multiple of 3, 4, and 5. So it's a multiple of 60. The smallest choice greater than 0 is 60, so the number is 61.

**Answer: (B) 61**
