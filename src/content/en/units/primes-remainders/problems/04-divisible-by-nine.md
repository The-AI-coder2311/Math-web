---
order: 4
difficulty: easy
lesson: 01-prime-factorization
choices: ["1234","7115","6002","4527","8130"]
answer: D
mistakes:
  A: "Its digits add up to 10, which isn't a multiple of 9."
  C: "Its digits add up to 8, which isn't a multiple of 9."
  B: "Its digits add up to 14, which isn't a multiple of 9."
  E: "Its digits add up to 12. That's a multiple of 3, but not of 9."
verify: "[1234, 4527, 6002, 7115, 8130].find((n) => n % 9 === 0)"
---

Which number is divisible by 9?

## Hint

Add up the digits of each number. A number is divisible by 9 when that sum is a multiple of 9.

## Hint 2

Add the digits of each choice, and look for a multiple of 9.

## Solution

Add the digits of each number:

- 1234 gives 10.
- 4527 gives 18.
- 6002 gives 8.
- 7115 gives 14.
- 8130 gives 12.

Only 18 is a multiple of 9, so 4527 is divisible by 9.

**Answer: (D) 4527**
