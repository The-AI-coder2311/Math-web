---
order: 12
difficulty: medium
lesson: 02-age-and-number-stories
choices: ["10","8","6","12","18"]
answer: A
mistakes:
  C: "Check it: Ana is 6 and Ben is 14. Two years ago, they were 4 and 12, and 12 is 3 times 4."
  B: "That's Ana's age 2 years ago. The question asks about now."
  D: "Check it: Ana is 12 and Ben is 20. Two years ago, they were 10 and 18, which isn't double."
  E: "That's Ben's age. The question asks about Ana."
verify: "range(3, 60).find((a) => a + 8 - 2 === 2 * (a - 2))"
---

Ben is 8 years older than Ana. Two years ago, Ben was twice as old as Ana. How old is Ana now?

## Hint

Make a table with a column for now and a column for 2 years ago. Use $a$ for Ana's age now.

## Hint 2

Two years ago, Ana was $a - 2$ and Ben was $a + 6$. So $a + 6 = 2(a - 2)$.

## Solution

Two years ago, Ana was $a - 2$ and Ben was $a + 6$. So $a + 6 = 2a - 4$, which gives $a = 10$.

**Check:** Now they're 10 and 18. Two years ago, they were 8 and 16.

**Answer: (A) 10**
