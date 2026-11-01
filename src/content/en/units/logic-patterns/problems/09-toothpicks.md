---
order: 10
difficulty: medium
lesson: 01-repeating-and-growing
choices: ["60","63","61","64","80"]
answer: C
mistakes:
  A: "That's $20 \\times 3$. The first square needs one more toothpick, since it has no neighbor."
  B: "That's $3 + 20 \\times 3$. Only 19 squares add 3 toothpicks each."
  D: "That's $4 + 20 \\times 3$. After the first square, there are only 19 more."
  E: "That's $20 \\times 4$, which counts shared sides twice."
verify: "(() => { const n = 20; const edges = new Set(); range(0, n - 1).forEach((x) => { edges.add(`h${x}top`); edges.add(`h${x}bottom`); edges.add(`v${x}`); edges.add(`v${x + 1}`); }); return edges.size; })()"
---

Toothpicks are used to build a row of squares that share sides. One square takes 4 toothpicks, two squares take 7, and three squares take 10. How many toothpicks does a row of 20 squares take?

## Hint

Sketch it. Each new square shares one side with the square before it. How many new toothpicks does it need?

## Hint 2

The first square takes 4. Each of the other 19 squares adds 3.

## Solution

**Step 1.** The first square takes 4 toothpicks.

**Step 2.** Each new square shares a side with the one before it, so it needs only 3 more toothpicks.

**Step 3.** After the first square, there are 19 more squares:

$$4 + 19 \times 3 = 61$$

**Answer: (C) 61**
