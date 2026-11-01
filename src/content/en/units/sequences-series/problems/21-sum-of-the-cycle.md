---
order: 21
difficulty: hard
lesson: 04-recursive-and-special
choices: ["0","3","5","7","10"]
answer: D
mistakes:
  A: "A full cycle adds up to 0, but 100 isn't a multiple of 6. There are 4 extra terms."
  B: "That's only the first leftover term. There are 4 leftover terms: 3, 5, 2, and $-3$."
  C: "That's only the second leftover term. Add all 4 of them: 3, 5, 2, and $-3$."
  E: "That's $3 + 5 + 2$, which is 3 leftover terms. There are 4, and the 4th is $-3$."
verify: "sum(range(3, 100).reduce((list) => [...list, list[list.length - 1] - list[list.length - 2]], [3, 5]))"
---

A list starts with 3 and 5. Each later term equals the term before it minus the term before that. What is the sum of the first 100 terms?

## Hint

Find the cycle first. What does one full cycle add up to?

## Hint 2

One cycle of 6 terms adds up to 0. So only the terms left over after full cycles matter.

## Solution

**Step 1.** The list repeats every 6 terms: 3, 5, 2, $-3$, $-5$, $-2$. One cycle adds up to 0.

**Step 2.** Since $100 = 6 \times 16 + 4$, only the first 4 terms of a cycle are left over: $3 + 5 + 2 - 3 = 7$.

**Answer: (D) 7**
