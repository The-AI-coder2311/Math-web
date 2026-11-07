---
order: 29
difficulty: hard
lesson: 03-winning-games
choices: ["Take 1 from the pile of 2","Take 1 from the pile of 5","Take 1 from the pile of 6","Take 2 from the pile of 6"]
answer: B
mistakes:
  A: "That leaves 1, 5, and 6. In base 2, the columns aren't all even."
  C: "That leaves 2, 5, and 5. Your opponent can take the 2, leaving equal piles for you."
  D: "That leaves 2, 5, and 4. In base 2, the columns aren't all even."
verify: "(() => { const memo = {}; const win = (p) => { const key = [...p].sort().join(); if (key in memo) return memo[key]; const w = p.some((n, i) => range(1, n).some((m) => !win(p.map((x, j) => (j === i ? x - m : x))))); return (memo[key] = w); }; return [['Take 1 from the pile of 2', [1, 5, 6]], ['Take 1 from the pile of 5', [2, 4, 6]], ['Take 1 from the pile of 6', [2, 5, 5]], ['Take 2 from the pile of 6', [2, 5, 4]]].filter(([t, p]) => !win(p)).map(([t]) => t).join(); })()"
---

In a game of Nim, three piles have 2, 5, and 6 stones. Whoever takes the last stone wins. What should the first player do?

## Hint

Write each pile in base 2. Which column has an odd number of 1s?

## Hint 2

The 1s column is odd. Only the pile of 5 has a 1 there.

## Solution

In base 2, the piles are 010, 101, and 110. Only the 1s column is odd, and only the pile of 5 has a 1 there. Changing it to 4 gives 010, 100, and 110, where every column is even. So take 1 from the pile of 5.

**Answer: (B) Take 1 from the pile of 5**
