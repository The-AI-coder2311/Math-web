---
order: 15
difficulty: medium
lesson: 05-right-triangles
choices: ["13","17","34","60","169"]
answer: A
mistakes:
  B: "That's $5 + 12$, the walk along two sides. The diagonal is a shortcut."
  C: "That's the perimeter, $2 \\times 5 + 2 \\times 12 = 34$. The diagonal goes straight across the rectangle."
  D: "That's the area of the rectangle."
  E: "That's the diagonal squared. Which number squared is 169?"
verify: "range(1, 30).find((d) => d * d === 5 * 5 + 12 * 12)"
---

A rectangle is 5 inches wide and 12 inches long. How long is its diagonal, in inches?

## Hint

The diagonal cuts the rectangle into two right triangles. What are the legs?

## Hint 2

The legs are 5 and 12. You may recognize this triple.

## Solution

The diagonal is the hypotenuse of a right triangle with legs 5 and 12: $5^2 + 12^2 = 169$. So the diagonal is 13.

**Answer: (A) 13**
