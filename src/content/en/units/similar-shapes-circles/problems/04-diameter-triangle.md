---
order: 4
difficulty: easy
lesson: 02-inscribed-angles
choices: ["35","55","90","125","145"]
answer: B
mistakes:
  A: "That's the angle you were given. The triangle isn't isosceles, so the other angle is different."
  C: "That's angle $ACB$, at the point on the circle. The question asks about the angle at $B$."
  D: "That's $90 + 35$. The three angles add up to 180°, so subtract that from 180."
  E: "That's $180 - 35$, which leaves out the right angle at $C$."
verify: "range(1, 179).find((x) => x + 35 + 90 === 180)"
---

$AB$ is a diameter of a circle, and $C$ is another point on the circle. Angle $CAB$ measures 35°. How many degrees does angle $CBA$ measure?

## Hint

What's special about an angle like $ACB$, when $AB$ is a diameter?

## Hint 2

Angle $ACB$ is 90°. Now use the fact that the three angles of a triangle add up to 180°.

## Solution

Since $AB$ is a diameter, angle $ACB$ is 90°. The three angles add up to 180°, so angle $CBA$ is $180 - 90 - 35 = 55$ degrees.

**Answer: (B) 55**
