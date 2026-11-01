---
order: 12
difficulty: medium
lesson: 01-overlaps
choices: ["5","10","15","35","45"]
answer: A
mistakes:
  B: "That's how many take both. The question asks for neither."
  C: "That's $25 - 10$, the students who take only art."
  D: "That's how many take at least one. Subtract it from 40."
  E: "That's $25 + 20$, which counts the 10 twice. It's also more than the whole group."
verify: "(() => { const atLeastOne = new Set([...range(1, 25), ...range(16, 35)]).size; return 40 - atLeastOne; })()"
---

In a group of 40 students, 25 take art, 20 take music, and 10 take both. How many take neither?

## Hint

How many take at least one? Don't count the 10 twice.

## Hint 2

At least one: $25 + 20 - 10 = 35$.

## Solution

At least one: $25 + 20 - 10 = 35$. So $40 - 35 = 5$ take neither.

**Answer: (A) 5**
