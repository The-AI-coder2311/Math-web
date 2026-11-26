---
order: 12
difficulty: medium
from: aime-combinatorics/04-catalan-and-recursions
choices: ["42","132","429","462","924"]
answer: B
mistakes:
  A: "That's the 5th Catalan number. Six steps right and six steps up give the 6th."
  C: "That's the 7th Catalan number. Six steps right and six steps up give the 6th."
  D: "That's half of all 924 paths. Far fewer than half stay on one side, because every path that crosses the line counts as bad."
  E: "That's every path from corner to corner, with no restriction."
verify: "(() => { const n = 6; const g = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0)); g[0][0] = 1; for (let x = 0; x <= n; x++) for (let y = 0; y <= x; y++) { if (x === 0 && y === 0) continue; g[x][y] = (x > 0 ? g[x - 1][y] : 0) + (y > 0 ? g[x][y - 1] : 0); } return g[n][n]; })()"
---

A path from $(0, 0)$ to $(6, 6)$ uses unit steps to the right or up, and it never goes above the line $y = x$. How many such paths are there?

## Hint

This is a Catalan number.

## Hint 2

Count all the paths, then subtract the bad ones. A bad path touches the line $y = x + 1$. Reflect the part of it before that first touch.

## Solution

There are $\binom{12}{6} = 924$ paths in all. Take a bad path and reflect its start, up to its first touch of $y = x + 1$, across that line. This matches bad paths one to one with paths from $(-1, 1)$ to $(6, 6)$, which have 7 right steps and 5 up steps. There are $\binom{12}{5} = 792$ of them. So the count is

$$924 - 792 = 132$$

This is the 6th Catalan number, $\frac{1}{7}\binom{12}{6}$, which is $\frac{924}{7} = 132$.

**Answer: (B) 132**
