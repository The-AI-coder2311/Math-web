---
order: 14
difficulty: medium
lesson: 04-mixed-circle-problems
choices: ["2","2.5","5","6","6.5"]
answer: E
mistakes:
  A: "That's the radius of the circle **inside** the triangle. This circle goes through the corners."
  B: "That's half of the shortest side. The hypotenuse, 13, is the diameter of the circle, so the radius is half of 13."
  C: "That's the shortest side. The hypotenuse is what matters."
  D: "That's half of the side of 12. The diameter is the hypotenuse, which is 13."
verify: "range(1, 300).map((n) => n / 20).find((r) => Math.abs(Math.hypot(5 / 2, 12 / 2) - r) < 1e-9)"
---

A circle passes through all three corners of a right triangle with sides 5, 12, and 13. What is the radius of the circle?

## Hint

The right angle is on the circle. What does that tell you about the side across from it?

## Hint 2

The hypotenuse must be a diameter.

## Solution

The right angle is on the circle, so the hypotenuse is a diameter. The radius is half of it: $13 \div 2 = 6.5$.

**Answer: (E) 6.5**
