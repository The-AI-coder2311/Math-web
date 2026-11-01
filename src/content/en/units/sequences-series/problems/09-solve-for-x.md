---
order: 9
difficulty: medium
lesson: 01-arithmetic-sequences
choices: ["2","3","4","5","7"]
answer: C
mistakes:
  A: "With $x = 2$, the terms are 3, 6, and 11. The steps are 3 and 5, which aren't equal."
  B: "With $x = 3$, the terms are 4, 9, and 15. The steps are 5 and 6, which aren't equal."
  D: "With $x = 5$, the terms are 6, 15, and 23. The steps are 9 and 8, which aren't equal."
  E: "That's the common difference when $x$ is 4. The question asks for $x$."
verify: "range(-50, 50).find((x) => 3 * x - (x + 1) === 4 * x + 3 - 3 * x)"
---

The numbers $x + 1$, $3x$, and $4x + 3$ form an arithmetic sequence, in that order. What is the value of $x$?

## Hint

In an arithmetic sequence, what do you know about the middle one of three neighboring terms?

## Hint 2

The middle term is the average of the other two, so $2 \times 3x$ equals $(x + 1) + (4x + 3)$.

## Solution

**Step 1.** The middle term is the average of its neighbors, so twice the middle term equals the sum of the other two: $6x = (x + 1) + (4x + 3)$.

**Step 2.** That simplifies to $6x = 5x + 4$, so $x = 4$.

**Check:** The terms are 5, 12, and 19, and they go up by 7 each time.

**Answer: (C) 4**
