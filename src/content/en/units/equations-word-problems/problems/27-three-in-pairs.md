---
order: 27
difficulty: medium
lesson: 04-two-unknowns
choices: ["1","3","5","7"]
answer: D
mistakes:
  A: "Check it against the sums. No number here works out to 1."
  B: "That's $x$, the smallest number."
  C: "That's $y$, the middle number."
verify: "Math.max(...product(range(0, 12), range(0, 12), range(0, 12)).filter(([x, y, z]) => x + y === 8 && y + z === 12 && x + z === 10)[0])"
---

Three numbers satisfy $x + y = 8$, $y + z = 12$, and $x + z = 10$. What is the largest of the three?

## Hint

What happens if you add all three equations?

## Hint 2

Adding gives $2(x + y + z) = 30$.

## Solution

Adding all three gives $2(x + y + z) = 30$, so the total is 15. Then $z = 15 - 8 = 7$, $x = 15 - 12 = 3$, and $y = 15 - 10 = 5$. The largest is 7.

**Answer: (D) 7**
