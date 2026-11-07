---
order: 26
difficulty: medium
lesson: 02-distance-midpoints-circles
choices: ["3","4","5","7"]
answer: A
mistakes:
  B: "That's the midpoint's $x$-coordinate. The point on the axis isn't directly below the midpoint."
  C: "Test it: from (5, 0), the squared distances are 18 and 2."
  D: "Test it: from (7, 0), the squared distances are 34 and 2."
verify: "range(-20, 20).find((x) => (x - 2) ** 2 + 9 === (x - 6) ** 2 + 1)"
---

A point $(x, 0)$ on the $x$-axis is the same distance from $(2, 3)$ and $(6, 1)$. What is $x$?

## Hint

Set the squared distances equal.

## Hint 2

$(x - 2)^2 + 9 = (x - 6)^2 + 1$. The $x^2$ terms cancel.

## Solution

Set the squared distances equal: $(x - 2)^2 + 9 = (x - 6)^2 + 1$. Expanding gives $-4x + 13 = -12x + 37$. So $8x = 24$, and $x = 3$.

**Answer: (A) 3**
