---
order: 4
difficulty: easy
lesson: 02-distance-midpoints-circles
choices: ["(4, 2)","(6, 2)","(6, 6)","(8, 4)","(12, 12)"]
answer: C
mistakes:
  A: "That's half of the differences, $10 - 2$ and $8 - 4$. You need to average, which means adding and halving."
  B: "The $x$-coordinate is right. For $y$, you may have halved the difference. Average 8 and 4 instead."
  D: "That's the differences, $10 - 2$ and $8 - 4$. The midpoint comes from adding and halving."
  E: "That's the sums. You still need to divide each one by 2."
verify: "`(${(2 + 10) / 2}, ${(8 + 4) / 2})`"
---

What is the midpoint of the segment from $(2, 8)$ to $(10, 4)$?

## Hint

The midpoint is an average. Do the $x$-coordinates and the $y$-coordinates separately.

## Hint 2

Average 2 and 10, and then average 8 and 4.

## Solution

Average each coordinate: $(2 + 10) \div 2 = 6$ and $(8 + 4) \div 2 = 6$. So the midpoint is $(6, 6)$.

**Answer: (C) (6, 6)**
