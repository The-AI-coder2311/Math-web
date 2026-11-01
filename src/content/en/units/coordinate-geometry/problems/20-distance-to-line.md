---
order: 20
difficulty: hard
lesson: 04-geometry-with-coordinates
choices: ["3","4","5","6","25"]
answer: C
mistakes:
  A: "That's the $x$-coordinate of the closest point. The distance uses both coordinates."
  B: "That's the $y$-coordinate of the closest point. The distance uses both coordinates."
  D: "Try a check: the point $(3, 4)$ is on the line, and it's only 5 from the origin. So the distance can't be 6."
  E: "That's the number in the equation. The distance is $25 \\div \\sqrt{3^2 + 4^2}$."
verify: "Math.round(Math.min(...range(-100, 100).map((i) => Math.hypot(i / 10, (25 - (3 * i) / 10) / 4))))"
---

How far is the origin, $(0, 0)$, from the line $3x + 4y = 25$? (The distance to a line means the shortest distance.)

## Hint

The shortest path meets the line at a right angle. What slope does the line have? What about a path at a right angle to it?

## Hint 2

The path has a slope of $\frac{4}{3}$, so it's $y = \frac{4}{3}x$. Find where it meets the line.

## Solution

**Step 1.** The line has a slope of $-\frac{3}{4}$, so a path at a right angle has a slope of $\frac{4}{3}$, which is $y = \frac{4}{3}x$.

**Step 2.** Putting that in gives $3x + \frac{16}{3}x = 25$, so $\frac{25}{3}x = 25$ and $x = 3$. Then $y = 4$.

**Step 3.** The distance from the origin to $(3, 4)$ is 5.

**Answer: (C) 5**

## Another way

The line meets the axes at $\left(\frac{25}{3}, 0\right)$ and $\left(0, \frac{25}{4}\right)$. Finding the area of that triangle in two ways gives the same answer of 5.
