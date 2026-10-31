---
order: 7
difficulty: medium
choices: ['$\frac{19}{40}$', '$\frac{1}{2}$', '$\frac{4}{9}$', '$\frac{3}{5}$', '$\frac{19}{20}$']
answer: A
verify: "fraction((20 * 3) / 4 + (20 * 1) / 5, 40)"
---

You flip a fair coin. If it lands heads, you draw a marble from Bag A, which has 3 red and 1 blue marble. If it lands tails, you draw from Bag B, which has 1 red and 4 blue marbles. What is the probability that you draw a red marble?

## Hint

There are two paths to a red marble. Multiply along each path, and then add the two paths.

## Solution

**Step 1.** Heads and then red: $\frac{1}{2} \times \frac{3}{4} = \frac{3}{8}$.

**Step 2.** Tails and then red: $\frac{1}{2} \times \frac{1}{5} = \frac{1}{10}$.

**Step 3.** Add the paths, using 40 as the common bottom number:

$$\frac{3}{8} + \frac{1}{10} = \frac{15}{40} + \frac{4}{40} = \frac{19}{40}$$

**Answer: (A) $\frac{19}{40}$**
