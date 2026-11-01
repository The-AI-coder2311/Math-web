---
order: 5
difficulty: easy
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{36}$","$\\frac{1}{18}$","$\\frac{1}{12}$","$\\frac{1}{11}$","$\\frac{1}{6}$"]
answer: C
mistakes:
  A: "That counts one outcome. Three pairs add up to 10."
  B: "That counts 2 outcomes, treating (4, 6) and (6, 4) as the same. They're different outcomes."
  D: "That treats the 11 possible totals as equally likely. They aren't."
  E: "That's the chance of a total of 7, the most likely total."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 10).length, 36)"
---

You roll two standard dice. What is the probability that the numbers add up to 10?

## Hint

Think of one red die and one blue die. List every pair that makes 10, and remember that there are 36 outcomes in all.

## Hint 2

The pairs are (4, 6), (5, 5), and (6, 4). There are 36 outcomes.

## Solution

**Step 1.** List the pairs (red, blue) that add up to 10: (4, 6), (5, 5), and (6, 4). That's 3 outcomes.

**Step 2.** There are 36 equally likely outcomes, so the probability is $\frac{3}{36}$, which simplifies to $\frac{1}{12}$.

**Answer: (C) $\frac{1}{12}$**
