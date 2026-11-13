---
order: 13
difficulty: medium
from: advanced-counting/02-stars-and-bars
choices: ["10","15","21","35","36"]
answer: B
mistakes:
  A: "That's $\\binom{5}{2}$. You have 4 stars and 2 bars, which makes 6 symbols."
  C: "That's $\\binom{7}{2}$. After handing out 3 apples, there are 6 symbols."
  D: "That's $\\binom{7}{3}$. Three friends need only 2 bars."
  E: "That's $\\binom{9}{2}$, which allows a friend to get none."
verify: "product(range(1, 7), range(1, 7), range(1, 7)).filter((x) => sum(x) === 7).length"
---

In how many ways can 7 identical apples be shared among 3 friends, if each friend gets at least 1 apple?

## Hint

Take care of the rule first.

## Hint 2

Give each friend 1 apple. Then share the other 4 freely: 4 stars and 2 bars.

## Solution

Give each friend 1 apple, which leaves 4. With 4 stars and 2 bars, the count is $\binom{6}{2} = 15$.

**Answer: (B) 15**
