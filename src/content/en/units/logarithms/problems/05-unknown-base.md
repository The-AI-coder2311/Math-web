---
order: 5
difficulty: medium
lesson: 01-what-logs-mean
choices: ["2","3","9","27","81"]
answer: B
mistakes:
  A: "Check it: $2^4$ is 16, not 81."
  C: "Check it: $9^4$ is 6561. That would be the answer if the log were 2."
  D: "That's 81 divided by 3. The exponent form is $x^4 = 81$."
  E: "That's the input. The unknown is the base."
verify: "range(2, 100).find((x) => Math.abs(Math.log(81) / Math.log(x) - 4) < 1e-9)"
---

If $\log_x 81 = 4$, what is $x$?

## Hint

In exponent form, what is raised to the 4th power?

## Hint 2

The exponent form is $x^4 = 81$.

## Solution

In exponent form, $x^4 = 81$. Since $3^4 = 81$, we get $x = 3$. A base can't be negative, so $x = -3$ is not allowed.

**Answer: (B) 3**
