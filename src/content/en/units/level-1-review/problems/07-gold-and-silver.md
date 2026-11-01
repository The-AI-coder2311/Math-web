---
order: 7
difficulty: medium
from: counting/02-when-order-matters
choices: ["9","10","20","25","120"]
answer: C
mistakes:
  A: "That's $5 + 4$. You pick gold **and** silver, so multiply."
  B: "That divides by 2, which treats the medals as the same. Gold and silver are different."
  D: "That's $5 \\times 5$, which lets one runner win both."
  E: "That's $5!$, which orders all 5 runners. Only 2 medals are given."
verify: "perms([1, 2, 3, 4, 5]).length / perms([1, 2, 3]).length"
---

Five runners are in a race. In how many ways can the gold and silver medals be given out?

## Hint

Is getting gold different from getting silver?

## Hint 2

There are 5 options for gold, and then 4 for silver.

## Solution

There are 5 options for gold and then 4 for silver: $5 \times 4 = 20$.

**Answer: (C) 20**
