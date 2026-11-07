---
order: 25
difficulty: medium
lesson: 01-if-then-reasoning
choices: ["0","1","2","3"]
answer: D
mistakes:
  A: "R is false, and that's one right there. Follow the chain backward."
  B: "R being false also tells you about Q."
  C: "If Q is false, the first rule tells you about P."
verify: "product([true, false], [true, false], [true, false]).filter(([p, q, r]) => (!p || q) && (!q || r) && !r).map((w) => w.filter((x) => !x).length).join()"
---

Three statements, P, Q, and R, each are either true or false. If P is true, then Q is true. If Q is true, then R is true. R is false. How many of the three statements must be false?

## Hint

Flip and negate the second rule.

## Hint 2

If R is false, then Q is false. What does that say about P?

## Solution

Flip and negate the second rule: if R is false, then Q is false. Flip and negate the first rule: if Q is false, then P is false. So all 3 are false.

**Answer: (D) 3**
