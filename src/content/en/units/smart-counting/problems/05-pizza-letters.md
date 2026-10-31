---
order: 5
difficulty: medium
choices: [24, 30, 60, 90, 120]
answer: C
verify: "new Set(perms([...'PIZZA']).map((p) => p.join(''))).size"
---

How many different ways can you arrange the letters in the word PIZZA?

## Hint

Arrange 5 letters as if they were all different. Then think about what swapping the two Zs does.

## Solution

**Step 1.** If all 5 letters were different, there would be $5 \times 4 \times 3 \times 2 \times 1 = 120$ arrangements.

**Step 2.** Swapping the two Zs doesn't change the word, so each arrangement got counted twice. Divide by 2: $120 \div 2 = 60$.

**Answer: (C) 60**
