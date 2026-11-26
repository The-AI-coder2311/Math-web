---
order: 6
difficulty: hard
lesson: 01-unit-circle
choices: ["135","179","180","181","225"]
answer: B
mistakes:
  A: "That's the number of degrees from $90^\\circ$ to $225^\\circ$. Sine is bigger than cosine starting at $45^\\circ$."
  C: "That counts both endpoints, $45$ and $225$. At those angles sine and cosine are equal, not one bigger."
  D: "That counts the endpoints and one more. At $45^\\circ$ and $225^\\circ$, the two values are equal."
  E: "That's where the region ends, not how many whole numbers are in it."
verify: "range(1,360).filter(n => Math.sin(n*Math.PI/180) > Math.cos(n*Math.PI/180) + 1e-12).length"
---

How many integers $n$ with $1 \le n \le 360$ satisfy $\sin n^\circ > \cos n^\circ$?

## Hint

Think of the point $(\cos\theta, \sin\theta)$. When is its $y$-coordinate bigger than its $x$-coordinate?

## Hint 2

The point is above the line $y = x$. That line meets the unit circle at $45^\circ$ and $225^\circ$.

## Solution

**Step 1.** $\sin\theta > \cos\theta$ means the point $(\cos\theta, \sin\theta)$ lies above the line $y = x$.

**Step 2.** The line $y = x$ crosses the unit circle at $45^\circ$ and $225^\circ$. The arc above the line runs between them, not including the ends, where the values are equal.

**Step 3.** The integers from 46 to 224 make $224 - 46 + 1 = 179$ values.

**Answer: (B) 179**
