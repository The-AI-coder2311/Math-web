---
order: 24
difficulty: hard
lesson: 04-trig-equations
choices: ["3","4","5","6","8"]
answer: D
mistakes:
  A: "That finds only some of the solutions. Factor $\\sin 3x - \\sin x$ completely."
  B: "That counts only $\\cos 2x = 0$. Don't forget $\\sin x = 0$."
  C: "Recount: $\\sin x = 0$ gives 2 angles and $\\cos 2x = 0$ gives 4."
  E: "Check for repeats and the interval: $360^\\circ$ is not included."
verify: "range(0,359).filter(x => Math.abs(Math.sin(3*x*Math.PI/180) - Math.sin(x*Math.PI/180)) < 1e-9).length"
---

How many angles $x$ with $0^\circ \le x < 360^\circ$ satisfy $\sin 3x = \sin x$?

## Hint

Two angles have the same sine when they're equal or add up to $180^\circ$, up to full turns. Or factor $\sin 3x - \sin x$.

## Hint 2

$\sin 3x - \sin x = 2\cos 2x\sin x$.

## Solution

**Step 1.** $\sin 3x - \sin x = 2\cos 2x \sin x$, so either $\sin x = 0$ or $\cos 2x = 0$.

**Step 2.** $\sin x = 0$ gives $0^\circ$ and $180^\circ$.

**Step 3.** As $x$ runs through one turn, $2x$ runs through two, so $\cos 2x = 0$ has 4 solutions: $45^\circ$, $135^\circ$, $225^\circ$, $315^\circ$.

The total is $2 + 4 = 6$.

**Answer: (D) 6**
