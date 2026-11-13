---
order: 19
difficulty: hard
lesson: 04-geometry-with-coordinates
choices: ["2","3","4","6","9"]
answer: B
mistakes:
  A: "That's the height of $P$. You still need the area of the triangle."
  C: "You may have used a base of 4. Point $E$ is the middle of a side of 6, so the base is 3."
  D: "That's the base times the height, without the one half."
  E: "That's $3 \\times 3$. The height is the $y$-coordinate of $P$, which is 2."
verify: "(() => { const x = range(0, 60).map((n) => n / 10).find((n) => Math.abs(6 - 2 * n - n) < 1e-9); return (3 * x) / 2; })()"
---

Square $ABCD$ has corners $A(0, 0)$, $B(6, 0)$, $C(6, 6)$, and $D(0, 6)$. Point $E$ is the middle of side $AB$. Lines $DE$ and $AC$ cross at $P$. What is the area of triangle $AEP$?

## Hint

Write equations for lines $DE$ and $AC$. Where do they cross?

## Hint 2

Line $AC$ is $y = x$, and line $DE$ is $y = 6 - 2x$. They cross at $(2, 2)$.

## Solution

**Step 1.** Point $E$ is $(3, 0)$. Line $AC$ is $y = x$, and line $DE$ goes from $(0, 6)$ to $(3, 0)$, so it's $y = 6 - 2x$.

**Step 2.** They cross where $x = 6 - 2x$, which gives $x = 2$. So $P$ is $(2, 2)$.

**Step 3.** Triangle $AEP$ has a level base of 3 and a height of 2, so its area is $\frac{1}{2} \times 3 \times 2 = 3$.

**Answer: (B) 3**
