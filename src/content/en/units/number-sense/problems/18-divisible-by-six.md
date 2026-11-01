---
order: 16
difficulty: medium
lesson: 03-divisibility-rules
choices: ["1234","2316","3141","4505","5114"]
answer: B
mistakes:
  A: "It's even, but its digits add up to 10, which isn't a multiple of 3."
  C: "Its digits add up to 9, but it's odd. A multiple of 6 must be even."
  D: "It's odd, and its digits add up to 14. It fails both tests."
  E: "It's even, but its digits add up to 11, which isn't a multiple of 3."
verify: "[1234, 2316, 3141, 4505, 5114].find((n) => n % 6 === 0)"
---

Which number is divisible by 6?

## Hint

What two tests does a number have to pass to be divisible by 6?

## Hint 2

It has to be even, and its digit sum has to be a multiple of 3.

## Solution

A number divisible by 6 must pass the tests for 2 and for 3. Only 2316 does: it's even, and its digits add up to 12.

**Answer: (B) 2316**
