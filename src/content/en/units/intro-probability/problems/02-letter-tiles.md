---
order: 2
difficulty: easy
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{11}$","$\\frac{1}{8}$","$\\frac{2}{11}$","$\\frac{2}{9}$","$\\frac{1}{4}$"]
answer: C
mistakes:
  A: "That counts only one M. The word has 2."
  B: "That counts different letters, of which there are 8. Each tile is an outcome, and there are 11 tiles."
  D: "The word has 11 letters, not 9. Count them again."
  E: "Count the tiles and the Ms: 2 Ms out of 11 tiles."
verify: "fraction([...'MATHEMATICS'].filter((c) => c === 'M').length, 'MATHEMATICS'.length)"
---

Each letter of the word MATHEMATICS is written on its own tile, and the tiles go in a bag. You pick one tile without looking. What is the probability that it shows the letter M?

## Hint

How many tiles are in the bag? Count every letter, even the repeated ones.

## Hint 2

There are 11 tiles, and M appears twice.

## Solution

**Step 1.** The word MATHEMATICS has 11 letters, so there are 11 tiles.

**Step 2.** The letter M appears 2 times, so the probability is $\frac{2}{11}$.

**Answer: (C) $\frac{2}{11}$**
