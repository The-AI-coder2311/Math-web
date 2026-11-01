---
order: 10
difficulty: medium
lesson: 04-grid-paths
choices: ["4","18","31","34","35"]
answer: D
mistakes:
  A: "That's the number of girls. A team with at least one girl can have 1, 2, or 3."
  B: "That counts only some of the teams. Use the opposite: all teams minus all-boy teams."
  C: "That subtracts 4. There's only 1 all-boy team, since there are only 3 boys."
  E: "That's every team, including the all-boy one."
verify: "combos(['B1', 'B2', 'B3', 'G1', 'G2', 'G3', 'G4'], 3).filter((team) => team.some((p) => p[0] === 'G')).length"
---

A group has 3 boys and 4 girls. A team of 3 people will be chosen from the group. How many different teams include at least one girl?

## Hint

Count all the possible teams first. Then which teams don't have a girl?

## Hint 2

There are $\binom{7}{3} = 35$ teams in all. How many have no girls?

## Solution

**Step 1.** All possible teams of 3 from 7 people:

$$\frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

**Step 2.** The opposite of "at least one girl" is "all boys." There are only 3 boys, so there's only 1 all-boy team.

**Step 3.** Subtract: $35 - 1 = 34$.

**Answer: (D) 34**
