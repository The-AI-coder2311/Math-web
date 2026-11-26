---
order: 21
difficulty: medium
lesson: 04-trig-equations
choices: ["2","3","4","5","6"]
answer: C
mistakes:
  A: "That divides by $\\cos x$ and loses the solutions where $\\cos x = 0$."
  B: "Count each factor's solutions: $\\cos x = 0$ gives two angles."
  D: "None of the solutions repeat, but there are only two factors with two solutions each."
  E: "Check $\\sin x = \\frac{1}{2}$: it has two solutions per turn, not three."
verify: "range(0,359).filter(x => Math.abs(Math.sin(2*x*Math.PI/180) - Math.cos(x*Math.PI/180)) < 1e-9).length"
---

How many angles $x$ with $0^\circ \le x < 360^\circ$ satisfy $\sin 2x = \cos x$?

## Hint

Rewrite $\sin 2x$ with the double-angle formula. Don't divide by anything that could be zero.

## Hint 2

Factor: $\cos x(2\sin x - 1) = 0$.

## Solution

**Step 1.** $2\sin x\cos x = \cos x$, so $\cos x(2\sin x - 1) = 0$.

**Step 2.** $\cos x = 0$ gives $90^\circ$ and $270^\circ$.

**Step 3.** $\sin x = \frac{1}{2}$ gives $30^\circ$ and $150^\circ$.

That's 4 solutions.

**Answer: (C) 4**
