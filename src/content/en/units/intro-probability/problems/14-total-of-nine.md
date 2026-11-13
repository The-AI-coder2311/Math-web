---
order: 14
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{18}$","$\\frac{1}{12}$","$\\frac{1}{11}$","$\\frac{1}{9}$","$\\frac{1}{6}$"]
answer: D
mistakes:
  A: "That counts only 2 rolls, such as 3 then 6, and 6 then 3. The rolls 4 then 5, and 5 then 4, also work."
  B: "That counts 3 pairs. There are 4: (3, 6), (4, 5), (5, 4), and (6, 3)."
  C: "That treats the 11 possible totals as equally likely. They aren't."
  E: "That's the chance of a total of 7, the most likely total."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 9).length, 36)"
---

You roll two standard dice. What is the probability that the numbers add up to 9?

## Hint

Think of one red die and one blue die. List the pairs that make 9.

## Hint 2

The pairs are (3, 6), (4, 5), (5, 4), and (6, 3).

## Solution

There are 4 pairs that make 9 out of 36 outcomes, so the probability is $\frac{4}{36} = \frac{1}{9}$.

**Answer: (D) $\frac{1}{9}$**
