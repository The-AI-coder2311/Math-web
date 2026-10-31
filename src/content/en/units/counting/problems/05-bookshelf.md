---
order: 5
difficulty: easy
choices: [4, 10, 16, 24, 256]
answer: D
verify: "perms(['a', 'b', 'c', 'd']).length"
---

Lin has 4 different books to put on a shelf. In how many different orders can they be arranged from left to right?

## Hint

Fill the shelf one spot at a time. How many books could go in the first spot? After that, how many are left for the second spot?

## Solution

**Step 1.** Fill the shelf from left to right, one spot at a time.

- First spot: any of the 4 books, so 4 options.
- Second spot: 3 books are left, so 3 options.
- Third spot: 2 books are left, so 2 options.
- Fourth spot: only 1 book is left, so 1 option.

**Step 2.** Multiply:

$$4 \times 3 \times 2 \times 1 = 24$$

**A common mistake:** answering $4 \times 4 \times 4 \times 4 = 256$. That would let the same book be in two spots at once!

**Answer: (D) 24**
