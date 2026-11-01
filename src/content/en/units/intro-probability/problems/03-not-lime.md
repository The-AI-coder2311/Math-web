---
order: 3
difficulty: easy
lesson: 01-count-what-you-want
choices: ["$\\frac{2}{5}$","$\\frac{1}{3}$","$\\frac{3}{5}$","$\\frac{2}{3}$","$\\frac{4}{5}$"]
answer: C
mistakes:
  A: "That's the chance that it **is** lime. You want the opposite."
  B: "That's the chance of one flavor if all of the flavors were equally common. Count candies instead."
  D: "That treats 2 of the 3 flavors as equally likely. Count candies instead: 9 out of 15."
  E: "That would be 12 out of 15. Only 9 candies aren't lime."
verify: "fraction(4 + 5, 4 + 6 + 5)"
---

A jar holds 4 cherry candies, 6 lime candies, and 5 grape candies. You pick one without looking. What is the probability that it is **not** lime?

## Hint

How many candies are there in all, and how many of them aren't lime?

## Hint 2

There are 15 candies, and 9 of them aren't lime. Simplify the fraction.

## Solution

**Step 1.** There are $4 + 6 + 5 = 15$ candies.

**Step 2.** The ones that aren't lime are the 4 cherry and the 5 grape, which makes $4 + 5 = 9$.

**Step 3.** The probability is $\frac{9}{15}$, which simplifies to $\frac{3}{5}$.

**Answer: (C) $\frac{3}{5}$**
