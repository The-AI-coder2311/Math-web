---
order: 18
difficulty: hard
lesson: 02-median-tables-graphs
choices: ["5.2","6.4","6.5","8","26"]
answer: A
mistakes:
  B: "That would need a total of 32. The two smallest numbers can be as low as 1."
  C: "That's $26 \\div 4$. The list has 5 numbers, so divide by 5."
  D: "That's the median. The mean can be lower if the small numbers are low."
  E: "That's the total. You still need to divide by 5."
verify: "Math.min(...product(range(1, 8), range(1, 8)).filter(([a, b]) => a <= b).map(([a, b]) => (a + b + 8 + 8 + 8) / 5))"
---

A list of 5 whole numbers has a median of 8. Every number is at least 1, and numbers may repeat. What is the smallest possible mean?

## Hint

In order, the 3rd number is 8. What's the smallest that the others can be?

## Hint 2

The two below can be 1, and the two above have to be at least 8.

## Solution

The smallest list is 1, 1, 8, 8, 8. It adds up to 26, so the mean is $26 \div 5 = 5.2$.

**Answer: (A) 5.2**
