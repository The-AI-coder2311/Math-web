---
order: 27
difficulty: medium
lesson: 02-parity-and-invariants
choices: ["36","42","43","44"]
answer: C
mistakes:
  A: "That's the total at the start. Each step adds 1."
  B: "That counts 6 steps. With 8 numbers, there are 7 steps."
  D: "That counts 8 steps. Going from 8 numbers to 1 takes 7 steps."
verify: "range(1, 8).reduce((a, b) => a + b + 1)"
---

The numbers 1 through 8 are on a board. In each step, you erase two numbers $a$ and $b$, and write $a + b + 1$. You continue until one number is left. What is it?

## Hint

How does each step change the total of the numbers on the board?

## Hint 2

Each step raises the total by 1. How many steps are there?

## Solution

Each step raises the total by 1, whichever numbers you choose. Going from 8 numbers to 1 takes 7 steps. The total starts at 36, so the last number is $36 + 7 = 43$.

**Answer: (C) 43**
