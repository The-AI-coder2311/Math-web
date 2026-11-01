---
order: 17
difficulty: hard
lesson: 03-multi-step-chance
choices: ["$\\frac{20}{27}$","$\\frac{4}{9}$","$\\frac{2}{3}$","$\\frac{8}{27}$","$\\frac{7}{9}$"]
answer: A
mistakes:
  C: "That's one game. Winning a series is more likely than winning a game when you're the better team."
  B: "That's the chance of winning the first 2 games only. There are other ways to win 2 of 3."
  D: "That's the chance of winning all 3. Winning exactly 2 also wins the series."
  E: "Add the cases: $\\frac{8}{27}$ for 3 wins, and $\\frac{12}{27}$ for exactly 2."
verify: "fraction(sum(product([1, 0], [1, 0], [1, 0]).filter((g) => sum(g) >= 2).map((g) => g.reduce((p, won) => p * (won ? 2 : 1), 1))), 27)"
---

Team A plays Team B in a best-of-three series, so the first team to win 2 games wins the series. In each game, Team A has a $\frac{2}{3}$ chance of winning, no matter what happened before. What is the probability that Team A wins the series?

## Hint

Imagine that they always play all 3 games, even if the series is already decided. Team A wins the series when it wins at least 2 of the 3.

## Hint 2

Pretend that they play all 3 games. Team A needs at least 2 wins.

## Solution

**Step 1.** Imagine they always play all 3 games. Team A wins the series exactly when it wins at least 2 of them.

**Step 2.** Winning all 3 games has a probability of $\frac{2}{3} \times \frac{2}{3} \times \frac{2}{3} = \frac{8}{27}$.

**Step 3.** Winning exactly 2 can happen 3 ways: WWL, WLW, or LWW. Each has a probability of $\frac{2}{3} \times \frac{2}{3} \times \frac{1}{3} = \frac{4}{27}$, so together that's $\frac{12}{27}$.

**Step 4.** Add the two: $\frac{8}{27} + \frac{12}{27} = \frac{20}{27}$.

**Answer: (A) $\frac{20}{27}$**
