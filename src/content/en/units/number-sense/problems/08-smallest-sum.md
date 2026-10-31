---
order: 8
difficulty: medium
choices: [16, 17, 19, 23, 32]
answer: A
verify: "Math.min(...factors(60).map((a) => a + 60 / a))"
---

Two positive whole numbers have a product of 60. What is the smallest possible value of their sum?

## Hint

List every factor pair of 60 and add each pair. Do you notice what happens to the sum as the two numbers get closer together?

## Solution

**Step 1.** List every factor pair of 60, and add each pair:

| Pair | Sum |
|---|---|
| 1 and 60 | 61 |
| 2 and 30 | 32 |
| 3 and 20 | 23 |
| 4 and 15 | 19 |
| 5 and 12 | 17 |
| 6 and 10 | 16 |

**Step 2.** The smallest sum comes from the pair that's closest together:

$$6 + 10 = 16$$

**Answer: (A) 16**
