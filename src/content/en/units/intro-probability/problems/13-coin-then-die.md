---
order: 13
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{12}$","$\\frac{1}{4}$","$\\frac{1}{2}$","$\\frac{2}{3}$","1"]
answer: B
mistakes:
  A: "That's the chance of heads and one specific number. There are 3 even numbers."
  C: "That's the chance of one of them alone. Both have to happen."
  D: "Both results have a chance of one half. Multiply them."
  E: "That adds the two chances. For one thing **and** another, multiply."
verify: "fraction(product(['H', 'T'], range(1, 6)).filter(([c, d]) => c === 'H' && d % 2 === 0).length, 12)"
---

You flip a coin and roll a die. What is the probability of getting heads **and** an even number?

## Hint

Do the two results affect each other?

## Hint 2

They don't, so multiply: $\frac{1}{2} \times \frac{1}{2}$.

## Solution

The chance of heads is $\frac{1}{2}$, and the chance of an even number is $\frac{3}{6} = \frac{1}{2}$. They're independent, so multiply: $\frac{1}{4}$.

**Answer: (B) $\frac{1}{4}$**
