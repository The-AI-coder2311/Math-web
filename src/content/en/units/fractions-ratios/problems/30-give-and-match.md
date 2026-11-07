---
order: 30
difficulty: hard
lesson: 02-ratios-as-boxes
choices: ["40","60","80","100"]
answer: C
mistakes:
  A: "Test it: 40 cards split as 25 and 15, and giving 10 doesn't make them equal."
  B: "Test it: giving 10 cards should cut the difference to 0. Giving 10 changes the difference by 20, not 10."
  D: "Test it: 100 cards split as 62.5 and 37.5, and that isn't possible."
verify: "range(1, 200).find((n) => n % 8 === 0 && (n * 5) / 8 - 10 === (n * 3) / 8 + 10)"
---

Ana and Bea have cards in a ratio of 5 to 3. After Ana gives Bea 10 cards, they have equal numbers. How many cards do they have in all?

## Hint

Giving 10 cards changes the difference by how much?

## Hint 2

Ana loses 10 and Bea gains 10, so the difference drops by 20. The difference starts as 2 boxes.

## Solution

Ana has 2 more boxes than Bea. Giving away 10 cards shrinks the difference by 20, so 2 boxes hold 20 cards, and 1 box holds 10. There are 8 boxes in all, so there are 80 cards.

**Answer: (C) 80**
