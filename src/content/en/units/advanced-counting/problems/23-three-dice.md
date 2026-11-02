---
order: 23
difficulty: easy
lesson: 05-linearity-of-expectation
choices: ["7","9","10.5","12","18"]
answer: C
mistakes:
  A: "That's the expected sum for 2 dice. There are 3 here."
  B: "That uses 3 as the average of one die. The average of 1 through 6 is 3.5."
  D: "That uses 4 as the average of one die. The average of 1 through 6 is 3.5."
  E: "That's the largest possible sum, not the average."
verify: "sum(product(range(1, 6), range(1, 6), range(1, 6)).map(sum)) / 216"
---

Three fair dice are rolled. What is the expected value of their sum?

## Hint

What's the average of one die?

## Hint 2

One die averages 3.5. Expected values add up.

## Solution

One die averages $\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$. Expected values add up, so three dice average $3 \times 3.5 = 10.5$.

**Answer: (C) 10.5**
