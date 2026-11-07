---
order: 24
difficulty: medium
lesson: 01-overlaps
choices: ["22","25","29","32"]
answer: C
mistakes:
  A: "That subtracts 3 from 25. You still need to add the 7 multiples of 7."
  B: "That's the multiples of 2. Add the multiples of 7, and fix the overlap."
  D: "That counts the multiples of 14 twice."
verify: "range(1, 50).filter((n) => n % 2 === 0 || n % 7 === 0).length"
---

How many whole numbers from 1 to 50 are multiples of 2 or multiples of 7?

## Hint

Count each list, and find what's in both.

## Hint 2

There are 25 multiples of 2 and 7 multiples of 7. The numbers in both are multiples of 14.

## Solution

There are 25 multiples of 2, and 7 multiples of 7. The multiples of 14 are in both, and there are 3. So $25 + 7 - 3 = 29$.

**Answer: (C) 29**
