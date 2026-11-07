---
order: 28
difficulty: medium
lesson: 04-other-bases
choices: ["1","2","3","4"]
answer: B
mistakes:
  A: "Check the digit sum. It's 14."
  C: "Check the digit sum. It's 14, and 14 has a remainder of 2."
  D: "Check the digit sum. It's 14, and 14 has a remainder of 2."
verify: "parseInt('3542', 7) % 6"
---

What is the remainder when $3542_7$ is divided by 6?

## Hint

In base 7, a number and its digit sum have the same remainder mod 6.

## Hint 2

The digit sum is $3 + 5 + 4 + 2 = 14$.

## Solution

Since $7 \equiv 1 \pmod 6$, each digit counts as itself. The digit sum is 14, and $14 = 6 \times 2 + 2$. So the remainder is 2.

**Answer: (B) 2**
