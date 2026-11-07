---
order: 30
difficulty: medium
lesson: 05-linearity-of-expectation
choices: ["$\\frac{9}{4}$","$\\frac{37}{16}$","$\\frac{5}{2}$","$3$"]
answer: B
mistakes:
  A: "Check the chance that a color is missed. It's three fourths, cubed."
  C: "That's a bit too large. Make one piece for each color, and add."
  D: "That assumes all three draws differ. Some draws repeat a color."
verify: "fraction(sum(product(range(1, 4), range(1, 4), range(1, 4)).map((d) => new Set(d).size)), 64)"
---

A bag has one marble in each of 4 colors. You draw a marble, note its color, and put it back. You do this 3 times. What is the expected number of different colors you see?

## Hint

Make one yes-or-no piece for each color.

## Hint 2

A color is missed with a chance of $\left(\frac{3}{4}\right)^3 = \frac{27}{64}$.

## Solution

Each color is seen with a chance of $1 - \frac{27}{64} = \frac{37}{64}$. With 4 colors, the expected number is $4 \times \frac{37}{64} = \frac{37}{16}$.

**Answer: (B) $\frac{37}{16}$**
