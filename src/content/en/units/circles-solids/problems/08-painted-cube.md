---
order: 11
difficulty: medium
lesson: 04-boxes-and-3d
choices: ["8","12","24","36","48"]
answer: C
mistakes:
  A: "That's the corners, which have 3 painted faces."
  B: "That's the number of edges. Each edge has 2 such cubes."
  D: "That counts 3 per edge. The 2 corners on each edge don't count."
  E: "That counts every edge cube, including corners. Corners have 3 painted faces."
verify: "product(range(1, 4), range(1, 4), range(1, 4)).filter((cube) => cube.filter((x) => x === 1 || x === 4).length === 2).length"
---

A cube with sides of 4 is painted on the outside and then cut into 64 small cubes. How many of the small cubes have paint on exactly 2 faces?

## Hint

Small cubes with exactly 2 painted faces sit along the edges of the big cube, but not at the corners. How many are on each edge?

## Hint 2

Each of the 12 edges has 4 small cubes, and 2 of those are corners.

## Solution

**Step 1.** Each edge of the big cube has 4 small cubes. The 2 at the ends are corners, which have 3 painted faces. So each edge has $4 - 2 = 2$ small cubes with exactly 2 painted faces.

**Step 2.** A cube has 12 edges, so the total is $12 \times 2 = 24$.

**Answer: (C) 24**
