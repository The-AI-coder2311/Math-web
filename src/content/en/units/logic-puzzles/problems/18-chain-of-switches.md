---
order: 18
difficulty: hard
lesson: 01-if-then-reasoning
choices: ["4","5","6","8","16"]
answer: B
mistakes:
  A: "You found the settings with D off. There's one more, with D on."
  C: "Check your list against each rule. If A is on, then B and C must be on, and D must be off."
  D: "Those rules allow fewer settings than that. Split into cases, using D."
  E: "That's every setting of 4 switches, with no rules at all."
verify: "product([0, 1], [0, 1], [0, 1], [0, 1]).filter(([a, b, c, d]) => (!a || b) && (!b || c) && (!c || !d)).length"
---

Four switches, A, B, C, and D, can each be on or off. These rules must all hold:

- If A is on, then B is on.
- If B is on, then C is on.
- If C is on, then D is off.

How many settings of the four switches follow all of the rules?

## Hint

Split into two cases: D on, and D off.

## Hint 2

If D is on, use the flipped-and-negated form of the last rule. It sets off a chain.

## Solution

**If D is on:** C must be off, so B must be off, so A must be off. That's 1 setting.

**If D is off:** The third rule is met. Now A, B, and C must follow the chain, so if a switch is on, each one after it is on. The settings for A, B, and C are off-off-off, off-off-on, off-on-on, and on-on-on. That's 4 settings.

In all, there are $1 + 4 = 5$ settings.

**Answer: (B) 5**
