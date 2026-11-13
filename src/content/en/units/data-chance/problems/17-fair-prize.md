---
order: 15
difficulty: medium
lesson: 04-expected-value
choices: ["3","6","9","12","18"]
answer: E
mistakes:
  A: "A prize of 3 dollars only returns what you paid, and you win only 1 roll in 6."
  B: "That would make the expected win only \\$1."
  C: "That would make the expected win only \\$1.50."
  D: "That would make the expected win only \\$2."
verify: "range(1, 100).find((p) => p / 6 === 3)"
---

You pay \$3 to roll a die. If you roll a 6, you win a prize. Otherwise, you win nothing. What should the prize be, in dollars, to make the game fair?

## Hint

In a fair game, the expected win equals the cost.

## Hint 2

The expected win is $\frac{1}{6}$ of the prize.

## Solution

The expected win is $\frac{1}{6}$ of the prize, and it has to equal 3. So the prize is $3 \times 6 = 18$ dollars.

**Answer: (E) 18**
