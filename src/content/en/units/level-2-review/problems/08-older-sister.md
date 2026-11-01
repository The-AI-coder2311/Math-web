---
order: 8
difficulty: medium
from: equations-word-problems/02-age-and-number-stories
choices: ["10","17","12","22","24"]
answer: B
mistakes:
  A: "That's Pat's age 7 years ago. The question asks about now."
  C: "That's Sam's age now. The question asks about Pat."
  D: "Check it: Pat is 22 and Sam is 17. Seven years ago, they were 15 and 10, which isn't double."
  E: "Check it: Pat is 24 and Sam is 19. Seven years ago, they were 17 and 12, which isn't double."
verify: "range(13, 60).find((s) => s - 7 === 2 * (s - 5 - 7))"
---

Pat is 5 years older than Sam. Seven years ago, Pat was twice as old as Sam. How old is Pat now?

## Hint

Let Pat be $p$. How old was each person 7 years ago?

## Hint 2

Seven years ago, Pat was $p - 7$ and Sam was $p - 12$.

## Solution

Seven years ago, Pat was $p - 7$ and Sam was $p - 12$. So $p - 7 = 2(p - 12)$, which gives $p - 7 = 2p - 24$, and $p = 17$.

**Check:** Pat is 17 and Sam is 12. Seven years ago, they were 10 and 5.

**Answer: (B) 17**
