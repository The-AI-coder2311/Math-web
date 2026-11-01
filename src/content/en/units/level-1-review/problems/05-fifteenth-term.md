---
order: 5
difficulty: easy
from: logic-patterns/01-repeating-and-growing
choices: ["65","74","70","75","79"]
answer: B
mistakes:
  A: "Check your steps. There are 14 steps of 5, which add 70."
  C: "That's the 14 steps. You still need to start from 4."
  D: "That's $15 \\times 5$. It uses too many steps and skips the start."
  E: "That's $4 + 15 \\times 5$, which is one step too many."
verify: "range(2, 15).reduce((t) => t + 5, 4)"
---

What is the 15th number in the list 4, 9, 14, 19, ...?

## Hint

How many steps does it take to reach the 15th number?

## Hint 2

It takes 14 steps of 5.

## Solution

It takes 14 steps from the 1st number: $4 + 14 \times 5 = 74$.

**Answer: (B) 74**
