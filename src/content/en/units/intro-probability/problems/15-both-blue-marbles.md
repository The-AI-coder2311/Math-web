---
order: 15
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{3}{28}$","$\\frac{1}{8}$","$\\frac{9}{64}$","$\\frac{1}{4}$","$\\frac{3}{8}$"]
answer: A
mistakes:
  B: "That's only one marble out of 8. Two marbles have to be blue."
  C: "That's $\\frac{3}{8} \\times \\frac{3}{8}$, as if you put the first marble back. The bag changes."
  D: "That's $\\frac{2}{8}$. Multiply the chances for the first and second marbles."
  E: "That's only the first marble. The second one also has to be blue."
verify: "fraction(combos(range(1, 8), 2).filter((p) => p.every((x) => x <= 3)).length, combos(range(1, 8), 2).length)"
---

A bag has 5 red and 3 blue marbles. You pull out 2 without putting the first one back. What is the probability that both are blue?

## Hint

After you take out a blue marble, how many marbles are left? How many of those are blue?

## Hint 2

It's $\frac{3}{8}$ for the first, and then $\frac{2}{7}$ for the second.

## Solution

The first is blue with a chance of $\frac{3}{8}$. Then 2 of the 7 left are blue. So the chance is $\frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$.

**Answer: (A) $\frac{3}{28}$**
