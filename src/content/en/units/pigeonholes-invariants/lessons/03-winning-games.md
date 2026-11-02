---
title: "Winning Games"
summary: Work backward from the end of a game to label every position as winning or losing, find the pattern, and use it or copy your opponent to win.
minutes: 10
---

There are 21 stones on a table. You and a friend take turns removing 1, 2, or 3 stones, and whoever takes the last stone wins. Would you rather go first or second? It looks like a guessing game, but it isn't. One of you can win every single time, no matter what the other one does, and you can work out who it is in under a minute.

> **The big idea:** Work **backward** from the end. A position is **losing** if every move leads to a winning position for your opponent. A position is **winning** if **some** move leads to a losing position for your opponent. Always hand your opponent a losing position.

## Why working backward works

At the end of the game, you know who has won. So the positions right before the end are easy to judge. Each of those helps you judge the positions before them, and so on. By the time you reach the start, you know everything.

In these problems, both players play perfectly, and the same moves are open to both.

## Example 1: Build the table

Take the stones game. Label each number of stones as W, for a win for the player about to move, or L, for a loss. With 0 stones, the last stone is gone, so the player about to move has already lost.

| Stones | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| Result | L | W | W | W | L | W | W | W | L |

**Why?** From 1, 2, or 3, you can take all of the stones and win. From 4, each move leaves 3, 2, or 1, and each of those is a win for your opponent. So 4 is an L. From 5, 6, or 7, you can leave exactly 4, so each is a W. And so on.

**What's the pattern?** The losing positions are the multiples of 4.

Try one. Using this table, what should the first player do with 10 stones?

<details class="check"><summary>Show the answer</summary>

Leave a multiple of 4. Taking 2 stones leaves 8, which is a losing position for your opponent.

</details>

## Example 2: The opening game

With 21 stones, take 1, leaving 20, which is a multiple of 4. From then on, whatever your opponent takes, you take enough to make the total for that round 4. If they take 1, you take 3. If they take 3, you take 1. The count goes 20, 16, 12, 8, 4, 0, and you take the last stone.

So you'd go **first**. And if you ever start at a multiple of 4, you'd rather go second.

## Example 3: Different moves mean a new table

Now you can remove 1, 2, or 4 stones. Who wins with 20 stones?

**Don't assume the old pattern.** Build a new table:

| Stones | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Result | L | W | W | L | W | W | L | W | W | L |

**What's the pattern?** The losing positions look like multiples of 3. Why does this hold? Each allowed move, 1, 2, or 4, has a remainder of 1 or 2 when divided by 3. So from a multiple of 3, every move leaves a non-multiple. And from a non-multiple, you can always get back to a multiple.

Since 20 isn't a multiple of 3, the first player wins by taking 2, leaving 18.

## Example 4: Copy your opponent

Two piles have 6 stones each. On your turn, you take any number of stones from one pile. Whoever takes the last stone wins. Who wins?

**What's the plan?** The second player has a beautiful strategy: **copy the move in the other pile**. If your opponent takes 4 from one pile, you take 4 from the other. After each of your moves, the piles are equal, so you always have a reply. So you must take the last stone.

**What if the piles start out unequal?** Then the first player wins. With 5 and 9, take 4 from the 9, making the piles equal. Now you're the one copying.

This is called a **symmetry strategy**. Look for it when a game can be split into two matching halves.

## Example 5: A contest-style question

You can remove 1, 3, or 4 stones, and whoever takes the last stone wins. For how many starting amounts from 1 to 20 does the second player win?

**Build the table:** The second player wins exactly on the L positions.

| Stones | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Result | L | W | L | W | W | W | W | L | W | L |

**What's the pattern?** The losing positions are 0, 2, 7, and 9. Continuing the table gives 14 and 16, so the pattern repeats every 7 stones. Then comes 21, which is past our limit.

**Count them:** From 1 to 20, the losing positions are 2, 7, 9, 14, and 16. That makes **5**.

<section data-box="traps">

## Common traps

**Swapping the definitions.** A position is winning if **some** move leads to L. It's losing only if **all** moves lead to W. One good move is enough to make a W.

**Assuming a pattern too soon.** Always build at least two full rounds of a table before trusting a pattern. Changing the allowed moves can change the pattern completely.

**Missing the rule about the last stone.** If the player who takes the last stone **loses**, then the start of the table changes, and so does everything after it. With 1 stone left, you're forced to take it, so 1 is an L.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "take turns," "whoever," "wins," and "perfect play" or "a winning strategy."

**First move:** Build a W and L table up to about 10 or 12, and look for a repeating pattern. It's rare for a game of this kind not to repeat.

**Check for symmetry:** Equal piles or a board with a center often mean that you can copy your opponent.

**Time:** About two minutes. The table is fast, and it makes careless mistakes unlikely.

</section>

<section data-box="connections">

## Connections

Working backward came up in [Level 1](/pathway/logic-patterns/03-working-backwards/), and repeating patterns came up in [modular arithmetic](/pathway/modular-arithmetic/02-giant-powers/). Harder games with chance use [expected value](/pathway/data-chance/04-expected-value/).

</section>

<section data-box="summary">

## Remember this

- Work backward from the end of the game.
- W: some move leads to L. L: all moves lead to W.
- Build a table, and look for a repeating pattern.
- Your goal is always to hand your opponent an L.
- If a game has two matching halves, copy your opponent.

</section>
