---
title: "Chance With Several Steps"
summary: Use bigger trees to handle choices that lead to different situations, and add up every path that gets you what you want.
minutes: 10
---

A coin flip decides which bag you pick from. On heads, you use Bag A, which has 3 red marbles and 1 blue. On tails, you use Bag B, which has 1 red and 1 blue. What's the probability that you draw red? You can't count marbles directly, since the bags don't have equal chances per marble. But a tree handles it neatly.

> **The big idea:** When an early step changes what happens next, follow **every path** that leads to what you want. **Multiply along** each path, then **add the paths**.

## Why it works

Let's imagine playing this game 80 times. About 40 times you'd flip heads and use Bag A. Of those, about $\frac{3}{4}$, or 30 times, you'd draw red. About 40 times you'd flip tails and use Bag B, and half of those, or 20 times, you'd draw red. In total, that's 50 reds out of 80 games, which is $\frac{5}{8}$.

Now with fractions:

- Heads and then red: $\frac{1}{2} \times \frac{3}{4} = \frac{3}{8}$.
- Tails and then red: $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.
- Total: $\frac{3}{8} + \frac{2}{8} = \frac{5}{8}$.

Imagining a large number of games like this can help whenever fractions feel abstract. It's a friendly way of checking your tree.

## Example 1: Different chances in each path

Rain is forecast with a probability of $\frac{1}{4}$ tomorrow. If it rains, Eli walks to school with a probability of $\frac{1}{5}$. If it's dry, Eli walks with a probability of $\frac{4}{5}$. What's the probability that Eli walks?

**What are the paths?**

- Rain and walks: $\frac{1}{4} \times \frac{1}{5} = \frac{1}{20}$.
- Dry and walks: $\frac{3}{4} \times \frac{4}{5} = \frac{12}{20}$.

**Add them:** $\frac{1}{20} + \frac{12}{20} = \frac{13}{20}$.

Try one. You flip a coin. On heads, you roll a die and win if it shows a 6. On tails, you win automatically. What's the probability that you win?

<details class="check"><summary>Show the answer</summary>

Heads and then a 6: $\frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$. Tails: $\frac{1}{2}$, which is $\frac{6}{12}$. The total is $\frac{1}{12} + \frac{6}{12} = \frac{7}{12}$.

</details>

## Example 2: A series that can stop early

Team A plays Team B in a best-of-three series, so the first team to win 2 games wins. Team A wins each game with a probability of $\frac{2}{3}$. What's the probability that Team A wins the series?

**What's a clever way to think?** Imagine that they always play all 3 games, even if the series is decided. That doesn't change who wins it. Team A wins the series exactly when it wins at least 2 of the 3.

- All 3 wins: $\frac{2}{3} \times \frac{2}{3} \times \frac{2}{3} = \frac{8}{27}$.
- Exactly 2 wins: the loss can be in any of 3 spots. Each has a probability of $\frac{2}{3} \times \frac{2}{3} \times \frac{1}{3} = \frac{4}{27}$, so together they make $\frac{12}{27}$.

**Add them:** $\frac{8}{27} + \frac{12}{27} = \frac{20}{27}$.

## Example 3: Counting with a condition

You roll two dice, and I tell you that the total is 8. What's the probability that one of the dice shows a 3?

**What's the new total?** Knowing the total changes the outcomes. Only outcomes with a total of 8 are possible now: (2,6), (3,5), (4,4), (5,3), and (6,2). That's 5 outcomes.

**Which do we want?** (3,5) and (5,3) have a 3 in them, so that's 2 outcomes. The probability is $\frac{2}{5}$.

When you're given extra information, cross out the outcomes that it rules out, and count from what's left. This is called **conditional probability**.

## Example 4: A chain of steps

A bag holds 3 red and 2 blue marbles. You draw one at a time, without putting them back, until you get a blue one. What's the probability that it takes exactly 3 draws?

**What's the path?** It takes 3 draws only if it goes red, red, and then blue.

$$\frac{3}{5} \times \frac{2}{4} \times \frac{2}{3} = \frac{12}{60} = \frac{1}{5}$$

Each fraction reflects what's left in the bag. After 2 reds are gone, 3 marbles are left, and 2 of them are blue.

## Example 5: A contest-style question

Box 1 has 2 white balls and 1 black ball. Box 2 has 1 white ball and 1 black ball. You draw a random ball from Box 1, and put it in Box 2. Then you draw a random ball from Box 2. What's the probability that this ball is white?

**What are the paths?** What's in Box 2 depends on what moved.

- A white ball moves, with a probability of $\frac{2}{3}$. Box 2 then has 2 white and 1 black, so white is $\frac{2}{3}$. The path is $\frac{2}{3} \times \frac{2}{3} = \frac{4}{9}$.
- A black ball moves, with a probability of $\frac{1}{3}$. Box 2 then has 1 white and 2 black, so white is $\frac{1}{3}$. The path is $\frac{1}{3} \times \frac{1}{3} = \frac{1}{9}$.

**Add them:** $\frac{4}{9} + \frac{1}{9} = \frac{5}{9}$.

<section data-box="traps">

## Common traps

**Multiplying the paths, not adding them.** Paths are different ways for something to happen, and each path happens **or** another does. So we add them. Multiply only along a single path.

**Averaging the chances.** In the opening problem, averaging $\frac{3}{4}$ and $\frac{1}{2}$ happens to work, because heads and tails are equally likely. In Example 1, the averages give the wrong answer, since rain and dry aren't equally likely. Trust the tree.

**Forgetting to update the bag.** After a marble moves or leaves, the bottom number changes, and so might the top.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "if ... then," "first ... then ...," or an event that changes what comes next.

**Write only the paths you want.** You don't need the entire tree, as long as you list every path that gets what you want.

**Check using totals:** All of the paths in a complete tree add up to 1. Checking this finds many mistakes.

**Time:** Two or three minutes.

</section>

<section data-box="connections">

## Connections

This extends [tree diagrams](/pathway/intro-probability/03-trees-and-multiplying/) from Level 1. Next, you'll use probabilities to find what happens [on average](/pathway/data-chance/04-expected-value/).

</section>

<section data-box="summary">

## Remember this

- Multiply along a path, and add between paths.
- List every path that gets what you want.
- Imagine playing many games to check your answer.
- Given extra information? Cross out what's ruled out.
- Update the bag after each draw.

</section>
