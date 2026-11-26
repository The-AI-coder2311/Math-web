---
order: 9
difficulty: easy
lesson: 02-log-rules
choices: ["2","4","12","51","144"]
answer: A
mistakes:
  B: "That divides 48 by 12. Adding logs multiplies the inputs."
  C: "That's the base. Combine the inputs: $3 \\times 48$ is 144."
  D: "That adds the inputs. Adding logs multiplies them."
  E: "That's the combined input. The log of 144 in base 12 is the exponent."
verify: "Math.round((Math.log(3) + Math.log(48)) / Math.log(12))"
---

What is $\log_{12} 3 + \log_{12} 48$?

## Hint

Adding logs with the same base multiplies their inputs.

## Hint 2

$3 \times 48 = 144$.

## Solution

By the product rule, the sum is $\log_{12} (3 \times 48) = \log_{12} 144$. Since $12^2 = 144$, the answer is 2.

**Answer: (A) 2**
