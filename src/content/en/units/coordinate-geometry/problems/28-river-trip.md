---
order: 28
difficulty: medium
lesson: 04-geometry-with-coordinates
choices: ["6","8","10","14"]
answer: C
mistakes:
  A: "That's the straight path, which doesn't touch the river."
  B: "That's the two trips straight down, with nothing across."
  D: "That goes straight down, then across, then up. The reflection finds a shorter path."
verify: "Math.sqrt(6 ** 2 + (4 + 4) ** 2)"
---

You walk from $(0, 4)$ to $(6, 4)$, touching the $x$-axis along the way. What is the shortest total distance?

## Hint

Reflect the end point across the $x$-axis.

## Hint 2

The reflected point is $(6, -4)$.

## Solution

Reflect $(6, 4)$ to $(6, -4)$. The shortest path is a straight line to it, with a length of $\sqrt{6^2 + 8^2} = 10$.

**Answer: (C) 10**
