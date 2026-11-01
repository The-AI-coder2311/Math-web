---
order: 6
difficulty: easy
from: data-chance/01-the-total-trick
choices: ["10","18","15","14","70"]
answer: D
mistakes:
  A: "That's the second number. In an evenly spaced list, the mean is the middle."
  C: "Check the division: $70 \\div 5$."
  B: "That's the fourth number. In an evenly spaced list, the mean is the middle."
  E: "That's the total. Divide by 5."
verify: "sum([6, 10, 14, 18, 22]) / 5"
---

What is the mean of 6, 10, 14, 18, and 22?

## Hint

The numbers are evenly spaced. Where does the mean sit?

## Hint 2

It sits at the middle number.

## Solution

The total is 70, and $70 \div 5 = 14$. That's also the middle number, as it always is in an evenly spaced list.

**Answer: (D) 14**
