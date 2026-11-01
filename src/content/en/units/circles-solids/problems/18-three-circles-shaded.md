---
order: 18
difficulty: hard
lesson: 02-shaded-regions
choices: ["$54 - 27\\pi$","$108 - 9\\pi$","$108 - 81\\pi$","$108 - 27\\pi$","$216 - 27\\pi$"]
answer: D
mistakes:
  A: "That uses a width of 3. The rectangle's width is a diameter, which is 6."
  B: "That subtracts only one circle. There are three."
  C: "That squares the 9. Each circle has an area of $9\\pi$, so three make $27\\pi$."
  E: "That doubles the rectangle. It's 18 by 6."
verify: "`${(3 * 6) * 6} - ${pi(3 * (3 * 3))}`"
---

Three circles, each with a radius of 3, sit in a row inside the smallest rectangle that holds them. Each circle touches its neighbors. What is the area of the part of the rectangle outside the circles?

## Hint

Each circle has a diameter of 6. How long and how wide is the rectangle?

## Hint 2

The rectangle is 18 by 6. Each circle has an area of $9\pi$.

## Solution

The rectangle is $18 \times 6 = 108$. The three circles have a total area of $3 \times 9\pi$, which is $27\pi$. So the answer is $108 - 27\pi$.

**Answer: (D) $108 - 27\pi$**
