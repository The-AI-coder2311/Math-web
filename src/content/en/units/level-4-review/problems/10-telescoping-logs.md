---
order: 10
difficulty: medium
from: logarithms/03-change-of-base
choices: ["1","2","3","4","5"]
answer: E
mistakes:
  A: "Most factors cancel, but not all. The first denominator and the last numerator survive."
  B: "That's the product of the first two factors only, which is $\\log_2 4$."
  C: "That stops too early. The last numerator is $\\log 32$."
  D: "That's $\\log_2 16$. The last factor is $\\log_{31} 32$, so the chain ends at 32."
verify: "(() => { let p = 1; for (let k = 2; k <= 31; k++) p *= Math.log(k + 1) / Math.log(k); return Math.round(p); })()"
---

What is the value of $\log_2 3 \cdot \log_3 4 \cdot \log_4 5 \cdots \log_{31} 32$?

## Hint

Write every factor with the change-of-base formula, using the same base for all of them.

## Hint 2

$\log_k (k+1) = \frac{\log (k+1)}{\log k}$. Line the fractions up and look for cancelling.

## Solution

By change of base, each factor is $\frac{\log(k+1)}{\log k}$. The product is

$$\frac{\log 3}{\log 2} \cdot \frac{\log 4}{\log 3} \cdots \frac{\log 32}{\log 31}.$$

Every numerator cancels the next denominator, leaving $\frac{\log 32}{\log 2} = \log_2 32$, which is 5 because $2^5 = 32$.

**Answer: (E) 5**
