---
title: "When You're Told Something"
summary: Learn conditional probability. When a problem gives you a clue, cross out the outcomes the clue rules out, and count from what's left.
minutes: 11
---

I roll two dice behind a screen, peek at them, and tell you, "At least one of them is a 6." What's the probability that **both** of them are 6s?

Many people say $\frac{1}{6}$, and some say $\frac{1}{36}$. Both are wrong. The real answer is $\frac{1}{11}$, and you can find it by crossing things off a list.

> **The big idea:** A clue shrinks the list of outcomes. Cross out every outcome that the clue rules out. Then count what you want **among the outcomes that are left**.

This is called **conditional probability**. Contest problems signal it with phrases like "given that," "you are told that," or "if you know that."

## Why it works

Two dice have 36 equally likely outcomes. My clue, "at least one is a 6," rules out most of them. Here's what's left:

- The first die is a 6: (6,1), (6,2), (6,3), (6,4), (6,5), (6,6). That's 6 outcomes.
- The second die is a 6, and the first isn't: (1,6), (2,6), (3,6), (4,6), (5,6). That's 5 more.

So 11 outcomes are still possible. They were equally likely before the clue, and the clue doesn't favor any of them, so they're still equally likely. Only one of the 11 is (6,6). The probability is $\frac{1}{11}$.

The 36 on the bottom of the fraction is gone. Once you know something, the outcomes that can't happen don't count anymore.

## Example 1: One die

You roll one die. A friend looks and says, "It's an even number." What's the probability that it's greater than 3?

**What's left after the clue?** Only 2, 4, and 6. That's 3 outcomes.

**Which do we want?** The ones greater than 3, which are 4 and 6. That's 2 outcomes.

The probability is $\frac{2}{3}$. Without the clue, it would have been $\frac{3}{6} = \frac{1}{2}$. The clue made it more likely.

## Example 2: Reading a table

A club has 30 students. The table shows who plays a sport and who is in the band.

| | In the band | Not in the band |
|---|---|---|
| **Plays a sport** | 5 | 7 |
| **Doesn't play a sport** | 9 | 9 |

A student is picked at random, and you're told that the student is in the band. What's the probability that the student plays a sport?

**What's left after the clue?** Only the "In the band" column. It has $5 + 9 = 14$ students.

**Which do we want?** The 5 band students who play a sport.

The probability is $\frac{5}{14}$. The other 16 students never enter the calculation.

Now it's your turn. A student is picked at random, and you're told that the student plays a sport. What's the probability that the student is in the band?

<details class="check"><summary>Show the answer</summary>

Now the clue leaves the top row, which has $5 + 7 = 12$ students. Of those, 5 are in the band, so the probability is $\frac{5}{12}$. It's a different answer, because it's a different clue.

</details>

## Example 3: Three coins

You flip 3 coins, and you're told that at least 2 of them landed on heads. What's the probability that all 3 are heads?

**What's left after the clue?** Three coins have 8 outcomes. The ones with at least 2 heads are HHT, HTH, THH, and HHH. That's 4 outcomes.

**Which do we want?** Only HHH.

The probability is $\frac{1}{4}$. Without the clue, it would have been $\frac{1}{8}$.

## Example 4: A contest-style question

A coin flip decides which bag you draw from. On heads, you use Bag A, which has 3 red marbles and 1 blue marble. On tails, you use Bag B, which has 1 red marble and 1 blue marble. You draw a red marble. What's the probability that it came from Bag A?

**Why can't we count marbles?** The marbles aren't equally likely. Each marble in Bag B has a bigger chance of being drawn than each marble in Bag A, because Bag B is smaller.

**What can we do instead?** Imagine playing 80 times, as in the lesson on [chance with several steps](/pathway/data-chance/03-multi-step-chance/).

- About 40 games use Bag A, and $\frac{3}{4}$ of those draw red. That's 30 red draws.
- About 40 games use Bag B, and $\frac{1}{2}$ of those draw red. That's 20 red draws.

**Now use the clue.** We're told that the draw was red, so only those $30 + 20 = 50$ games are left. Of them, 30 came from Bag A.

$$\frac{30}{50} = \frac{3}{5}$$

With fractions, it's the probability of the path you want, divided by the total probability of the clue: $\frac{3}{8} \div \frac{5}{8} = \frac{3}{5}$.

<section data-box="deeper">

## Going deeper

Small changes in the wording of a clue change the answer. Compare these two clues about two dice.

**Clue 1:** "The **first** die is a 6." Six outcomes are left, from (6,1) to (6,6). The probability of two 6s is $\frac{1}{6}$.

**Clue 2:** "**At least one** die is a 6." Eleven outcomes are left, as you saw at the start. The probability of two 6s is $\frac{1}{11}$.

Clue 2 allows more outcomes, so (6,6) is a smaller share of what's left. Always write down exactly which outcomes the clue allows before you count anything.

Try this. You roll two dice, and you're told that the total is at least 10. What's the probability that you rolled doubles?

<details class="check"><summary>Show the answer</summary>

The outcomes with a total of at least 10 are (4,6), (5,5), (6,4), (5,6), (6,5), and (6,6). That's 6 outcomes, and 2 of them are doubles. The probability is $\frac{2}{6} = \frac{1}{3}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Keeping the old total.** In the opening question, $\frac{1}{36}$ divides by all 36 outcomes. After the clue, only 11 are possible, so divide by 11.

**Flipping the clue around.** In Example 2, "a band student plays a sport" is $\frac{5}{14}$, but "a sports player is in the band" is $\frac{5}{12}$. Read which group you were told about. That group goes on the bottom.

**Counting things that aren't equally likely.** In Example 4, 3 of the 4 red marbles are in Bag A, which suggests $\frac{3}{4}$. But the marbles don't have equal chances, so the real answer is $\frac{3}{5}$. When the paths have different chances, imagine many games or use a tree.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "given that," "you are told," "if you know," or a result that has already happened, such as "the marble is red."

**What to do first:** List or count the outcomes the clue allows. That number goes on the bottom of your fraction.

**Using the answer choices:** The answer with the original total on the bottom, such as 36 for two dice, is usually a trap.

**Time:** About a minute for a list or a table. Allow two minutes when you need a tree.

</section>

<section data-box="connections">

## Connections

This builds on [listing the real outcomes](/pathway/intro-probability/02-list-the-real-outcomes/) and on [chance with several steps](/pathway/data-chance/03-multi-step-chance/). In Level 3, you'll combine it with harder counting.

</section>

<section data-box="summary">

## Remember this

- A clue shrinks the list of outcomes.
- Cross out what the clue rules out, and count from what's left.
- The group you were told about goes on the bottom of the fraction.
- "The first is a 6" and "at least one is a 6" are different clues.
- If the paths have different chances, imagine many games.

</section>
