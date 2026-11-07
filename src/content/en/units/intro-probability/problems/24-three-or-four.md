---
order: 24
difficulty: medium
lesson: 01-count-what-you-want
choices: ["$\\frac{9}{20}$","$\\frac{1}{2}$","$\\frac{11}{20}$","$\\frac{3}{5}$"]
answer: B
mistakes:
  A: "Check your overlap. Only the number 12 is in both lists."
  C: "That counts 12 twice. Subtract the overlap."
  D: "Check the counts: 6 multiples of 3 and 5 multiples of 4."
verify: "fraction(range(1, 20).filter((n) => n % 3 === 0 || n % 4 === 0).length, 20)"
---

A whole number from 1 to 20 is picked at random. What is the probability that it's a multiple of 3 or a multiple of 4?

## Hint

Count each list, and watch for numbers in both.

## Hint 2

There are 6 multiples of 3, and 5 multiples of 4. Which number is in both?

## Solution

There are 6 multiples of 3 and 5 multiples of 4. Only 12 is in both. So $6 + 5 - 1 = 10$ numbers work, and the probability is $\frac{10}{20} = \frac{1}{2}$.

**Answer: (B) $\frac{1}{2}$**
