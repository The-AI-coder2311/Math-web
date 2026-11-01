---
order: 17
difficulty: hard
lesson: 04-count-the-opposite
choices: ["2439","729","2916","3439","6561"]
answer: A
mistakes:
  B: "That's the count for 3 digits with no 0s. There are 4 digits."
  C: "That's $4 \\times 729$, which counts one 0 in each of 4 spots. The first digit can't be 0, and numbers with several 0s get counted more than once."
  D: "That's $10000 - 6561$. There are only 9000 four-digit numbers."
  E: "That's the count with **no** 0s. Subtract it from 9000."
verify: "range(1000, 9999).filter((n) => digits(n).includes(0)).length"
---

How many 4-digit numbers have at least one digit that is 0?

## Hint

Count the opposite. How many 4-digit numbers have no 0s?

## Hint 2

With no 0s, each of the 4 digits has 9 options, so there are $9^4 = 6561$. How many 4-digit numbers are there in all?

## Solution

**Step 1.** There are 9000 four-digit numbers.

**Step 2.** With no 0s, each digit has 9 options: $9 \times 9 \times 9 \times 9 = 6561$.

**Step 3.** So $9000 - 6561 = 2439$ have at least one 0.

**Answer: (A) 2439**
