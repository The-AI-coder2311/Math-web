---
order: 24
difficulty: medium
lesson: 01-place-value
choices: ["4","13","14","20"]
answer: C
mistakes:
  A: "That only counts 3 in the ones place. The thirties have a 3 in the tens place."
  B: "The number 33 has two 3s. Count both."
  D: "Count the two places separately: 4 in the ones place, and 10 in the tens place."
verify: "sum(range(1, 40).map((n) => digits(n).filter((d) => d === 3).length))"
---

You write the numbers from 1 to 40. How many times do you write the digit 3?

## Hint

Count the ones place and the tens place separately.

## Hint 2

The ones place has a 3 in 3, 13, 23, and 33. Which numbers have a 3 in the tens place?

## Solution

The ones place gives 3, 13, 23, and 33, which is 4 times. The tens place gives 30 through 39, which is 10 times. In all, $4 + 10 = 14$. The number 33 gets counted twice, and that's right, since it has two 3s.

**Answer: (C) 14**
