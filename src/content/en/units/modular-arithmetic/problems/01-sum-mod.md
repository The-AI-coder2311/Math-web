---
order: 1
difficulty: easy
choices: [0, 1, 2, 3, 4]
answer: D
verify: "(1007 + 2003 + 4001) % 6"
---

What is the remainder when $1007 + 2003 + 4001$ is divided by 6?

## Hint

You could add first, but you could also replace each number with its remainder when divided by 6. Try 1007 = 1002 + 5, where 1002 is a multiple of 6.

## Solution

**Step 1.** Find each remainder when dividing by 6. Since 1002, 1998, and 3996 are multiples of 6, the remainders are 5, 5, and 5.

**Step 2.** Add the remainders: $5 + 5 + 5 = 15$.

**Step 3.** Since $15 = 2 \times 6 + 3$, that gives a remainder of 3.

**Answer: (D) 3**
