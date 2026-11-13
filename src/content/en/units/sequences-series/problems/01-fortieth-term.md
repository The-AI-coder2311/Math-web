---
order: 1
difficulty: easy
lesson: 01-arithmetic-sequences
choices: ["47","156","160","163","167"]
answer: D
mistakes:
  A: "That's $7 + 40$. Each step adds 4, and there are 39 steps from the 1st term to the 40th."
  B: "You found the 39 steps, $39 \\times 4 = 156$, but you forgot to start from the first term, 7."
  C: "That's $40 \\times 4$. It leaves out the starting value of 7, and it uses 40 steps when there are 39."
  E: "That's $7 + 40 \\times 4$, which is one step too many. It takes only 39 steps to reach the 40th term."
verify: "range(2, 40).reduce((t) => t + 4, 7)"
---

What is the 40th term of the arithmetic sequence 7, 11, 15, 19, ...?

## Hint

How much does each step add? How many steps does it take to get from the 1st term to the 40th?

## Hint 2

Going from the 1st term to the 2nd takes 1 step, so going to the 40th takes 39 steps.

## Solution

**Step 1.** Each step adds 4, and there are 39 steps from the 1st term to the 40th.

**Step 2.** Start at 7 and add those steps: $7 + 39 \times 4 = 163$.

**Answer: (D) 163**
