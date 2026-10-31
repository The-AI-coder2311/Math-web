---
order: 7
difficulty: medium
choices: [16, 28, 32, 56, 64]
answer: B
verify: "combos(range(1, 8), 2).length"
---

In a chess club tournament, each of 8 players plays every other player exactly once. How many games are played?

## Hint

This works like handshakes. How many games does each player play? Does that count any game twice?

## Solution

**Step 1.** Each of the 8 players plays 7 games, which gives $8 \times 7 = 56$.

**Step 2.** But each game has 2 players, so every game was counted twice. Divide by 2: $56 \div 2 = 28$.

**Answer: (B) 28**
