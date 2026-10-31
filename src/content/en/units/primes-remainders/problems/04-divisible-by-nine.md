---
order: 4
difficulty: easy
choices: [1234, 4527, 6002, 7115, 8130]
answer: B
verify: "[1234, 4527, 6002, 7115, 8130].find((n) => n % 9 === 0)"
---

Which number is divisible by 9?

## Hint

Add up the digits of each number. A number is divisible by 9 when that sum is a multiple of 9.

## Solution

Add the digits of each number:

- 1234 gives 10.
- 4527 gives 18.
- 6002 gives 8.
- 7115 gives 14.
- 8130 gives 12.

Only 18 is a multiple of 9, so 4527 is divisible by 9.

**Answer: (B) 4527**
