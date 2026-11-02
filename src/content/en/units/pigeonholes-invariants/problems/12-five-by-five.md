---
order: 12
difficulty: medium
lesson: 02-parity-and-invariants
choices: ["A corner square","The center square","A square next to a corner","Any of these can work"]
answer: C
mistakes:
  A: "With a corner removed, there are 12 squares of each color left, and dominoes can cover them."
  B: "With the center removed, there are 12 squares of each color left, and dominoes can go around the rings."
  D: "Color the board like a chessboard. One of these removals leaves unequal colors."
verify: "[[0, 0, 'A corner square'], [2, 2, 'The center square'], [0, 1, 'A square next to a corner']].filter(([r, c]) => (r + c) % 2 === 1).map((x) => x[2]).join()"
---

A 5 by 5 board has one square removed, and the other 24 squares are to be covered by dominoes. Each domino covers two squares that touch. Which removal makes that impossible?

## Hint

Color the board like a chessboard, with black corners. How many squares does each color have?

## Hint 2

There are 13 black and 12 white squares. Each domino covers one of each. Which color must the removed square be?

## Solution

With black corners, there are 13 black and 12 white squares. Each domino covers one of each, so the board needs equal counts. So the removed square must be black. A corner and the center are black, but a square next to a corner is white. Removing it leaves 13 black and 11 white, which is impossible.

**Answer: (C) A square next to a corner**
