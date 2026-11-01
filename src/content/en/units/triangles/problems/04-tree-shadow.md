---
order: 7
difficulty: medium
lesson: 04-similar-triangles
choices: ["6","8","11","13","18"]
answer: B
mistakes:
  A: "That's half of the shadow. Compare the shadows: $12 \\div 3 = 4$."
  C: "That adds 9 to the stick. Similar shapes multiply, and they don't add."
  D: "That's a sum of the numbers. Use the scale factor, 4."
  E: "That's $12 \\times 3 \\div 2$, the ratio upside down. A shadow longer than the object means the object is shorter than its shadow."
verify: "range(1, 50).find((tree) => tree * 3 === 2 * 12)"
---

A 2-meter stick standing straight up casts a 3-meter shadow. At the same moment, a tree casts a 12-meter shadow. How tall is the tree, in meters?

## Hint

The sun makes the same angle with both, so the triangles are similar. How many times longer is the tree's shadow?

## Hint 2

The tree's shadow is 4 times as long, so the tree is 4 times as tall.

## Solution

**Step 1.** The two triangles are similar. The tree's shadow is $12 \div 3 = 4$ times as long as the stick's.

**Step 2.** So the tree is 4 times as tall as the stick: $2 \times 4 = 8$ meters.

A common mistake is to add: "The shadow is 9 meters longer, so the tree is 9 meters taller." Similar shapes multiply. They don't add.

**Answer: (B) 8**
