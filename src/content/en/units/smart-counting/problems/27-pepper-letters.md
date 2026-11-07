---
order: 27
difficulty: medium
lesson: 03-repeats
choices: ["60","120","360","720"]
answer: A
mistakes:
  B: "That only divides by 3 factorial. E also repeats."
  C: "That only divides by 2. P repeats 3 times."
  D: "That treats all 6 letters as different."
verify: "new Set(perms([...'PEPPER']).map((p) => p.join(''))).size"
---

How many different arrangements are there of the letters in PEPPER?

## Hint

P appears 3 times, and E appears 2 times.

## Hint 2

Divide $6!$ by $3!$ and by $2!$.

## Solution

There are $6! = 720$ orders. Divide by $3! = 6$ for the P's, and by $2! = 2$ for the E's. That gives $720 \div 12 = 60$.

**Answer: (A) 60**
