---
order: 6
difficulty: easy
lesson: 03-winning-games
choices: ["The first player","The second player","It depends on luck"]
answer: B
mistakes:
  A: "Build the table. With 1 or 2 stones, you win at once, but 3 stones is a loss for the player to move."
  C: "With perfect play and no chance involved, one player can always force a win."
verify: "(() => { const win = (n) => n > 0 && [1, 2].some((m) => m <= n && !win(n - m)); return win(9) ? 'The first player' : 'The second player'; })()"
---

There are 9 stones on a table. Two players take turns removing 1 or 2 stones, and whoever takes the last stone wins. If both play perfectly, who wins?

## Hint

Work backward. Who wins with 1 stone? With 2? With 3?

## Hint 2

With 3 stones, any move leaves 1 or 2, and your opponent then wins. So 3 is a losing position. What's the pattern?

## Solution

With 1 or 2 stones, the player to move wins. With 3, every move leaves a win for the opponent, so it's a loss. In the same way, the losing positions are all multiples of 3. Since 9 is a multiple of 3, the player to move loses, so the second player wins.

**Answer: (B) The second player**
