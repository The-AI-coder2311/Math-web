---
order: 11
difficulty: medium
from: logarithms/04-logs-in-contests
choices: ["3","10","29","30","31"]
answer: E
mistakes:
  A: "That's the number of digits in the exponent 100."
  B: "That's 100 divided by 10. Use $\\log_{10} 2$, which is about 0.301."
  C: "That's two too few. The digit count is the whole-number part of the log, plus 1."
  D: "That's the whole-number part of $100 \\log_{10} 2$. Add 1 to get the number of digits."
verify: "(2n ** 100n).toString().length"
---

Given that $\log_{10} 2 \approx 0.30103$, how many digits does $2^{100}$ have?

## Hint

A number between $10^{k}$ and $10^{k+1}$ has $k + 1$ digits.

## Hint 2

Find $\log_{10} 2^{100}$ first.

## Solution

Take the log: $\log_{10} 2^{100} = 100 \log_{10} 2 \approx 30.103$. So $2^{100}$ lies between $10^{30}$ and $10^{31}$.

The smallest number with 31 digits is $10^{30}$, so $2^{100}$ has 31 digits.

**Answer: (E) 31**
