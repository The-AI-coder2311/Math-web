---
order: 16
difficulty: hard
lesson: 04-add-one-and-telescoping
choices: ["2","3","4","5","8"]
answer: B
mistakes:
  A: "That misses a pair. The factor pairs of 24 with both at least 2 are 2 and 12, 3 and 8, and 4 and 6."
  C: "That includes 1 and 24, which would make $x = 0$. $x$ has to be positive."
  D: "Only 3 factor pairs have both factors at least 2."
  E: "That's the number of factors of 24. Pairs are what count."
verify: "product(range(1, 23), range(1, 23)).filter(([x, y]) => x <= y && x * y + x + y === 23).length"
---

How many pairs of positive whole numbers $(x, y)$, with $x \le y$, satisfy $xy + x + y = 23$?

## Hint

Add 1 to both sides. Can you factor the left side now?

## Hint 2

$(x + 1)(y + 1) = 24$, with both factors at least 2.

## Solution

**Step 1.** Add 1 to both sides, and factor:

$$(x + 1)(y + 1) = 24$$

**Step 2.** Since $x$ and $y$ are positive, both factors are at least 2. And since $x \le y$, the first factor is the smaller one. The factor pairs of 24 that work are:

| $x + 1$ and $y + 1$ | $x$ and $y$ |
|---|---|
| 2 and 12 | 1 and 11 |
| 3 and 8 | 2 and 7 |
| 4 and 6 | 3 and 5 |

We skip 1 and 24, because that would make $x = 0$.

**Step 3.** That's 3 pairs.

**Answer: (B) 3**
