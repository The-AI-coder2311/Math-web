---
order: 1
difficulty: easy
lesson: 04-grid-paths
choices: ["15","18","21","30","36"]
answer: A
mistakes:
  B: "That's $6 \\times 3$. Pick one book at a time, and then divide by 2."
  C: "That's $6 + 5 + 4 + 3 + 2 + 1 = 21$. The first book pairs with only 5 others, so the sum should start at 5."
  D: "That counts each pair twice, once in each order. Divide by 2."
  E: "That's $6 \\times 6$, which lets you pack the same book twice."
verify: "combos(range(1, 6), 2).length"
---

You have 6 books and want to pack 2 of them for a trip. How many different pairs of books can you pack?

## Hint

If you swap the two books you picked, is it a different pair? What does that mean you should do after you multiply?

## Hint 2

$6 \times 5 = 30$ counts each pair twice.

## Solution

**Step 1.** Pick a first book (6 choices) and then a second (5 choices): $6 \times 5 = 30$.

**Step 2.** Each pair got counted twice, once in each order. So divide by 2: $30 \div 2 = 15$.

**Answer: (A) 15**
