---
order: 5
difficulty: easy
lesson: 02-when-order-matters
choices: ["4","24","16","10","256"]
answer: B
mistakes:
  A: "That's how many books there are. Each book can go in several positions."
  D: "That's $4 + 3 + 2 + 1$. You make one choice and then another, so multiply."
  C: "That's $4 \\times 4$. Once a book is placed, fewer are left."
  E: "That's $4 \\times 4 \\times 4 \\times 4$, which reuses books. Each book can only go in one spot."
verify: "perms(['a', 'b', 'c', 'd']).length"
---

Lin has 4 different books to put on a shelf. In how many different orders can they be arranged from left to right?

## Hint

Fill the shelf one spot at a time. How many books could go in the first spot? After that, how many are left for the second spot?

## Hint 2

The first spot has 4 options, the next has 3, and so on. That's $4!$.

## Solution

**Step 1.** Fill the shelf from left to right, one spot at a time.

- First spot: any of the 4 books, so 4 options.
- Second spot: 3 books are left, so 3 options.
- Third spot: 2 books are left, so 2 options.
- Fourth spot: only 1 book is left, so 1 option.

**Step 2.** Multiply:

$$4 \times 3 \times 2 \times 1 = 24$$

**A common mistake:** answering $4 \times 4 \times 4 \times 4 = 256$. That would let the same book be in two spots at once!

**Answer: (B) 24**
