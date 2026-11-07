---
order: 24
difficulty: medium
lesson: 01-the-total-trick
choices: ["5","6","10","12"]
answer: A
mistakes:
  B: "That's how many scores there are after adding the 30. The question asks about before."
  C: "Test it: with 10 scores, adding a 30 raises the mean by about 1, not 2."
  D: "That's how far the new score is above the old mean."
verify: "range(1, 30).find((n) => 18 * n + 30 === 20 * (n + 1))"
---

The mean of some scores is 18. Adding one more score of 30 raises the mean to 20. How many scores were there before?

## Hint

Write the new total in two ways.

## Hint 2

$18n + 30 = 20(n + 1)$.

## Solution

Let there be $n$ scores. Then $18n + 30 = 20(n + 1)$, which gives $10 = 2n$, so $n = 5$.

**Answer: (A) 5**
