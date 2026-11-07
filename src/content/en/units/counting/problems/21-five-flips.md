---
order: 21
difficulty: easy
lesson: 01-multiply-choices
choices: ["10","25","32","64"]
answer: C
mistakes:
  A: "That adds 2 five times. Each flip multiplies the count by 2."
  B: "That's 5 times 5. There are 2 results for each of 5 flips, so it's 2 multiplied 5 times."
  D: "That's 6 flips. Count again: there are 5 flips."
verify: "product([0, 1], [0, 1], [0, 1], [0, 1], [0, 1]).length"
---

A coin is flipped 5 times, and the results are written in order, such as HTTHH. How many different results are possible?

## Hint

Each flip has 2 possible results. What do you do with choices in a row?

## Hint 2

Multiply 2 by itself, once for each flip.

## Solution

Each of the 5 flips has 2 results, so there are $2 \times 2 \times 2 \times 2 \times 2 = 32$ results.

**Answer: (C) 32**
