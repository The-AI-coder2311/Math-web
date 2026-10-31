---
order: 5
difficulty: medium
choices: [1, 2, 4, 7, 8]
answer: E
verify: "range(1, 101).reduce((r) => (r * 8) % 9, 1)"
---

What is the remainder when $8^{101}$ is divided by 9?

## Hint

The number 8 is 1 less than 9. How can you write 8 as a negative number, mod 9?

## Solution

**Step 1.** Since 8 is 1 less than 9, we can write $8 \equiv -1 \pmod{9}$.

**Step 2.** The exponent 101 is odd, so $(-1)^{101}$ is $-1$.

**Step 3.** A remainder of $-1$ is the same as a remainder of 8, since it's 1 short of a multiple of 9.

**Answer: (E) 8**
