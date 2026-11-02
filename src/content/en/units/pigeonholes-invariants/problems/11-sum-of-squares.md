---
order: 11
difficulty: medium
lesson: 02-parity-and-invariants
choices: ["34","45","50","58","63"]
answer: E
mistakes:
  A: "This one works: 25 plus 9 is 34."
  B: "This one works: 36 plus 9 is 45."
  C: "This one works: 49 plus 1 is 50."
  D: "This one works: 49 plus 9 is 58."
verify: "[34, 45, 50, 58, 63].filter((n) => !range(0, 10).some((a) => range(0, 10).some((b) => a * a + b * b === n))).join()"
---

Which of these can't be written as the sum of two perfect squares?

## Hint

Find each number's remainder when you divide it by 4.

## Hint 2

A square is always 0 or 1 mod 4. So what can the sum of two squares be?

## Solution

Each square is 0 or 1 mod 4, so a sum of two squares is 0, 1, or 2 mod 4. It's never 3. Since $63 = 4 \times 15 + 3$, it can't be a sum of two squares. The others work: $34 = 25 + 9$, $45 = 36 + 9$, $50 = 49 + 1$, and $58 = 49 + 9$.

**Answer: (E) 63**
