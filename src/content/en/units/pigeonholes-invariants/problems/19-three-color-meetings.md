---
order: 19
difficulty: hard
lesson: 02-parity-and-invariants
choices: ["Yes, all red","Yes, all green","Yes, all blue","No, never"]
answer: D
mistakes:
  A: "To get all red, the green and blue counts must become equal. Check their difference mod 3."
  B: "To get all green, the red and blue counts must become equal. Check their difference mod 3."
  C: "To get all blue, the red and green counts must become equal. Check their difference mod 3."
verify: "(() => { const seen = new Set(); const go = (r, g, b) => { const key = [r, g, b].join(); if (seen.has(key)) return; seen.add(key); if (r && g) go(r - 1, g - 1, b + 2); if (r && b) go(r - 1, g + 2, b - 1); if (g && b) go(r + 2, g - 1, b - 1); }; go(4, 5, 6); return ['15,0,0', '0,15,0', '0,0,15'].some((k) => seen.has(k)) ? 'Yes' : 'No, never'; })()"
---

A box holds 4 red, 5 green, and 6 blue tokens. In each move, you remove two tokens of different colors and add two tokens of the third color. Can you ever make all 15 tokens the same color?

## Hint

Look at the difference between two of the counts, and see how a move changes it, mod 3.

## Hint 2

Each move changes a difference by 0 or by 3. So each difference keeps its remainder mod 3. What would all one color need?

## Solution

Take the difference between any two counts. If you remove one of each of those colors, it stays the same. Otherwise, one count goes up by 2 and the other goes down by 1, so the difference changes by 3. So each difference keeps its remainder mod 3.

To have all 15 tokens in one color, the other two counts must both be 0, so their difference must be 0. But the starting differences are $5 - 4 = 1$, $6 - 5 = 1$, and $6 - 4 = 2$. None is a multiple of 3, so this can never happen.

**Answer: (D) No, never**
