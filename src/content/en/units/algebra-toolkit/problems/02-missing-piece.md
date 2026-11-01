---
order: 7
difficulty: medium
lesson: 02-perfect-squares
choices: ["17","39","29","49","69"]
answer: C
mistakes:
  A: "That's $7 + 10$. Use the pattern for the square of a sum."
  B: "That subtracts only $xy$. The middle part is $2xy$."
  D: "That's $(x + y)^2$, which includes the middle part. Subtract $2xy$."
  E: "That adds $2xy$. To go from $(x + y)^2$ to $x^2 + y^2$, subtract it."
verify: "(() => { const [x, y] = product(range(1, 7), range(1, 7)).find(([a, b]) => a + b === 7 && a * b === 10); return x * x + y * y; })()"
---

If $x + y = 7$ and $xy = 10$, what is the value of $x^2 + y^2$?

## Hint

Start with $(x + y)^2$. How is it different from $x^2 + y^2$?

## Hint 2

$x^2 + y^2 = (x + y)^2 - 2xy$.

## Solution

**Step 1.** Remember that $(x + y)^2 = x^2 + 2xy + y^2$.

**Step 2.** Rearrange it to get $x^2 + y^2 = (x + y)^2 - 2xy$.

**Step 3.** Plug in the values: $49 - 20 = 29$.

**Answer: (C) 29**
