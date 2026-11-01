---
order: 9
difficulty: medium
lesson: 01-overlaps
choices: ["59","53","56","47","67"]
answer: D
mistakes:
  B: "That's $33 + 20$, which counts the multiples of 15 twice."
  C: "That's $33 + 20 + 3$. Subtract the overlap instead."
  A: "That adds the 6 multiples of 15. Subtract them, since they were counted twice."
  E: "That's too many. Add the two groups, and subtract the overlap: $33 + 20 - 6$."
verify: "range(1, 100).filter((n) => n % 3 === 0 || n % 5 === 0).length"
---

How many whole numbers from 1 to 100 are divisible by 3 or by 5 (or by both)?

## Hint

Count the multiples of 3 and the multiples of 5. Which numbers get counted twice?

## Hint 2

There are 33 multiples of 3 and 20 multiples of 5. Which numbers are in both groups?

## Solution

**Step 1.** There are 33 multiples of 3, since $3 \times 33 = 99$.

**Step 2.** There are 20 multiples of 5, since $5 \times 20 = 100$.

**Step 3.** Multiples of 15 get counted twice. There are 6 of them, since $15 \times 6 = 90$.

**Step 4.** The total is $33 + 20 - 6 = 47$.

**Answer: (D) 47**
