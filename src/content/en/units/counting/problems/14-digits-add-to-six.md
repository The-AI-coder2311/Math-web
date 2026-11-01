---
order: 14
difficulty: medium
lesson: 05-split-into-cases
choices: ["5","8","7","6","36"]
answer: D
mistakes:
  A: "That misses 60. A ones digit of 0 is fine, as long as the tens digit isn't 0."
  C: "That includes 06, which isn't a 2-digit number."
  B: "List them by tens digit: 15, 24, 33, 42, 51, 60. There are only 6."
  E: "That's $6 \\times 6$. The digits depend on each other, so split it into cases."
verify: "range(10, 99).filter((n) => sum(digits(n)) === 6).length"
---

How many 2-digit numbers have digits that add up to 6?

## Hint

Split it into cases by the tens digit. Which tens digits are possible?

## Hint 2

The tens digit can be 1, 2, 3, 4, 5, or 6. Each one forces the ones digit.

## Solution

Each tens digit from 1 to 6 forces the ones digit: 15, 24, 33, 42, 51, and 60. That's 6 numbers.

**Answer: (D) 6**
