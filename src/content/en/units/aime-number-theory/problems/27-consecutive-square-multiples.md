---
order: 27
difficulty: medium
lesson: 05-nt-constructions
choices: ["248","348","448","548","648"]
answer: D
mistakes:
  A: "Then $n + 1 = 249$, which isn't divisible by 9."
  B: "Then $n + 1 = 349$, which leaves remainder 7 when divided by 9."
  C: "Then $n + 1 = 449$, which leaves remainder 8 when divided by 9."
  E: "Then $n + 2 = 650$, which works, but $n + 1 = 649$ isn't divisible by 9."
verify: "range(1, 1000).find((n) => n % 4 === 0 && (n + 1) % 9 === 0 && (n + 2) % 25 === 0)"
---

What is the smallest positive integer $n$ such that 4 divides $n$, 9 divides $n + 1$, and 25 divides $n + 2$?

## Hint

Translate into $n \equiv 0 \pmod 4$, $n \equiv 8 \pmod 9$, and $n \equiv 23 \pmod{25}$.

## Hint 2

The numbers that are 0 mod 4 and 23 mod 25 are 48, 148, 248, and so on. Check them mod 9.

## Solution

The numbers that are 23 mod 25 and 0 mod 4 are $48 + 100k$. Since $100 \equiv 1 \pmod 9$, their remainders mod 9 are 3, 4, 5, 6, 7, 8 for $k$ from 0 to 5. So $k = 5$ and $n = 548$.

**Check:** $548 = 4 \times 137$, $549 = 9 \times 61$, and $550 = 25 \times 22$.

**Answer: (D) 548**
