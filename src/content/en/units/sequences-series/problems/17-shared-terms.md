---
order: 17
difficulty: hard
lesson: 01-arithmetic-sequences
choices: ["8","12","15","16","17"]
answer: D
mistakes:
  A: "That treats the shared numbers as 24 apart. They are 12 apart: 11, 23, 35, and so on."
  B: "That's too few. List the shared terms, 11, 23, 35, and so on up to 191, and count the steps between them."
  C: "That's the number of steps from 11 to 191. There are 16 numbers on that list."
  E: "That's $200 \\div 12$ rounded up. The list starts at 11, not at 12, so count from there."
verify: "range(1, 200).filter((n) => n % 4 === 3 && n % 6 === 5).length"
---

List A is 3, 7, 11, 15, ... and list B is 5, 11, 17, 23, ... How many numbers from 1 to 200 appear in both lists?

## Hint

Write out the start of both lists, and find the first few numbers that they share. What pattern do those shared numbers follow?

## Hint 2

The shared numbers are 11, 23, 35, ..., going up by 12, which is the LCM of 4 and 6. How many of those are at most 200?

## Solution

**Step 1.** Listing both shows that the shared numbers are 11, 23, 35, and so on. They go up by 12, the LCM of the step sizes 4 and 6.

**Step 2.** The largest one up to 200 comes from $11 + 12k$. Since $11 + 15 \times 12 = 191$ and the next would be 203, the largest is 191.

**Step 3.** That's 15 steps, which connect 16 numbers.

**Answer: (D) 16**
