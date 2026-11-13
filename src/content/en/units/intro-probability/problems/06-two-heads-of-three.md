---
order: 7
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{8}$","$\\frac{3}{16}$","$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{3}{8}$"]
answer: E
mistakes:
  A: "That's the chance of one specific order, like HHT. Three orders work."
  B: "The 3 on top is right, but 3 coins have $2 \\times 2 \\times 2 = 8$ outcomes, not 16."
  C: "That counts only 2 orders. Three orders work."
  D: "That treats the numbers of heads as equally likely. List all 8 outcomes."
verify: "fraction(product([0, 1], [0, 1], [0, 1]).filter((f) => sum(f) === 2).length, 8)"
---

You flip 3 fair coins. What is the probability of getting exactly 2 heads?

## Hint

List every outcome, such as HHT and HTH. How many are there in all?

## Hint 2

There are 8 outcomes. The ones you want are HHT, HTH, and THH.

## Solution

**Step 1.** Each coin has 2 outcomes, so there are $2 \times 2 \times 2 = 8$ equally likely outcomes.

**Step 2.** The ones with exactly 2 heads are HHT, HTH, and THH, which makes 3 outcomes.

**Step 3.** The probability is $\frac{3}{8}$.

**Answer: (E) $\frac{3}{8}$**
