---
order: 12
difficulty: medium
lesson: 01-the-total-trick
choices: ["17","19","21","23","91"]
answer: A
mistakes:
  B: "That's the middle number. The question asks for the smallest."
  C: "That's the largest number. The question asks for the smallest."
  D: "Check it: 23 through 27 add up to 125."
  E: "That subtracts 4 from 95. First divide 95 by 5 to find the middle number, 19."
verify: "range(1, 40).find((n) => sum(range(n, n + 4)) === 95)"
---

Five consecutive whole numbers add up to 95. What is the smallest of them?

## Hint

What is the mean? Where does the mean sit in an evenly spaced list?

## Hint 2

The mean is $95 \div 5 = 19$, which is the middle number.

## Solution

The middle number is the mean, which is 19. The numbers are 17, 18, 19, 20, and 21, so the smallest is 17.

**Answer: (A) 17**
