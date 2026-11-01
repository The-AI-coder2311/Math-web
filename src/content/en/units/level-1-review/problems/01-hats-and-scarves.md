---
order: 1
difficulty: easy
from: counting/01-multiply-choices
choices: ["8","9","25","15","35"]
answer: D
mistakes:
  A: "That's $3 + 5$. She picks a hat **and** a scarf, so multiply."
  B: "That's $3 \\times 3$. There are 5 scarves."
  C: "That's $5 \\times 5$. There are 3 hats."
  E: "Check your multiplication: $3 \\times 5$."
verify: "product(range(1, 3), range(1, 5)).length"
---

Rosa owns 3 hats and 5 scarves. She wears one of each. How many different pairs can she choose?

## Hint

Is she making one choice and then another?

## Hint 2

For each of the 3 hats, there are 5 scarves.

## Solution

She picks a hat and then a scarf, so multiply: $3 \times 5 = 15$.

**Answer: (D) 15**
