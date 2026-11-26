---
order: 19
difficulty: easy
lesson: 04-trig-equations
choices: ["2","3","4","6","8"]
answer: A
mistakes:
  B: "Count the points where a horizontal line at height $\\frac{1}{2}$ crosses the circle."
  C: "Sine is positive only in quadrants I and II."
  D: "That's the count for $\\sin 3x = \\frac{1}{2}$. Here the angle makes one turn."
  E: "One full turn gives two solutions, not eight."
verify: "range(0,359).filter(x => Math.abs(Math.sin(x*Math.PI/180) - 0.5) < 1e-9).length"
---

How many angles $x$ with $0^\circ \le x < 360^\circ$ satisfy $\sin x = \frac{1}{2}$?

## Hint

Picture the horizontal line at height $\frac{1}{2}$ crossing the unit circle.

## Hint 2

The reference angle is $30^\circ$. Sine is positive in two quadrants.

## Solution

Sine is positive in quadrants I and II. With reference angle $30^\circ$, the solutions are $30^\circ$ and $150^\circ$, so there are 2.

**Answer: (A) 2**
