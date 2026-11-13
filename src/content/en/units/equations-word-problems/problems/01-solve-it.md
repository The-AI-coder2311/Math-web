---
order: 1
difficulty: easy
lesson: 01-solving-and-translating
choices: ["3","3.5","5","7","14"]
answer: D
mistakes:
  A: "That's from $4x = 14$, or subtracting 7 instead of adding. Add 7 to both sides."
  B: "That subtracts 7 from 21 to get 14, and $14 \\div 4 = 3.5$. To undo \"minus 7,\" add 7 to both sides."
  C: "Put it back in: $4 \\times 5 - 7$ is 13, not 21."
  E: "That's from subtracting 7 from 21. To undo \"subtract 7,\" add 7."
verify: "range(-50, 50).find((x) => 4 * x - 7 === 21)"
---

If $4x - 7 = 21$, what is the value of $x$?

## Hint

First, undo the "subtract 7." What should you do to both sides?

## Hint 2

Adding 7 to both sides gives $4x = 28$.

## Solution

**Step 1.** Add 7 to both sides: $4x = 28$.

**Step 2.** Divide both sides by 4: $x = 7$.

**Check:** $4 \times 7 - 7 = 21$.

**Answer: (D) 7**
