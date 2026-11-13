---
order: 20
difficulty: hard
lesson: 04-other-bases
choices: ["6","7","8","9","10"]
answer: C
mistakes:
  A: "Check it: $3 \\times 6 + 3$ is 21."
  B: "Check it: $3 \\times 7 + 3$ is 24."
  D: "That's $27 \\div 3$. It leaves out the 3 being added."
  E: "In base 10, the sum would be 33."
verify: "range(3, 40).find((b) => b + 2 + (2 * b + 1) === 27)"
---

In some base $b$, $12_b + 21_b = 27$, where the 27 is written in base 10. What is $b$?

## Hint

What does $12_b$ equal, using $b$ as the place value?

## Hint 2

$12_b = b + 2$, and $21_b = 2b + 1$.

## Solution

$12_b = b + 2$ and $21_b = 2b + 1$. Their sum is $3b + 3 = 27$, so $3b = 24$ and $b = 8$.

**Answer: (C) 8**
