---
order: 22
difficulty: easy
lesson: 02-parity-and-invariants
choices: ["5","7","8","35"]
answer: C
mistakes:
  A: "Check the digit sum of 98765. It's 35."
  B: "Check the digit sum of 35. It's 8."
  D: "That's only the first step. Keep going until one digit is left."
verify: "(() => { let n = 98765; while (n > 9) n = sum(digits(n)); return n; })()"
---

Take the number 98765. Replace it with the sum of its digits, and repeat until one digit is left. What is the digit?

## Hint

Add the digits, then add the digits of the result.

## Hint 2

The first sum is 35.

## Solution

The digit sum is $9 + 8 + 7 + 6 + 5 = 35$, and $3 + 5 = 8$. So the digit is 8.

**Answer: (C) 8**
