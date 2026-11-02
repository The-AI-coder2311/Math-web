---
order: 24
difficulty: medium
lesson: 05-linearity-of-expectation
choices: ["4","5","10","15","20"]
answer: B
mistakes:
  A: "That divides by 5. Each question here has 4 choices."
  C: "That uses a chance of $\\frac{1}{2}$. With 4 choices, the chance is $\\frac{1}{4}$."
  D: "That's how many you'd expect to get wrong, not right."
  E: "That's every question. You're guessing, so you won't get them all on average."
verify: "20 * (1 / 4)"
---

A quiz has 20 questions, each with 4 choices. You guess at random on every question. How many questions do you expect to get right?

## Hint

Make one yes-or-no piece for each question.

## Hint 2

Each piece has a probability of $\frac{1}{4}$. How many pieces are there?

## Solution

There are 20 pieces, each with a probability of $\frac{1}{4}$. So the expected number is $20 \times \frac{1}{4} = 5$.

**Answer: (B) 5**
