---
order: 17
difficulty: hard
lesson: 03-winning-games
choices: ["Take 4 from the pile of 11","Take 7 from the pile of 7","Take 11 from the pile of 11","Take 1 from the pile of 7","There is no winning move"]
answer: A
mistakes:
  B: "That leaves one pile of 11. Your opponent takes all of it and wins."
  C: "That leaves one pile of 7. Your opponent takes all of it and wins."
  D: "That leaves piles of 6 and 11. Your opponent can make them equal, and then you're the one in trouble."
  E: "The piles are unequal, and that gives the first player a way to take control."
verify: "(() => { const memo = {}; const win = (a, b) => { const key = a + ',' + b; if (key in memo) return memo[key]; let w = false; for (let m = 1; m <= a && !w; m++) if (!win(a - m, b)) w = true; for (let m = 1; m <= b && !w; m++) if (!win(a, b - m)) w = true; return (memo[key] = w); }; const moves = [['Take 4 from the pile of 11', 7, 7], ['Take 7 from the pile of 7', 0, 11], ['Take 11 from the pile of 11', 7, 0], ['Take 1 from the pile of 7', 6, 11]]; return moves.filter(([t, a, b]) => !win(a, b)).map(([t]) => t).join(); })()"
---

Two piles have 7 and 11 stones. On your turn, you take any number of stones, at least 1, from one pile. Whoever takes the last stone wins. What should the first player do?

## Hint

Think about two equal piles. What can the second player do when the piles match?

## Hint 2

If the piles are equal after your move, you can copy each move your opponent makes in the other pile.

## Solution

Make the piles equal, by taking 4 from the pile of 11. Now both piles have 7 stones. Whatever your opponent takes from one pile, take the same amount from the other. You'll always have a reply, so you take the last stone.

**Answer: (A) Take 4 from the pile of 11**
