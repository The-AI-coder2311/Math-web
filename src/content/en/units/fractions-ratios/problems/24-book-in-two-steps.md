---
order: 24
difficulty: medium
lesson: 01-equal-groups
choices: ["80","120","160","240"]
answer: B
mistakes:
  A: "That adds a fourth and a third, as if they're of the same amount. The third is of what's left."
  C: "Check it: a fourth of 160 is 40, and a third of 120 is 40, which leaves 80, not 60."
  D: "That doubles the correct answer. Half of the book is left, so 60 pages is half."
verify: "range(1, 400).find((n) => (n * 3) / 4 * (2 / 3) === 60)"
---

Sam reads $\frac{1}{4}$ of a book on Monday, and $\frac{1}{3}$ of the remaining pages on Tuesday. That leaves 60 pages. How many pages does the book have?

## Hint

Keep track of the part that's left after each day.

## Hint 2

After Monday, $\frac{3}{4}$ remains. After Tuesday, $\frac{2}{3}$ of that remains.

## Solution

The part left is $\frac{3}{4} \times \frac{2}{3} = \frac{1}{2}$. So half of the book is 60 pages, and the book has 120 pages.

**Answer: (B) 120**
