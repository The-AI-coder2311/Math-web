---
order: 16
difficulty: medium
lesson: 04-harder-probability
choices: ["$\\frac{1}{6}$","$\\frac{1}{5}$","$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{1}{2}$"]
answer: C
mistakes:
  A: "That's 120 out of 720. Ana and Ben can sit in 2 orders inside the block, so double it."
  B: "That's the chance that Ben gets one particular seat. If Ana sits in the middle, two seats are next to her."
  D: "That's the chance if Ana is never on an end. Ana might be on an end, with only one neighbor seat."
  E: "That's too high. Only 240 of the 720 lineups have them together."
verify: "(() => { const all = perms([1, 2, 3, 4, 5, 6]); return fraction(all.filter((p) => Math.abs(p.indexOf(1) - p.indexOf(2)) === 1).length, all.length); })()"
---

Six friends, including Ana and Ben, sit in a row of 6 chairs in a random order. What is the probability that Ana and Ben sit next to each other?

## Hint

Count the lineups where they're together by gluing them into one block.

## Hint 2

The block and the other 4 friends make 5 things to arrange. Don't forget that the two can swap inside the block.

## Solution

**Step 1.** There are $6! = 720$ lineups.

**Step 2.** Glue Ana and Ben together: $5! = 120$ arrangements, times 2 orders inside the block, which makes 240.

**Step 3.** The probability is $\frac{240}{720} = \frac{1}{3}$.

**Answer: (C) $\frac{1}{3}$**
