---
order: 5
difficulty: medium
choices: [6, 12, 15, 18, 24]
answer: D
verify: "range(1, 40).map((b) => [b, 3 * b]).find(([b, m]) => m + 6 === 2 * (b + 6))[1]"
---

Maya is 3 times as old as her brother. In 6 years, Maya will be 2 times as old as her brother. How old is Maya now?

## Hint

Make a table with rows for each person and columns for "now" and "in 6 years." Use $b$ for her brother's age now.

## Solution

**Step 1.** Let $b$ be her brother's age now, so Maya is $3b$. In 6 years, their ages will be $b + 6$ and $3b + 6$.

**Step 2.** The story says $3b + 6 = 2(b + 6)$, which multiplies out to $3b + 6 = 2b + 12$.

**Step 3.** Subtract $2b$ and then 6 from both sides to get $b = 6$. So Maya is $3 \times 6 = 18$.

**Check:** In 6 years, they'll be 12 and 24, and 24 is 2 times 12.

**Answer: (D) 18**
