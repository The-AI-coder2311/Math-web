---
order: 14
difficulty: medium
lesson: 01-angle-chasing
choices: ["60","90","150","120","180"]
answer: D
mistakes:
  A: "That's $x$, the smaller angle."
  B: "That would make the two angles equal. Here, one is twice the other."
  C: "That would make the other angle 30°, which isn't half of 150°."
  E: "That's what the two angles add up to."
verify: "range(1, 179).find((x) => x + 2 * x === 180) * 2"
---

A line crosses two parallel lines. Two angles between the parallel lines, on the same side of the crossing line, measure $x$ and $2x$ degrees. How many degrees is the larger angle?

## Hint

Between parallel lines, on the same side of the crossing line, what do two angles add up to?

## Hint 2

They add up to 180°, so $3x = 180$.

## Solution

These angles add up to 180°, so $3x = 180$ and $x = 60$. The larger angle is $2x = 120$ degrees.

**Answer: (D) 120**
