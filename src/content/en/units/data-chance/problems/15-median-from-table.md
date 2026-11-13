---
order: 13
difficulty: medium
lesson: 02-median-tables-graphs
choices: ["2","2.5","3","3.5","5"]
answer: B
mistakes:
  A: "That's the 5th score. With 10 scores, average the 5th and 6th."
  C: "That's the mode, and also the 6th score. With 10 scores, average the 5th and 6th."
  D: "Write the scores out in order, and find the 5th and 6th."
  E: "That's the middle position. The median is the score at that position."
verify: "(() => { const l = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4]; return (l[4] + l[5]) / 2; })()"
---

The table shows the scores of 10 students on a short quiz.

| Score | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Number of students | 2 | 3 | 4 | 1 |

What is the median score?

## Hint

Write out all 10 scores in order. Which positions are in the middle?

## Hint 2

The middle two are the 5th and 6th scores.

## Solution

In order, the scores are 1, 1, 2, 2, 2, 3, 3, 3, 3, 4. The 5th is 2 and the 6th is 3, so the median is $(2 + 3) \div 2 = 2.5$.

**Answer: (B) 2.5**
