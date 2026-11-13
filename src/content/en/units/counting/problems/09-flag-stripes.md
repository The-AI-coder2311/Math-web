---
order: 10
difficulty: medium
lesson: 01-multiply-choices
choices: ["48","60","81","120","243"]
answer: A
mistakes:
  B: "That's $5 \\times 4 \\times 3$. There are 3 colors, and each stripe only has to avoid the color of the stripe before it, so each later stripe has 2 options."
  C: "That's $3 \\times 3 \\times 3 \\times 3$. A stripe has only 2 options after the first, since it must differ from its neighbor."
  D: "That's $5!$. That would arrange 5 different stripes. Here the colors can come back."
  E: "That's $3^5$, which ignores the rule about touching stripes."
verify: "product([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]).filter((flag) => flag.every((color, i) => i === 0 || color !== flag[i - 1])).length"
---

A flag has 5 stripes in a row. Each stripe is red, blue, or gold, and two stripes that touch can't be the same color. A color can be used again as long as the stripes don't touch. How many different flags are possible?

## Hint

Color the stripes from left to right. The first stripe can be any color. What about the next stripe? The only color it can't be is the one right next to it.

## Hint 2

The first stripe has 3 options. Every later stripe has 2, since it can't match the stripe before it.

## Solution

**Step 1.** The first stripe can be any of the 3 colors, so there are 3 options.

**Step 2.** The second stripe can be anything except the color of the first stripe, so there are 2 options.

**Step 3.** The third stripe only has to differ from the second stripe. It can match the first stripe, so again there are 2 options. The same goes for the fourth and fifth stripes.

**Step 4.** Multiply:

$$3 \times 2 \times 2 \times 2 \times 2 = 48$$

**Notice:** the number of options doesn't keep shrinking here. Each stripe only has to avoid one color: the color of the stripe right before it.

**Answer: (A) 48**
