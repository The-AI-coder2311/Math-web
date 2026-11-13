---
order: 19
difficulty: hard
lesson: 02-counting-divisors
choices: ["13","26","30","31","32"]
answer: E
mistakes:
  A: "That's $130 \\div 10$. Zeros need a 2 and a 5, and 5s are what run out. Count those."
  B: "That's only the multiples of 5. Multiples of 25 and 125 contribute extra 5s."
  C: "Count again: 26 multiples of 5, 5 multiples of 25, and 1 multiple of 125."
  D: "That misses 125, which has a third 5."
verify: "String(range(1, 130).reduce((p, n) => p * BigInt(n), 1n)).match(/0+$/)[0].length"
---

How many zeros does $130!$ end with?

## Hint

Count the factors of 5. Some numbers contribute more than one.

## Hint 2

Count the multiples of 5, then of 25, and then of 125.

## Solution

There are 26 multiples of 5, 5 multiples of 25, and 1 multiple of 125. Each adds one more 5, so the total is $26 + 5 + 1 = 32$.

**Answer: (E) 32**
