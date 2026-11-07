---
title: "Arrangements With Repeats"
summary: Count arrangements of things that repeat by dividing out swaps, and see how this connects to choosing spots.
minutes: 11
---

How many ways can you arrange the letters in the word MISSISSIPPI? With 11 letters, there are 39,916,800 ways to arrange them if they're all different. But they aren't all different. Swapping two of the Ss doesn't change the word. It turns out that the true answer is far smaller, and you can find it in about a minute.

> **The big idea:** Arrange everything as if it were all different. Then **divide by the number of ways to swap each repeated thing**, because those swaps don't make anything new.

## Why dividing works

Let's list a tiny case. How many arrangements does the word TOO have? Pretend for a moment that the two Os are different, O1 and O2. There are $3! = 6$ arrangements:

| With labels | Real word |
|---|---|
| T O1 O2 | TOO |
| T O2 O1 | TOO |
| O1 T O2 | OTO |
| O2 T O1 | OTO |
| O1 O2 T | OOT |
| O2 O1 T | OOT |

Each real word appears exactly 2 times, since the two Os can swap. So the real number of words is $6 \div 2 = 3$.

**In general**, for $n$ items with one kind repeated $a$ times and another repeated $b$ times, the number of arrangements is:

$$\frac{n!}{a! \times b!}$$

Each repeated kind gets its own factorial on the bottom, because $a$ copies can be swapped in $a!$ ways.

## Example 1: A longer word

How many ways can you arrange the letters of LEVEL?

**What do we know?** There are 5 letters, with 2 Ls and 2 Es. So:

$$\frac{5!}{2! \times 2!} = \frac{120}{4} = 30$$

Try this one yourself. How many ways can you arrange the letters of BANANA?

<details class="check"><summary>Show the answer</summary>

BANANA has 6 letters, with 3 As and 2 Ns. So $\frac{6!}{3! \times 2!} = \frac{720}{12} = 60$.

</details>

## Example 2: Mississippi

MISSISSIPPI has 11 letters: 1 M, 4 Is, 4 Ss, and 2 Ps.

$$\frac{11!}{4! \times 4! \times 2!}$$

Don't multiply it all out. Cancel first. Since $11! = 39{,}916{,}800$ and the bottom is $24 \times 24 \times 2 = 1152$, the answer is 34,650. On a contest, you'd cancel as you go, and the answer choices would help.

## Example 3: Choosing spots

A row of 7 flags has 4 red ones and 3 blue ones. How many different patterns can it make?

**Using repeats:** $\frac{7!}{4! \times 3!} = 35$.

**A second way to think:** A pattern is fully decided by **which 3 of the 7 spots are blue**. So we're choosing 3 spots out of 7: $\binom{7}{3} = 35$.

Those are the same calculation! That's a big idea: arranging two kinds of things is the same as choosing the spots for one of them.

The same idea explains something else. A coin flipped 7 times gets exactly 3 heads in $\binom{7}{3} = 35$ ways, since the question is which 3 of the 7 flips are heads.

## Example 4: With a rule

How many arrangements of the letters in LEVEL start with L?

**Which rule comes first?** Put an L in the first spot. It doesn't matter which L, because they look the same.

**What's left?** The 4 remaining letters are E, V, E, L, with 2 Es:

$$\frac{4!}{2!} = \frac{24}{2} = 12$$

So 12 of the 30 arrangements start with L. Does that make sense? 2 of the 5 letters are Ls, and $\frac{2}{5}$ of 30 is 12. Great, it matches.

## Example 5: A contest-style question

How many different 5-digit numbers can be made by arranging the digits 0, 0, 1, 2, 3? A number can't start with 0.

**What's the total?** Ignoring the rule, there are $\frac{5!}{2!} = 60$ arrangements.

**What's the opposite?** Count the ones that start with 0. Put a 0 first, and arrange the remaining 0, 1, 2, 3 in $4! = 24$ ways. These are all different, since only one 0 is left.

$$60 - 24 = 36$$

**Check it with a fraction:** Each digit is equally likely to come first. Since 2 of the 5 digits are 0, $\frac{2}{5}$ of the arrangements start with 0. And $\frac{2}{5}$ of 60 is 24. It matches.

<section data-box="deeper">

## Going deeper

Repeats and restrictions can combine. Handle the restricted letters last, using gaps.

**A harder one:** How many arrangements of BANANA have no two A's next to each other?

**Place the other letters first.** The letters B, N, N can be arranged in $\frac{3!}{2!} = 3$ ways: BNN, NBN, and NNB.

**Now look at the gaps.** With 3 letters in a row, there are 4 gaps, counting both ends:

$\_\ \text{B}\ \_\ \text{N}\ \_\ \text{N}\ \_$

**Place the A's.** Each A goes in its own gap, so no two can touch. The A's are identical, so we only choose which 3 gaps they use. There are 4 ways, since that's the same as choosing the one gap to leave empty.

**Multiply:** $3 \times 4 = 12$ arrangements.

**Compare:** BANANA has 60 arrangements in all, so most of them have some A's touching.

Try this. How many arrangements of MOON have the two O's apart?

<details class="check"><summary>Show the answer</summary>

M and N can go in 2 orders, which makes 3 gaps. Choose 2 gaps for the O's, in 3 ways. So there are $2 \times 3 = 6$.

</details>

</section>

<section data-box="traps">

## Common traps

**Dividing by the number of repeats, not its factorial.** For 3 As in BANANA, you divide by $3! = 6$, not by 3. Three items can be arranged in 6 ways, and all of them look the same.

**Multiplying the bottom wrongly.** For 2 Ls and 2 Es, the bottom is $2! \times 2! = 4$, not $2! + 2! = 4$. Those happen to match here, but they don't in general. For MISSISSIPPI, the factorials must be multiplied.

**Counting letters incorrectly.** Before calculating, write down each letter and how many there are, and check that they add up to the total length. Skipped letters ruin the count.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for letters in a word, colored flags or beads in a row, or identical items.

**Worth doing:** List the letters and their counts, then write the fraction. Cancel before you multiply, as you did in [mental math](/pathway/number-sense/02-mental-math/).

**Two kinds only?** Use "choose," since it's the same thing and it's quicker.

**Time:** About a minute and a half.

**Using the answer choices:** The answer has to divide evenly into the total for all-different letters, and it can't be larger than that total.

</section>

<section data-box="connections">

## Connections

This is [overcounting, then dividing](/pathway/counting/03-overcount-then-divide/) from Level 1. Choosing spots leads straight to [grid paths](/pathway/smart-counting/04-grid-paths/) in the next lesson.

</section>

<section data-box="summary">

## Remember this

- Arrangements with repeats: $n!$ divided by a factorial for each repeat.
- List letters and counts first.
- Two kinds of items: this is the same as "choose."
- Cancel before you multiply.
- Rule first, then arrange the rest.

</section>
