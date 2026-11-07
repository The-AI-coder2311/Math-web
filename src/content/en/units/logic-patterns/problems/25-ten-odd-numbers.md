---
order: 25
difficulty: medium
lesson: 02-small-cases
choices: ["55","81","100","121"]
answer: C
mistakes:
  A: "That's the sum of 1 through 10, not the first 10 odd numbers."
  B: "That's the sum of the first 9 odd numbers."
  D: "That's the sum of the first 11 odd numbers."
verify: "sum(range(1, 10).map((n) => 2 * n - 1))"
---

What is the sum of the first 10 odd numbers, $1 + 3 + 5 + \cdots + 19$?

## Hint

Try small cases: 1, then $1 + 3$, then $1 + 3 + 5$.

## Hint 2

The sums are 1, 4, and 9. What do you notice?

## Solution

The sums of the first few odd numbers are 1, 4, 9, and 16, which are perfect squares. So the first 10 odd numbers add up to $10 \times 10 = 100$.

**Answer: (C) 100**
