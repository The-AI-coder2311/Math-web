---
order: 30
difficulty: hard
lesson: 01-if-then-reasoning
choices: ["5","6","7","8"]
answer: C
mistakes:
  A: "You may have left out some settings with D on. D is free when A is off."
  B: "Check the case with A on: there's exactly one setting."
  D: "Check it: when A is on, D must be off. So that case gives only 1 setting."
verify: "product([0, 1], [0, 1], [0, 1], [0, 1]).filter(([a, b, c, d]) => (!a || b) && (!b || c) && (!d || !a)).length"
---

Four lights, A, B, C, and D, can each be on or off. These rules must all hold:

- If A is on, then B is on.
- If B is on, then C is on.
- If D is on, then A is off.

How many settings of the four lights follow all of the rules?

## Hint

Split into two cases: A on, and A off.

## Hint 2

If A is on, then B and C are on, and D must be off. If A is off, what are the choices?

## Solution

**If A is on:** B and C must be on, and D must be off. That's 1 setting.

**If A is off:** B and C can be off-off, off-on, or on-on, which is 3 options. D is free, with 2 options. That's $3 \times 2 = 6$ settings.

In all, $1 + 6 = 7$.

**Answer: (C) 7**
