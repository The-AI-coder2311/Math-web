---
order: 3
difficulty: easy
choices: [23, 24, 25, 26, 27]
answer: C
verify: "range(1, 100).find((n) => n + (n + 1) + (n + 2) === 72) + 2"
---

Three consecutive whole numbers add up to 72. What is the largest of the three numbers?

## Hint

Call the smallest number $n$. What are the other two?

## Solution

**Step 1.** The numbers are $n$, $n + 1$, and $n + 2$. Adding them gives $3n + 3 = 72$.

**Step 2.** Subtract 3 to get $3n = 69$, and divide by 3 to get $n = 23$.

**Step 3.** The numbers are 23, 24, and 25, so the largest is 25.

**Answer: (C) 25**
