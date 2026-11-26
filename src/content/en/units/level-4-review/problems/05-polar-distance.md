---
order: 5
difficulty: easy
from: conic-sections/04-polar-coordinates
choices: ["10","14","48","50","100"]
answer: A
mistakes:
  B: "That's $6 + 8$. The distance to the origin uses the Pythagorean Theorem."
  C: "That's $6 \\times 8$. Square the coordinates and add them instead."
  D: "That's half of $r^2$. Take the square root of 100 instead."
  E: "That's $r^2$. Take the square root to get $r$."
verify: "Math.hypot(6, 8)"
---

The point with $x$ and $y$ coordinates $(6, 8)$ is written in polar coordinates as $(r, \theta)$ with $r > 0$. What is $r$?

## Hint

In polar coordinates, $r$ is the distance from the origin.

## Hint 2

$r^2 = x^2 + y^2$.

## Solution

The polar coordinate $r$ is the distance from the origin, so $r^2 = x^2 + y^2$:

$$r^2 = 36 + 64 = 100.$$

So $r$ is 10. The point sits on the 6-8-10 right triangle.

**Answer: (A) 10**
