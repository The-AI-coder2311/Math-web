---
order: 1
difficulty: easy
choices: [12, 15, 18, 30, 36]
answer: B
verify: "combos(range(1, 6), 2).length"
---

You have 6 books and want to pack 2 of them for a trip. How many different pairs of books can you pack?

## Hint

If you swap the two books you picked, is it a different pair? What does that mean you should do after you multiply?

## Solution

**Step 1.** Pick a first book (6 choices) and then a second (5 choices): $6 \times 5 = 30$.

**Step 2.** Each pair got counted twice, once in each order. So divide by 2: $30 \div 2 = 15$.

**Answer: (B) 15**
