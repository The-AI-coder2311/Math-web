---
order: 2
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["red","blue","green","yellow"]
answer: C
mistakes:
  A: "That's the bead after a full cycle. A remainder of 3 means the 3rd color."
  B: "That's the 2nd color. The remainder when 35 is divided by 4 is 3."
  D: "That's the last color, which you'd land on if 35 were a multiple of 4."
verify: "['red', 'blue', 'green', 'yellow'][(35 - 1) % 4]"
---

A necklace has beads that repeat in the order red, blue, green, yellow, red, blue, green, yellow, and so on. What color is the 35th bead?

## Hint

The colors repeat every 4 beads. What's the remainder when you divide 35 by 4?

## Hint 2

Since $4 \times 8 = 32$, the 32nd bead finishes a full cycle. Count 3 more from there.

## Solution

**Step 1.** The colors repeat every 4 beads. Since $4 \times 8 = 32$, the 32nd bead finishes a full group, so it's yellow.

**Step 2.** Now go 3 more beads: the 33rd is red, the 34th is blue, and the 35th is green.

**Answer: (C) green**
