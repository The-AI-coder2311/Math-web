---
order: 15
difficulty: medium
lesson: 04-harder-probability
choices: ["$\\frac{5}{21}$","$\\frac{5}{14}$","$\\frac{4}{9}$","$\\frac{10}{21}$","$\\frac{1}{2}$"]
answer: B
mistakes:
  A: "That's 20 out of 84. Check the number of ways to pick the girls: $\\binom{4}{2}$ is 6, not 4."
  C: "That's the chance of picking one girl. A committee needs a count of whole groups."
  D: "That's 40 out of 84, which is the count for exactly 2 boys and 1 girl."
  E: "That's more than the true chance. Compute it: 30 out of 84."
verify: "(() => { const people = ['B', 'B', 'B', 'B', 'B', 'G', 'G', 'G', 'G']; const all = combos(people, 3); return fraction(all.filter((t) => t.filter((x) => x === 'G').length === 2).length, all.length); })()"
---

A committee of 3 is chosen at random from 5 boys and 4 girls. What is the probability that it has exactly 2 girls?

## Hint

Does order matter on a committee? How many committees are there in all?

## Hint 2

There are $\binom{9}{3} = 84$ committees. Then choose 2 girls and 1 boy.

## Solution

**Step 1.** The total is $\binom{9}{3} = 84$.

**Step 2.** Choosing 2 girls and 1 boy gives $\binom{4}{2} \times \binom{5}{1} = 6 \times 5 = 30$.

**Step 3.** The probability is $\frac{30}{84} = \frac{5}{14}$.

**Answer: (B) $\frac{5}{14}$**
