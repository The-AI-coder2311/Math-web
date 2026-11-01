---
order: 10
difficulty: hard
choices: [4, 5, 6, 7, 25]
answer: C
verify: "String(range(1, 25).reduce((p, n) => p * BigInt(n), 1n)).match(/0+$/)[0].length"
---

How many zeros does $25!$ end with?

## Hint

Each zero comes from a factor of 10, which needs a 2 and a 5. Count the 5s. One of the numbers contributes more than one 5.

## Solution

**Step 1.** Each zero at the end comes from a pair of a 2 and a 5. There are many more 2s than 5s, so we only need to count the 5s.

**Step 2.** The multiples of 5 up to 25 are 5, 10, 15, 20, and 25, so there are 5 of them.

**Step 3.** But $25 = 5 \times 5$ contributes a second 5, so the total is 6.

**Answer: (C) 6**
