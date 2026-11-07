---
order: 25
difficulty: medium
lesson: 02-median-tables-graphs
choices: ["12","14","16","21"]
answer: B
mistakes:
  A: "You can make the others smaller. The two lowest numbers can be 1."
  C: "That lets the fourth number be below the median. It must be at least 7."
  D: "That forgets the median itself, and the number after it."
verify: "Math.max(...product(range(1, 7), range(1, 7), range(7, 30), range(7, 30)).filter(([a, b, d, e]) => a <= b && d <= e && a + b + 7 + d + e === 30).map(([a, b, d, e]) => e))"
---

Five positive whole numbers have a mean of 6 and a median of 7. What is the largest possible value of the biggest number?

## Hint

Find the total. Then make the other numbers as small as the rules allow.

## Hint 2

The total is 30. The two lowest can be 1. The number after the median must be at least 7.

## Solution

The total is $5 \times 6 = 30$. The smallest allowed choices are 1, 1, 7, and 7. So the biggest number is $30 - 16 = 14$.

**Answer: (B) 14**
