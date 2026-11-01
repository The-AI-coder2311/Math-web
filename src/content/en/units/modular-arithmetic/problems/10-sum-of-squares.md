---
order: 18
difficulty: hard
lesson: 01-mod-notation
choices: ["64","80","100","144","160"]
answer: D
mistakes:
  A: "That's only one of the mixed cases. There are two, plus the case with both remainders 0."
  B: "That's one mixed case plus the both-0 case. There are two mixed cases."
  C: "Use the counts: 4 numbers give 0, 8 give 1, and 8 give 4."
  E: "Use the counts: 4 numbers give 0, 8 give 1, and 8 give 4."
verify: "product(range(1, 20), range(1, 20)).filter(([a, b]) => (a * a + b * b) % 5 === 0).length"
---

How many pairs of whole numbers $(a, b)$, each from 1 to 20, make $a^2 + b^2$ divisible by 5? Count $(1, 2)$ and $(2, 1)$ as different pairs.

## Hint

Which remainders can a perfect square leave when divided by 5? Which combinations of those remainders add up to a multiple of 5?

## Hint 2

Squares leave 0, 1, or 4. The pairs that add up to a multiple of 5 are 0 and 0, 1 and 4, and 4 and 1.

## Solution

**Step 1.** Find what squares leave when divided by 5. The number $a$ has one of 5 remainders:

| Remainder of $a$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Remainder of $a^2$ | 0 | 1 | 4 | 4 | 1 |

**Step 2.** From 1 to 20, each remainder of $a$ appears exactly 4 times. So 4 numbers give a square with remainder 0, 8 numbers give remainder 1, and 8 numbers give remainder 4.

**Step 3.** The two squares add up to a multiple of 5 in three ways:

- Both have remainder 0: $4 \times 4 = 16$ pairs.
- The first has remainder 1 and the second has remainder 4: $8 \times 8 = 64$ pairs.
- The first has remainder 4 and the second has remainder 1: $8 \times 8 = 64$ pairs.

**Step 4.** The total is $16 + 64 + 64 = 144$.

**Answer: (D) 144**
