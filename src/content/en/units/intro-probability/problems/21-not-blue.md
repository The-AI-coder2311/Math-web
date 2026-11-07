---
order: 21
difficulty: easy
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{5}$","$\\frac{3}{10}$","$\\frac{1}{2}$","$\\frac{7}{10}$"]
answer: C
mistakes:
  A: "That's the chance of green. Count the marbles that aren't blue."
  B: "That's the chance of red. Count the marbles that aren't blue."
  D: "That leaves out the wrong color. Five of the 10 marbles aren't blue."
verify: "fraction(3 + 2, 3 + 5 + 2)"
---

A bag holds 3 red, 5 blue, and 2 green marbles. You pick one at random. What is the probability that it isn't blue?

## Hint

How many marbles are there in all?

## Hint 2

There are 10 marbles, and 5 of them aren't blue.

## Solution

There are 10 marbles, and $3 + 2 = 5$ of them aren't blue. So the probability is $\frac{5}{10} = \frac{1}{2}$.

**Answer: (C) $\frac{1}{2}$**
