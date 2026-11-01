---
order: 20
difficulty: hard
lesson: 04-mixed-circle-problems
choices: ["5","6","10","12","13"]
answer: D
mistakes:
  A: "That's the vertical leg, the difference of the radii. The distance along the line is the level leg."
  B: "That's $\\sqrt{4 \\times 9}$, which is half of the distance. The formula has a 2 in front."
  C: "You may have used a different hypotenuse. The centers are $4 + 9 = 13$ apart."
  E: "That's the distance between the centers. They're at different heights, so the distance along the line is shorter."
verify: "range(1, 30).find((x) => x * x + (9 - 4) ** 2 === (9 + 4) ** 2)"
---

Two circles with radii 4 and 9 touch each other, and both rest on the same straight line. How far apart are the two points where the circles touch the line?

## Hint

Connect the two centers, and draw radii down to the line. Then look for a right triangle.

## Hint 2

The line between the centers is $4 + 9 = 13$. Draw a level line from the small center over to the large radius. The vertical leg is $9 - 4 = 5$.

## Solution

**Step 1.** The centers are $4 + 9 = 13$ apart.

**Step 2.** A level line from the small center to the large radius makes a right triangle, with a vertical leg of $9 - 4 = 5$ and a hypotenuse of 13.

**Step 3.** The level leg is 12, by the 5-12-13 triple, and it equals the distance along the line.

**Answer: (D) 12**

## Another way

The distance is $2\sqrt{r_1 r_2}$, which is $2\sqrt{4 \times 9} = 2 \times 6 = 12$.
