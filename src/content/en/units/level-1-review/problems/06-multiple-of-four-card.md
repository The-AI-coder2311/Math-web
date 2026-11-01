---
order: 6
difficulty: easy
from: intro-probability/01-count-what-you-want
choices: ["$\\frac{1}{12}$","$\\frac{1}{6}$","$\\frac{1}{3}$","$\\frac{1}{4}$","$\\frac{1}{2}$"]
answer: D
mistakes:
  A: "That counts only one card. Three of them are multiples of 4."
  B: "That counts only 2 cards. Don't forget 12."
  C: "That would be 4 cards. Only 4, 8, and 12 work."
  E: "That's the chance of an even number. Only some even numbers are multiples of 4."
verify: "fraction(range(1, 12).filter((n) => n % 4 === 0).length, 12)"
---

Cards numbered 1 to 12 are in a hat, and you draw one. What is the probability that its number is a multiple of 4?

## Hint

List the multiples of 4 up to 12.

## Hint 2

They are 4, 8, and 12.

## Solution

The multiples are 4, 8, and 12. That's 3 out of 12 cards, so the probability is $\frac{3}{12} = \frac{1}{4}$.

**Answer: (D) $\frac{1}{4}$**
