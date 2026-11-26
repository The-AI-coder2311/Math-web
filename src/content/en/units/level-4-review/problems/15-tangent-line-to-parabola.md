---
order: 15
difficulty: medium
from: conic-sections/03-conic-intersections
choices: ["-2","-1","0","2","3"]
answer: D
mistakes:
  A: "Check the sign when you move $k$ across. The equation is $x^2 - 2x + 3 - k = 0$."
  B: "Remember the 4 in $b^2 - 4ac$."
  C: "With $k$ equal to 0 the discriminant is $4 - 12$, which is negative, so the line misses the parabola."
  E: "With $k$ equal to 3 the line crosses the parabola twice, at $x = 0$ and $x = 2$."
verify: "(() => { const ks = range(-10, 10).filter((k) => 2 * 2 - 4 * 1 * (3 - k) === 0); return ks.length === 1 ? ks[0] : NaN; })()"
---

For what value of $k$ is the line $y = 2x + k$ tangent to the parabola $y = x^2 + 3$?

## Hint

Set the two expressions for $y$ equal. A tangent line meets the curve exactly once.

## Hint 2

One solution means the quadratic's discriminant is zero.

## Solution

Setting $x^2 + 3 = 2x + k$ gives $x^2 - 2x + (3 - k) = 0$. The line is tangent when this has exactly one solution, so the discriminant is zero:

$$4 - 4(3 - k) = 0.$$

That gives $3 - k = 1$, so $k = 2$. The line touches the parabola at $x = 1$.

**Answer: (D) 2**
