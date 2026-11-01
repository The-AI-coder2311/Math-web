---
order: 8
difficulty: medium
lesson: 02-small-cases
choices: ["16","64","32","56","28"]
answer: E
mistakes:
  A: "That's $8 \\times 2$. Each player plays 7 others."
  C: "That's $8 \\times 4$. Each player plays 7 games, and each game has 2 players."
  D: "That counts each game twice. A game has 2 players, so divide by 2."
  B: "That's $8 \\times 8$, which has players playing themselves."
verify: "combos(range(1, 8), 2).length"
---

In a chess club tournament, each of 8 players plays every other player exactly once. How many games are played?

## Hint

This works like handshakes. How many games does each player play? Does that count any game twice?

## Hint 2

$8 \times 7$ counts each game twice, once for each player in it.

## Solution

**Step 1.** Each of the 8 players plays 7 games, which gives $8 \times 7 = 56$.

**Step 2.** But each game has 2 players, so every game was counted twice. Divide by 2: $56 \div 2 = 28$.

**Answer: (E) 28**
