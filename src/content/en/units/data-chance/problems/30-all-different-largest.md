---
order: 30
difficulty: hard
lesson: 02-median-tables-graphs
choices: ["36","40","41","46"]
answer: B
mistakes:
  A: "You can make the others smaller. Try 1, 2, 3, and 4."
  C: "The numbers must be different, so they can't all be 1 or repeat."
  D: "That lets the numbers repeat. They must all be different."
verify: "50 - sum(range(1, 4))"
---

Five different positive whole numbers have a mean of 10. What is the largest possible value of the biggest number?

## Hint

Find the total. To make one number large, make the others as small as possible.

## Hint 2

The total is 50. The smallest four different positive whole numbers are 1, 2, 3, and 4.

## Solution

The total is $5 \times 10 = 50$. The other four are at least $1 + 2 + 3 + 4 = 10$. So the biggest number is $50 - 10 = 40$.

**Answer: (B) 40**
