---
order: 27
difficulty: medium
lesson: 03-divisibility-rules
choices: ["60","100","120","180"]
answer: C
mistakes:
  A: "That's divisible by all three, but it has only two digits."
  B: "100 isn't divisible by 3, since its digit sum is 1."
  D: "That works, but there's a smaller one."
verify: "range(100, 999).find((n) => n % 3 === 0 && n % 4 === 0 && n % 5 === 0)"
---

What is the smallest three-digit number that's divisible by 3, by 4, and by 5?

## Hint

A number divisible by 3, 4, and 5 must be a multiple of what number?

## Hint 2

These three numbers share no factors, so it must be a multiple of $3 \times 4 \times 5 = 60$.

## Solution

Such a number must be a multiple of $3 \times 4 \times 5 = 60$. The multiples are 60, 120, 180, and so on. The first with three digits is 120.

**Answer: (C) 120**
