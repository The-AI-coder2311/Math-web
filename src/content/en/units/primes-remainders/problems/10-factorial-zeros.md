---
order: 17
difficulty: hard
lesson: 02-counting-divisors
choices: ["2","4","5","6","7"]
answer: D
mistakes:
  A: "That counts only 10 and 20. Every multiple of 5 adds a zero, and 25 adds two."
  B: "That undercounts the multiples of 5: 5, 10, 15, 20, and 25."
  C: "That misses the second 5 inside $25 = 5 \\times 5$."
  E: "That counts one 5 too many. Only 25 has a second 5 here."
verify: "String(range(1, 25).reduce((p, n) => p * BigInt(n), 1n)).match(/0+$/)[0].length"
---

How many zeros does $25!$ end with?

## Hint

Each zero comes from a factor of 10, which needs a 2 and a 5. Count the 5s. One of the numbers contributes more than one 5.

## Hint 2

Multiples of 5 up to 25 number 5. One of them contributes a second 5.

## Solution

**Step 1.** Each zero at the end comes from a pair of a 2 and a 5. There are many more 2s than 5s, so we only need to count the 5s.

**Step 2.** The multiples of 5 up to 25 are 5, 10, 15, 20, and 25, so there are 5 of them.

**Step 3.** But $25 = 5 \times 5$ contributes a second 5, so the total is 6.

**Answer: (D) 6**
