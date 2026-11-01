---
order: 12
difficulty: medium
lesson: 03-counting-step-by-step
choices: ["13","18","24","32","44"]
answer: C
mistakes:
  A: "That's the count for step 5. Go one more: $4 + 7 + 13$."
  B: "You may have used only two earlier counts for the last step. With 3 possible moves, you add the three before it."
  D: "That's $2^5$. It happens to count ways with any step sizes up to 6, but your largest move here is 3."
  E: "That's the count for step 7. You went one step too far."
verify: "range(4, 6).reduce(([a, b, c]) => [b, c, a + b + c], [1, 2, 4])[2]"
---

You climb a staircase with 6 steps, taking 1, 2, or 3 steps at a time. How many different ways can you climb it?

## Hint

Now the last move has three options. How does that change the rule?

## Hint 2

Each count is the sum of the three before it. The first three counts are 1, 2, and 4.

## Solution

The first three counts are 1, 2, and 4. After that, each count is the sum of the three before it: $1 + 2 + 4 = 7$, then $2 + 4 + 7 = 13$, then $4 + 7 + 13 = 24$.

**Answer: (C) 24**
