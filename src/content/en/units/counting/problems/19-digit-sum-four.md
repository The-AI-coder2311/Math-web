---
order: 19
difficulty: hard
lesson: 05-split-into-cases
choices: ["6","9","15","12","10"]
answer: E
mistakes:
  A: "That misses a whole case. Check first digits of 1, 2, 3, and 4."
  B: "That misses one number. A case like 400 is easy to forget."
  D: "List the numbers in each case. A first digit of 1 gives 4 numbers, and the counts go down by 1 from there."
  C: "That would allow a first digit of 0. A number like 040 isn't a 3-digit number."
verify: "range(100, 999).filter((n) => sum(digits(n)) === 4).length"
---

How many 3-digit numbers have digits that add up to 4?

## Hint

Split into cases by the first digit. It can be 1, 2, 3, or 4.

## Hint 2

If the first digit is 1, the other two digits add up to 3. How many ways can that happen?

## Solution

Split by the first digit:

- First digit 1: 103, 112, 121, 130. That's 4 numbers.
- First digit 2: 202, 211, 220. That's 3 numbers.
- First digit 3: 301, 310. That's 2 numbers.
- First digit 4: 400. That's 1 number.

The total is $4 + 3 + 2 + 1 = 10$.

**Answer: (E) 10**
