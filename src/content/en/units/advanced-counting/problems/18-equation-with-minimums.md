---
order: 18
difficulty: hard
lesson: 02-stars-and-bars
choices: ["45","55","66","78","91"]
answer: B
mistakes:
  A: "That's $\\binom{10}{2}$, which treats $z$ as needing at least 1 too. $z$ is allowed to be 0."
  C: "That's $\\binom{12}{2}$, which hands out only 2 of the minimums. The minimums add up to 3."
  D: "That's $\\binom{13}{2}$, which hands out only 1. The minimums add up to 3."
  E: "That's $\\binom{14}{2}$, which ignores the minimums altogether."
verify: "product(range(2, 12), range(1, 12), range(0, 12)).filter((s) => sum(s) === 12).length"
---

How many solutions does $x + y + z = 12$ have, if $x$, $y$, and $z$ are whole numbers with $x$ at least 2, $y$ at least 1, and $z$ at least 0?

## Hint

Hand out the minimums first. How much of the 12 is left after that?

## Hint 2

After giving 2 to $x$ and 1 to $y$, there are 9 left to share among 3 letters.

## Solution

**Step 1.** Hand out the minimums: 2 to $x$ and 1 to $y$. That leaves $12 - 3 = 9$.

**Step 2.** Share the 9 freely among the 3 letters, with 9 stars and 2 bars: $\binom{11}{2} = 55$.

**Answer: (B) 55**
