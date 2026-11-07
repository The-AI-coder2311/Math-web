---
order: 27
difficulty: medium
lesson: 01-difference-of-squares
choices: ["1","2","3","4"]
answer: B
mistakes:
  A: "The factor pair 1 and 33 works, and so does another one."
  C: "Check the factor pairs of 33: there are only two, since $33 = 3 \\times 11$."
  D: "That counts the numbers 1, 3, 11, and 33. Each pair of factors gives one solution."
verify: "product(range(1, 40), range(1, 40)).filter(([a, b]) => a * a - b * b === 33).length"
---

How many pairs of positive whole numbers $(a, b)$ have $a^2 - b^2 = 33$?

## Hint

Factor the left side.

## Hint 2

$(a - b)(a + b) = 33$. What are the factor pairs of 33?

## Solution

We need $(a - b)(a + b) = 33$. The factor pairs are 1 and 33, which gives $a = 17$ and $b = 16$, and 3 and 11, which gives $a = 7$ and $b = 4$. So there are 2 pairs.

**Answer: (B) 2**
