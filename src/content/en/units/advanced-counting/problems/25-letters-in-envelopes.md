---
order: 25
difficulty: medium
lesson: 05-linearity-of-expectation
choices: ["0","$\\frac{1}{4}$","$\\frac{1}{2}$","1","2"]
answer: D
mistakes:
  A: "It's possible for no letter to match, but sometimes they do. So the average is above 0."
  B: "That's the chance for one letter. There are 4 letters, so add up all four."
  C: "That adds only 2 of the 4 letters. Use all of them."
  E: "That's more than the average. Each letter has a $\\frac{1}{4}$ chance, and there are 4 letters."
verify: "sum(perms([0, 1, 2, 3]).map((p) => p.filter((x, i) => x === i).length)) / 24"
---

Four letters go into four matching envelopes at random, one letter in each. What is the expected number of letters in the correct envelope?

## Hint

Make one yes-or-no piece for each letter.

## Hint 2

What's the chance that one particular letter lands in its own envelope?

## Solution

Each letter has a $\frac{1}{4}$ chance of landing in its own envelope. There are 4 letters, so the expected number is $4 \times \frac{1}{4} = 1$.

**Answer: (D) 1**
