---
order: 3
difficulty: easy
from: sequences-series/01-arithmetic-sequences
choices: ["146","150","156","151","180"]
answer: D
mistakes:
  A: "That's the 29th term. It takes 29 steps to reach the 30th."
  B: "That's $30 \\times 5$. It uses too many steps and skips the start."
  C: "That's $6 + 30 \\times 5$, which is one step too many."
  E: "That's $6 \\times 30$. This list adds, and doesn't multiply."
verify: "range(2, 30).reduce((t) => t + 5, 6)"
---

What is the 30th term of the arithmetic sequence 6, 11, 16, ...?

## Hint

How many steps are there to the 30th term?

## Hint 2

There are 29 steps of 5.

## Solution

There are 29 steps of 5, so the term is $6 + 29 \times 5 = 151$.

**Answer: (D) 151**
