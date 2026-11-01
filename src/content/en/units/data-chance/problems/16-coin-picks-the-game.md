---
order: 14
difficulty: medium
lesson: 03-multi-step-chance
choices: ["$\\frac{1}{4}$","$\\frac{1}{6}$","$\\frac{1}{12}$","$\\frac{1}{3}$","$\\frac{1}{2}$"]
answer: A
mistakes:
  C: "That's only the tails path. Add the heads path too."
  B: "That's only the heads path. Add the tails path too."
  D: "That's the chance of winning after heads alone. The coin decides which game you play."
  E: "That adds $\\frac{1}{3} + \\frac{1}{6}$, leaving out the coin. Each path also has a $\\frac{1}{2}$."
verify: "fraction(product(['H', 'T'], range(1, 6)).filter(([c, d]) => (c === 'H' ? d >= 5 : d === 6)).length, 12)"
---

You flip a coin and then roll a die. On heads, you win if the die shows 5 or 6. On tails, you win only if it shows a 6. What is the probability that you win?

## Hint

Follow each path. Multiply along it, and then add the paths.

## Hint 2

Heads: $\frac{1}{2} \times \frac{2}{6}$. Tails: $\frac{1}{2} \times \frac{1}{6}$.

## Solution

Heads and a win: $\frac{1}{2} \times \frac{2}{6} = \frac{2}{12}$. Tails and a win: $\frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$. Adding them gives $\frac{3}{12} = \frac{1}{4}$.

**Answer: (A) $\frac{1}{4}$**
