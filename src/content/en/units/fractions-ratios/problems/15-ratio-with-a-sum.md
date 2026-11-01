---
order: 15
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["24","32","40","48","60"]
answer: C
mistakes:
  A: "That's the smaller number. The question asks for the larger."
  B: "That's half of 64, which would be a ratio of 1 to 1."
  D: "That's $\\frac{3}{4}$ of 64. The larger number is 5 boxes out of 8."
  E: "That's 64 minus a small part. The larger number is $\\frac{5}{8}$ of the total."
verify: "range(1, 64).find((x) => x * 3 === (64 - x) * 5)"
---

Two numbers are in a ratio of 3 to 5, and they add up to 64. What is the larger number?

## Hint

Draw 3 boxes and 5 boxes. How much does one box hold?

## Hint 2

There are 8 boxes, so each holds 8.

## Solution

There are $3 + 5 = 8$ boxes, so each holds $64 \div 8 = 8$. The larger number is $5 \times 8 = 40$.

**Answer: (C) 40**
