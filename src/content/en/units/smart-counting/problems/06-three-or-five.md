---
order: 6
difficulty: medium
choices: [47, 53, 56, 59, 67]
answer: A
verify: "range(1, 100).filter((n) => n % 3 === 0 || n % 5 === 0).length"
---

How many whole numbers from 1 to 100 are divisible by 3 or by 5 (or by both)?

## Hint

Count the multiples of 3 and the multiples of 5. Which numbers get counted twice?

## Solution

**Step 1.** There are 33 multiples of 3, since $3 \times 33 = 99$.

**Step 2.** There are 20 multiples of 5, since $5 \times 20 = 100$.

**Step 3.** Multiples of 15 get counted twice. There are 6 of them, since $15 \times 6 = 90$.

**Step 4.** The total is $33 + 20 - 6 = 47$.

**Answer: (A) 47**
