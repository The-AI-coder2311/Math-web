---
order: 1
difficulty: easy
from: logarithms/01-what-logs-mean
choices: ["4","5","6","8","32"]
answer: C
mistakes:
  A: "That's log base 2 of 16. Keep doubling: 32, then 64."
  B: "That's log base 2 of 32. One more doubling reaches 64."
  D: "That's the square root of 64. A logarithm asks for an exponent, not a root."
  E: "That's 64 divided by 2. The log is the power of 2 that makes 64."
verify: "Math.round(Math.log2(64))"
---

What is the value of $\log_2 64$?

## Hint

Rewrite the question: 2 to what power gives 64?

## Hint 2

$2^5 = 32$. Try one more factor of 2.

## Solution

A logarithm asks for an exponent. Since $2^6 = 64$, the power we need is 6.

So $\log_2 64$ is 6.

**Answer: (C) 6**
