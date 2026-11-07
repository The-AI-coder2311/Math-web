---
order: 25
difficulty: medium
lesson: 02-age-and-number-stories
choices: ["1","2","4","9"]
answer: C
mistakes:
  A: "12 works, since it's 4 times 3. But so do others."
  B: "Check the pattern: the ones digit must be twice the tens digit. List them all."
  D: "That counts every tens digit. The ones digit has to be a single digit too."
verify: "range(10, 99).filter((n) => n === 4 * sum(digits(n))).length"
---

How many two-digit numbers are equal to 4 times the sum of their digits?

## Hint

Write the number as $10a + b$, with digits $a$ and $b$.

## Hint 2

$10a + b = 4(a + b)$ simplifies to $6a = 3b$, so $b = 2a$.

## Solution

From $10a + b = 4(a + b)$, we get $6a = 3b$, so $b = 2a$. The ones digit is twice the tens digit, which gives 12, 24, 36, and 48. The next one would need a ones digit of 10. So there are 4.

**Answer: (C) 4**
