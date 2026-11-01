---
order: 15
difficulty: medium
lesson: 04-grid-paths
choices: ["15","60","90","75","126"]
answer: D
mistakes:
  A: "That's only the case with 4 seniors. \"At least 3\" also includes exactly 3."
  B: "That's only the case with 3 seniors. \"At least 3\" also includes exactly 4."
  C: "Add the two cases: 60 and 15."
  E: "That's $\\binom{9}{4}$, any 4 people. The rule removes some teams."
verify: "combos(['S', 'S', 'S', 'S', 'S', 'S', 'J', 'J', 'J'], 4).filter((t) => t.filter((x) => x === 'S').length >= 3).length"
---

A team of 4 is chosen from 6 seniors and 3 juniors. It must have at least 3 seniors. How many teams are possible?

## Hint

"At least 3 seniors" splits into two cases. What are they?

## Hint 2

Exactly 3 seniors and 1 junior: $\binom{6}{3} \times 3$. Exactly 4 seniors: $\binom{6}{4}$.

## Solution

**Case 1.** 3 seniors and 1 junior: $20 \times 3 = 60$.

**Case 2.** 4 seniors: $\binom{6}{4} = 15$.

The total is $60 + 15 = 75$.

**Answer: (D) 75**
