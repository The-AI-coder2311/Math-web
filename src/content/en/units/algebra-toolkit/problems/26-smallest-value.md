---
order: 26
difficulty: easy
lesson: 02-perfect-squares
choices: ["4","8","16","20"]
answer: A
mistakes:
  B: "That's half of the middle number. Complete the square to find the lowest value."
  C: "That's the number you add to complete the square."
  D: "That's the value at $x = 0$, but other values of $x$ give less."
verify: "Math.min(...range(-20, 20).map((x) => x * x - 8 * x + 20))"
---

What is the smallest possible value of $x^2 - 8x + 20$?

## Hint

Complete the square, using half of 8.

## Hint 2

$(x - 4)^2 = x^2 - 8x + 16$.

## Solution

$x^2 - 8x + 20 = (x - 4)^2 + 4$. A square is at least 0, so the smallest value is 4, at $x = 4$.

**Answer: (A) 4**
