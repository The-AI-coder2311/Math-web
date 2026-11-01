---
order: 4
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["120","121","125","126","131"]
answer: D
mistakes:
  A: "That's the 24 steps of 5. You still need to start from the first number, 6."
  B: "That starts from 1. The first number is 6."
  C: "That's $25 \\times 5$. It leaves out the starting value, and it uses 25 steps."
  E: "That uses 25 steps. It takes only 24 steps to reach the 25th number."
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

**Answer: (D) 126**
