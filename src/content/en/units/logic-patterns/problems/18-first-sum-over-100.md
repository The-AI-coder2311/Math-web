---
order: 18
difficulty: hard
lesson: 02-small-cases
choices: ["10","13","14","15","50"]
answer: C
mistakes:
  A: "The sum up to 10 is only 55."
  B: "The sum up to 13 is 91, which isn't more than 100."
  D: "The sum up to 15 is 120, but a smaller number also works."
  E: "That's half of 100. The sum grows faster than you'd think, since each number adds more."
verify: "range(1, 100).find((n) => sum(range(1, n)) > 100)"
---

What is the smallest whole number $n$ for which $1 + 2 + 3 + \cdots + n$ is greater than 100?

## Hint

The sum is $\frac{n(n + 1)}{2}$. Try some values. Is $n = 10$ enough?

## Hint 2

For $n = 13$, the sum is 91. For $n = 14$, it's 105.

## Solution

The sum is $\frac{n(n + 1)}{2}$. For $n = 13$, it's $\frac{13 \times 14}{2} = 91$, which isn't enough. For $n = 14$, it's $\frac{14 \times 15}{2} = 105$, which is more than 100.

**Answer: (C) 14**
