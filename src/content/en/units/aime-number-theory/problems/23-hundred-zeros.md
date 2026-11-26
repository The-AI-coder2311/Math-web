---
order: 23
difficulty: medium
lesson: 04-p-adic-valuation
choices: ["400","401","404","405","410"]
answer: D
mistakes:
  A: "$400!$ ends in $80 + 16 + 3 = 99$ zeros. That's one short."
  B: "The count of zeros only changes at multiples of 5. $401!$ still has 99."
  C: "That's still 99 zeros. The next multiple of 5 is 405."
  E: "That works, but 405 already reaches 100 zeros."
verify: "range(1, 1000).find((n) => { let s = 0, q = 5; while (q <= n) { s += Math.floor(n / q); q *= 5; } return s >= 100; })"
---

What is the smallest positive integer $n$ such that $n!$ ends in at least 100 zeros?

## Hint

Estimate first. Each multiple of 5 gives a zero, and multiples of 25 give two.

## Hint 2

Check $n = 400$. Then check the next multiple of 5.

## Solution

For $n = 400$, Legendre's formula gives $80 + 16 + 3 = 99$ zeros. The count only changes at multiples of 5, and at 405 it becomes $81 + 16 + 3 = 100$. So $n = 405$.

**Answer: (D) 405**
