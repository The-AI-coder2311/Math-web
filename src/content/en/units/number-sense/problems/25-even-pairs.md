---
order: 25
difficulty: medium
lesson: 02-mental-math
choices: ["100","110","120","200"]
answer: B
mistakes:
  A: "That's the sum of the first 10 odd numbers. Check with pairs of even numbers."
  C: "There are 5 pairs that add up to 22, not 24."
  D: "That's 10 times 20. Each pair adds up to 22, and there are 5 pairs."
verify: "sum(range(1, 10).map((n) => 2 * n))"
---

What is $2 + 4 + 6 + \cdots + 20$?

## Hint

Pair the first number with the last, the second with the second-to-last, and so on.

## Hint 2

$2 + 20 = 22$. How many pairs are there?

## Solution

There are 10 numbers, so there are 5 pairs. Each pair adds up to 22, as in $2 + 20$ and $4 + 18$. So the sum is $5 \times 22 = 110$.

**Answer: (B) 110**
