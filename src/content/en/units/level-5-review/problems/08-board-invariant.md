---
order: 8
difficulty: medium
from: aime-strategy/02-invariants-monovariants
choices: ["45","46","54","55","56"]
answer: B
mistakes:
  A: "That's the sum minus the count at the start. At the end the count is 1, so add 1 back."
  C: "That subtracts 1 only once. Each of the 9 moves subtracts 1 from the sum."
  D: "That's the starting sum. Each move lowers the sum by 1."
  E: "That adds 1 to the sum. Each move subtracts 1 instead."
verify: "(() => { let b = range(1, 10); while (b.length > 1) { const x = b.pop(); const y = b.shift(); b.push(x + y - 1); } return b[0]; })()"
---

The numbers 1, 2, 3, and so on up to 10 are written on a board. A move erases two numbers $a$ and $b$ and writes the single number $a + b - 1$. After 9 moves, one number is left. What is it?

## Hint

Look for a quantity that a move doesn't change.

## Hint 2

Each move lowers the sum by 1 and lowers the count of numbers by 1.

## Solution

Let $S$ be the sum of the numbers on the board and $N$ the number of them. A move replaces $a + b$ with $a + b - 1$, so $S$ drops by 1, and $N$ also drops by 1. So $S - N$ never changes.

At the start, $S - N = 55 - 10 = 45$. At the end $N$ is 1, so the last number is $45 + 1 = 46$. The order of the moves doesn't matter at all, which is the power of an invariant.

**Answer: (B) 46**
