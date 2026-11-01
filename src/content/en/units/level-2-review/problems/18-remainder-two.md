---
order: 18
difficulty: hard
from: primes-remainders/03-gcf-and-lcm
choices: ["22","32","122","62","602"]
answer: D
mistakes:
  A: "It leaves 1 when divided by 3."
  B: "It leaves 2 when divided by 3, but 0 when divided by 4."
  C: "It works, but it isn't the smallest."
  E: "It works, but it isn't the smallest."
verify: "range(3, 1000).find((n) => [3, 4, 5].every((d) => n % d === 2))"
---

What is the smallest whole number greater than 2 that leaves a remainder of 2 when divided by each of 3, 4, and 5?

## Hint

What can you say about the number minus 2?

## Hint 2

It's a common multiple of 3, 4, and 5.

## Solution

The number minus 2 is a common multiple of 3, 4, and 5. The LCM is 60, so the number is $60 + 2 = 62$.

**Answer: (D) 62**
