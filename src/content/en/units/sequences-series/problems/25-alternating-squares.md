---
order: 25
difficulty: medium
lesson: 02-fast-sums
choices: ["435","450","465","930"]
answer: C
mistakes:
  A: "That's the sum up to 29. The sum here goes up to 30."
  B: "That's 15 times 30. There are 30 numbers, and their average is 15.5."
  D: "That's twice the answer. Don't forget to divide by 2."
verify: "sum(range(1, 30).map((n) => (n % 2 === 0 ? n * n : -n * n)))"
---

What is the value of $30^2 - 29^2 + 28^2 - 27^2 + \cdots + 2^2 - 1^2$?

## Hint

Group the terms in pairs, and use the difference of squares.

## Hint 2

Each pair equals the sum of its two numbers.

## Solution

Each pair equals the sum of its two numbers, as in $30^2 - 29^2 = 30 + 29$. So the whole thing is $30 + 29 + \cdots + 1 = \frac{30 \times 31}{2} = 465$.

**Answer: (C) 465**
