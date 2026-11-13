---
order: 4
difficulty: easy
lesson: 02-pythagoras-why
choices: ["3","6","9","12","18"]
answer: D
mistakes:
  A: "That's half of the short leg. The hypotenuse is the longest side, and it's double the short leg."
  B: "That's the short leg. The hypotenuse is longer."
  C: "That's 1.5 times the short leg. It's exactly twice."
  E: "That's 3 times the short leg. It's exactly twice."
verify: "range(1, 50).find((c) => c * c === 6 * 6 + 3 * 6 * 6)"
---

A 30-60-90 triangle has a short leg of 6. How long is its hypotenuse?

## Hint

A 30-60-90 triangle is half of an equilateral triangle. How does the short leg compare with the hypotenuse?

## Hint 2

The hypotenuse is twice the short leg.

## Solution

The hypotenuse is twice the short leg, so it's $2 \times 6 = 12$.

**Answer: (D) 12**
