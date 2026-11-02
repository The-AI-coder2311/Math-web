---
order: 16
difficulty: hard
lesson: 03-winning-games
choices: ["7","8","9","10","15"]
answer: C
mistakes:
  A: "Keep going to the end of the range. The losing positions continue through 28 and 30."
  B: "Check the last two. Both 28 and 30 are losing positions."
  D: "Don't count 0, since the range starts at 1."
  E: "That's half of the range. The pattern gives 2 losing positions in every 7."
verify: "(() => { const win = (n) => n > 0 && [1, 3, 4].some((m) => m <= n && !win(n - m)); return range(1, 30).filter((n) => !win(n)).length; })()"
---

Two players take turns removing 1, 3, or 4 stones from a pile, and whoever takes the last stone wins. For how many starting amounts from 1 to 30 does the second player win?

## Hint

The second player wins exactly when the starting amount is a losing position. Build a table up to 16 or so.

## Hint 2

The losing positions start 0, 2, 7, 9, 14, 16. So the pattern repeats every 7.

## Solution

Building the table gives losing positions at 0, 2, 7, 9, 14, 16, and so on, repeating every 7. From 1 to 30, they are 2, 7, 9, 14, 16, 21, 23, 28, and 30. That makes 9.

**Answer: (C) 9**
