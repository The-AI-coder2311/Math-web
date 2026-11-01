---
order: 16
difficulty: hard
lesson: 02-giant-powers
choices: ["0","2","4","6","9"]
answer: C
mistakes:
  A: "That's the tens digit of $7^{100}$, which ends in 01. There are 2 more powers."
  B: "Check the last two digits of $7^2$: they're 49."
  D: "Check the last two digits of $7^2$: they're 49."
  E: "That's the ones digit. The last two digits are 49, so the tens digit is 4."
verify: "Math.floor(range(1, 102).reduce((r) => (r * 7) % 100, 1) / 10)"
---

What is the tens digit of $7^{102}$?

## Hint

The last two digits are the remainder mod 100. Find the last two digits of the first few powers of 7. You should reach 01 soon.

## Hint 2

$7^4 = 2401$, so the last two digits repeat every 4 powers. $102 = 4 \times 25 + 2$.

## Solution

**Step 1.** Find the last two digits of the first few powers: $7^1$ ends in 07, $7^2$ ends in 49, $7^3$ ends in 43, and $7^4 = 2401$ ends in 01.

**Step 2.** Since $7^4 \equiv 1 \pmod{100}$, the pattern repeats every 4 powers. And $100 = 4 \times 25$, so $7^{100}$ also ends in 01.

**Step 3.** Then $7^{102}$ is $7^{100} \times 7^2$, so it ends in the same two digits as $7^2$, which are 49.

**Step 4.** The tens digit is 4.

**Answer: (C) 4**
