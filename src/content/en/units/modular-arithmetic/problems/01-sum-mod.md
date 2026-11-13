---
order: 1
difficulty: easy
lesson: 01-mod-notation
choices: ["0","1","2","3","4"]
answer: D
mistakes:
  A: "That would mean that the sum is a multiple of 6. Add the remainders: 15 leaves 3."
  B: "Add the remainders: $5 + 5 + 5 = 15$, and 15 leaves 3."
  C: "Add the remainders: $5 + 5 + 5 = 15$, and 15 leaves 3."
  E: "Add the remainders: $5 + 5 + 5 = 15$, and 15 leaves 3."
verify: "(1007 + 2003 + 4001) % 6"
---

What is the remainder when $1007 + 2003 + 4001$ is divided by 6?

## Hint

You could add first, but you could also replace each number with its remainder when divided by 6. Try 1007 = 1002 + 5, where 1002 is a multiple of 6.

## Hint 2

Each of the three numbers leaves a remainder of 5. What does $5 + 5 + 5$ leave?

## Solution

**Step 1.** Find each remainder when dividing by 6. Since 1002, 1998, and 3996 are multiples of 6, the remainders are 5, 5, and 5.

**Step 2.** Add the remainders: $5 + 5 + 5 = 15$.

**Step 3.** Since $15 = 2 \times 6 + 3$, that gives a remainder of 3.

**Answer: (D) 3**
