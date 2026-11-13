---
order: 14
difficulty: medium
lesson: 03-counting-step-by-step
choices: ["21","28","34","55","64"]
answer: C
mistakes:
  A: "That's the count for length 7. Add lengths 6 and 7."
  B: "That's $\\binom{8}{2}$. It isn't a choosing problem, since placing one domino limits what can go next to it."
  D: "That's the count for length 9."
  E: "That's $2^6$. The choices at each column aren't independent, since sideways dominoes come in pairs."
verify: "range(3, 8).reduce(([a, b]) => [b, a + b], [1, 2])[1]"
---

How many ways can a 2 by 8 strip be covered with 1 by 2 dominoes, with no overlaps and no gaps? Each domino can go upright or sideways.

## Hint

Look at the right end of the strip. What can cover the last column?

## Hint 2

Either one upright domino covers it, or two sideways dominoes cover the last 2 columns. So each length adds the two lengths before it.

## Solution

**Step 1.** The end is either one upright domino, leaving length 7, or two sideways dominoes, leaving length 6.

**Step 2.** So each count is the sum of the two before it. Length 1 has 1 way and length 2 has 2 ways, which gives 1, 2, 3, 5, 8, 13, 21, 34.

**Answer: (C) 34**
