---
order: 6
difficulty: easy
lesson: 03-working-backwards
choices: ["6","8","11","23","28"]
answer: A
mistakes:
  B: "Run it forward: $(8 + 5) \\times 3$ is 39, not 33."
  C: "That's only the first step back. You still need to undo adding 5."
  D: "That undoes the steps in the wrong order. Undo the last step first."
  E: "That's $33 - 5$. Undo the tripling first, since it happened last."
verify: "range(0, 50).find((n) => (n + 5) * 3 === 33)"
---

Bo adds 5 to a number and then triples the result. The answer is 33. What number did Bo start with?

## Hint

Start at 33. What was the last thing Bo did?

## Hint 2

Undo the tripling: $33 \div 3 = 11$. Then undo adding 5.

## Solution

Undo the tripling: $33 \div 3 = 11$. Undo adding 5: $11 - 5 = 6$.

**Check:** $(6 + 5) \times 3 = 33$.

**Answer: (A) 6**
