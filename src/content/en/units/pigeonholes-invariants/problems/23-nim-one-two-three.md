---
order: 23
difficulty: easy
lesson: 03-winning-games
choices: ["The first player","The second player"]
answer: B
mistakes:
  A: "Write the piles in base 2: 01, 10, and 11. Each column has an even number of 1s."
verify: "(() => { const memo = {}; const win = (p) => { const key = [...p].sort().join(); if (key in memo) return memo[key]; const w = p.some((n, i) => range(1, n).some((m) => !win(p.map((x, j) => (j === i ? x - m : x))))); return (memo[key] = w); }; return win([1, 2, 3]) ? 'The first player' : 'The second player'; })()"
---

In a game of Nim, three piles have 1, 2, and 3 stones. On your turn, you take any number of stones from one pile. Whoever takes the last stone wins. If both play perfectly, who wins?

## Hint

Write each pile in base 2.

## Hint 2

The piles are 01, 10, and 11. Count the 1s in each column.

## Solution

In base 2, the piles are 01, 10, and 11. Each column has two 1s, which is an even number. So the player to move loses, and the second player wins.

**Answer: (B) The second player**
