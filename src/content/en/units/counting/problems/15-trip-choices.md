---
order: 15
difficulty: medium
lesson: 05-split-into-cases
choices: ["15","24","25","144","288"]
answer: B
mistakes:
  A: "That's $4 + 3 + 2 + 6$. Inside a case, you pick one thing and then another, so multiply."
  C: "That's $12 + 13$. Check the second case: $2 \\times 6$ is 12."
  D: "That's $12 \\times 12$. A student picks one plan **or** the other, so add the two cases."
  E: "That's $4 \\times 3 \\times 2 \\times 6$, which makes every student do both plans."
verify: "4 * 3 + 2 * 6"
---

On a field trip, each student picks **either** a hike and a packed lunch **or** a boat ride and a snack. There are 4 hikes, 3 packed lunches, 2 boat rides, and 6 snacks. How many different plans are possible?

## Hint

Split it into two cases. Inside each case, are you doing one thing and then another?

## Hint 2

The hike case gives $4 \times 3$ plans, and the boat case gives $2 \times 6$ plans.

## Solution

Hike and lunch: $4 \times 3 = 12$. Boat and snack: $2 \times 6 = 12$. A student does one or the other, so add: $12 + 12 = 24$.

**Answer: (B) 24**
