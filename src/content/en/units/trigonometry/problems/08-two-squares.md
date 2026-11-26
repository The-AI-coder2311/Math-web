---
order: 8
difficulty: easy
lesson: 02-trig-identities
choices: ["-2","-1","0","1","2"]
answer: E
mistakes:
  A: "The squares can't be negative. Expand each square."
  B: "Squares are never negative, so their sum can't be $-1$."
  C: "The cross terms cancel, but the squared terms don't."
  D: "That's only one copy of $\\sin^2\\theta + \\cos^2\\theta$. Each square contributes one."
verify: "(() => { const t = 0.7; return Math.round((Math.sin(t)+Math.cos(t))**2 + (Math.sin(t)-Math.cos(t))**2); })()"
---

For every angle $\theta$, the expression $(\sin\theta + \cos\theta)^2 + (\sin\theta - \cos\theta)^2$ has the same value. What is it?

## Hint

Expand both squares and add.

## Hint 2

The $2\sin\theta\cos\theta$ terms cancel.

## Solution

Expanding gives $\sin^2\theta + 2\sin\theta\cos\theta + \cos^2\theta$ plus $\sin^2\theta - 2\sin\theta\cos\theta + \cos^2\theta$.

The cross terms cancel, leaving $2(\sin^2\theta + \cos^2\theta) = 2$.

**Answer: (E) 2**
