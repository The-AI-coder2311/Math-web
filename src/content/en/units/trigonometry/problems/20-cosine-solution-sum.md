---
order: 20
difficulty: easy
lesson: 04-trig-equations
choices: ["60","120","180","300","360"]
answer: E
mistakes:
  A: "That's only one solution. Cosine is also positive in quadrant IV."
  B: "That's $60 + 60$. The second solution is $300^\\circ$."
  C: "Sine solutions add to $180^\\circ$. Cosine solutions are mirror images across the $x$-axis."
  D: "That's only the second solution. Add $60^\\circ$ too."
verify: "sum(range(0,359).filter(x => Math.abs(2*Math.cos(x*Math.PI/180) - 1) < 1e-9))"
---

What is the sum, in degrees, of all angles $x$ with $0^\circ \le x < 360^\circ$ that satisfy $2\cos x = 1$?

## Hint

First solve for $\cos x$.

## Hint 2

$\cos x = \frac{1}{2}$ in quadrants I and IV.

## Solution

We need $\cos x = \frac{1}{2}$. The solutions are $60^\circ$ and $300^\circ$, and their sum is $360^\circ$.

**Answer: (E) 360**
