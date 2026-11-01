---
order: 18
difficulty: hard
lesson: 04-one-minus
choices: ["$\\frac{3}{5}$","$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{4}{15}$","$\\frac{2}{3}$"]
answer: A
mistakes:
  D: "That counts 4 pairs. There are 9 pairs with a girl in them."
  B: "That's the chance that one particular pick is a girl. There are two picks."
  C: "That's the chance of all boys. Subtract it from 1."
  E: "That adds $\\frac{1}{3} + \\frac{1}{3}$, which counts the pair of two girls twice."
verify: "(() => { const all = combos(['G', 'G', 'B', 'B', 'B', 'B'], 2); return fraction(all.filter((p) => p.includes('G')).length, all.length); })()"
---

From 2 girls and 4 boys, a teacher picks 2 students at random. What is the probability that at least one is a girl?

## Hint

What's the opposite of "at least one girl"? How many pairs are there in all?

## Hint 2

There are $\binom{6}{2} = 15$ pairs. All-boy pairs number $\binom{4}{2} = 6$.

## Solution

There are 15 pairs in all, and 6 of them are all boys. So the chance of all boys is $\frac{6}{15} = \frac{2}{5}$. The chance of at least one girl is $1 - \frac{2}{5} = \frac{3}{5}$.

**Answer: (A) $\frac{3}{5}$**
