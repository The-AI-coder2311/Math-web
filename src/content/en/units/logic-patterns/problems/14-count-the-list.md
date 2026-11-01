---
order: 14
difficulty: medium
lesson: 01-repeating-and-growing
choices: ["14","13","15","16","91"]
answer: A
mistakes:
  B: "That's the number of steps. 13 gaps connect 14 numbers."
  C: "That adds 2 to the steps. The number of terms is 1 more than the number of steps."
  D: "Check the steps: $91 \\div 7 = 13$, and then add 1."
  E: "That's the total climb. Divide by the step size."
verify: "range(6, 97).filter((n) => (n - 6) % 7 === 0).length"
---

How many numbers are in the list 6, 13, 20, ..., 97?

## Hint

What's the total climb, and how much is each step?

## Hint 2

The climb is 91, and each step is 7, so there are 13 steps.

## Solution

The climb is $97 - 6 = 91$, in steps of 7, so there are 13 steps. Those connect 14 numbers.

**Answer: (A) 14**
