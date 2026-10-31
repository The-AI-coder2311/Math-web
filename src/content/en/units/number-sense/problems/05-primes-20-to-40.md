---
order: 5
difficulty: easy
choices: [3, 4, 5, 6, 7]
answer: B
verify: "range(20, 40).filter(isPrime).length"
---

How many prime numbers are there between 20 and 40?

## Hint

Cross out all the even numbers first, since they can't be prime here. Then test what's left by dividing by 3 and 5.

## Solution

**Step 1.** Even numbers are divisible by 2, so they aren't prime. That leaves the odd numbers: 21, 23, 25, 27, 29, 31, 33, 35, 37, and 39.

**Step 2.** Cross out the numbers with a factor pair:

- $21 = 3 \times 7$
- $25 = 5 \times 5$
- $27 = 3 \times 9$
- $33 = 3 \times 11$
- $35 = 5 \times 7$
- $39 = 3 \times 13$

**Step 3.** The numbers left are 23, 29, 31, and 37. None of them can be divided evenly by 2, 3, or 5. We don't need to test any further, because $7 \times 7 = 49$ is already bigger than all of them, so any factor pair would have to include a number smaller than 7. All four are prime.

**Answer: (B) 4**
