---
order: 19
difficulty: hard
lesson: 03-angle-facts
choices: ["40","100","80","50","130"]
answer: D
mistakes:
  A: "That splits the top angle in half. The bottom angles share what's left after the top angle."
  C: "That's the top inside angle. Each bottom angle is smaller."
  B: "That's the outside angle, and also what the bottom angles share. Each one gets half."
  E: "That's an outside angle at the bottom, not an inside one."
verify: "range(1, 90).find((b) => b + b + (180 - 100) === 180)"
---

In an isosceles triangle, the two equal angles are at the bottom. One side at the top corner is extended past the corner, which makes an outside angle of 100° at the top. How many degrees is each bottom angle?

## Hint

The outside angle and the top inside angle make a straight line.

## Hint 2

The top inside angle is $180 - 100 = 80$ degrees. The other two share what's left.

## Solution

**Step 1.** The top inside angle is $180 - 100 = 80$ degrees.

**Step 2.** The bottom angles share $180 - 80 = 100$ degrees, so each is $100 \div 2 = 50$ degrees.

**Answer: (D) 50**
