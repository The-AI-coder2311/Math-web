---
order: 2
difficulty: easy
choices: [red, blue, green, yellow]
answer: C
verify: "['red', 'blue', 'green', 'yellow'][(35 - 1) % 4]"
---

A necklace has beads that repeat in the order red, blue, green, yellow, red, blue, green, yellow, and so on. What color is the 35th bead?

## Hint

The colors repeat every 4 beads. What's the remainder when you divide 35 by 4?

## Solution

**Step 1.** The colors repeat every 4 beads. Since $4 \times 8 = 32$, the 32nd bead finishes a full group, so it's yellow.

**Step 2.** Now go 3 more beads: the 33rd is red, the 34th is blue, and the 35th is green.

**Answer: (C) green**
