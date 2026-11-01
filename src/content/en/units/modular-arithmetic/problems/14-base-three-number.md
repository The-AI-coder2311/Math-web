---
order: 6
difficulty: easy
lesson: 04-other-bases
choices: ["5","9","11","12","102"]
answer: C
mistakes:
  A: "That's $3 + 2$. The 1 is on the 9 place, not the 3 place."
  B: "That's only the first digit. The last digit adds 2."
  D: "Check the last digit: it's worth 2, so $9 + 2 = 11$."
  E: "That reads it as base 10. The small 3 says that it's in base 3."
verify: "parseInt('102', 3)"
---

What is $102_3$ in base 10?

## Hint

In base 3, the places are worth 9, 3, and 1.

## Hint 2

Multiply each digit by its place value.

## Solution

$102_3 = 1 \times 9 + 0 \times 3 + 2 \times 1 = 11$.

**Answer: (C) 11**
