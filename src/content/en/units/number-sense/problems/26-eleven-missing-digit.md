---
order: 26
difficulty: medium
lesson: 03-divisibility-rules
choices: ["2","5","8","9"]
answer: C
mistakes:
  A: "Test it: 523 divided by 11 leaves a remainder. Use the alternating sum."
  B: "Test it: 553 divided by 11 leaves a remainder. Use the alternating sum."
  D: "Test it: 593 divided by 11 leaves a remainder. Use the alternating sum."
verify: "[2, 5, 8, 9].find((d) => (500 + 10 * d + 3) % 11 === 0)"
---

The three-digit number $5d3$ has middle digit $d$, and it's divisible by 11. What is $d$?

## Hint

Use the alternating sum of the digits: first minus second plus third.

## Hint 2

That sum is $5 - d + 3 = 8 - d$. When is it a multiple of 11?

## Solution

The alternating sum is $5 - d + 3 = 8 - d$. For a digit $d$, this is a multiple of 11 only when $d = 8$. Check: $583 = 11 \times 53$.

**Answer: (C) 8**
