---
order: 29
difficulty: hard
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{5}$","$\\frac{2}{5}$","$\\frac{1}{2}$","$\\frac{3}{5}$"]
answer: B
mistakes:
  A: "That's the chance for one particular draw. Two of the draws are even."
  C: "There are 5 positions, and only 2 of them are even."
  D: "That's the chance that blue comes on an odd draw."
verify: "fraction(range(1, 5).filter((p) => p % 2 === 0).length, 5)"
---

A bag holds 4 red marbles and 1 blue marble. You draw marbles one at a time, without replacement, until you get the blue one. What is the probability that the blue marble comes on an even-numbered draw?

## Hint

Imagine laying all 5 marbles in a random line. Where can the blue one be?

## Hint 2

The blue marble is equally likely to be in any of the 5 spots.

## Solution

Picture the 5 marbles in a random line. The blue one is equally likely to be in any of the 5 spots. Spots 2 and 4 are the even ones, so the probability is $\frac{2}{5}$.

**Answer: (B) $\frac{2}{5}$**
