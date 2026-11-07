---
order: 29
difficulty: hard
lesson: 04-logic-tables-pigeonholes
choices: ["4","10","12","13"]
answer: B
mistakes:
  A: "That's the luckiest case. The question asks about being sure."
  C: "With 10 marbles, some color must already have 4. Check the worst case."
  D: "That's more than you need. The worst case has 3 of each color."
verify: "range(1, 21).find((n) => product(range(0, 5), range(0, 7), range(0, 9)).filter(([r, b, g]) => r + b + g === n).every((d) => Math.max(...d) >= 4))"
---

A bag holds 5 red, 7 blue, and 9 green marbles. How many marbles must you take out, without looking, to be sure of having 4 of the same color?

## Hint

What's the most you can take with no color reaching 4?

## Hint 2

You can take 3 of each color.

## Solution

With the worst luck, you take 3 of each color, which is 9 marbles. Each color has at least 3 marbles, so this can happen. The next marble makes 4 of some color. So you need 10.

**Answer: (B) 10**
