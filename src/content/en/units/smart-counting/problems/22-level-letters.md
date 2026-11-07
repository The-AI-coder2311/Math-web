---
order: 22
difficulty: easy
lesson: 03-repeats
choices: ["15","30","60","120"]
answer: B
mistakes:
  A: "That divides by 8. Divide by 2 for the two L's and 2 for the two E's."
  C: "That only corrects for one repeated letter. Both L and E repeat."
  D: "That treats all 5 letters as different."
verify: "new Set(perms([...'LEVEL']).map((p) => p.join(''))).size"
---

How many different arrangements are there of the letters in LEVEL?

## Hint

Which letters repeat, and how many times?

## Hint 2

L and E each appear twice.

## Solution

There are $5! = 120$ orders of 5 letters. The two L's and two E's are identical, so divide by $2 \times 2$. That gives $120 \div 4 = 30$.

**Answer: (B) 30**
