---
order: 14
difficulty: medium
from: logic-patterns/03-working-backwards
choices: ["5","27","17","9","81"]
answer: D
mistakes:
  A: "That's the number subtracted. Work backwards from 22."
  C: "That subtracts 5 going back. To undo subtracting, add."
  B: "That's only one step back. Undo the tripling too."
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

**Answer: (D) 9**
