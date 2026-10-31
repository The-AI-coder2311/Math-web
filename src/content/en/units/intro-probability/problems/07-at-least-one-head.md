---
order: 7
difficulty: medium
choices: ['$\frac{1}{16}$', '$\frac{1}{4}$', '$\frac{3}{4}$', '$\frac{7}{8}$', '$\frac{15}{16}$']
answer: E
verify: "(() => { const c = [0, 1]; return fraction(product(c, c, c, c).filter((f) => sum(f) >= 1).length, 16); })()"
---

You flip 4 fair coins. What is the probability of getting at least one head?

## Hint

The words "at least one" are a clue. What's the opposite of getting at least one head?

## Solution

**Step 1.** The opposite of "at least one head" is "no heads," which means all 4 coins land on tails.

**Step 2.** The probability of all tails is:

$$\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{16}$$

**Step 3.** So the probability of at least one head is $1 - \frac{1}{16} = \frac{15}{16}$.

**Answer: (E) $\frac{15}{16}$**
