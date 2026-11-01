---
order: 6
difficulty: easy
lesson: 04-grid-paths
choices: ["4","8","6","16","24"]
answer: C
mistakes:
  A: "That's the number of moves. Each order of those moves is a different route."
  B: "List them: EENN, ENEN, ENNE, NEEN, NENE, NNEE. There are 6."
  D: "That's $2^4$, which allows any mix of moves. You need exactly 2 of each."
  E: "That's $4!$, which treats the two Es as different."
verify: "new Set(perms([...'EENN']).map((p) => p.join(''))).size"
---

You walk 2 blocks east and 2 blocks north, in any order, moving only east or north. How many different routes are there?

## Hint

Write a route as a list of letters, like E N E N. How many moves are there?

## Hint 2

There are 4 moves. Choose which 2 are north: $\binom{4}{2}$.

## Solution

There are 4 moves, and a route is decided by which 2 are north: $\binom{4}{2} = 6$.

**Answer: (C) 6**
