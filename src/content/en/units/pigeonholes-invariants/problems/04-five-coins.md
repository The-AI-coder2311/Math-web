---
order: 4
difficulty: easy
lesson: 02-parity-and-invariants
choices: ["Yes, in 2 moves","Yes, in 3 moves","Yes, in 5 moves","No, never"]
answer: D
mistakes:
  A: "Each move flips 2 coins, so 2 moves flip at most 4 coins. Think about odd and even too."
  B: "Try it. You'll always have an odd number of heads, no matter what you flip."
  C: "Track the number of heads. Is it odd or even after each move?"
verify: "(() => { const seen = new Set([5]); const go = (h) => { for (const [next, ok] of [[h - 2, h >= 2], [h, h >= 1 && h <= 4], [h + 2, h <= 3]]) { if (ok && !seen.has(next)) { seen.add(next); go(next); } } }; go(5); return seen.has(0) ? 'Yes' : 'No, never'; })()"
---

Five coins are all showing heads. In each move, you flip exactly 2 coins. Can you make all five show tails?

## Hint

How does one move change the number of heads?

## Hint 2

It changes by 2, by 0, or by $-2$. So is the number of heads always odd, or always even?

## Solution

Each move changes the number of heads by an even amount. It starts at 5, so it's always odd. All tails would mean 0 heads, which is even. So it can never happen.

**Answer: (D) No, never**
