---
order: 4
difficulty: easy
lesson: 02-fast-sums
choices: ["7","13","15","14","49"]
answer: D
mistakes:
  A: "That's how many numbers there are. The middle number comes from the total divided by the count."
  B: "That's one below the middle. Check by adding 10 through 16, which gives only 91."
  C: "That's one above the middle. Check by adding 12 through 18, which gives 105."
  E: "That's half of the total. To find the average of 7 numbers, divide by 7."
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

**Answer: (D) 14**
