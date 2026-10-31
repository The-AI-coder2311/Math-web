---
title: "Expected Value"
summary: Find what happens on average in a game of chance, and use casework to count your way through harder probability.
minutes: 9
---

A game costs nothing to play. You spin a spinner with 4 equal sections, and you win \$0, \$0, \$1, or \$7. Would you pay \$1 to play this game? How about \$3? There's a number that tells you the fair price, and you can find it by combining two things you already know: averages and probabilities.

> **The big idea:** The **expected value** is what you'd get **on average** per play, if you played many times. To find it, multiply each result by its probability, and add.

## Why it's the mean all over again

Imagine spinning 4 times and getting each section once. You'd win $0 + 0 + 1 + 7 = 8$ dollars in 4 spins, which is $8 \div 4 = 2$ dollars per spin. So the expected value is \$2.

Now with probabilities. Each section has a probability of $\frac{1}{4}$:

$$\frac{1}{4} \times 0 + \frac{1}{4} \times 0 + \frac{1}{4} \times 1 + \frac{1}{4} \times 7 = 2$$

It's the same calculation. Notice that you can never actually win \$2 on one spin. An expected value doesn't have to be a possible result. Paying \$1 per play would be a good deal in the long run, and paying \$3 would lose money.

## Example 1: Unequal chances

A carnival game has a $\frac{1}{10}$ chance of winning \$20, a $\frac{1}{5}$ chance of winning \$5, and otherwise you win nothing. What's the expected value?

**What's the plan?** Multiply each result by its chance, and add. The result of winning nothing adds 0, so we can skip it.

$$\frac{1}{10} \times 20 + \frac{1}{5} \times 5 = 2 + 1 = 3$$

The expected value is \$3 per play.

Now you try. You roll a die. You win \$6 if it shows a 6, you win \$1 if it shows an even number other than 6, and you win nothing otherwise. What's the expected value?

<details class="check"><summary>Show the answer</summary>

The chance of a 6 is $\frac{1}{6}$, and the chance of 2 or 4 is $\frac{2}{6}$. So $\frac{1}{6} \times 6 + \frac{2}{6} \times 1 = 1 + \frac{1}{3} = \frac{4}{3}$ dollars, or about \$1.33.

</details>

## Example 2: A fair game

You pay \$2 to roll a die. If you roll a 6, you win some prize, and otherwise you get nothing. What should the prize be for the game to be **fair**, so that neither you nor the game owner comes out ahead on average?

**What's the question really asking?** A fair game has an expected win equal to its cost. So the expected value of the prize must be \$2.

**Setting it up:** If the prize is $p$, then $\frac{1}{6} \times p = 2$, so $p = 12$.

A prize of \$12 makes the game fair.

## Example 3: Expected value of a roll

What's the expected value of a single die roll?

$$\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \frac{21}{6} = 3.5$$

So on average, a die gives 3.5. You can never roll a 3.5, which is another reminder of what "on average" means.

What about two dice? There's a lovely fact here: **expected values add**. Two dice give an average of $3.5 + 3.5 = 7$. That matches the two-dice table, where 7 sits in the middle.

## Example 4: Casework with probability

Two cards are drawn from 5 cards numbered 1 to 5, without putting the first back. What's the probability that their sum is even?

**What's the plan?** A sum is even when both numbers are even, or both are odd. These are separate cases, so we add. Count using "choose."

- **Total pairs:** $\binom{5}{2} = 10$.
- **Both odd:** choose 2 of 1, 3, 5, which is $\binom{3}{2} = 3$.
- **Both even:** choose 2 of 2, 4, which is 1.

So the probability is $\frac{3 + 1}{10} = \frac{2}{5}$.

## Example 5: A contest-style question

A game uses a bag of 4 tickets marked \$1, \$1, \$5, and \$10. You draw 2 tickets without putting the first back, and you win their total. What's your expected win?

**What's the smart path?** Let's use the fact that expected values add. Your first ticket has an expected value of $(1 + 1 + 5 + 10) \div 4 = 4.25$ dollars. The second ticket has the same expected value, since before you look, it's equally likely to be any of the 4 tickets. So the expected total is $4.25 + 4.25 = 8.5$ dollars.

**A check by listing:** There are 6 possible pairs, and their totals are 2, 6, 11, 6, 11, and 15. These add up to 51, and $51 \div 6 = 8.5$. It matches.

<section data-box="traps">

## Common traps

**Ignoring the zero results in the total.** When you average, don't divide by only the winning sections. For the spinner, dividing 8 by 2 winning sections gives \$4, which is wrong. There are 4 sections.

**Thinking that expected value is the most likely result.** The most likely result of the spinner is \$0, but the expected value is \$2. They measure different things.

**Forgetting the cost.** If a game costs \$2 and has an expected win of \$3, the expected **profit** is \$1. Read which one the question is asking about.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "expected value," "on average," or "fair game."

**Two quick routes:** Multiply and add, or imagine one play of each outcome and take the mean.

**Using the answer choices:** An expected value has to be between the lowest and highest possible results. Cross out anything outside that range.

**Time:** About a minute and a half. Expected value goes much deeper in Level 4, where games can go on forever.

</section>

<section data-box="connections">

## Connections

This is [the mean](/pathway/data-chance/01-the-total-trick/) weighted by [probability](/pathway/data-chance/03-multi-step-chance/). It also uses [choosing groups](/pathway/counting/03-overcount-then-divide/).

</section>

<section data-box="summary">

## Remember this

- Expected value = the sum of each result × its chance.
- It's the average over many plays.
- It doesn't have to be a possible result.
- Expected values add.
- A fair game's expected win equals its cost.

</section>
