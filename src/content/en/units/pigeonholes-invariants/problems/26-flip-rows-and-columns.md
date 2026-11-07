---
order: 26
difficulty: medium
lesson: 02-parity-and-invariants
choices: ["Yes, in 2 moves","Yes, in 3 moves","No, never"]
answer: C
mistakes:
  A: "Each move flips exactly 2 squares. Think about the number of black squares."
  B: "Each move flips exactly 2 squares. So is the number of black squares always odd?"
verify: "(() => { const flips = [[0, 1], [2, 3], [0, 2], [1, 3]]; const seen = new Set(); const go = (w) => { const key = w.join(); if (seen.has(key)) return; seen.add(key); for (const [a, b] of flips) { const n = [...w]; n[a] ^= 1; n[b] ^= 1; go(n); } }; go([1, 0, 0, 0]); return seen.has('0,0,0,0') ? 'Yes' : 'No, never'; })()"
---

A 2 by 2 grid has one black square and three white squares. In each move, you flip the colors of a whole row or a whole column. Can you make all four squares white?

## Hint

How many squares does each move flip?

## Hint 2

Each move flips 2 squares. So what happens to the number of black squares?

## Solution

Each move flips 2 squares, so the number of black squares changes by $-2$, 0, or 2. It starts at 1, so it stays odd. All white would mean 0 black squares, which is even. So it can never happen.

**Answer: (C) No, never**
