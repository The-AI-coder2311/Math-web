---
order: 10
difficulty: medium
from: fractions-ratios/02-ratios-as-boxes
choices: ["5","10","14","18","35"]
answer: E
mistakes:
  A: "That's the size of one part, $45 \\div 9 = 5$. Blue is 7 of those parts."
  B: "That's the red beads. The question asks about blue."
  C: "That's $2 \\times 7$, which multiplies the two ratio numbers. Split the 45 beads into $2 + 7 = 9$ equal parts first."
  D: "That's $2 \\times 9$. Find what one box holds first."
verify: "range(1, 45).find((x) => x * 2 === (45 - x) * 7)"
---

Red and blue beads are in a ratio of 2 to 7, and there are 45 beads. How many are blue?

## Hint

How many boxes are there? How much does each hold?

## Hint 2

There are 9 boxes, so each holds 5.

## Solution

There are 9 boxes, so each holds $45 \div 9 = 5$. Blue fills 7 boxes: $7 \times 5 = 35$.

**Answer: (E) 35**
