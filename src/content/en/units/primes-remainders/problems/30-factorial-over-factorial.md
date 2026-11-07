---
order: 30
difficulty: hard
lesson: 05-factorial-zeros
choices: ["6","10","13","37"]
answer: C
mistakes:
  A: "That's only the multiples of 25 in the larger factorial. Subtract the counts of 5s."
  B: "That's the multiples of 5 from 101 to 150. Don't forget 125 and 150, with extra 5s."
  D: "That's the count for 150 factorial alone. Division takes some of the 5s away."
verify: "(() => { let f = 1n; for (let i = 101n; i <= 150n; i++) f *= i; return String(f).match(/0*$/)[0].length; })()"
---

How many zeros does $\frac{150!}{100!}$ end with?

## Hint

Count the 5s in each factorial, and subtract.

## Hint 2

$150!$ has $30 + 6 + 1 = 37$ fives. $100!$ has 24.

## Solution

$150!$ has $30 + 6 + 1 = 37$ fives, and $100!$ has $20 + 4 = 24$. Dividing leaves 13 fives. There are plenty of 2s, so there are 13 zeros.

**Answer: (C) 13**
