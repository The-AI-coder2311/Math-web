---
order: 7
difficulty: medium
from: algebra-toolkit/02-perfect-squares
choices: ["53","67","81","95","109"]
answer: A
mistakes:
  B: "That subtracts only $ab$. The middle part is $2ab$."
  C: "That's $(a + b)^2$. Subtract $2ab$."
  D: "That adds $ab$. Subtract $2ab$."
  E: "That's $81 + 28$. Subtract $2ab = 28$ from $(a + b)^2 = 81$ instead of adding it."
verify: "(() => { const [a, b] = product(range(1, 9), range(1, 9)).find(([x, y]) => x + y === 9 && x * y === 14); return a * a + b * b; })()"
---

If $a + b = 9$ and $ab = 14$, what is $a^2 + b^2$?

## Hint

Start with $(a + b)^2$.

## Hint 2

$a^2 + b^2 = (a + b)^2 - 2ab$.

## Solution

$a^2 + b^2 = 81 - 28 = 53$.

**Answer: (A) 53**
