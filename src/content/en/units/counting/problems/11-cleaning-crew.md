---
order: 6
difficulty: easy
lesson: 03-overcount-then-divide
choices: ["7","14","21","42","49"]
answer: C
mistakes:
  A: "That's the number of students. Each student can pair with several others."
  B: "That's $7 \\times 2$. Pick the first student (7 options) and the second (6 options), and then divide by 2."
  D: "That counts Ana-then-Ben and Ben-then-Ana separately. They're the same pair, so divide by 2."
  E: "That's $7 \\times 7$, which lets a student pair with themself."
verify: "combos(range(1, 7), 2).length"
---

A teacher picks 2 of 7 students to clean the board together. How many different pairs of students can she pick?

## Hint

If the two students swap, is it a different pair?

## Hint 2

Picking one at a time gives $7 \times 6 = 42$. Every pair got counted twice.

## Solution

Picking one at a time gives $7 \times 6 = 42$. Each pair gets counted twice, so divide by 2: $42 \div 2 = 21$.

**Answer: (C) 21**
