---
order: 6
difficulty: easy
lesson: 04-expected-value
choices: ["3.5","4","6","7","21"]
answer: A
mistakes:
  B: "Check the division: $21 \\div 6$. An expected value doesn't have to be a whole number."
  C: "That's the largest roll. The expected value is the average."
  D: "That's $1 + 6$, the smallest and largest rolls added together. The expected value is the average, which is half of that."
  E: "That's the total of all of the faces. Divide by 6."
verify: "sum(range(1, 6)) / 6"
---

What is the expected value of one roll of a standard 6-sided die?

## Hint

Imagine rolling 6 times and getting each number once. What do you get on average?

## Hint 2

The numbers add up to 21, over 6 rolls.

## Solution

The numbers add up to 21, so the average is $21 \div 6 = 3.5$.

**Answer: (A) 3.5**
