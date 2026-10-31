---
order: 2
difficulty: easy
choices: ['$\frac{1}{11}$', '$\frac{2}{11}$', '$\frac{1}{8}$', '$\frac{1}{4}$', '$\frac{2}{9}$']
answer: B
verify: "fraction([...'MATHEMATICS'].filter((c) => c === 'M').length, 'MATHEMATICS'.length)"
---

Each letter of the word MATHEMATICS is written on its own tile, and the tiles go in a bag. You pick one tile without looking. What is the probability that it shows the letter M?

## Hint

How many tiles are in the bag? Count every letter, even the repeated ones.

## Solution

**Step 1.** The word MATHEMATICS has 11 letters, so there are 11 tiles.

**Step 2.** The letter M appears 2 times, so the probability is $\frac{2}{11}$.

**Answer: (B) $\frac{2}{11}$**
