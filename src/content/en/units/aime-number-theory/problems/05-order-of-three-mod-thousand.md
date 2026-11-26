---
order: 5
difficulty: medium
lesson: 01-crt-and-order
choices: ["20","50","100","200","400"]
answer: C
mistakes:
  A: "$3^{20}$ leaves remainder 26 mod 125, not 1. Check before stopping."
  B: "50 isn't a multiple of 4, but the order mod 125 must be a multiple of the order mod 5, which is 4."
  D: "That's the product of the orders. Use the least common multiple of 2 and 100 instead."
  E: "Euler's theorem gives $3^{400} \\equiv 1$, but a smaller power already works."
verify: "(() => { let k = 1, p = 3; while (p !== 1) { p = (p * 3) % 1000; k++; } return k; })()"
---

What is the smallest positive integer $k$ such that $3^k$ ends in the digits 001?

## Hint

Find the order of 3 mod 8 and mod 125, then take the least common multiple.

## Hint 2

Mod 8, the order is 2. Mod 125, the order divides 100 and must be a multiple of the order mod 5, which is 4.

## Solution

We need $3^k \equiv 1$ mod 8 and mod 125.

**Mod 8:** $3^2 = 9 \equiv 1$, so the order is 2.

**Mod 125:** The order divides 100. Mod 5 the order of 3 is 4, so the order mod 125 is 4, 20, or 100. Now $3^4 = 81$, which isn't 1 mod 125. And $3^5 = 243 \equiv -7 \pmod{125}$, so $3^{20} \equiv 7^4 = 2401 \equiv 26$, which isn't 1 either. So the order mod 125 is 100.

The least common multiple of 2 and 100 is 100.

**Answer: (C) 100**
