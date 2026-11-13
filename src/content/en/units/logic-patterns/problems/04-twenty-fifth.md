---
order: 4
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["31","120","121","125","126"]
answer: E
mistakes:
  A: "That's $6 + 25$. Each step adds 5, and there are 24 steps from the 1st number to the 25th."
  B: "That's the 24 steps of 5. You still need to start from the first number, 6."
  C: "That starts from 1. The first number is 6."
  D: "That's $25 \\times 5$. It leaves out the starting value, and it uses 25 steps."
verify: "range(2, 25).reduce((value) => value + 5, 6)"
---

What is the 25th number in the list 6, 11, 16, 21, ...?

## Hint

How many steps does it take to get from the 1st number to the 25th? Test with a small case: how many steps are there from the 1st to the 3rd?

## Hint 2

It takes 24 steps to get to the 25th number.

## Solution

**Step 1.** Going from the 1st number to the 25th takes 24 steps, and each step adds 5.

**Step 2.** The 25th number is:

$$6 + 24 \times 5 = 126$$

**Answer: (E) 126**
