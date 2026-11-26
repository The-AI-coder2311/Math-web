---
order: 3
difficulty: medium
lesson: 01-crt-and-order
choices: ["6","7","8","9","10"]
answer: C
mistakes:
  A: "Check the count: $k$ can be 0, 1, 2, 3, 4, 5, 6, or 7."
  B: "That leaves out $k = 0$, which gives 17 itself."
  D: "$17 + 140 \\times 8 = 1137$, which is more than 1000."
  E: "That divides 1000 by 100. The solutions repeat every 140, not every 100."
verify: "range(1, 1000).filter((n) => n % 4 === 1 && n % 5 === 2 && n % 7 === 3).length"
---

How many positive integers $n \le 1000$ leave a remainder of 1 when divided by 4, a remainder of 2 when divided by 5, and a remainder of 3 when divided by 7?

## Hint

By CRT, the solutions form one remainder class mod 140. Find the smallest one.

## Hint 2

The smallest solution is 17. Count the numbers $17 + 140k$ that are at most 1000.

## Solution

The conditions for 4 and 5 give $n \equiv 17 \pmod{20}$. Since $17 \equiv 3 \pmod 7$, the number 17 satisfies all three, so the solutions are $n = 17 + 140k$.

We need $17 + 140k \le 1000$, so $140k \le 983$, and $k$ runs from 0 to 7. That's 8 numbers.

**Answer: (C) 8**
