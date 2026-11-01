---
order: 20
difficulty: hard
lesson: 03-repeats
choices: ["12","18","24","30","60"]
answer: B
mistakes:
  A: "That's the count starting with 0. Subtract it from 30."
  C: "That's $4!$. After placing a digit, the remaining digits can still repeat."
  D: "That includes numbers starting with 0, which aren't 5-digit numbers."
  E: "That divides by only one factorial. Both 0 and 2 repeat."
verify: "new Set(perms([0, 0, 2, 2, 5]).map((p) => p.join('')).filter((s) => s[0] !== '0')).size"
---

How many different 5-digit numbers can be made by arranging the digits 0, 0, 2, 2, and 5? A number can't start with 0.

## Hint

Count all of the arrangements, and subtract the ones that start with 0.

## Hint 2

All: $\frac{5!}{2! \times 2!} = 30$. Starting with 0: arrange 0, 2, 2, 5.

## Solution

**Step 1.** All arrangements: $\frac{5!}{2! \times 2!} = 30$.

**Step 2.** Those starting with 0: arrange 0, 2, 2, and 5, which gives $\frac{4!}{2!} = 12$.

**Step 3.** $30 - 12 = 18$.

**Answer: (B) 18**
