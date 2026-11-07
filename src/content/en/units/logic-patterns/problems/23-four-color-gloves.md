---
order: 23
difficulty: easy
lesson: 04-logic-tables-pigeonholes
choices: ["2","4","5","8"]
answer: C
mistakes:
  A: "That's the luckiest case. The question wants a sure thing."
  B: "With 4 hats, you could have one of each color and no match."
  D: "That's more than you need. One more than the number of colors is enough."
verify: "range(1, 20).find((n) => Math.ceil(n / 4) >= 2)"
---

A drawer holds many hats in 4 colors. How many hats must you take out, without looking, to be sure of having two of the same color?

## Hint

What's the worst luck you could have?

## Hint 2

You could get one of each color. What happens with the next hat?

## Solution

With the worst luck, the first 4 hats are all different. The 5th hat must match one of them.

**Answer: (C) 5**
