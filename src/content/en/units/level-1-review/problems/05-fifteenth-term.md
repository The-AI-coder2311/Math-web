---
order: 5
difficulty: easy
from: logic-patterns/01-repeating-and-growing
choices: ["60","65","70","74","75"]
answer: D
mistakes:
  A: "That's $15 \\times 4$. The list starts at 4 and goes up by 5 each time."
  B: "Check your steps. There are 14 steps of 5, which add 70."
  C: "That's the 14 steps. You still need to start from 4."
  E: "That's $15 \\times 5$. It uses too many steps and skips the start."
verify: "range(2, 15).reduce((t) => t + 5, 4)"
---

What is the 15th number in the list 4, 9, 14, 19, ...?

## Hint

How many steps does it take to reach the 15th number?

## Hint 2

It takes 14 steps of 5.

## Solution

It takes 14 steps from the 1st number: $4 + 14 \times 5 = 74$.

**Answer: (D) 74**
