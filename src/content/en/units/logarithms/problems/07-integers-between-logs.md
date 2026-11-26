---
order: 7
difficulty: hard
lesson: 01-what-logs-mean
choices: ["70","71","72","80","81"]
answer: B
mistakes:
  A: "That leaves out one end. The integers from 10 to 80 make 71."
  C: "That includes 9 or 81, but the inequalities are strict."
  D: "That's 81 minus 1. Only integers above 9 count."
  E: "That's $3^4$. Count the integers strictly between 9 and 81."
verify: "range(1, 200).filter((n) => n > 3 ** 2 && n < 3 ** 4).length"
---

How many integers $n$ satisfy $2 < \log_3 n < 4$?

## Hint

Rewrite each inequality in exponent form. Since a bigger power of 3 is bigger, the inequalities keep their direction.

## Hint 2

The condition becomes $3^2 < n < 3^4$.

## Solution

Since raising 3 to a power keeps order, $2 < \log_3 n < 4$ means $9 < n < 81$. The integers from 10 to 80 number $80 - 10 + 1 = 71$.

**Answer: (B) 71**
