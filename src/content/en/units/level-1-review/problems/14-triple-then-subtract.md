---
order: 14
difficulty: medium
from: logic-patterns/03-working-backwards
choices: ["9","17","27","61","81"]
answer: A
mistakes:
  B: "That subtracts 5 going back. To undo subtracting, add."
  C: "That's only one step back. Undo the tripling too."
  D: "That's $22 \\times 3 - 5 = 61$, which does Lee's steps to 22. But 22 is the result, so undo the steps instead."
  E: "That multiplies by 3 going back. To undo tripling, divide."
verify: "range(0, 100).find((n) => 3 * n - 5 === 22)"
---

Lee triples a number and then subtracts 5. The result is 22. What was the number?

## Hint

Start at 22, and undo the last step first.

## Hint 2

Add 5 to get 27. Then undo the tripling.

## Solution

Undo the subtraction: $22 + 5 = 27$. Undo the tripling: $27 \div 3 = 9$.

**Answer: (A) 9**
