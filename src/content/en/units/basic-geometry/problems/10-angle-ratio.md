---
order: 11
difficulty: medium
lesson: 03-angle-facts
choices: ["40","60","100","90","80"]
answer: E
mistakes:
  A: "That's the smallest angle, which has 2 boxes."
  B: "That's the middle angle, which has 3 boxes."
  D: "That assumes a right triangle. The ratio gives you the angles directly."
  C: "That's 5 boxes. The largest angle has 4 boxes."
verify: "(() => { const unit = range(1, 60).find((u) => 2 * u + 3 * u + 4 * u === 180); return 4 * unit; })()"
---

The three angles of a triangle are in the ratio 2 to 3 to 4. How many degrees does the largest angle measure?

## Hint

This uses the idea from the ratios unit. Draw 2 boxes, 3 boxes, and 4 boxes. How many degrees are there to share?

## Hint 2

There are 9 boxes in all, sharing 180 degrees. So each box holds 20 degrees.

## Solution

**Step 1.** There are $2 + 3 + 4 = 9$ equal boxes, and the angles add up to 180°.

**Step 2.** Each box holds $180 \div 9 = 20$ degrees.

**Step 3.** The largest angle has 4 boxes: $4 \times 20 = 80$ degrees.

**Check:** The angles are 40°, 60°, and 80°, and $40 + 60 + 80 = 180$.

**Answer: (E) 80**
