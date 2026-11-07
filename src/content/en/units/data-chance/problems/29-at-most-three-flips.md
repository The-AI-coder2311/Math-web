---
order: 29
difficulty: hard
lesson: 04-expected-value
choices: ["$\\frac{3}{2}$","$\\frac{7}{4}$","$2$","$3$"]
answer: B
mistakes:
  A: "That stops at 2 flips. The game can go to a third flip."
  C: "That's the average wait with no limit. Here, you stop at 3 flips at the most."
  D: "That's the longest the game can last, not the average."
verify: "fraction(1 * 2 + 2 * 1 + 3 * 1, 4)"
---

You flip a coin until you get heads, or until you've flipped 3 times, whichever comes first. What is the expected number of flips?

## Hint

The game lasts 1, 2, or 3 flips. What's the chance of each?

## Hint 2

The chances are $\frac{1}{2}$, $\frac{1}{4}$, and $\frac{1}{4}$.

## Solution

One flip has a chance of $\frac{1}{2}$, and two flips has a chance of $\frac{1}{4}$. Three flips happens whenever the first two are tails, which has a chance of $\frac{1}{4}$. So the expected number is $\frac{1}{2} + \frac{2}{4} + \frac{3}{4} = \frac{7}{4}$.

**Answer: (B) $\frac{7}{4}$**
