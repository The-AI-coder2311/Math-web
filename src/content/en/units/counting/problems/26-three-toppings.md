---
order: 26
difficulty: medium
lesson: 03-overcount-then-divide
choices: ["24","56","112","336"]
answer: B
mistakes:
  A: "That's 8 times 3. You're choosing a group, so use 8 times 7 times 6 first."
  C: "You divided by 3 instead of 6. Three toppings can be ordered in 6 ways."
  D: "That counts orders of toppings. A pizza with mushrooms and olives is the same as one with olives and mushrooms."
verify: "combos(range(1, 8), 3).length"
---

A pizza shop has 8 toppings. How many ways can you choose 3 different toppings?

## Hint

Count as if order mattered. Then fix the overcount.

## Hint 2

Any group of 3 can be put in order in $3 \times 2 \times 1 = 6$ ways.

## Solution

In order, there are $8 \times 7 \times 6 = 336$ picks. Each group of 3 gets counted 6 times, so there are $336 \div 6 = 56$ groups.

**Answer: (B) 56**
