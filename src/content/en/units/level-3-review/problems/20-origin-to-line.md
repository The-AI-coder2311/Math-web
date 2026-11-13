---
order: 20
difficulty: hard
from: coordinate-geometry/04-geometry-with-coordinates
choices: ["5","10","12","13","130"]
answer: B
mistakes:
  A: "That's one number from the triple. The distance is $130 \\div 13$."
  C: "That's one number from the triple. The distance is $130 \\div 13$."
  D: "That's what you divide by: $5^2 + 12^2 = 13^2$. The distance is $130 \\div 13$."
  E: "That's the number in the equation. The distance is much shorter."
verify: "Math.round(Math.min(...range(0, 2600).map((i) => Math.hypot(i / 100, (130 - (5 * i) / 100) / 12))))"
---

How far is the origin, $(0, 0)$, from the line $5x + 12y = 130$? (The distance to a line means the shortest distance.)

## Hint

The shortest path meets the line at a right angle. What's its slope?

## Hint 2

The line has a slope of $-\frac{5}{12}$, so the path has a slope of $\frac{12}{5}$.

## Solution

The path is $y = \frac{12}{5}x$. Putting it in gives $5x + \frac{144}{5}x = 130$, so $\frac{169}{5}x = 130$ and $x = \frac{50}{13}$. Then $y = \frac{120}{13}$. The distance is $\frac{130}{13} = 10$, using a 5-12-13 triangle scaled by $\frac{10}{13}$.

**Answer: (B) 10**
