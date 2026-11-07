---
order: 29
difficulty: medium
lesson: 04-recursive-and-special
choices: ["$-1$","$\\frac{1}{2}$","$2$","$3$"]
answer: C
mistakes:
  A: "That's the 2nd term. Find the remainder when 100 is divided by 3."
  B: "That's the 3rd term. Find the remainder when 100 is divided by 3."
  D: "This value never appears in the list. Write out the first few terms."
verify: "(() => { let a = 2; for (let i = 2; i <= 100; i++) a = 1 / (1 - a); return Math.round(a * 1000) / 1000; })()"
---

A list starts with $a_1 = 2$, and each term after that is $a_{n+1} = \frac{1}{1 - a_n}$. What is $a_{100}$?

## Hint

Write out the first few terms.

## Hint 2

The list goes $2, -1, \frac{1}{2}, 2$, and then repeats.

## Solution

The terms go $2$, $-1$, $\frac{1}{2}$, and then 2 again. So the cycle has a length of 3. Since $100 = 3 \times 33 + 1$, the 100th term matches the 1st term, which is 2.

**Answer: (C) $2$**
