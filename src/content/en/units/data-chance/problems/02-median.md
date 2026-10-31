---
order: 2
difficulty: easy
choices: [5, 5.5, 6, 7, 9]
answer: C
verify: "(() => { const list = [7, 3, 9, 1, 5, 8].sort((a, b) => a - b); return (list[2] + list[3]) / 2; })()"
---

What is the median of these numbers?

$$7, \ 3, \ 9, \ 1, \ 5, \ 8$$

## Hint

Put them in order first. There's an even number of values, so what do you do with the two in the middle?

## Solution

**Step 1.** In order, the numbers are 1, 3, 5, 7, 8, 9.

**Step 2.** There are 6 numbers, so the middle two are 5 and 7. Their average is $(5 + 7) \div 2 = 6$.

**Answer: (C) 6**
