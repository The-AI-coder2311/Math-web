---
order: 9
difficulty: medium
choices: [60, 61, 63, 64, 80]
answer: B
verify: "(() => { const n = 20; const edges = new Set(); range(0, n - 1).forEach((x) => { edges.add(`h${x}top`); edges.add(`h${x}bottom`); edges.add(`v${x}`); edges.add(`v${x + 1}`); }); return edges.size; })()"
---

Toothpicks are used to build a row of squares that share sides. One square takes 4 toothpicks, two squares take 7, and three squares take 10. How many toothpicks does a row of 20 squares take?

## Hint

Sketch it. Each new square shares one side with the square before it. How many new toothpicks does it need?

## Solution

**Step 1.** The first square takes 4 toothpicks.

**Step 2.** Each new square shares a side with the one before it, so it needs only 3 more toothpicks.

**Step 3.** After the first square, there are 19 more squares:

$$4 + 19 \times 3 = 61$$

**Answer: (B) 61**
