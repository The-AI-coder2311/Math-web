---
order: 5
difficulty: easy
lesson: 01-solving-and-translating
choices: ["5","7","9","19","21"]
answer: A
mistakes:
  B: "That's $x + 2$. You still need to subtract 2."
  C: "Put it back in: $3(9 + 2)$ is 33, not 21."
  D: "That subtracts 2 from 21 first. The 3 multiplies everything inside, so divide by 3 first."
  E: "That's the right side of the equation, not $x$. Divide both sides by 3, and then subtract 2."
verify: "range(-50, 50).find((x) => 3 * (x + 2) === 21)"
---

If $3(x + 2) = 21$, what is the value of $x$?

## Hint

You could divide both sides by 3 first. What does that give?

## Hint 2

Dividing gives $x + 2 = 7$.

## Solution

Divide both sides by 3 to get $x + 2 = 7$. Then subtract 2 to get $x = 5$.

**Answer: (A) 5**
