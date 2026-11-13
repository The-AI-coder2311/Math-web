---
order: 17
difficulty: hard
from: smart-counting/02-restrictions
choices: ["36","72","144","240","720"]
answer: C
mistakes:
  A: "That's $6 \\times 6$. The girls have 4 gaps to choose from, which gives 24 ways."
  B: "That counts half as many. Check: $3! \\times 24$."
  D: "The boys line up in 6 ways, and the girls in 24."
  E: "That's $6!$, every lineup with no rule."
verify: "perms(['B1', 'B2', 'B3', 'G1', 'G2', 'G3']).filter((x) => x.every((v, i) => i === 0 || !(v[0] === 'G' && x[i - 1][0] === 'G'))).length"
---

Three boys and 3 girls line up. No two girls may stand next to each other. How many lineups are possible?

## Hint

Line up the boys first. How many gaps do they make?

## Hint 2

The boys line up in 6 ways and make 4 gaps. The girls take 3 different gaps.

## Solution

The boys line up in $3! = 6$ ways, making 4 gaps. The girls take 3 different gaps in $4 \times 3 \times 2 = 24$ ways. The total is $6 \times 24 = 144$.

**Answer: (C) 144**
