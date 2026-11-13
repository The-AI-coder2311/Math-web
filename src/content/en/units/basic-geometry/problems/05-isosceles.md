---
order: 5
difficulty: easy
lesson: 03-angle-facts
choices: ["50","65","75","130","150"]
answer: B
mistakes:
  A: "That's the top angle. All three aren't equal, since the triangle isn't equilateral."
  C: "Check it: $75 + 75 + 50$ is 200, which is too much."
  D: "That's what the two bottom angles share. Divide it between them."
  E: "That's more than a triangle can hold alongside the other angles."
verify: "range(1, 179).find((x) => x + x + 50 === 180)"
---

In an isosceles triangle, the two equal angles are at the bottom, and the top angle measures 50°. How many degrees does each bottom angle measure?

## Hint

All three angles add up to 180°. How many degrees are left for the two equal angles to share?

## Hint 2

The bottom angles share $180 - 50 = 130$ degrees equally.

## Solution

**Step 1.** The three angles add up to 180°, so the two bottom angles share $180 - 50 = 130$ degrees.

**Step 2.** They're equal, so each is $130 \div 2 = 65$ degrees.

**Check:** $65 + 65 + 50 = 180$.

**Answer: (B) 65**
