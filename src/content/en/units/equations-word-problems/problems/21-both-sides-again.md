---
order: 21
difficulty: easy
lesson: 01-solving-and-translating
choices: ["1","2","8","16"]
answer: C
mistakes:
  A: "Test it: 5 minus 7 is not the same as 3 plus 9."
  B: "Test it: 10 minus 7 is 3, and 6 plus 9 is 15."
  D: "That's $2x$. Divide by 2 to finish."
verify: "range(1, 20).find((x) => 5 * x - 7 === 3 * x + 9)"
---

Solve $5x - 7 = 3x + 9$.

## Hint

Get the $x$ terms on one side, and the numbers on the other.

## Hint 2

Subtracting $3x$ and adding 7 gives $2x = 16$.

## Solution

Subtract $3x$ from both sides, and add 7 to both sides. That gives $2x = 16$, so $x = 8$.

**Answer: (C) 8**
