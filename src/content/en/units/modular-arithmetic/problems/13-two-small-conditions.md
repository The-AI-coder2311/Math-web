---
order: 5
difficulty: easy
lesson: 03-several-conditions
choices: ["3","5","7","8","11"]
answer: B
mistakes:
  A: "It leaves 0 when divided by 3."
  C: "It leaves 1 when divided by 3."
  D: "It leaves 0 when divided by 2."
  E: "It works, but it isn't the smallest."
verify: "range(1, 50).find((n) => n % 2 === 1 && n % 3 === 2)"
---

What is the smallest positive whole number that leaves a remainder of 1 when divided by 2, and a remainder of 2 when divided by 3?

## Hint

List the numbers that leave 2 when divided by 3, and test each one against the other rule.

## Hint 2

Those numbers are 2, 5, 8, 11, and so on. Which is the first odd one?

## Solution

The numbers that leave 2 when divided by 3 are 2, 5, 8, and so on. The first odd one is 5.

**Answer: (B) 5**
