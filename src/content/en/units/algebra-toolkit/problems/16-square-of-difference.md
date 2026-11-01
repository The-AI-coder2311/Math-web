---
order: 12
difficulty: medium
lesson: 02-perfect-squares
choices: ["4","40","16","52","64"]
answer: C
mistakes:
  A: "That's $a - b$. The question asks for its square."
  B: "That's $64 - 24$, which subtracts $2ab$. That gives $a^2 + b^2$. The difference has another $2ab$ to remove."
  D: "That's $64 - 12$. Subtract $4ab$."
  E: "That's $(a + b)^2$. The difference is smaller."
verify: "(() => { const [a, b] = product(range(0, 8), range(0, 8)).find(([x, y]) => x + y === 8 && x * y === 12); return (a - b) ** 2; })()"
---

If $a + b = 8$ and $ab = 12$, what is the value of $(a - b)^2$?

## Hint

How does $(a - b)^2$ differ from $(a + b)^2$?

## Hint 2

$(a - b)^2 = (a + b)^2 - 4ab$.

## Solution

$(a - b)^2 = (a + b)^2 - 4ab = 64 - 48 = 16$.

**Check:** The numbers are 6 and 2, and $(6 - 2)^2 = 16$.

**Answer: (C) 16**
