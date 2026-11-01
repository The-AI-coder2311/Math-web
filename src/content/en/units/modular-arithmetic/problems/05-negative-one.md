---
order: 9
difficulty: medium
lesson: 02-giant-powers
choices: ["1","2","4","7","8"]
answer: E
mistakes:
  A: "That's for an even exponent. Here, 101 is odd."
  B: "Replace 8 with $-1$. Odd powers of $-1$ stay $-1$."
  C: "Replace 8 with $-1$. Odd powers of $-1$ stay $-1$."
  D: "Replace 8 with $-1$, which is the same as a remainder of 8."
verify: "range(1, 101).reduce((r) => (r * 8) % 9, 1)"
---

What is the remainder when $8^{101}$ is divided by 9?

## Hint

The number 8 is 1 less than 9. How can you write 8 as a negative number, mod 9?

## Hint 2

$8 \equiv -1 \pmod{9}$, and the exponent is odd.

## Solution

**Step 1.** Since 8 is 1 less than 9, we can write $8 \equiv -1 \pmod{9}$.

**Step 2.** The exponent 101 is odd, so $(-1)^{101}$ is $-1$.

**Step 3.** A remainder of $-1$ is the same as a remainder of 8, since it's 1 short of a multiple of 9.

**Answer: (E) 8**
