---
order: 19
difficulty: hard
lesson: 03-multi-step-chance
choices: ["$\\frac{1}{2}$","$\\frac{7}{12}$","$\\frac{5}{8}$","$\\frac{2}{3}$","$\\frac{3}{4}$"]
answer: B
mistakes:
  A: "That's only the path where a white ball moves. Add the other path too."
  C: "That averages $\\frac{3}{4}$ and $\\frac{1}{2}$. Follow what happens to Box 2."
  D: "That assumes a white ball moves for sure. A black ball could move instead."
  E: "That's the chance of drawing white from Box 1. The draw comes from Box 2."
verify: "fraction(3 * 2 + 1 * 1, 12)"
---

Box 1 has 3 white balls and 1 black ball. Box 2 has 1 white ball and 1 black ball. A random ball moves from Box 1 to Box 2. Then a random ball is drawn from Box 2. What is the probability that it is white?

## Hint

Split into two paths: a white ball moves, or a black ball moves. What's in Box 2 each time?

## Hint 2

White moves: $\frac{3}{4} \times \frac{2}{3}$. Black moves: $\frac{1}{4} \times \frac{1}{3}$.

## Solution

If white moves (a chance of $\frac{3}{4}$), Box 2 has 2 white out of 3. If black moves (a chance of $\frac{1}{4}$), it has 1 white out of 3. So the probability is $\frac{3}{4} \times \frac{2}{3} + \frac{1}{4} \times \frac{1}{3} = \frac{6}{12} + \frac{1}{12} = \frac{7}{12}$.

**Answer: (B) $\frac{7}{12}$**
