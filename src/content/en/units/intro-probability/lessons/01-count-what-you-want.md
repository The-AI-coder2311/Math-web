---
title: "Intro to Probability: Count What You Want"
summary: Probability is counting twice. Count the outcomes you want, count all the outcomes, and divide. Then avoid the traps that fool most people.
minutes: 9
---

Is it harder to roll a total of 12 on two dice, or a total of 7? If you've played a board game, you may already have a feeling about this. In this lesson, you'll be able to work out exactly how much harder.

> **The big idea:** When all the outcomes are equally likely, the probability is the number of outcomes you want divided by the total number of outcomes.

$$\text{Probability} = \frac{\text{outcomes you want}}{\text{total outcomes}}$$

## Example 1: One die

You roll a 6-sided die. What's the probability of rolling a number greater than 2?

There are 6 equally likely outcomes. The ones you want are 3, 4, 5, and 6, which makes 4 outcomes. So the probability is $\frac{4}{6}$, which simplifies to $\frac{2}{3}$.

A probability is always between 0 and 1. A probability of 0 means it can't happen, and a probability of 1 means it must happen.

## Example 2: Using the opposite

If the chance of rain is $\frac{3}{10}$, then the chance of no rain is $\frac{7}{10}$. Something either happens or it doesn't, so those two probabilities add up to 1:

$$\text{Probability it happens} = 1 - \text{Probability it doesn't happen}$$

This becomes very useful in Example 6.

## Example 3: Two coins, and a famous trap

You flip two coins. What's the probability that you get one head and one tail?

Lots of people say $\frac{1}{3}$, since there seem to be three results: two heads, two tails, or one of each. But those three results **aren't equally likely**. Imagine one coin is a penny and the other is a dime, and list everything that can happen:

| Penny | Dime |
|---|---|
| Heads | Heads |
| Heads | Tails |
| Tails | Heads |
| Tails | Tails |

There are 4 equally likely outcomes, and 2 of them have one of each. So the probability is $\frac{2}{4}$, or $\frac{1}{2}$.

> **Watch out:** The formula only works when every outcome is equally likely. When you aren't sure, give the objects names or colors, and list everything.

## Example 4: Two dice

Here's the answer to the opening question. Think of one red die and one blue die. Each of the 6 numbers on the red die can pair with each of the 6 on the blue die, so there are $6 \times 6 = 36$ outcomes. Here's every total:

| Red \\ Blue | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **1** | 2 | 3 | 4 | 5 | 6 | 7 |
| **2** | 3 | 4 | 5 | 6 | 7 | 8 |
| **3** | 4 | 5 | 6 | 7 | 8 | 9 |
| **4** | 5 | 6 | 7 | 8 | 9 | 10 |
| **5** | 6 | 7 | 8 | 9 | 10 | 11 |
| **6** | 7 | 8 | 9 | 10 | 11 | 12 |

Count the 7s: there are 6 of them, so the probability of a total of 7 is $\frac{6}{36}$, or $\frac{1}{6}$. There's only one 12, so its probability is $\frac{1}{36}$. Rolling a 7 is 6 times as likely as rolling a 12. The totals aren't equally likely, even though each total looks like just one result.

## Example 5: Coins don't have a memory

A fair coin lands on heads 5 times in a row. What's the probability that the next flip is heads?

It feels like tails must be "due," but the coin has no memory. It's still $\frac{1}{2}$. Earlier flips can't change the next one. When one result doesn't affect another, we call the two events **independent**.

For independent events, you can multiply the probabilities, just as you multiplied choices in the Counting unit. The probability of getting heads and then rolling a 6 is:

$$\frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$$

But if the first event **does** change the second, you have to account for that. A bag has 3 red and 2 blue marbles. You take out 2 marbles without putting the first one back. What's the probability that both are red?

- The first marble is red with probability $\frac{3}{5}$.
- Now 4 marbles are left, and 2 of them are red. So the second is red with probability $\frac{2}{4}$.

$$\frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$$

## Example 6: "At least one" is a clue

You flip 3 coins. What's the probability of getting at least one head?

"At least one head" includes a lot of cases: one head, two heads, or three heads. The opposite is much shorter: **no heads at all**, which means all tails.

- The probability of all tails is $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$.
- So the probability of at least one head is $1 - \frac{1}{8} = \frac{7}{8}$.

> **Tip:** When you see the words "at least one," try finding the probability of "none" and subtracting from 1.

## Your turn

Before you start the practice problems, try these two:

1. A bag holds 2 red, 3 green, and 5 blue marbles. What's the probability of picking a green one?
2. Using the table of dice totals, what's the probability of rolling a total of 4?

**Answers:** For the first, there are 10 marbles and 3 are green, so it's $\frac{3}{10}$. For the second, the table has three 4s, so it's $\frac{3}{36}$, or $\frac{1}{12}$.

If you got those, you're ready. If not, reread Examples 1 and 4, then go on.
