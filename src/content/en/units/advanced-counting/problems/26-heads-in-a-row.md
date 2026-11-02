---
order: 26
difficulty: hard
lesson: 05-linearity-of-expectation
choices: ["1","$\\frac{5}{4}$","$\\frac{3}{2}$","2","3"]
answer: B
mistakes:
  A: "That has 4 pairs of neighbors. Six flips have 5."
  C: "That has 6 pairs of neighbors. Six flips in a row have 5."
  D: "Count the pairs again, and remember that each pair has a chance of $\\frac{1}{4}$."
  E: "That's the expected number of heads. The question asks about pairs of heads in a row."
verify: "fraction(sum(product(...Array(6).fill([0, 1])).map((w) => w.slice(1).filter((x, i) => x === 1 && w[i] === 1).length)), 64)"
---

A fair coin is flipped 6 times. Count each pair of neighboring flips that are both heads, so that HHH counts as 2 pairs. What is the expected number of such pairs?

## Hint

How many pairs of neighboring flips are there in 6 flips?

## Hint 2

There are 5 pairs. What's the chance that one pair is both heads?

## Solution

There are 5 pairs of neighboring flips. Each pair is both heads with a chance of $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. These pieces depend on each other, but expected values still add up. So the expected number is $5 \times \frac{1}{4} = \frac{5}{4}$.

**Answer: (B) $\frac{5}{4}$**
