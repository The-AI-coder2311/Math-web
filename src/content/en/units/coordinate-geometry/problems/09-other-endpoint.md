---
order: 9
difficulty: medium
lesson: 02-distance-midpoints-circles
choices: ["(3.5, -1)","(5, 5)","(7, -2)","(8, 5)","(8, 1)"]
answer: D
mistakes:
  A: "That's the midpoint of the two points you were given. The point $(5, 1)$ is already the midpoint."
  B: "The upright jump is right, but you also need to go 3 across from the midpoint."
  C: "That's the sum of the two points. To undo an average, double the midpoint and subtract."
  E: "The across jump is right, but you also need to go 4 up from the midpoint."
verify: "`(${2 * 5 - 2}, ${2 * 1 - -3})`"
---

The midpoint of a segment is $(5, 1)$, and one end is at $(2, -3)$. Where is the other end?

## Hint

How do you get from the known end to the midpoint? The other end is the same jump again.

## Hint 2

The jump is 3 across and 4 up. Apply it to the midpoint.

## Solution

The jump from the known end to the midpoint is 3 across and 4 up. Doing it again from the midpoint gives $(5 + 3, \ 1 + 4) = (8, 5)$.

**Answer: (D) (8, 5)**
