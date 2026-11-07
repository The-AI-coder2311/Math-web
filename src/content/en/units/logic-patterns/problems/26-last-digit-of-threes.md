---
order: 26
difficulty: medium
lesson: 02-small-cases
choices: ["1","3","7","9"]
answer: A
mistakes:
  B: "That's the last digit of the 1st power. Use the cycle of 4."
  C: "That's the last digit of the 3rd power. Use the cycle of 4."
  D: "That's the last digit of the 2nd power. Use the cycle of 4."
verify: "Number(3n ** 2000n % 10n)"
---

What is the last digit of $3^{2000}$?

## Hint

Find the last digits of the first few powers of 3.

## Hint 2

The last digits go 3, 9, 7, 1, and then repeat every 4.

## Solution

The last digits go 3, 9, 7, 1, and then repeat. Since 2000 is a multiple of 4, the last digit matches $3^4$, so it's 1.

**Answer: (A) 1**
