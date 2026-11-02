---
order: 5
difficulty: easy
lesson: 02-parity-and-invariants
choices: ["0","2","4","6","7"]
answer: E
mistakes:
  A: "The total with all plus signs is 15, which is odd. Changing signs never changes that."
  B: "The total is always odd, and 2 is even."
  C: "The total is always odd, and 4 is even."
  D: "The total is always odd, and 6 is even."
verify: "(() => { const totals = product([1, -1], [1, -1], [1, -1], [1, -1], [1, -1]).map((signs) => sum(signs.map((s, i) => s * (i + 1)))); return [0, 2, 4, 6, 7].filter((r) => totals.includes(r)).join(); })()"
---

Write 1, 2, 3, 4, and 5 in a row, with a plus or minus sign in front of each one. Which of these could be the total?

## Hint

What's the total with all plus signs? How does switching one sign change it?

## Hint 2

Switching the sign of a number $a$ changes the total by $2a$, which is even.

## Solution

With all plus signs, the total is 15. Switching a sign changes the total by an even amount, so the total is always odd. Only 7 is odd. It's possible: $1 + 2 + 3 - 4 + 5 = 7$.

**Answer: (E) 7**
