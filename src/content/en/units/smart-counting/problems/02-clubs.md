---
order: 2
difficulty: easy
choices: [4, 13, 17, 21, 25]
answer: C
verify: "(() => { const chess = range(1, 12); const art = range(9, 17); return new Set([...chess, ...art]).size; })()"
---

There are 12 students in chess club and 9 students in art club. Exactly 4 students are in both clubs. How many students are in at least one of the clubs?

## Hint

If you add 12 and 9, who gets counted twice?

## Solution

Adding 12 and 9 counts the 4 students in both clubs two times, so subtract them once:

$$12 + 9 - 4 = 17$$

**Answer: (C) 17**
