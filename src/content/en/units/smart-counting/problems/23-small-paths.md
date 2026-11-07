---
order: 23
difficulty: easy
lesson: 04-grid-paths
choices: ["5","6","10","20"]
answer: C
mistakes:
  A: "That's the number of steps. Each path is an order of those steps."
  B: "That's 3 times 2. The steps can mix in many orders."
  D: "That's the count for 3 right and 3 up."
verify: "combos(range(1, 5), 2).length"
---

How many paths go 3 blocks right and 2 blocks up, moving only right and up?

## Hint

Each path is an order of 5 steps. Which steps go up?

## Hint 2

Choose 2 of the 5 steps to be up.

## Solution

Each path has 5 steps. Choosing which 2 are up decides the path, and there are $\frac{5 \times 4}{2} = 10$ ways.

**Answer: (C) 10**
