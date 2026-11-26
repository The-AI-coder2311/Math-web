---
order: 23
difficulty: hard
lesson: 03-change-of-base
choices: ["21","58","63","76","85"]
answer: D
mistakes:
  A: "That adds 7 and 3 and multiplies by 2. Square 7 and cube 3."
  B: "That's $49 + 9$. The second term is $3^3$."
  C: "That's $36 + 27$. The first term is $7^2$."
  E: "That's $49 + 36$. The second term is $3^3$."
verify: "Math.round(Math.pow(9, Math.log(7) / Math.log(3)) + Math.pow(8, Math.log(3) / Math.log(2)))"
---

What is $9^{\log_3 7} + 8^{\log_2 3}$?

## Hint

Write 9 as $3^2$ and 8 as $2^3$.

## Hint 2

$9^{\log_3 7} = (3^{\log_3 7})^2$.

## Solution

$9^{\log_3 7} = (3^{\log_3 7})^2 = 7^2 = 49$, and $8^{\log_2 3} = (2^{\log_2 3})^3 = 3^3 = 27$. The sum is 76.

**Answer: (D) 76**
