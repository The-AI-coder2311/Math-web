---
order: 3
difficulty: medium
lesson: 01-unit-circle
choices: ["0","1","2","90","180"]
answer: A
mistakes:
  B: "That keeps $\\cos 0^\\circ$ but forgets that $\\cos 180^\\circ = -1$ cancels it."
  C: "That counts both ends as $+1$. The point at $180^\\circ$ is $(-1, 0)$."
  D: "That's the number of terms in one half, not the sum of the cosines."
  E: "That's the number of degrees, not the sum. Pair each angle with its supplement."
verify: "Math.round(sum(range(0,180).map(k => Math.cos(k*Math.PI/180))))"
---

What is the value of $\cos 0^\circ + \cos 1^\circ + \cos 2^\circ + \cdots + \cos 180^\circ$?

## Hint

Pair each angle with the angle that adds with it to $180^\circ$.

## Hint 2

Points at $k^\circ$ and $(180 - k)^\circ$ are mirror images across the $y$-axis, so their cosines are opposites.

## Solution

**Step 1.** For each $k$, $\cos(180^\circ - k^\circ) = -\cos k^\circ$, because the two points are mirror images across the $y$-axis.

**Step 2.** So $\cos 0^\circ$ cancels $\cos 180^\circ$, $\cos 1^\circ$ cancels $\cos 179^\circ$, and so on, up to $\cos 89^\circ$ and $\cos 91^\circ$.

**Step 3.** The middle term is $\cos 90^\circ = 0$. Everything adds to 0.

**Answer: (A) 0**
