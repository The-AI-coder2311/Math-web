---
title: "Counting Step by Step"
summary: Count huge numbers of possibilities by asking how the last step could have happened, and building up from small cases. This is called recursion.
minutes: 10
---

You climb a staircase with 10 steps, taking either 1 or 2 steps at a time. How many different ways can you get to the top? There are lots of them, with many different mixes of small and big steps, and it isn't clear how to organize a list. But try one simple question: **what was your last move?** That single question gives you the answer almost for free.

> **The big idea:** Count a big case by asking how it could have ended. That connects it to **smaller versions of the same problem**. Then start from the smallest cases, and build upward. This is called **recursion**.

## Why looking at the last move works

To reach step 10, your last move came from one of two places:

- You were on step 9, and took 1 step.
- You were on step 8, and took 2 steps.

These are the only possibilities, and they can't overlap, since the last move differs. So:

$$\text{ways to step } 10 = \text{ways to step } 9 + \text{ways to step } 8$$

The same is true for every step. Now we only need to get started. There's 1 way to reach step 1. There are 2 ways to reach step 2: 1 then 1, or a single 2.

| Step | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ways | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 |

There are 89 ways. Those are the famous **Fibonacci numbers**. **Check a small case by listing:** Step 3 can be reached by 1-1-1, 1-2, or 2-1. That's 3 ways, and it matches the table.

## Example 1: Three kinds of moves

Suppose you can take 1, 2, or 3 steps at a time. How many ways are there to reach step 6?

**What was the last move?** It could have been 1, 2, or 3 steps, so each number is the sum of the **three** before it.

**What are the starting values?** Step 1 has 1 way, step 2 has 2 ways, and step 3 has 4 ways (1-1-1, 1-2, 2-1, and 3).

| Step | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Ways | 1 | 2 | 4 | 7 | 13 | 24 |

For example, step 4 has $1 + 2 + 4 = 7$ ways. So there are 24 ways to reach step 6.

Try this one. With moves of 1 or 2 steps, how many ways are there to climb 7 steps?

<details class="check"><summary>Show the answer</summary>

The table above shows 21 ways for step 7. If you built it yourself: 1, 2, 3, 5, 8, 13, 21.

</details>

## Example 2: Tiling a strip

How many ways can you cover a 2 by 8 strip using 1 by 2 dominoes? They can go sideways or upright.

**What's the last piece?** Look at the right end of the strip. There are only two options.

- One upright domino covers the last column. That leaves a strip of length 7.
- Two sideways dominoes cover the last 2 columns. That leaves a strip of length 6.

So each length is the sum of the two lengths before it. A strip of length 1 has 1 way, and a strip of length 2 has 2 ways. So it's the Fibonacci numbers again: 1, 2, 3, 5, 8, 13, 21, 34. There are 34 ways.

Isn't it surprising that dominoes and stairs give the same numbers? It's because they have the same structure: pieces of size 1 and pieces of size 2.

## Example 3: Strings with a rule

How many strings of 6 letters use only A and B, with no two As in a row?

**What's the last letter?** Split it into two cases.

- If it ends in B, the first 5 letters can be any valid string of length 5.
- If it ends in A, the letter before that has to be B, so the string ends in BA. The first 4 letters can be any valid string of length 4.

**What are the starting values?** Length 1 has 2 strings (A and B). Length 2 has 3 strings (AB, BA, and BB).

So the counts are 2, 3, 5, 8, 13, 21, and there are 21 strings of length 6. Compare that with $2^6 = 64$, the number of all strings of that length.

## Example 4: A contest-style question

A frog sits on lily pad 1, in a row of pads numbered 1 to 8. It hops forward by 1 or 2 pads at a time. Pad 5 is broken, so the frog can't land on it. How many ways can the frog get to pad 8?

**What's the plan?** Build a table. Pad 5 gets 0 ways, since nothing can land there. Every other pad adds the two pads before it.

| Pad | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Ways | 1 | 1 | 2 | 3 | 0 | 3 | 3 | 6 |

Pad 6 gets $0 + 3 = 3$, and pad 7 gets $3 + 0 = 3$. Pad 8 gets $3 + 3 = 6$. So there are **6** ways.

This shows the strength of recursion: adding a rule like a broken pad only changes one entry in the table.

<section data-box="traps">

## Common traps

**Wrong starting values.** With 1 or 2 steps, reaching step 2 has 2 ways, not 1. Check the first couple of values by listing them. An error there ruins the entire table.

**Off by one in the position.** In Example 4, the frog starts on pad 1, so pad 2 has 1 way, not 2. If you treat the start as if it were step 1 of a staircase, you shift everything over.

**Missing a case for the end.** In Example 3, a string ending in A forces a B before it. If you forget that, then you'd add length 5 and length 5, which counts strings with AA in them.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for stairs, tilings, hops, strings of letters with a "no two in a row" rule, or a number too large to write out a full list.

**Ask about the end:** How could the last move or the last piece have gone? Each answer gives one term in the sum.

**Time:** Two minutes. The table is quick once you have the rule.

**Eliminate with a size check:** The count of strings with a rule has to be less than the total without any rule.

</section>

<section data-box="connections">

## Connections

This uses [splitting into cases](/pathway/counting/05-split-into-cases/), and the rules are the kind you met in [Lists Built From a Rule](/pathway/sequences-series/04-recursive-and-special/). Expected value and probability states in Level 4 use the same thinking.

</section>

<section data-box="summary">

## Remember this

- Ask how the last step could have happened.
- Each way of ending gives a smaller problem to add.
- Find the starting values by listing them.
- Build a table upward.
- Blocked positions get 0.

</section>
