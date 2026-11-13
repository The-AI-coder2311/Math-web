---
order: 11
difficulty: medium
lesson: 02-small-cases
choices: ["200","361","400","441","800"]
answer: C
mistakes:
  A: "That's half of the right answer. The sum of the first 20 odd numbers is $20 \\times 20$."
  B: "That's $19 \\times 19$. There are 20 odd numbers from 1 to 39."
  D: "That's $21 \\times 21$. There are 20 odd numbers from 1 to 39."
  E: "That's $20 \\times 40$, the total if you write the list twice. Divide by 2."
verify: "sum(range(1, 39).filter((n) => n % 2 === 1))"
---

What is the sum of the odd numbers from 1 to 39?

$$1 + 3 + 5 + \cdots + 39$$

## Hint

From the dot picture in the lesson, the sum of the first $n$ odd numbers is $n \times n$. So how many odd numbers are in this list?

## Hint 2

There are 20 odd numbers from 1 to 39. What does the dot picture tell you?

## Solution

**Step 1.** Count the odd numbers from 1 to 39. The numbers from 1 to 40 are half odd and half even, so there are 20 odd numbers.

**Step 2.** The sum of the first 20 odd numbers makes a 20 by 20 square of dots:

$$20 \times 20 = 400$$

**Answer: (C) 400**
