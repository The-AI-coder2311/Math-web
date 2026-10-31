---
order: 4
difficulty: medium
choices: [6, 8, 11, 13, 18]
answer: B
verify: "range(1, 50).find((tree) => tree * 3 === 2 * 12)"
---

A 2-meter stick standing straight up casts a 3-meter shadow. At the same moment, a tree casts a 12-meter shadow. How tall is the tree, in meters?

## Hint

The sun makes the same angle with both, so the triangles are similar. How many times longer is the tree's shadow?

## Solution

**Step 1.** The two triangles are similar. The tree's shadow is $12 \div 3 = 4$ times as long as the stick's.

**Step 2.** So the tree is 4 times as tall as the stick: $2 \times 4 = 8$ meters.

A common mistake is to add: "The shadow is 9 meters longer, so the tree is 9 meters taller." Similar shapes multiply. They don't add.

**Answer: (B) 8**
