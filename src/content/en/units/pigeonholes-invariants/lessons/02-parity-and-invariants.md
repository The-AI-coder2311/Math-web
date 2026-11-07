---
title: "Parity and Invariants"
summary: Prove that something can never happen by finding a quantity that doesn't change, using coloring, odd and even, and remainders.
minutes: 13
---

Take a chessboard, and cut off two opposite corner squares. That leaves 62 squares. Can you cover all of them with 31 dominoes, where each domino covers two squares that touch? People have tried this for hours with real dominoes. It never works, and you can prove it in about ten seconds, without placing a single domino.

> **The big idea:** To prove that something is **impossible**, find something that **never changes**, no matter which moves you make. That's called an **invariant**. If the start and the goal disagree on it, you can never get there.

## Why this is so powerful

Trying moves can never prove that a goal is impossible, since there might always be some move you didn't try. An invariant deals with every possible sequence of moves at once. Often, the invariant is only whether a count is odd or even. That's called **parity**.

## Example 1: The chessboard

**What's the invariant?** Think about the colors. Two squares that touch always have different colors, so each domino covers exactly 1 black and 1 white square. So however many dominoes you place, they cover equal numbers of black and white.

**What about the board?** A full board has 32 of each color. Opposite corners have the **same** color, so cutting them off leaves 30 of one color and 32 of the other.

Since those counts are different, covering the board is **impossible**.

Try one. A 3 by 3 board has its center square removed. Can dominoes cover the other 8 squares?

<details class="check"><summary>Show the answer</summary>

Color the board so that the corners are black. There are 5 black squares, including the center, and 4 white squares. Removing the center leaves 4 of each, so the coloring doesn't rule it out. In fact, the 8 squares form a ring, and 4 dominoes can go around it. So yes, it can be done.

</details>

That check shows something important: when the invariant agrees, it hasn't proved that a goal is possible. You still need to show how.

## Example 2: Flipping coins

Seven coins are all showing heads. In each move, you flip exactly 2 coins. Can you get all 7 to show tails?

**What changes in one move?** Look at the number of heads:

| You flip | Change in the number of heads |
|---|---|
| 2 heads | Down by 2 |
| 2 tails | Up by 2 |
| 1 head and 1 tail | No change |

**What's the invariant?** The number of heads always changes by an even amount, so it's always **odd**, since it starts at 7. The goal is 0 heads, which is even. So it's **impossible**.

## Example 3: Plus or minus

Write $1, 2, 3, \ldots, 10$ in a row, and put a plus or a minus sign in front of each. Can the total be 0?

**What's the invariant?** With all plus signs, the total is 55. Changing a number $a$ from plus to minus changes the total by $2a$, which is even. So the total always has the same parity as 55, which is odd.

Since 0 is even, the total can **never** be 0.

## Example 4: Things in a jar

A jar holds 5 red and 6 blue marbles. Repeat this step until one marble is left: take out two marbles. If they match, put in a blue marble. If they're different, put in a red marble. What color is the last marble?

**What changes?** Track the number of red marbles:

| You take out | Then add | Change in red |
|---|---|---|
| 2 red | Blue | Down by 2 |
| 2 blue | Blue | None |
| 1 red and 1 blue | Red | None |

**What's the invariant?** Red always changes by an even amount. It starts at 5, which is odd, so it's odd forever. At the end, there's one marble, and the red count has to be odd. So it must be 1, and the last marble is **red**. You know this without playing a single round.

## Example 5: A contest-style question

Which of these can't be written as the sum of two perfect squares: 13, 25, 41, 43, or 65?

**What's the plan?** Check every square mod 4. An even number squared is a multiple of 4, and an odd number squared is 1 more than a multiple of 4. For example, $6^2 = 36 = 4 \times 9$, and $7^2 = 49 = 4 \times 12 + 1$. So each square is 0 or 1 mod 4.

**Now add two squares:** The result can be 0, 1, or 2 mod 4, but **never 3**. This isn't a move-by-move invariant, but the idea is the same: a fact that holds in every case.

**Check the choices:** $43 = 4 \times 10 + 3$, so **43** is impossible. The others work: $13 = 4 + 9$, $25 = 9 + 16$, $41 = 16 + 25$, and $65 = 16 + 49$.

<section data-box="deeper">

## Going deeper

An invariant doesn't have to be odd or even. Remainders mod 3 or mod 9 work too.

**A harder one:** Take the number 123,456,789. Replace it with the sum of its digits. Keep doing this until one digit is left. What's the digit?

**Why bother with an invariant?** You could do this one by hand, but it shows an idea that works for numbers far too large to write down.

**What stays the same?** A number and its digit sum have the same remainder mod 9. So the remainder mod 9 **never changes** through the whole process.

**Find it at the start.** The digits add up to $1 + 2 + \cdots + 9 = 45$, which is a multiple of 9.

**What's left at the end?** A single digit from 1 to 9 that's a multiple of 9. That's **9**.

**A surprise:** For a number with billions of digits, you'd use this same reasoning, without doing the repeated adding.

**Another kind of idea:** A quantity that only ever goes **down**, called a monovariant, proves that a process has to stop.

Try this. Start with 1234 instead. What single digit do you end up with?

<details class="check"><summary>Show the answer</summary>

The digit sum is 10, and the digit sum of 10 is 1. So you end up with 1. Note that 1234 has a remainder of 1 mod 9.

</details>

</section>

<section data-box="traps">

## Common traps

**Thinking that an invariant proves that a goal is possible.** If the start and the goal agree, you've learned nothing. You still need a sequence of moves.

**Tracking the wrong quantity.** If the total keeps changing in odd ways, try a different quantity: a color count, a remainder, or a difference. Make a table of what each kind of move does.

**Forgetting a kind of move.** In the jar, there are three kinds of moves. If you skip one, you might choose an invariant that isn't really invariant.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "can you ever," "is it possible," "repeat this until," or moves that can happen in any order.

**First try:** Make a small table of what each kind of move does to a count. Check whether the count stays odd or even.

**On a grid:** Color it like a chessboard. For odd tiles, try three colors.

**On a sum or an equation:** Check it mod 2, mod 3, and mod 4. Squares are especially limited.

**Time:** About two minutes. If the process seems too long to finish, that's a sign that an invariant exists.

</section>

<section data-box="connections">

## Connections

This builds on [even and odd reasoning](/pathway/logic-patterns/04-logic-tables-pigeonholes/) from Level 1, and on [modular arithmetic](/pathway/modular-arithmetic/01-mod-notation/). Next, you'll use the same style of thinking to [win games](/pathway/pigeonholes-invariants/03-winning-games/).

</section>

<section data-box="summary">

## Remember this

- An invariant is something no move can change.
- If the start and the goal disagree on it, the goal is impossible.
- If they agree, you still have to show how.
- Try parity first, then colors, then remainders.
- Squares are only 0 or 1 mod 4.

</section>
