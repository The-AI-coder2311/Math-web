---
order: 15
difficulty: medium
lesson: 04-recursive-and-special
choices: ["23","32","47","48","95"]
answer: C
mistakes:
  A: "That's the 4th term. The starting 2 counts as the 1st term."
  B: "That's $2^5$. It leaves out the \"plus 1\" at each step."
  D: "You may have added 1 at the end, once too often. Doubling 23 gives 46, plus 1 is 47."
  E: "That's the 6th term. The starting 2 is the 1st term, so stop one step sooner."
verify: "range(2, 5).reduce((t) => 2 * t + 1, 2)"
---

A list starts with 2. Each later term is twice the term before it, plus 1. What is the 5th term?

## Hint

Follow the rule one step at a time. What is the 2nd term?

## Hint 2

The list begins 2, 5, 11. Keep going until you have 5 terms.

## Solution

Follow the rule: $2 \times 2 + 1 = 5$, then $2 \times 5 + 1 = 11$, then $2 \times 11 + 1 = 23$, then $2 \times 23 + 1 = 47$. That's the 5th term.

**Answer: (C) 47**
