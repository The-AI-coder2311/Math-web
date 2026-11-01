---
order: 18
difficulty: hard
from: logic-patterns/01-repeating-and-growing
choices: ["10","11","29","13","12"]
answer: E
mistakes:
  A: "Count the cycles: $5 \\times 11 = 55$, so there are 11 full cycles."
  B: "That's the full cycles. The 3 leftover letters include another B."
  D: "The leftover letters are A, B, and C, which include only one B."
  C: "That's half of 58. There are 5 letters in the cycle, not 2."
verify: "range(0, 57).filter((i) => [...'ABCDE'][i % 5] === 'B').length"
---

The letters A, B, C, D, E repeat in order: ABCDEABCDE... How many Bs are in the first 58 letters?

## Hint

How many full cycles fit in 58 letters? How many letters are left over?

## Hint 2

$58 = 5 \times 11 + 3$. Do the leftover letters include a B?

## Solution

Since $58 = 5 \times 11 + 3$, there are 11 full cycles, with 1 B each. The 3 leftover letters are A, B, and C, which include one more B. So there are 12.

**Answer: (E) 12**
