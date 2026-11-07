---
order: 25
difficulty: medium
lesson: 02-shaded-regions
choices: ["$12\\pi$","$36\\pi$","$72\\pi$","$144\\pi$"]
answer: B
mistakes:
  A: "That uses the chord without squaring. The ring's area uses a square."
  C: "That doubles the correct answer. Half of the chord is 6, and that's what gets squared."
  D: "That squares the whole chord. Use half of it."
verify: "pi(6 ** 2)"
---

Two circles share a center. A chord of the big circle has a length of 12, and it touches the small circle at exactly one point. What is the area of the ring between the circles?

## Hint

Draw radii to the point of contact and to one end of the chord.

## Hint 2

That makes a right triangle with legs $r$ and 6, and hypotenuse $R$. So $R^2 - r^2 = 36$.

## Solution

Half of the chord is 6. The radii make a right triangle, so $R^2 - r^2 = 6^2 = 36$. The ring's area is $\pi R^2 - \pi r^2 = \pi (R^2 - r^2) = 36\pi$. We never needed either radius.

**Answer: (B) $36\pi$**
