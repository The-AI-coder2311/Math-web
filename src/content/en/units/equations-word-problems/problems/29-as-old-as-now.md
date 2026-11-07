---
order: 29
difficulty: hard
lesson: 02-age-and-number-stories
choices: ["18","24","27","30"]
answer: C
mistakes:
  A: "That's half of Lia's age. It's how old Max was back then, not now."
  B: "Test it: the gap is 12, and 12 years ago, Max was 12. Twice that isn't 36."
  D: "Test it: the gap is 6, and 6 years ago, Max was 24. Twice that isn't 36."
verify: "range(1, 35).find((m) => 36 === 2 * (m - (36 - m)))"
---

Lia is 36. She is twice as old as Max was when Lia was as old as Max is now. How old is Max?

## Hint

Let Max be $m$. The gap between their ages is $36 - m$.

## Hint 2

Lia was $m$ exactly $36 - m$ years ago. Back then, Max was $2m - 36$.

## Solution

Let Max be $m$. The gap is $36 - m$, so when Lia was $m$, Max was $m - (36 - m) = 2m - 36$. So $36 = 2(2m - 36)$, which gives $4m = 108$, and $m = 27$. Check: the gap is 9, and 9 years ago, Max was 18, and Lia is twice that.

**Answer: (C) 27**
