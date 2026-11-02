---
order: 14
difficulty: medium
lesson: 03-winning-games
choices: ["1","2","3","There is no winning move"]
answer: B
mistakes:
  A: "That leaves 13 stones. Your opponent can take 1 and leave you a multiple of 4."
  C: "That leaves 11 stones. Your opponent can take 3 and leave you a multiple of 4."
  D: "The losing positions are multiples of 4, and 14 isn't one. So a winning move exists."
verify: "(() => { const win = (n) => n > 0 && [1, 2, 3].some((m) => m <= n && !win(n - m)); return [1, 2, 3].filter((m) => !win(14 - m)).join(); })()"
---

There are 14 stones on a table. Two players take turns removing 1, 2, or 3 stones, and whoever takes the last stone wins. How many stones should the first player take to be sure of winning?

## Hint

Which amounts are losing positions for the player about to move? Build a table up to 8.

## Hint 2

The losing positions are multiples of 4. Which move leaves your opponent one of those?

## Solution

The losing positions are the multiples of 4. So the first player should leave 12 stones, by taking 2. After that, the first player answers each move so that each round removes 4 stones.

**Answer: (B) 2**
