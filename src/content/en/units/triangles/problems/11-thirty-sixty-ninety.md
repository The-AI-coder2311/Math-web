---
order: 4
difficulty: easy
lesson: 02-pythagoras-why
choices: ["12","9","6","18","36"]
answer: A
mistakes:
  C: "That's the short leg. The hypotenuse is longer."
  B: "That's 1.5 times the short leg. It's exactly twice."
  D: "That's 3 times the short leg. It's exactly twice."
  E: "That's 6 squared. The hypotenuse is twice the short leg."
verify: "range(1, 50).find((c) => c * c === 6 * 6 + 3 * 6 * 6)"
---

A 30-60-90 triangle has a short leg of 6. How long is its hypotenuse?

## Hint

A 30-60-90 triangle is half of an equilateral triangle. How does the short leg compare with the hypotenuse?

## Hint 2

The hypotenuse is twice the short leg.

## Solution

The hypotenuse is twice the short leg, so it's $2 \times 6 = 12$.

**Answer: (A) 12**
