---
order: 7
difficulty: medium
lesson: 01-overlaps
choices: ["171","225","252","270","648"]
answer: C
mistakes:
  A: "That counts by cases but misses some. Use the opposite: $900 - 648$."
  B: "That's $900 - 675$. Numbers with no 7s number $8 \\times 9 \\times 9 = 648$."
  D: "That's $3 \\times 90$, which counts a 7 in each spot. Numbers with two 7s get counted twice, and the first digit has fewer options."
  E: "That's the count with **no** 7s. Subtract it from 900."
verify: "range(100, 999).filter((n) => digits(n).includes(7)).length"
---

How many 3-digit numbers have at least one digit that is a 7?

## Hint

The words "at least one" are a clue. Count the numbers with no 7s at all. Be careful with the first digit, which can't be 0.

## Hint 2

Numbers with no 7s: 8 options for the first digit, and 9 for each of the others.

## Solution

**Step 1.** There are 900 three-digit numbers in all.

**Step 2.** For numbers with no 7s, the first digit has 8 choices (not 0 or 7), and each of the other two digits has 9 choices:

$$8 \times 9 \times 9 = 648$$

**Step 3.** Subtract: $900 - 648 = 252$.

**Answer: (C) 252**
