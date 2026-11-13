---
order: 12
difficulty: medium
lesson: 03-chords-and-tangents
choices: ["2","4","6","8","12"]
answer: C
mistakes:
  A: "That's $10 - 8$. The sides of a right triangle follow the Pythagorean Theorem, not subtraction."
  B: "That's the distance from the chord to the edge of the circle, since $10 - 6 = 4$."
  D: "That's half of the chord. The distance is the other leg of the right triangle."
  E: "You may have used the whole chord or added squares. Use half of the chord, and subtract the squares."
verify: "range(1, 10).find((d) => d * d + 8 * 8 === 10 * 10)"
---

A chord of length 16 sits inside a circle of radius 10. How far is the chord from the center of the circle?

## Hint

Draw a line from the center to the chord, at a right angle. What does it do to the chord?

## Hint 2

It cuts the chord in half. Now draw a radius to one end of the chord, and you have a right triangle with a hypotenuse of 10 and a leg of 8.

## Solution

A line from the center at a right angle cuts the chord in half, which gives a piece of 8. With the radius as the hypotenuse, the distance is $\sqrt{100 - 64} = 6$.

**Answer: (C) 6**
