---
order: 15
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["8","24","32","40","48"]
answer: D
mistakes:
  A: "That's the size of one part, $64 \\div 8 = 8$. The larger number is 5 of those parts."
  B: "That's the smaller number. The question asks for the larger."
  C: "That's half of 64, which would be a ratio of 1 to 1."
  E: "That's $\\frac{3}{4}$ of 64. The larger number is 5 boxes out of 8."
verify: "range(1, 64).find((x) => x * 3 === (64 - x) * 5)"
---

Two numbers are in a ratio of 3 to 5, and they add up to 64. What is the larger number?

## Hint

Draw 3 boxes and 5 boxes. How much does one box hold?

## Hint 2

There are 8 boxes, so each holds 8.

## Solution

There are $3 + 5 = 8$ boxes, so each holds $64 \div 8 = 8$. The larger number is $5 \times 8 = 40$.

**Answer: (D) 40**
