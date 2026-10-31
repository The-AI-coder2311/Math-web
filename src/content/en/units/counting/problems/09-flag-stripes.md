---
order: 9
difficulty: medium
choices: [48, 60, 81, 120, 243]
answer: A
verify: "product([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]).filter((flag) => flag.every((color, i) => i === 0 || color !== flag[i - 1])).length"
---

A flag has 5 stripes in a row. Each stripe is red, blue, or gold, and two stripes that touch can't be the same color. A color can be used again as long as the stripes don't touch. How many different flags are possible?

## Hint

Color the stripes from left to right. The first stripe can be any color. What about the next stripe? The only color it can't be is the one right next to it.

## Solution

**Step 1.** The first stripe can be any of the 3 colors, so there are 3 options.

**Step 2.** The second stripe can be anything except the color of the first stripe, so there are 2 options.

**Step 3.** The third stripe only has to differ from the second stripe. It can match the first stripe, so again there are 2 options. The same goes for the fourth and fifth stripes.

**Step 4.** Multiply:

$$3 \times 2 \times 2 \times 2 \times 2 = 48$$

**Notice:** the number of options doesn't keep shrinking here. Each stripe only has to avoid one color: the color of the stripe just before it.

**Answer: (A) 48**
