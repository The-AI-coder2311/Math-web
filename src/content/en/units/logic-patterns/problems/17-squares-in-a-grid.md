---
order: 17
difficulty: hard
lesson: 02-small-cases
choices: ["16","25","30","36","40"]
answer: C
mistakes:
  A: "That counts only the small squares. Larger squares count too."
  B: "That leaves out some sizes. Add 16, 9, 4, and 1."
  D: "That's $6 \\times 6$. Count by size instead."
  E: "That's more than there are. Count by size: 16, 9, 4, and 1."
verify: "sum(range(1, 4).map((s) => (5 - s) * (5 - s)))"
---

A square grid has 4 rows and 4 columns of small squares. How many squares of all sizes are in it?

## Hint

Count by size. How many 1 by 1 squares are there? How many 2 by 2?

## Hint 2

A 2 by 2 square can sit in 3 positions across and 3 down, which is 9 spots.

## Solution

Count by size. There are 16 squares of size 1, 9 of size 2, 4 of size 3, and 1 of size 4. The total is $16 + 9 + 4 + 1 = 30$.

**Answer: (C) 30**
