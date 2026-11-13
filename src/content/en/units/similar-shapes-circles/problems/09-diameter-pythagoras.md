---
order: 9
difficulty: medium
lesson: 02-inscribed-angles
choices: ["12","13","14","18","144"]
answer: A
mistakes:
  B: "That's the diameter. $BC$ is a leg, so it has to be shorter than the hypotenuse."
  C: "That's about what you'd get by treating 13 as a leg. The diameter is the hypotenuse."
  D: "That's $13 + 5$. A side of a triangle must be less than the sum of the other two sides, and a leg is shorter than the hypotenuse."
  E: "That's $BC$ squared, $169 - 25 = 144$. Take the square root to finish."
verify: "range(1, 30).find((x) => x * x + 5 * 5 === 13 * 13)"
---

A circle has a diameter $AB$ of length 13. Point $C$ is on the circle, and $AC = 5$. How long is $BC$?

## Hint

What kind of triangle is $ABC$, since $AB$ is a diameter?

## Hint 2

It has a right angle at $C$, and $AB$ is the hypotenuse. So $5^2 + BC^2 = 13^2$.

## Solution

Since $AB$ is a diameter, angle $C$ is a right angle. So $BC^2 = 13^2 - 5^2 = 169 - 25 = 144$, and $BC = 12$.

**Answer: (A) 12**
