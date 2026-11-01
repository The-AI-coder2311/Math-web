---
order: 12
difficulty: medium
lesson: 01-the-total-trick
choices: ["15","17","19","21","23"]
answer: B
mistakes:
  A: "Check it: 15 through 19 add up to only 85."
  C: "That's the middle number. The question asks for the smallest."
  D: "That's the largest number. The question asks for the smallest."
  E: "Check it: 23 through 27 add up to 125."
verify: "range(1, 40).find((n) => sum(range(n, n + 4)) === 95)"
---

Five consecutive whole numbers add up to 95. What is the smallest of them?

## Hint

What is the mean? Where does the mean sit in an evenly spaced list?

## Hint 2

The mean is $95 \div 5 = 19$, which is the middle number.

## Solution

The middle number is the mean, which is 19. The numbers are 17, 18, 19, 20, and 21, so the smallest is 17.

**Answer: (B) 17**
