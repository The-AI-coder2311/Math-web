---
order: 12
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["2","5","6","10","11"]
answer: C
mistakes:
  A: "That's the luckiest case. \"To be sure\" means planning for the worst luck."
  B: "You could still have one of each color. You need one more to force a match."
  D: "That's 2 of each color, which is far more than you need."
  E: "That would guarantee 3 of a color. You only need 2."
verify: "range(1, 20).find((n) => Math.ceil(n / 5) >= 2)"
---

A drawer has plenty of socks in 5 colors. In the dark, how many socks must you take to be sure of having 2 of the same color?

## Hint

Think about the worst luck possible. How many socks could you take with no match?

## Hint 2

You could take one of each color, which is 5 socks, with no match. What happens with the next sock?

## Solution

With the worst luck, you take one of each color: 5 socks and no match. The next sock must match one of them, so you need 6.

**Answer: (C) 6**
