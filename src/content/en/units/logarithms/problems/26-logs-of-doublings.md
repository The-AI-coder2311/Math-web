---
order: 26
difficulty: medium
lesson: 04-logs-in-contests
choices: ["20","190","200","210","420"]
answer: D
mistakes:
  A: "That's the last term. Add all of the exponents from 0 to 20."
  B: "That's $0 + 1 + \\cdots + 19$. Include the last term, 20."
  C: "Use the sum formula: $\\frac{20 \\times 21}{2}$ is 210."
  E: "That's $20 \\times 21$. Divide by 2."
verify: "Math.round(sum(range(0, 20).map((k) => Math.log(2 ** k) / Math.log(2))))"
---

What is $\log_2 1 + \log_2 2 + \log_2 4 + \log_2 8 + \cdots + \log_2 2^{20}$?

## Hint

Each input is a power of 2. What is each log?

## Hint 2

The logs are $0, 1, 2, \ldots, 20$.

## Solution

The logs are the exponents $0, 1, 2, \ldots, 20$. Their sum is $\frac{20 \times 21}{2} = 210$.

**Answer: (D) 210**
