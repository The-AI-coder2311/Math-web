---
order: 3
difficulty: easy
lesson: 02-stars-and-bars
choices: ["4","5","6","10","32"]
answer: C
mistakes:
  A: "That leaves out the cases where one kid gets all of the cookies. Those are allowed."
  B: "That leaves out the case where the first kid gets 0. Getting none is allowed."
  D: "That's $\\binom{5}{2}$. With 2 kids, you need only 1 bar, and there are 6 symbols."
  E: "That's $2^5$, which would be right if the cookies were all different. These are identical."
verify: "range(0, 5).length"
---

In how many ways can 5 identical cookies be shared between 2 kids, if a kid is allowed to get none?

## Hint

If the first kid gets 0 cookies, how many does the second kid get? How many values can the first kid's number take?

## Hint 2

The first kid can get 0, 1, 2, 3, 4, or 5 cookies.

## Solution

The first kid can get any number from 0 to 5, and the second kid gets the rest. That's 6 ways.

Using stars and bars, 5 stars and 1 bar give $\binom{6}{1} = 6$.

**Answer: (C) 6**
