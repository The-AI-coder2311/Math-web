---
order: 24
difficulty: medium
lesson: 01-multiply-choices
choices: ["12","27","64","81"]
answer: C
mistakes:
  A: "That's 4 times 3. Digits can repeat, so each spot has all 4 options."
  B: "That uses 3 prime digits. There are 4: 2, 3, 5, and 7."
  D: "That's 3 multiplied 4 times. There are 4 options and 3 spots, so it's 4 multiplied 3 times."
verify: "range(100, 999).filter((n) => digits(n).every(isPrime)).length"
---

How many three-digit numbers have only prime digits?

## Hint

Which single digits are prime?

## Hint 2

The prime digits are 2, 3, 5, and 7. Each of the 3 spots can use any of them.

## Solution

The prime digits are 2, 3, 5, and 7, and each of the 3 spots can use any of those. So there are $4 \times 4 \times 4 = 64$ numbers.

**Answer: (C) 64**
