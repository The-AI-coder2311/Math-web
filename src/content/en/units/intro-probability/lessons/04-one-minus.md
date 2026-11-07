---
title: "One Minus the Chance It Doesn't Happen"
summary: When you see "at least one," flip the question. Find the chance of "none," subtract from 1, and tie it back to counting the opposite.
minutes: 11
---

You flip a coin 5 times. What's the chance of getting at least one head? To work it out directly, you'd need the chance of exactly 1 head, 2 heads, 3 heads, 4 heads, and 5 heads, and then you'd add them. That's a lot of work. But there's only **one** way to get no heads at all. This lesson shows you how a problem with five cases shrinks to one.

> **The big idea:** The chance that something happens is **1 minus the chance that it doesn't**. When the words "at least one" appear, the opposite is "none," and that's usually far easier.

## Why it works

Every outcome either belongs to what you want, or it doesn't. So the two probabilities must add up to 1, which is the whole of the possibilities. This is the same idea as [counting the opposite](/pathway/counting/04-count-the-opposite/), but written in terms of probability.

Let's test it on a small case that we can list. Flip 2 coins, and find the chance of at least one head.

**Listing:** The outcomes are HH, HT, TH, and TT. Three have at least one head, so it's $\frac{3}{4}$.

**Using the opposite:** The only way to fail is TT, which has a chance of $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. So $1 - \frac{1}{4} = \frac{3}{4}$. It matches.

## Example 1: The five coins

Back to the opening problem. The opposite of "at least one head" is "no heads," which means all tails. Each flip is independent, so we multiply:

$$\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{32}$$

So the chance of at least one head is $1 - \frac{1}{32} = \frac{31}{32}$.

## Example 2: At least one 6

You roll a die 2 times. What's the chance of rolling at least one 6?

A common wrong idea is that the answer is $\frac{1}{6} + \frac{1}{6} = \frac{1}{3}$. Let's see why that can't be right. If you followed that logic, then rolling the die 6 times would give $\frac{6}{6} = 1$, a sure thing. But you could roll 6 times and never get a 6!

**What's the opposite?** No 6s on either roll. Each roll misses with a chance of $\frac{5}{6}$, so:

$$\frac{5}{6} \times \frac{5}{6} = \frac{25}{36}$$

**So the answer is:** $1 - \frac{25}{36} = \frac{11}{36}$.

**Check using the table:** On the two-dice table, the outcomes that include a 6 are the bottom row and the right column. That's $6 + 6 - 1 = 11$ out of 36. It matches. The 1 is subtracted since the 6 and 6 outcome is in both.

Now you try. You flip 3 coins. What's the chance of getting at least one tail?

<details class="check"><summary>Show the answer</summary>

The opposite is all heads, with a chance of $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$. So the answer is $1 - \frac{1}{8} = \frac{7}{8}$.

</details>

## Example 3: With a bag

A bag holds 3 red and 4 blue marbles. You draw 2 marbles without putting the first one back. What's the chance that at least one is red?

**What's the opposite?** No reds, so both are blue. Remember to update the bag:

$$\frac{4}{7} \times \frac{3}{6} = \frac{12}{42} = \frac{2}{7}$$

**So the answer is:** $1 - \frac{2}{7} = \frac{5}{7}$.

## Example 4: Tying back to counting

From a group of 4 girls and 3 boys, a teacher chooses 3 students at random. What's the chance that at least one is a boy?

**Can we use counting?** Yes. Probability is what you want divided by the total, and you know how to count groups.

- All possible groups: $\binom{7}{3} = 35$.
- All-girl groups, which is the opposite: $\binom{4}{3} = 4$.

So the chance of no boys is $\frac{4}{35}$, and the chance of at least one boy is $1 - \frac{4}{35} = \frac{31}{35}$.

## Example 5: A contest-style question

A basketball player makes a free throw with a probability of $\frac{3}{4}$, no matter what happened on earlier shots. She takes 3 shots. What's the probability that she makes at least 2 of them?

**What's the opposite?** It's "at most 1," which is 0 or 1 made shots. Here, the two directions both have a couple of cases, so let's count directly. Use M for made and X for missed.

- All 3 made, MMM: $\frac{3}{4} \times \frac{3}{4} \times \frac{3}{4} = \frac{27}{64}$.
- Exactly 2 made: the miss can be in any of 3 spots (XMM, MXM, MMX). Each has a chance of $\frac{3}{4} \times \frac{3}{4} \times \frac{1}{4} = \frac{9}{64}$, so together they're $\frac{27}{64}$.

$$\frac{27}{64} + \frac{27}{64} = \frac{54}{64} = \frac{27}{32}$$

The lesson here is that the opposite isn't always shorter. Take a moment to compare before you choose.

<section data-box="deeper">

## Going deeper

"All different" is the opposite of "at least two match," and it's easy to count, one person at a time.

**A harder one:** Three people are each equally likely to be born on any day of the week. What's the probability that at least two share a day?

**Why not count directly?** Exactly two could match, in several ways, or all three could. That's a lot of cases.

**What's the opposite?** All three have different days.

- The first person can have any day: $\frac{7}{7}$
- The second must avoid that day: $\frac{6}{7}$
- The third must avoid both days: $\frac{5}{7}$

So all three are different with a probability of $\frac{7 \times 6 \times 5}{7 \times 7 \times 7} = \frac{30}{49}$.

So at least two share a day with a probability of $1 - \frac{30}{49} = \frac{19}{49}$.

**A famous fact:** With birthdays in a year, you need only 23 people for the chance of a match to pass one half. Most people guess far higher. Each new person has to avoid everyone before them, and those chances multiply fast.

Try this. Three dice are rolled. What's the probability that at least two of them show the same number?

<details class="check"><summary>Show the answer</summary>

All different has a probability of $\frac{6 \times 5 \times 4}{216} = \frac{5}{9}$. So the answer is $1 - \frac{5}{9} = \frac{4}{9}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Adding the chances.** For at least one 6 in 2 rolls, the answer $\frac{1}{6} + \frac{1}{6}$ counts the 6 and 6 outcome twice, and the same logic quickly passes 1. Use the opposite.

**Wrong opposite.** The opposite of "at least one head" isn't "exactly one head." Nor is it "at most one head." It's "no heads." Check by asking: is every outcome in exactly one of the two groups?

**Forgetting to subtract.** After you work out the chance of no heads, it's easy to circle it as your answer. Remember the final step, since the "none" value is often an answer choice.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "at least one," "at least two," or "not all."

**Compare the two directions:** Count the cases each way before you begin. Choose the smaller.

**A size check:** "At least one" gets more likely as you try more times. If your answer goes down with more tries, something's off.

**Time:** About two minutes.

</section>

<section data-box="connections">

## Connections

This is [counting the opposite](/pathway/counting/04-count-the-opposite/) again, and it uses [trees](/pathway/intro-probability/03-trees-and-multiplying/). [Smart Counting](/pathway/smart-counting/) sharpens it further.

</section>

<section data-box="summary">

## Remember this

- Probability = 1 minus the chance it doesn't happen.
- "At least one" has the opposite "none."
- Don't add chances for "at least one."
- Update the bag when nothing is put back.
- Compare the two directions before you begin.

</section>
