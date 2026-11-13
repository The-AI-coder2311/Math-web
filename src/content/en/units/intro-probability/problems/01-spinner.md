---
order: 1
difficulty: easy
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{8}$","$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{3}{8}$","$\\frac{1}{2}$"]
answer: B
mistakes:
  A: "That counts only one multiple of 3. Both 3 and 6 count."
  C: "That confuses \"multiple of 3\" with \"one out of 3.\" There are 8 sections, and 2 are multiples."
  D: "That counts 3 sections. Only 3 and 6 are multiples of 3."
  E: "That would be 4 sections. Only 3 and 6 are multiples of 3."
verify: "fraction(range(1, 8).filter((n) => n % 3 === 0).length, 8)"
---

A spinner has 8 equal sections numbered 1 through 8. What is the probability of landing on a multiple of 3?

## Hint

List the multiples of 3 that are on the spinner. How many are there?

## Hint 2

The multiples of 3 from 1 to 8 are 3 and 6.

## Solution

**Step 1.** The multiples of 3 on the spinner are 3 and 6, so there are 2 outcomes you want.

**Step 2.** There are 8 equally likely outcomes in all, so the probability is $\frac{2}{8}$, which simplifies to $\frac{1}{4}$.

**Answer: (B) $\frac{1}{4}$**
