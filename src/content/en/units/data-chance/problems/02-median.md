---
order: 2
difficulty: easy
lesson: 02-median-tables-graphs
choices: ["5","5.5","9","7","6"]
answer: E
mistakes:
  A: "That's one of the two middle numbers. With an even count, average them."
  B: "That's close to the mean, about 5.5. The median is the middle, once sorted."
  D: "That's one of the two middle numbers. With an even count, average them."
  C: "That's the middle of the list as written. Sort the list first."
verify: "(() => { const list = [7, 3, 9, 1, 5, 8].sort((a, b) => a - b); return (list[2] + list[3]) / 2; })()"
---

What is the median of these numbers?

$$7, \ 3, \ 9, \ 1, \ 5, \ 8$$

## Hint

Put them in order first. There's an even number of values, so what do you do with the two in the middle?

## Hint 2

In order, the numbers are 1, 3, 5, 7, 8, 9. Average the two in the middle.

## Solution

**Step 1.** In order, the numbers are 1, 3, 5, 7, 8, 9.

**Step 2.** There are 6 numbers, so the middle two are 5 and 7. Their average is $(5 + 7) \div 2 = 6$.

**Answer: (E) 6**
