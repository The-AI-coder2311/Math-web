---
order: 18
difficulty: hard
lesson: 01-pigeonhole-power
choices: ["5","8","10","11","20"]
answer: D
mistakes:
  A: "The picks 11, 12, 13, 14, and 15 have no number that divides another."
  B: "The picks 11, 12, 13, up to 18 have no number that divides another."
  C: "The ten picks from 11 to 20 have no number that divides another."
  E: "That's all of the numbers. You need about half of that."
verify: "(() => { const go = (i, s) => (i > 20 ? s.length : Math.max(go(i + 1, s), s.every((a) => i % a !== 0) ? go(i + 1, [...s, i]) : 0)); return go(1, []) + 1; })()"
---

You pick whole numbers from 1 to 20. How many must you pick to be sure that one of your picks divides another?

## Hint

Every number can be written as an odd number times a power of 2. For example, $12 = 3 \times 4$. Use the odd part as the box.

## Hint 2

There are 10 odd numbers from 1 to 19, so there are 10 boxes. What can you say about two numbers in the same box?

## Solution

Write each number as an odd number times a power of 2. There are 10 possible odd parts, from 1 to 19, so there are 10 boxes. With 11 picks, two share an odd part. Those two differ only by powers of 2, so the smaller one divides the larger one.

Ten picks aren't enough: in the numbers 11 through 20, none divides another.

**Answer: (D) 11**
