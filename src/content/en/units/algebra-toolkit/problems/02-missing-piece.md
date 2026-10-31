---
order: 2
difficulty: medium
choices: [17, 29, 39, 49, 69]
answer: B
verify: "(() => { const [x, y] = product(range(1, 7), range(1, 7)).find(([a, b]) => a + b === 7 && a * b === 10); return x * x + y * y; })()"
---

If $x + y = 7$ and $xy = 10$, what is the value of $x^2 + y^2$?

## Hint

Start with $(x + y)^2$. How is it different from $x^2 + y^2$?

## Solution

**Step 1.** Remember that $(x + y)^2 = x^2 + 2xy + y^2$.

**Step 2.** Rearrange it to get $x^2 + y^2 = (x + y)^2 - 2xy$.

**Step 3.** Plug in the values: $49 - 20 = 29$.

**Answer: (B) 29**
