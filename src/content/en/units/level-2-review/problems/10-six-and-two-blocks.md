---
order: 10
difficulty: medium
from: smart-counting/04-grid-paths
choices: ["12","28","36","56","64"]
answer: B
mistakes:
  A: "That's $6 \\times 2$. Write a route as a list of letters, and choose spots."
  C: "That's $\\binom{9}{2}$. There are 8 moves, not 9."
  D: "That's $8 \\times 7$, which counts each pair of spots twice."
  E: "That's $2^6$. Each route needs exactly 6 Es and 2 Ns."
verify: "new Set(perms([...'EEEEEENN']).map((x) => x.join(''))).size"
---

You walk 6 blocks east and 2 blocks north, in any order, moving only east or north. How many different routes are there?

## Hint

How many moves are there in all? What decides the route?

## Hint 2

There are 8 moves. Choose which 2 are north.

## Solution

There are 8 moves, and a route is decided by which 2 are north: $\binom{8}{2} = \frac{8 \times 7}{2} = 28$.

**Answer: (B) 28**
