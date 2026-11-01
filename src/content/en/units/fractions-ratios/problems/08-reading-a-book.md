---
order: 9
difficulty: medium
lesson: 01-equal-groups
choices: ["80","90","160","120","240"]
answer: D
mistakes:
  A: "That treats 60 as $\\frac{3}{4}$ of the book, which skips Tuesday. After both days, half of the book is left."
  B: "That's how many pages were left after Monday when the book has 120 pages."
  C: "Check by running it forward. From 160 pages, you'd have 80 left, not 60."
  E: "That doubles too many times. The 60 pages are half of the book, so double once."
verify: "range(1, 500).find((n) => n - n / 4 - (n - n / 4) / 3 === 60)"
---

Priya reads $\frac{1}{4}$ of a book on Monday. On Tuesday, she reads $\frac{1}{3}$ of the pages that are left. She now has 60 pages still to read. How many pages does the book have?

## Hint

Careful: Tuesday's fraction is a fraction of what was left, not of the whole book. What fraction of the whole book is left after Monday?

## Hint 2

After Monday, $\frac{3}{4}$ is left. After Tuesday, $\frac{2}{3}$ of that is left, which is half of the book.

## Solution

**Step 1.** After Monday, $\frac{3}{4}$ of the book is left.

**Step 2.** On Tuesday, she reads $\frac{1}{3}$ of what's left, so $\frac{2}{3}$ of it remains. That's $\frac{2}{3}$ of $\frac{3}{4}$ of the book:

$$\frac{2}{3} \times \frac{3}{4} = \frac{1}{2}$$

**Step 3.** So the 60 pages still to read are half of the book. The whole book has $2 \times 60 = 120$ pages.

**Check:** On Monday, she reads 30 pages, leaving 90. On Tuesday, she reads a third of 90, which is 30, leaving 60.

**Answer: (D) 120**
