---
order: 28
difficulty: medium
lesson: 04-grid-paths
choices: ["9","18","24","35"]
answer: B
mistakes:
  A: "That adds the two parts. Multiply them, since a path needs both parts."
  C: "Check the second part: from (2, 1) to (4, 3) is 2 right and 2 up, which has 6 paths."
  D: "That's every path, whether or not it passes through the point."
verify: "combos(range(1, 3), 1).length * combos(range(1, 4), 2).length"
---

How many paths from $(0, 0)$ to $(4, 3)$, using only right and up steps, pass through $(2, 1)$?

## Hint

Split the trip into two parts, at the point.

## Hint 2

The first part is 2 right and 1 up. The second part is 2 right and 2 up.

## Solution

From $(0, 0)$ to $(2, 1)$, there are 3 paths. From $(2, 1)$ to $(4, 3)$, there are 6 paths. So there are $3 \times 6 = 18$ paths.

**Answer: (B) 18**
