---
order: 24
difficulty: medium
lesson: 01-repeating-and-growing
choices: ["2","5","7","8"]
answer: D
mistakes:
  A: "That's the 1st digit of the cycle. Divide 50 by 6, and use the remainder."
  B: "That's the 3rd digit of the cycle. Check the remainder when dividing 50 by 6."
  C: "That's the 4th digit of the cycle. Check the remainder when dividing 50 by 6."
verify: "Number('285714'[(50 - 1) % 6])"
---

As a decimal, $\frac{2}{7}$ is 0.285714285714..., with the digits 285714 repeating. What is the 50th digit after the decimal point?

## Hint

The cycle has 6 digits. What's the remainder when you divide 50 by 6?

## Hint 2

$50 = 6 \times 8 + 2$.

## Solution

Since $50 = 6 \times 8 + 2$, the 50th digit is the 2nd digit of the cycle, which is 8.

**Answer: (D) 8**
