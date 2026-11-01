---
order: 5
difficulty: easy
lesson: 01-solving-and-translating
choices: ["3","5","7","9","19"]
answer: B
mistakes:
  A: "Put it back in: $3(3 + 2)$ is 15, not 21."
  C: "That's $x + 2$. You still need to subtract 2."
  D: "Put it back in: $3(9 + 2)$ is 33, not 21."
  E: "That subtracts 2 from 21 first. The 3 multiplies everything inside, so divide by 3 first."
verify: "range(-50, 50).find((x) => 3 * (x + 2) === 21)"
---

If $3(x + 2) = 21$, what is the value of $x$?

## Hint

You could divide both sides by 3 first. What does that give?

## Hint 2

Dividing gives $x + 2 = 7$.

## Solution

Divide both sides by 3 to get $x + 2 = 7$. Then subtract 2 to get $x = 5$.

**Answer: (B) 5**
