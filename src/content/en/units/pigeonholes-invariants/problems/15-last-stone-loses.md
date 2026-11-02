---
order: 15
difficulty: medium
lesson: 03-winning-games
choices: ["10","11","12","13","14"]
answer: D
mistakes:
  A: "From 10, you can take 1 and leave 9, which is a losing position for your opponent."
  B: "From 11, you can take 2 and leave 9, which is a losing position for your opponent."
  C: "A multiple of 4 loses when the last stone wins. This game has the opposite rule, so the table shifts."
  E: "From 14, you can take 1 and leave 13, which is a losing position for your opponent."
verify: "(() => { const win = (n) => n > 0 && (n === 1 ? false : [1, 2, 3].some((m) => m < n && !win(n - m))); return [10, 11, 12, 13, 14].filter((n) => !win(n)).join(); })()"
---

Two players take turns removing 1, 2, or 3 stones from a pile. This time, the player who takes the **last** stone **loses**. For which starting pile does the first player lose if both play perfectly?

## Hint

With 1 stone left, you must take it, so you lose. Build the table starting there.

## Hint 2

The losing positions are 1, then 5. What's the pattern?

## Solution

With 1 stone, you must take it and lose. From 2, 3, or 4, you can leave 1, so you win. From 5, each move leaves 4, 3, or 2, so you lose. The losing positions are 1, 5, 9, 13, and so on. Of the choices, only 13 is one of those.

**Answer: (D) 13**
