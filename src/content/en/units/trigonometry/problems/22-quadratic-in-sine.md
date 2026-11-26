---
order: 22
difficulty: medium
lesson: 04-trig-equations
choices: ["180","210","270","300","360"]
answer: A
mistakes:
  B: "That adds $30^\\circ$ to the right answer. The two solutions are $30^\\circ$ and $150^\\circ$."
  C: "That uses solutions of $\\sin x = -\\frac{1}{2}$ or $-2$. Sine can't be $-2$, and the factor gives $+\\frac{1}{2}$."
  D: "Check the factoring: $(2s - 1)(s + 2)$ gives $s = \\frac{1}{2}$, not $-\\frac{1}{2}$."
  E: "That's the sum for a cosine equation. Sine solutions in one turn add to $180^\\circ$."
verify: "sum(range(0,359).filter(x => { const s = Math.sin(x*Math.PI/180); return Math.abs(2*s*s + 3*s - 2) < 1e-9; }))"
---

What is the sum, in degrees, of all $x$ with $0^\circ \le x < 360^\circ$ such that $2\sin^2 x + 3\sin x - 2 = 0$?

## Hint

Let $s = \sin x$ and factor the quadratic.

## Hint 2

One factor gives a value of sine that's impossible.

## Solution

**Step 1.** With $s = \sin x$, the equation is $(2s - 1)(s + 2) = 0$.

**Step 2.** $s = -2$ is impossible, so $\sin x = \frac{1}{2}$, giving $30^\circ$ and $150^\circ$.

**Step 3.** The sum is $30 + 150 = 180$.

**Answer: (A) 180**
