---
order: 9
difficulty: medium
choices: [18, 20, 24, 26, 32]
answer: C
verify: "range(1, 25).find((h) => h * h + 7 * 7 === 25 * 25)"
---

A 25-foot ladder leans against a wall, and its bottom is 7 feet from the wall. The wall meets the ground at a right angle. How many feet up the wall does the ladder reach?

## Hint

Draw it. Which side of the right triangle is the ladder: a leg or the hypotenuse?

## Solution

**Step 1.** The ladder is across from the right angle, so it's the hypotenuse. Let $h$ be the height it reaches. Then:

$$7^2 + h^2 = 25^2$$

**Step 2.** Since $7^2 = 49$ and $25^2 = 625$, the value of $h^2$ is $625 - 49 = 576$.

**Step 3.** Since $24 \times 24 = 576$, the ladder reaches 24 feet up.

**Answer: (C) 24**
