---
order: 10
difficulty: medium
choices: [200, 361, 400, 441, 800]
answer: C
verify: "sum(range(1, 39).filter((n) => n % 2 === 1))"
---

What is the sum of the odd numbers from 1 to 39?

$$1 + 3 + 5 + \cdots + 39$$

## Hint

From the dot picture in the lesson, the sum of the first $n$ odd numbers is $n \times n$. So how many odd numbers are in this list?

## Solution

**Step 1.** Count the odd numbers from 1 to 39. The numbers from 1 to 40 are half odd and half even, so there are 20 odd numbers.

**Step 2.** The sum of the first 20 odd numbers makes a 20 by 20 square of dots:

$$20 \times 20 = 400$$

**Answer: (C) 400**
