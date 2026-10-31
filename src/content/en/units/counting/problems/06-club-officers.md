---
order: 6
difficulty: medium
choices: [14, 21, 42, 49, 56]
answer: C
verify: "product(range(1, 7), range(1, 7)).filter(([president, vice]) => president !== vice).length"
---

A chess club has 7 members. The club elects a president and a vice president, and they must be two different people. In how many ways can this be done?

## Hint

Choose the president first. How many people could then be vice president?

## Solution

**Step 1.** Any of the 7 members can be president, so there are 7 options.

**Step 2.** The vice president must be someone else, so there are 6 options left.

**Step 3.** Multiply:

$$7 \times 6 = 42$$

**Why order matters:** suppose Ana is president and Ben is vice president. That's different from Ben being president and Ana being vice president, so we count both.

**Answer: (C) 42**
