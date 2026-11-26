---
order: 28
difficulty: hard
lesson: 05-nt-constructions
choices: ["4","8","12","16","32"]
answer: D
mistakes:
  A: "That's the count mod 125 alone. Multiply by the 4 solutions mod 8."
  B: "That's the count for $x^2 \\equiv 1$. Fourth powers give more solutions mod 125."
  C: "Solution counts multiply across CRT pieces. They don't add."
  E: "Mod 8 there are only 4 odd remainders, and mod 125 there are 4 solutions."
verify: "range(1, 1000).filter((x) => { let p = 1; for (let i = 0; i < 4; i++) p = (p * x) % 1000; return p === 1; }).length"
---

How many integers $x$ with $1 \le x \le 1000$ satisfy $x^4 \equiv 1 \pmod{1000}$?

## Hint

Count solutions mod 8 and mod 125 separately, then multiply.

## Hint 2

Mod 8, every odd number squares to 1. Mod 125, the units form a cycle of length 100.

## Solution

Mod 8, every odd $x$ has $x^2 \equiv 1$, so all 4 odd remainders work. Mod 125, the remainders coprime to 5 are the powers of a primitive root, a cycle of length 100, so $x^4 \equiv 1$ has $\gcd(4, 100) = 4$ solutions. By CRT there are $4 \times 4 = 16$ solutions.

**Answer: (D) 16**
