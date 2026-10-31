---
order: 9
difficulty: hard
choices: [24, 36, 48, 60, 120]
answer: C
verify: "perms(['A', 'B', 'C', 'D', 'E']).filter((p) => Math.abs(p.indexOf('A') - p.indexOf('B')) === 1).length"
---

Five friends line up for a photo. Two of them, Ari and Bo, insist on standing next to each other. How many different lineups are possible?

## Hint

Pretend Ari and Bo are tied together and count as one person. How many "people" are lining up? Then, how many ways can Ari and Bo stand within their pair?

## Solution

**Step 1.** Treat Ari and Bo as one unit. Now there are 4 things to line up: the unit and the 3 other friends. That can be done in $4 \times 3 \times 2 \times 1 = 24$ ways.

**Step 2.** Inside the unit, Ari and Bo can stand in 2 orders.

**Step 3.** The total is $24 \times 2 = 48$.

**Answer: (C) 48**
