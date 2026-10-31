---
order: 9
difficulty: hard
choices: [15, 21, 28, 35, 42]
answer: B
verify: "range(1, 100).filter((n) => n.toString(2).split('').filter((d) => d === '1').length === 2).length"
---

How many whole numbers from 1 to 100 have exactly two 1s when written in base 2?

## Hint

A number with exactly two 1s is the sum of two different powers of 2. Which powers of 2 are available? This is also a counting problem, like the ones in Smart Counting.

## Solution

**Step 1.** A number with exactly two 1s in base 2 is a sum of two different powers of 2.

**Step 2.** The powers of 2 up to 100 are 1, 2, 4, 8, 16, 32, and 64, which makes 7 powers.

**Step 3.** Choose 2 of the 7:

$$\frac{7 \times 6}{2} = 21$$

**Step 4.** Make sure they all fit. The largest sum is $64 + 32 = 96$, which is under 100.

**Answer: (B) 21**
