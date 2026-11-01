---
order: 13
difficulty: medium
lesson: 03-working-backwards
choices: ["18","36","24","48","72"]
answer: B
mistakes:
  A: "That's what was left after the morning. Go back one more step."
  C: "Run it forward: half of 24 is 12, and then selling a third leaves 8."
  D: "Run it forward: half of 48 is 24, and then selling a third leaves 16."
  E: "That treats 12 as $\\frac{1}{6}$ of the start. Check it: what fraction is left after both sales?"
verify: "range(1, 100).find((n) => n - n / 2 - (n / 2) / 3 === 12)"
---

A bakery sells $\frac{1}{2}$ of its muffins in the morning, and then $\frac{1}{3}$ of the remaining muffins in the afternoon. It has 12 muffins left. How many did it start with?

## Hint

Work backwards. If $\frac{1}{3}$ of what remained was sold, what fraction is left?

## Hint 2

The 12 muffins are $\frac{2}{3}$ of what remained after the morning, so that was 18.

## Solution

**Step 1.** The 12 muffins are $\frac{2}{3}$ of what was there after the morning. So one third is 6, and that amount was 18.

**Step 2.** The 18 muffins are the half left after the morning, so the bakery started with 36.

**Check:** 36 becomes 18, and then selling a third of 18 leaves 12.

**Answer: (B) 36**
