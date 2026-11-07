---
order: 28
difficulty: medium
lesson: 04-units-digits-and-remainders
choices: ["1","3","5","6"]
answer: C
mistakes:
  A: "Check your sum of the first six factorials. It's 873."
  B: "Don't stop at 5 factorial. The terms stop mattering at 7 factorial."
  D: "Check the division: $873 = 7 \\times 124 + 5$."
verify: "(1 + 2 + 6 + 24 + 120 + 720) % 7"
---

What is the remainder when $1! + 2! + 3! + \cdots + 30!$ is divided by 7?

## Hint

Starting from which term does every factorial have a factor of 7?

## Hint 2

Starting at $7!$, every term is a multiple of 7. So only the first six matter.

## Solution

From $7!$ on, each term is a multiple of 7. So we need $1 + 2 + 6 + 24 + 120 + 720 = 873$. Since $873 = 7 \times 124 + 5$, the remainder is 5.

**Answer: (C) 5**
