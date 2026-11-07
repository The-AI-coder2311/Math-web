---
order: 26
difficulty: medium
lesson: 02-fast-sums
choices: ["700","728","735","770"]
answer: C
mistakes:
  A: "That's 7 times 100. Multiply 7 by the sum from 1 to 14."
  B: "Check the count. There are 14 multiples of 7 up to 98, and 7 times 105 is the sum."
  D: "That adds 105, which is past 100."
verify: "sum(range(1, 100).filter((n) => n % 7 === 0))"
---

What is the sum of all of the multiples of 7 from 1 to 100?

## Hint

What's the largest multiple of 7 up to 100?

## Hint 2

$98 = 7 \times 14$. So pull out the 7.

## Solution

The sum is $7 \times (1 + 2 + \cdots + 14) = 7 \times \frac{14 \times 15}{2} = 7 \times 105 = 735$.

**Answer: (C) 735**
