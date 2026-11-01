---
order: 6
difficulty: easy
lesson: 04-add-one-and-telescoping
choices: ["1","4","7","8","9"]
answer: D
mistakes:
  A: "Not everything cancels. The last top number stays."
  B: "That's half of the right answer. The bottom number that survives is 1."
  C: "That's the last bottom number, which cancels with the 7 on top."
  E: "The last top number is 8."
verify: "Math.round(range(1, 7).reduce((p, n) => (p * (n + 1)) / n, 1))"
---

What is the value of $\frac{2}{1} \times \frac{3}{2} \times \frac{4}{3} \times \cdots \times \frac{8}{7}$?

## Hint

Each top number cancels with the next bottom number.

## Hint 2

Only the first bottom number and the last top number remain.

## Solution

Each top cancels with the next bottom. Only the 8 on top and the 1 on the bottom remain, so the value is $\frac{8}{1} = 8$.

**Answer: (D) 8**
