---
order: 2
difficulty: easy
lesson: 04-other-bases
choices: ["7","9","11","13","15"]
answer: C
mistakes:
  A: "That's $4 + 2 + 1$. The leftmost 1 is worth 8, and the 0 is on the 4 place."
  B: "That's $8 + 1$, which misses the 2."
  D: "That's $8 + 4 + 1$, which has the digits in the wrong places."
  E: "That's $1111_2$, with all four places. One digit here is a 0."
verify: "parseInt('1011', 2)"
---

What is the number $1011_2$, written in base 10?

## Hint

In base 2, the places from right to left are worth 1, 2, 4, and 8.

## Hint 2

The digits sit on places worth 8, 4, 2, and 1. Add the places with a 1.

## Solution

Multiply each digit by its place value:

$$1 \times 8 + 0 \times 4 + 1 \times 2 + 1 \times 1 = 11$$

**Answer: (C) 11**
