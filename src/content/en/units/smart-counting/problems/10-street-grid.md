---
order: 10
difficulty: hard
choices: [12, 20, 35, 56, 70]
answer: D
verify: "new Set(perms([...'EEEEENNN']).map((p) => p.join(''))).size"
---

Kai walks to school on a grid of streets. The school is 5 blocks east and 3 blocks north of Kai's home. Kai only walks east or north. How many different routes can Kai take?

## Hint

Write each route as a list of 8 moves, such as E E N E N E E N. What decides the route?

## Solution

**Step 1.** Every route has 8 moves in all: 5 east and 3 north.

**Step 2.** A route is decided by which 3 of the 8 moves are north. So we need "8 choose 3":

$$\frac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56$$

**Answer: (D) 56**
