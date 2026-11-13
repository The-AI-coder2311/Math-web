---
order: 2
difficulty: easy
from: number-sense/03-divisibility-rules
choices: ["245","412","513","614","701"]
answer: C
mistakes:
  A: "Its digits add up to 11, which isn't a multiple of 3."
  B: "Its digits add up to 7, which isn't a multiple of 3."
  D: "Its digits add up to 11, which isn't a multiple of 3."
  E: "Its digits add up to 8, which isn't a multiple of 3."
verify: "[245, 412, 513, 614, 701].find((n) => n % 3 === 0)"
---

Which number is divisible by 3?

## Hint

Add up the digits of each number.

## Hint 2

The digit sum has to be a multiple of 3.

## Solution

The digit sums are 11, 7, 9, 11, and 8. Only 513 has a digit sum that's a multiple of 3.

**Answer: (C) 513**
