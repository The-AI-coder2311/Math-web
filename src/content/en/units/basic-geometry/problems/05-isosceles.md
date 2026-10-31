---
order: 5
difficulty: easy
choices: [50, 65, 75, 130, 150]
answer: B
verify: "range(1, 179).find((x) => x + x + 50 === 180)"
---

In an isosceles triangle, the two equal angles are at the bottom, and the top angle measures 50°. How many degrees does each bottom angle measure?

## Hint

All three angles add up to 180°. How many degrees are left for the two equal angles to share?

## Solution

**Step 1.** The three angles add up to 180°, so the two bottom angles share $180 - 50 = 130$ degrees.

**Step 2.** They're equal, so each is $130 \div 2 = 65$ degrees.

**Check:** $65 + 65 + 50 = 180$.

**Answer: (B) 65**
