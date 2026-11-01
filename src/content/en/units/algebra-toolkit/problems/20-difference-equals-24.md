---
order: 20
difficulty: hard
lesson: 01-difference-of-squares
choices: ["1","2","3","4","8"]
answer: B
mistakes:
  A: "That misses a pair. Try $x + y = 6$ and $x - y = 4$."
  C: "That includes a pair like 8 and 3, where one is odd and one is even. That gives a fraction."
  D: "That counts all of the factor pairs. Only those with both factors even work."
  E: "That's the number of factors of 24. Pairs with both factors even are what count."
verify: "product(range(1, 30), range(1, 30)).filter(([x, y]) => x * x - y * y === 24).length"
---

How many pairs of positive whole numbers $(x, y)$ satisfy $x^2 - y^2 = 24$?

## Hint

Factor it. What can you say about $x + y$ and $x - y$? Are they both even, or both odd?

## Hint 2

They're either both even or both odd, since they differ by $2y$. Their product is 24, which is even.

## Solution

**Step 1.** $(x + y)(x - y) = 24$. Both factors must be even, since they differ by an even number and their product is even.

**Step 2.** The even pairs are 12 and 2, and 6 and 4.

**Step 3.** These give $(7, 5)$ and $(5, 1)$. So there are 2 pairs.

**Answer: (B) 2**
