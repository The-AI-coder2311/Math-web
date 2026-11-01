---
order: 20
difficulty: hard
lesson: 04-logic-tables-pigeonholes
choices: ["3","7","8","10","16"]
answer: B
mistakes:
  A: "That's the luckiest case. \"To be sure\" means planning for the worst luck."
  C: "At 7 marbles, some color must already have 3. Check: 6 marbles can avoid it, but 7 can't."
  D: "That's more than you need. Two of each color is the most you can take without 3 of a color."
  E: "That's every marble in the bag. You need far fewer."
verify: "range(1, 16).find((n) => product(range(0, 7), range(0, 5), range(0, 4)).filter(([r, b, g]) => r + b + g === n).every((d) => Math.max(...d) >= 3))"
---

A bag holds 7 red, 5 blue, and 4 green marbles. How many marbles must you pull out, without looking, to be sure of having 3 marbles of the same color?

## Hint

Think about the worst luck. How many marbles can you take with no color reaching 3?

## Hint 2

You could take 2 of each color, which is 6 marbles. What about the next one?

## Solution

With the worst luck, you take 2 of each color: 6 marbles, and no color reaches 3. The next marble must make 3 of some color, so you need 7.

**Answer: (B) 7**
