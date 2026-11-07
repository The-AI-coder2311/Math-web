---
order: 30
difficulty: hard
lesson: 01-place-value
choices: ["30","39","45","69"]
answer: B
mistakes:
  A: "That's how many two-digit pages there are. Add the 9 one-digit pages."
  C: "That counts all pages as having about 1.5 digits. Split them by size."
  D: "That's the number of digits, not pages."
verify: "range(1, 99).find((n) => sum(range(1, n).map((k) => String(k).length)) === 69)"
---

A book's pages are numbered starting from 1, and the page numbers use 69 digits in all. How many pages does the book have?

## Hint

How many digits do pages 1 to 9 use?

## Hint 2

They use 9 digits, which leaves 60 digits for two-digit pages.

## Solution

Pages 1 to 9 use 9 digits, which leaves $69 - 9 = 60$ digits. Each two-digit page uses 2 digits, so that's 30 more pages. The book has $9 + 30 = 39$ pages.

**Answer: (B) 39**
