---
order: 13
difficulty: medium
lesson: 02-restrictions
choices: ["240","360","480","600","720"]
answer: C
mistakes:
  A: "That's the count with them **together**. Subtract it from 720."
  B: "That's half. They're apart more often than they're together."
  D: "That's $720 - 120$, which forgets that the two can swap inside the block."
  E: "That's every lineup, with no rule."
verify: "perms([1, 2, 3, 4, 5, 6]).filter((p) => Math.abs(p.indexOf(1) - p.indexOf(2)) !== 1).length"
---

Six friends line up, and two of them refuse to stand next to each other. How many lineups are possible?

## Hint

Count the opposite. How many lineups have them together?

## Hint 2

Together: $5! \times 2 = 240$. All lineups: $6! = 720$.

## Solution

There are $6! = 720$ lineups. They're together in $5! \times 2 = 240$ of them. So they're apart in $720 - 240 = 480$.

**Answer: (C) 480**
