---
order: 14
difficulty: medium
lesson: 04-geometry-with-coordinates
choices: ["(-4, 3)","(-3, -4)","(3, -4)","(4, 3)","(4, -3)"]
answer: E
mistakes:
  A: "That reflects over the $y$-axis at the end. The $x$-axis mirror changes the $y$-coordinate."
  B: "That changes both signs, without any swap. Reflecting over $y = x$ swaps the coordinates."
  C: "That leaves out the first reflection, which swaps the coordinates."
  D: "That's only the first reflection. There's one more."
verify: "(() => { const [x, y] = [3, 4]; const [a, b] = [y, x]; return `(${a}, ${-b})`; })()"
---

The point $(3, 4)$ is reflected over the line $y = x$. The result is then reflected over the $x$-axis. Where does it end up?

## Hint

Do one reflection at a time. What does reflecting over $y = x$ do to the coordinates?

## Hint 2

Reflecting over $y = x$ swaps them, giving $(4, 3)$. Reflecting over the $x$-axis changes the sign of $y$.

## Solution

Reflecting over $y = x$ swaps the coordinates, giving $(4, 3)$. Reflecting over the $x$-axis changes the sign of $y$, giving $(4, -3)$.

**Answer: (E) (4, -3)**
