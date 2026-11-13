---
order: 5
difficulty: easy
lesson: 03-chords-and-tangents
choices: ["8","12","13","14","18"]
answer: B
mistakes:
  A: "That's $13 - 5$, which is the distance from $P$ to the nearest point on the circle. A tangent is a different line."
  C: "That's the distance to the center. The tangent is a leg of the right triangle, so it's shorter."
  D: "You may have added the squares and then rounded. The 13 is the hypotenuse, so subtract."
  E: "That's $13 + 5$, which is the distance to the far side of the circle."
verify: "range(1, 30).find((t) => t * t + 5 * 5 === 13 * 13)"
---

A circle has a radius of 5. Point $P$ is 13 units from the center of the circle. How long is the tangent from $P$ to the circle?

## Hint

Draw the radius to the point where the tangent touches. What angle does it make with the tangent?

## Hint 2

It's a right angle, and the 13 is the hypotenuse.

## Solution

The radius meets the tangent at a right angle, and the 13 is the hypotenuse. So the tangent is $\sqrt{169 - 25} = 12$.

**Answer: (B) 12**
