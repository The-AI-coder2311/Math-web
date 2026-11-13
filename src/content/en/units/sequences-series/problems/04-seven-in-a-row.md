---
order: 4
difficulty: easy
lesson: 02-fast-sums
choices: ["13","14","15","49","91"]
answer: B
mistakes:
  A: "That's one below the middle. Check by adding 10 through 16, which gives only 91."
  C: "That's one above the middle. Check by adding 12 through 18, which gives 105."
  D: "That's half of the total. To find the average of 7 numbers, divide by 7."
  E: "That subtracts 7 from 98. Divide 98 by 7 to find the middle number."
verify: "range(1, 90).find((n) => sum(range(n, n + 6)) === 98) + 3"
---

Seven consecutive whole numbers add up to 98. What is the middle number?

## Hint

In an evenly spaced list, how does the middle number compare with the average?

## Hint 2

The middle number equals the average. The average is the total divided by the count.

## Solution

In an evenly spaced list, the middle number equals the average, which is $98 \div 7 = 14$.

**Check:** $11 + 12 + 13 + 14 + 15 + 16 + 17 = 98$.

**Answer: (B) 14**
