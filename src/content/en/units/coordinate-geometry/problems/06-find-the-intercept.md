---
order: 6
difficulty: medium
lesson: 01-lines-and-slopes
choices: ["-3","1","-1","2","5"]
answer: C
mistakes:
  A: "You may have gone back 2 steps with a slope of 4. With a slope of 3, going back 2 steps drops by 6."
  B: "Check the sign. Going back from $x = 2$ to $x = 0$ drops the height by 6, from 5 to $-1$."
  D: "That's the $x$-coordinate of the point. The $y$-intercept is the height when $x = 0$."
  E: "That's the height at $x = 2$. The $y$-intercept is the height when $x = 0$."
verify: "range(-20, 20).find((b) => 3 * 2 + b === 5)"
---

A line has a slope of 3 and passes through the point $(2, 5)$. What is its $y$-intercept?

## Hint

Write the line as $y = 3x + b$. The point has to fit the equation.

## Hint 2

Put in $x = 2$ and $y = 5$: $5 = 3 \times 2 + b$.

## Solution

The line is $y = 3x + b$. Putting in the point gives $5 = 6 + b$, so $b = -1$.

**Answer: (C) -1**
