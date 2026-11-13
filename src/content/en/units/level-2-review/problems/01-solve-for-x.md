---
order: 1
difficulty: easy
from: equations-word-problems/01-solving-and-translating
choices: ["11","20","22","40","71"]
answer: A
mistakes:
  B: "That adds 9 to 31 and halves it. To undo \"plus 9,\" subtract 9."
  C: "That's $2x$. Divide by 2."
  D: "That's $31 + 9$. To undo \"plus 9,\" subtract 9."
  E: "That's $2 \\times 31 + 9 = 71$, which does the steps to 31. Undo them instead."
verify: "range(-50, 50).find((x) => 2 * x + 9 === 31)"
---

If $2x + 9 = 31$, what is the value of $x$?

## Hint

Undo the "plus 9" first.

## Hint 2

$2x = 22$.

## Solution

Subtract 9 to get $2x = 22$. Divide by 2 to get $x = 11$.

**Answer: (A) 11**
