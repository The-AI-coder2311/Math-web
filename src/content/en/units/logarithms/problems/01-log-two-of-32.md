---
order: 1
difficulty: easy
lesson: 01-what-logs-mean
choices: ["5","6","10","16","30"]
answer: A
mistakes:
  B: "That's one too many. $2^6$ is 64."
  C: "Taking a log isn't multiplying by 2. Ask: 2 to what power is 32?"
  D: "That's 32 divided by 2. A log is an exponent."
  E: "That's 32 minus 2. A log is an exponent."
verify: "Math.round(Math.log(32) / Math.log(2))"
---

What is $\log_2 32$?

## Hint

Ask yourself: 2 to what power gives 32?

## Hint 2

Count the doublings: 2, 4, 8, 16, 32.

## Solution

We need the power of 2 that gives 32. Since $2^5 = 32$, the log is 5.

**Answer: (A) 5**
