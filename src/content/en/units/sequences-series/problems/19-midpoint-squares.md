---
order: 19
difficulty: hard
lesson: 03-geometric-sequences
choices: ["64","96","128","144","256"]
answer: C
mistakes:
  A: "That's only the first square. The question asks for all of them together."
  B: "That's only the first two squares. The list goes on forever."
  D: "You may have used a different ratio. Each inner square has exactly half of the area of the one around it."
  E: "You may have used a ratio of $\\frac{3}{4}$. The corner triangles show that each square keeps exactly half of the area."
verify: "Math.round(sum(range(0, 60).map((n) => 64 / 2 ** n)))"
---

A square has an area of 64. Joining the midpoints of its sides makes a smaller square inside it. The same thing is done to the smaller square, and this continues forever. If you add up the areas of all of the squares, including the first one, what is the sum? (Count the full area of each square, even though the squares sit inside each other.)

## Hint

Sketch the first two squares. What fraction of the big square does the inner square cover?

## Hint 2

The inner square has half of the area. So the areas are 64, 32, 16, and so on. Use $\frac{a}{1 - r}$.

## Solution

**Step 1.** Each new square has half of the area of the last, so the areas are 64, 32, 16, and so on.

**Step 2.** The endless sum with first term 64 and ratio $\frac{1}{2}$ is $64 \div \frac{1}{2} = 128$.

**Answer: (C) 128**
