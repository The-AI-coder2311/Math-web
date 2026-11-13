---
order: 17
difficulty: hard
lesson: 04-other-bases
choices: ["21","28","35","42","49"]
answer: A
mistakes:
  B: "That's \"8 choose 2,\" which includes 128. That's over 100."
  C: "That's \"7 choose 3,\" for three 1s. The question asks for two."
  D: "That's $7 \\times 6$, which counts each pair twice."
  E: "That's $7 \\times 7$. Choose 2 of the 7 places for the 1s, which is $7 \\times 6 \\div 2$."
verify: "range(1, 100).filter((n) => n.toString(2).split('').filter((d) => d === '1').length === 2).length"
---

How many whole numbers from 1 to 100 have exactly two 1s when written in base 2?

## Hint

A number with exactly two 1s is the sum of two different powers of 2. Which powers of 2 are available? This is also a counting problem, like the ones in Smart Counting.

## Hint 2

The powers of 2 up to 100 are 1, 2, 4, 8, 16, 32, and 64. Choose 2.

## Solution

**Step 1.** A number with exactly two 1s in base 2 is a sum of two different powers of 2.

**Step 2.** The powers of 2 up to 100 are 1, 2, 4, 8, 16, 32, and 64, which makes 7 powers.

**Step 3.** Choose 2 of the 7:

$$\frac{7 \times 6}{2} = 21$$

**Step 4.** Make sure they all fit. The largest sum is $64 + 32 = 96$, which is under 100.

**Answer: (A) 21**
