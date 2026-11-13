---
order: 5
difficulty: easy
lesson: 03-geometric-sequences
choices: ["24","48","192","384","768"]
answer: D
mistakes:
  A: "That's the 4th term. Keep doubling until you reach the 8th."
  B: "That's $3 \\times 2^4$, the 5th term. You need 7 doublings."
  C: "That's $3 \\times 2^6$, the 7th term. It takes 7 steps to reach the 8th term."
  E: "That's $3 \\times 2^8$, the 9th term. It takes 7 steps to reach the 8th term, not 8."
verify: "range(2, 8).reduce((t) => t * 2, 3)"
---

What is the 8th term of the geometric sequence 3, 6, 12, 24, ...?

## Hint

What does each step multiply by? How many steps are there from the 1st term to the 8th?

## Hint 2

There are 7 steps, each multiplying by 2. So the term is $3 \times 2^7$.

## Solution

There are 7 steps from the 1st term to the 8th, and each one doubles: $3 \times 2^7 = 3 \times 128 = 384$.

**Answer: (D) 384**
