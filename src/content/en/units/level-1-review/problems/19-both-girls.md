---
order: 19
difficulty: hard
from: intro-probability/03-trees-and-multiplying
choices: ["$\\frac{1}{4}$","$\\frac{3}{7}$","$\\frac{25}{64}$","$\\frac{5}{14}$","$\\frac{5}{8}$"]
answer: D
mistakes:
  A: "Multiply the two chances: $\\frac{5}{8} \\times \\frac{4}{7}$."
  C: "That's $\\frac{5}{8} \\times \\frac{5}{8}$, as if the first student stayed in the group."
  B: "That's the chance that the second is a boy, after a girl is picked."
  E: "That's only the first pick. Both have to be girls."
verify: "(() => { const all = combos(['G', 'G', 'G', 'G', 'G', 'B', 'B', 'B'], 2); return fraction(all.filter((p) => p[0] === 'G' && p[1] === 'G').length, all.length); })()"
---

A group has 5 girls and 3 boys. Two students are picked at random, one after the other. What is the probability that both are girls?

## Hint

After a girl is picked, how many students are left? How many of them are girls?

## Hint 2

It's $\frac{5}{8}$ for the first, and then $\frac{4}{7}$ for the second.

## Solution

The first is a girl with a chance of $\frac{5}{8}$. Then 4 of the 7 left are girls. So the chance is $\frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$.

**Answer: (D) $\frac{5}{14}$**
