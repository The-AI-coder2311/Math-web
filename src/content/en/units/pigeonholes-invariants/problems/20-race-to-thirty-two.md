---
order: 20
difficulty: hard
lesson: 03-winning-games
choices: ["1","2","3","4"]
answer: B
mistakes:
  A: "That makes the count 1. Your opponent can add 1 to reach 2, which is a winning number."
  C: "That makes the count 3. Your opponent can add 4 to reach 7, which is a winning number."
  D: "That makes the count 4. Your opponent can add 3 to reach 7, which is a winning number."
verify: "(() => { const win = (n) => [1, 2, 3, 4].some((m) => n + m === 32 || (n + m < 32 && !win(n + m))); return [1, 2, 3, 4].filter((m) => !win(m)).join(); })()"
---

Two players count up from 0. On each turn, a player adds 1, 2, 3, or 4 to the count. The first player to reach exactly 32 wins. What number should the first player say first?

## Hint

Work backward from 32. What number do you want to say, so that your opponent can't reach 32?

## Hint 2

If you say 27, your opponent can only reach 28 to 31, and you can then reach 32. So what number comes before 27?

## Solution

If you say 27, your opponent reaches somewhere from 28 to 31, and you can then say 32. Working backward by 5s, the numbers you want are 27, 22, 17, 12, 7, and 2. So say 2 first, then always add enough to make each round add up to 5.

**Answer: (B) 2**
