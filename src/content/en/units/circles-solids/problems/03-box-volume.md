---
order: 3
difficulty: easy
lesson: 04-boxes-and-3d
choices: ["12","24","47","60","94"]
answer: D
mistakes:
  A: "That's one layer. There are 5 layers."
  B: "That's 2 layers. There are 5 layers."
  C: "That adds the areas of three faces. Volume is length times width times height."
  E: "That's the surface area. The question asks how many cubes fit inside."
verify: "product(range(1, 3), range(1, 4), range(1, 5)).length"
---

A box measures 3 inches by 4 inches by 5 inches. How many 1-inch cubes does it take to fill the box?

## Hint

How many cubes are in one layer on the bottom? How many layers are there?

## Hint 2

The bottom layer has $3 \times 4 = 12$ cubes. There are 5 layers.

## Solution

**Step 1.** One layer on the bottom has $3 \times 4 = 12$ cubes.

**Step 2.** There are 5 layers, so the total is $12 \times 5 = 60$ cubes.

**Answer: (D) 60**
