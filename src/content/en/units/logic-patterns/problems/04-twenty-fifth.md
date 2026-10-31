---
order: 4
difficulty: easy
choices: [120, 121, 125, 126, 131]
answer: D
verify: "range(2, 25).reduce((value) => value + 5, 6)"
---

What is the 25th number in the list 6, 11, 16, 21, ...?

## Hint

How many steps does it take to get from the 1st number to the 25th? Test with a small case: how many steps are there from the 1st to the 3rd?

## Solution

**Step 1.** Going from the 1st number to the 25th takes 24 steps, and each step adds 5.

**Step 2.** The 25th number is:

$$6 + 24 \times 5 = 126$$

**Answer: (D) 126**
