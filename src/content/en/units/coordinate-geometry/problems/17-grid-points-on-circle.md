---
order: 17
difficulty: hard
lesson: 02-distance-midpoints-circles
choices: ["4","12","10","8","16"]
answer: B
mistakes:
  A: "That counts only the points on the axes. The 3-4-5 triangle gives more."
  D: "That counts the 3-4-5 points but misses the 4 points on the axes, like $(5, 0)$."
  C: "Count again by groups: 4 on the axes, and 8 from the 3-4-5 triangle."
  E: "That counts the axis points as if they had 8 versions each. A point like $(5, 0)$ has only 4 versions, since 0 has no sign."
verify: "product(range(-5, 5), range(-5, 5)).filter(([x, y]) => x * x + y * y === 25).length"
---

How many points lie on the circle $x^2 + y^2 = 25$ if both coordinates are integers? (Integers are whole numbers and their negatives, so $(-3, 4)$ would count.)

## Hint

Which pairs of perfect squares add up to 25? Don't forget that 0 is a perfect square.

## Hint 2

The pairs are $0 + 25$ and $9 + 16$. Now count all of the signs and orders.

## Solution

**Step 1.** The pair $0 + 25$ gives $(\pm 5, 0)$ and $(0, \pm 5)$. That's 4 points.

**Step 2.** The pair $9 + 16$ uses 3 and 4, in either order, with either sign. That's $2 \times 2 \times 2 = 8$ points.

**Step 3.** The total is $4 + 8 = 12$.

**Answer: (B) 12**
