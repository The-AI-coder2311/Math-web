---
title: "Count What You Want"
summary: Probability is counting twice. Count the outcomes you want, count all of the outcomes, and divide.
minutes: 8
---

You have a bag with 3 red marbles and 7 blue ones. Without looking, you pull out one marble. Everyone agrees that blue is more likely. But how much more likely? Probability is the math that puts an exact number on it, and the good news is that you already know most of what you need, because it's built on counting.

> **The big idea:** When all of the outcomes are equally likely, the probability of something is the number of outcomes you want, divided by the total number of outcomes.

$$\text{Probability} = \frac{\text{outcomes you want}}{\text{total outcomes}}$$

## Why dividing makes sense

Imagine pulling a marble from that bag and putting it back, again and again, 1,000 times. Since every marble is equally likely, each one gets pulled about the same number of times. So about 3 out of every 10 pulls will be red. That's what a probability of $\frac{3}{10}$ means: it's the share of the time you'd expect it to happen, in the long run.

A probability is always between 0 and 1:

| Probability | What it means | Example with a 6-sided die |
|---|---|---|
| 0 | It can't happen | Rolling a 7 |
| $\frac{1}{6}$ | It happens 1 time in 6, on average | Rolling a 3 |
| $\frac{1}{2}$ | It's as likely as not | Rolling an even number |
| 1 | It must happen | Rolling a number under 7 |

If you ever get a probability greater than 1, something has gone wrong.

## Example 1: One die

You roll a 6-sided die. What's the probability of rolling a number greater than 2?

**What are all the outcomes?** 1, 2, 3, 4, 5, and 6. That's 6 equally likely outcomes.

**Which do we want?** 3, 4, 5, and 6. That's 4 outcomes.

The probability is $\frac{4}{6}$, which simplifies to $\frac{2}{3}$.

Now you try. A spinner has 10 equal sections, numbered 1 to 10. What's the probability of landing on a multiple of 4?

<details class="check"><summary>Show the answer</summary>

The multiples of 4 from 1 to 10 are 4 and 8. That's 2 outcomes out of 10, so the probability is $\frac{2}{10}$, or $\frac{1}{5}$.

</details>

## Example 2: A bag with different amounts

A jar has 5 red, 3 green, and 2 yellow candies. You pick one without looking. What's the probability that it's green?

**What are all the outcomes?** Here's the key step. The outcomes aren't "red, green, or yellow." Those three aren't equally likely! Each **candy** is an outcome, and there are $5 + 3 + 2 = 10$ candies.

**Which do we want?** The 3 green ones. So the probability is $\frac{3}{10}$.

## Example 3: The chance it doesn't happen

If the probability of rain is $\frac{3}{10}$, what's the probability that it doesn't rain?

Something either happens or it doesn't, and those two probabilities add up to 1, so:

$$1 - \frac{3}{10} = \frac{7}{10}$$

In terms of the jar, 3 out of 10 candies are green, so 7 out of 10 aren't.

## Example 4: Using more counting

Cards numbered 1 to 30 are in a hat, and you draw one. What's the probability that the number is a perfect square?

**What are all the outcomes?** There are 30 cards.

**Which do we want?** The perfect squares up to 30 are 1, 4, 9, 16, and 25. That's 5 cards.

The probability is $\frac{5}{30}$, or $\frac{1}{6}$.

## Example 5: A contest-style question

Each letter of the word PROBABILITY is written on its own card, and the cards go in a box. You draw one. What's the probability that it's a vowel? (In this word, the vowels are O, A, and the two Is, and we won't count Y.)

**What are all the outcomes?** The word has 11 letters, so there are 11 cards. Repeated letters count as separate cards, because each card is its own outcome.

**Which do we want?** The vowels are O, A, I, and I. That's 4 cards.

The probability is $\frac{4}{11}$.

**What if you changed the question?** If it asked for the probability of drawing a B, then you'd need to notice that B appears twice. That's $\frac{2}{11}$, and counting only one of them is a common error.

<section data-box="traps">

## Common traps

**Using categories as the outcomes.** For the jar in Example 2, saying "there are 3 colors, so green has a probability of $\frac{1}{3}$" is wrong. The colors aren't equally likely, because the jar has different amounts of each. Count candies, not colors.

**Forgetting to include what you want in the total.** With 3 red and 7 blue marbles, the probability of red is $\frac{3}{10}$, not $\frac{3}{7}$. The bottom number is **all** of the outcomes, including the ones you want.

**Not simplifying when the choices are simplified.** If you get $\frac{4}{6}$ and don't see it in the choices, look for $\frac{2}{3}$. It's the same number.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "probability," "chance," "at random," or "without looking."

**Check the bottom first:** Before counting what you want, find the total. Sometimes the answer choices all have different bottom numbers, and you can eliminate some right away.

**Test for sense:** Will it happen more or less than half the time? If it's rare, then cross out choices above $\frac{1}{2}$.

**Time:** Under a minute for direct problems like these.

</section>

<section data-box="connections">

## Connections

Probability is built on [Counting](/pathway/counting/). Next, you'll see how to [list the real outcomes](/pathway/intro-probability/02-list-the-real-outcomes/), since that's where the traps hide.

</section>

<section data-box="summary">

## Remember this

- Probability = what you want ÷ total, if outcomes are equally likely.
- It's always between 0 and 1.
- Count each object, not each category.
- The total includes what you want.
- Probability of "not" = 1 minus the probability.

</section>
