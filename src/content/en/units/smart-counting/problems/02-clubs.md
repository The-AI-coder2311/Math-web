---
order: 2
difficulty: easy
lesson: 01-overlaps
choices: ["4","13","17","21","25"]
answer: C
mistakes:
  A: "That's how many are in **both** clubs. The question asks about at least one."
  B: "That subtracts the 4 twice. Subtract it once, since those students were counted twice."
  D: "That counts the 4 students who are in both clubs twice."
  E: "That adds the 4 instead of subtracting it."
verify: "(() => { const chess = range(1, 12); const art = range(9, 17); return new Set([...chess, ...art]).size; })()"
---

There are 12 students in chess club and 9 students in art club. Exactly 4 students are in both clubs. How many students are in at least one of the clubs?

## Hint

If you add 12 and 9, who gets counted twice?

## Hint 2

Add 12 and 9, and then subtract the 4 who got counted twice.

## Solution

Adding 12 and 9 counts the 4 students in both clubs two times, so subtract them once:

$$12 + 9 - 4 = 17$$

**Answer: (C) 17**
