---
order: 7
difficulty: medium
from: counting/02-when-order-matters
choices: ["2","5","9","10","20"]
answer: E
mistakes:
  A: "That's the number of medals. The question asks for the number of ways to give them out."
  B: "That counts only the ways to give out the gold medal. For each one, 4 runners could still win silver."
  C: "That's $5 + 4$. You pick gold **and** silver, so multiply."
  D: "That divides by 2, which treats the medals as the same. Gold and silver are different."
verify: "perms([1, 2, 3, 4, 5]).length / perms([1, 2, 3]).length"
---

Five runners are in a race. In how many ways can the gold and silver medals be given out?

## Hint

Is getting gold different from getting silver?

## Hint 2

There are 5 options for gold, and then 4 for silver.

## Solution

There are 5 options for gold and then 4 for silver: $5 \times 4 = 20$.

**Answer: (E) 20**
