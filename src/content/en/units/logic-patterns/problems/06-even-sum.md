---
order: 6
difficulty: medium
choices: [2500, 2525, 2550, 5050, 5100]
answer: C
verify: "sum(range(1, 100).filter((n) => n % 2 === 0))"
---

What is the sum of all the even numbers from 2 to 100?

$$2 + 4 + 6 + \cdots + 100$$

## Hint

Try pairing the first number with the last, and the second with the second-to-last. What does each pair add up to? How many pairs are there?

## Solution

**Step 1.** Pair the numbers from the outside in: 2 and 100 make 102, 4 and 98 make 102, and so on. Every pair adds up to 102.

**Step 2.** The list has 50 numbers, because 100 is $2 \times 50$. So there are 25 pairs.

**Step 3.** The sum is $25 \times 102 = 2550$.

**Answer: (C) 2550**
