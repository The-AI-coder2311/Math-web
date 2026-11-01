---
order: 10
difficulty: medium
from: fractions-ratios/02-ratios-as-boxes
choices: ["10","35","18","40","63"]
answer: B
mistakes:
  A: "That's the red beads. The question asks about blue."
  C: "That's $2 \\times 9$. Find what one box holds first."
  D: "That's 8 boxes. Blue has 7."
  E: "That's $7 \\times 9$, which is more than the total. Each box holds 5."
verify: "range(1, 45).find((x) => x * 2 === (45 - x) * 7)"
---

Red and blue beads are in a ratio of 2 to 7, and there are 45 beads. How many are blue?

## Hint

How many boxes are there? How much does each hold?

## Hint 2

There are 9 boxes, so each holds 5.

## Solution

There are 9 boxes, so each holds $45 \div 9 = 5$. Blue fills 7 boxes: $7 \times 5 = 35$.

**Answer: (B) 35**
