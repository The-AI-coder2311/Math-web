---
order: 4
difficulty: easy
lesson: 02-restrictions
choices: ["6","12","18","24","48"]
answer: B
mistakes:
  A: "That forgets that the two friends can swap inside the block."
  C: "That multiplies by 3. Inside the block, 2 people have only 2 orders."
  D: "That's every lineup of 4, with no rule."
  E: "That's $4! \\times 2$. Once they're glued, there are only 3 things to arrange."
verify: "perms(['A', 'B', 'C', 'D']).filter((p) => Math.abs(p.indexOf('A') - p.indexOf('B')) === 1).length"
---

Four friends line up, and two of them insist on standing next to each other. How many lineups are possible?

## Hint

Glue the two friends together. How many things are you arranging now?

## Hint 2

There are 3 things to arrange, which gives $3! = 6$. The two can also swap.

## Solution

Glue the two friends together, so there are 3 things to arrange: $3! = 6$ ways. Inside the block, they can stand in 2 orders. The total is $6 \times 2 = 12$.

**Answer: (B) 12**
