---
order: 17
difficulty: hard
lesson: 04-grid-paths
choices: ["12","15","20","35","56"]
answer: E
mistakes:
  A: "That's too few. Write a route as a list of 8 letters, and use \"8 choose 3.\""
  B: "That's $5 \\times 3$. Routes aren't counted by multiplying the blocks. Choose which 3 of the 8 blocks go north."
  C: "That's \"6 choose 3.\" There are 8 moves in all."
  D: "That's \"7 choose 3.\" There are 8 moves in all."
verify: "new Set(perms([...'EEEEENNN']).map((p) => p.join(''))).size"
---

Kai walks to school on a grid of streets. The school is 5 blocks east and 3 blocks north of Kai's home. Kai only walks east or north. How many different routes can Kai take?

## Hint

Write each route as a list of 8 moves, such as E E N E N E E N. What decides the route?

## Hint 2

Every route has 8 moves, and 3 of them are north. Choose which 3.

## Solution

**Step 1.** Every route has 8 moves in all: 5 east and 3 north.

**Step 2.** A route is decided by which 3 of the 8 moves are north. So we need "8 choose 3":

$$\frac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56$$

**Answer: (E) 56**
