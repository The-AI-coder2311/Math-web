---
order: 29
difficulty: hard
lesson: 01-overlaps
choices: ["20","26","30","33"]
answer: B
mistakes:
  A: "Check the pairs. Multiples of 6, 10, and 15 number 16, 10, and 6."
  C: "Don't forget to add back the multiples of 30."
  D: "Check your count of the numbers divisible by at least one. It's 74."
verify: "range(1, 100).filter((n) => n % 2 && n % 3 && n % 5).length"
---

How many whole numbers from 1 to 100 are divisible by none of 2, 3, and 5?

## Hint

Count the numbers divisible by at least one, using three groups.

## Hint 2

Add the groups, subtract the pairs, and add back the triple.

## Solution

At least one divides $50 + 33 + 20 - 16 - 10 - 6 + 3 = 74$ of them. So $100 - 74 = 26$ are divisible by none.

**Answer: (B) 26**
