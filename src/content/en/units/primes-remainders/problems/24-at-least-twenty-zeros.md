---
order: 24
difficulty: hard
lesson: 05-factorial-zeros
choices: ["80","84","85","90","100"]
answer: C
mistakes:
  A: "$80!$ has $16 + 3 = 19$ zeros, which is one short."
  B: "$84!$ has the same number of zeros as $80!$, which is 19."
  D: "$90!$ has $18 + 3 = 21$ zeros. A smaller number already reaches 20."
  E: "That's the count without the multiples of 25. $100!$ really has 24 zeros."
verify: "(() => { let f = 1n; for (let n = 1n; ; n++) { f *= n; if (String(f).match(/0*$/)[0].length >= 20) return Number(n); } })()"
---

What is the smallest whole number $n$ such that $n!$ ends with at least 20 zeros?

## Hint

The count of zeros only goes up at multiples of 5, so test only those. A guess of 100 is too high. Do you see why?

## Hint 2

$100!$ has 24 zeros. Try $80!$ and work up by 5s.

## Solution

$80!$ has $16 + 3 = 19$ zeros. The next multiple of 5 is 85, and $85!$ has $17 + 3 = 20$ zeros. The numbers from 81 to 84 add no 5s, so the answer is 85.

**Answer: (C) 85**
