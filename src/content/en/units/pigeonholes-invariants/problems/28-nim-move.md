---
order: 28
difficulty: medium
lesson: 03-winning-games
choices: ["Take 2 from the pile of 3","Take 1 from the pile of 3","Take 1 from the pile of 4","Take 5 from the pile of 5"]
answer: A
mistakes:
  B: "That leaves 2, 4, and 5. In base 2, one column has an odd number of 1s."
  C: "That leaves 3, 3, and 5. Your opponent can take all 5 and copy from then on."
  D: "That leaves 3 and 4. Your opponent can make the piles equal."
verify: "(() => { const memo = {}; const win = (p) => { const key = [...p].sort().join(); if (key in memo) return memo[key]; const w = p.some((n, i) => range(1, n).some((m) => !win(p.map((x, j) => (j === i ? x - m : x))))); return (memo[key] = w); }; return [['Take 2 from the pile of 3', [1, 4, 5]], ['Take 1 from the pile of 3', [2, 4, 5]], ['Take 1 from the pile of 4', [3, 3, 5]], ['Take 5 from the pile of 5', [3, 4, 0]]].filter(([t, p]) => !win(p)).map(([t]) => t).join(); })()"
---

In a game of Nim, three piles have 3, 4, and 5 stones. Whoever takes the last stone wins. What should the first player do?

## Hint

Write each pile in base 2, and find a column with an odd number of 1s.

## Hint 2

Only the 2s column is odd. Which pile has a 1 in that column?

## Solution

In base 2, the piles are 011, 100, and 101. Only the 2s column has an odd number of 1s. The pile of 3 has a 1 there. Changing it to 1 makes every column even: 001, 100, and 101. So take 2 from the pile of 3.

**Answer: (A) Take 2 from the pile of 3**
