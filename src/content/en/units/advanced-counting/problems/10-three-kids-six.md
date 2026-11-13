---
order: 10
difficulty: medium
lesson: 02-stars-and-bars
choices: ["18","20","28","56","216"]
answer: C
mistakes:
  A: "That's $6 \\times 3$. Try the method on a tiny case, like 2 stickers and 2 friends, to see why this doesn't work."
  B: "That's $\\binom{6}{3}$. You need to count the bars as symbols too, and 3 friends need 2 bars."
  D: "That's $\\binom{8}{3}$, which uses 3 bars. Three friends need only 2 bars."
  E: "That's $6^3$. The stickers are identical, and they must add up to 6."
verify: "product(range(0, 6), range(0, 6), range(0, 6)).filter((s) => sum(s) === 6).length"
---

In how many ways can 6 identical stickers be shared among 3 friends, if a friend is allowed to get none?

## Hint

How many stars are there? How many bars do 3 friends need?

## Hint 2

There are 6 stars and 2 bars, or 8 symbols. So the count is $\binom{8}{2}$.

## Solution

There are 6 stars and 2 bars, which makes 8 symbols. The bars can go in $\binom{8}{2} = \frac{8 \times 7}{2} = 28$ ways.

**Answer: (C) 28**
