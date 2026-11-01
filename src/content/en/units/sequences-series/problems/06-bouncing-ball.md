---
order: 6
difficulty: easy
lesson: 03-geometric-sequences
choices: ["16","24","27","36","54"]
answer: B
mistakes:
  A: "That's the 4th bounce. You took one extra step."
  C: "That's $81 \\div 3$. You may have divided by 3 and not multiplied by 2. Each bounce is two thirds of the last."
  D: "That's the 2nd bounce. The question asks about the 3rd."
  E: "That's the 1st bounce. The question asks about the 3rd."
verify: "range(1, 3).reduce((h) => (h * 2) / 3, 81)"
---

A ball is dropped from a height of 81 feet. Its first bounce reaches $\frac{2}{3}$ of that height, and each later bounce reaches $\frac{2}{3}$ of the height of the bounce before it. How many feet high does it go on its 3rd bounce?

## Hint

Find the height of the first bounce, then the second, then the third.

## Hint 2

The first bounce is $\frac{2}{3}$ of 81, which is 54. Multiply by $\frac{2}{3}$ two more times.

## Solution

Multiply by $\frac{2}{3}$ for each bounce: 81 becomes 54, then 36, then 24. So the 3rd bounce reaches 24 feet.

**Answer: (B) 24**
