---
title: "List the Real Outcomes"
summary: Two coins can land three ways, so why isn't each way one third? Learn to list outcomes that really are equally likely, using the two-dice table.
minutes: 11
---

Is it harder to roll a total of 12 on two dice, or a total of 7? Each total looks like one result among 11 possible totals. So you might think that they're equally likely. If you've played a board game with dice, though, you probably have a feeling that 7 comes up a lot more often. This lesson shows you exactly how much more, and why.

> **The big idea:** The formula only works if the outcomes are **equally likely**. To get outcomes like that, pretend that the objects are different from each other, such as one red die and one blue die, and list **all** of the combinations.

## Why it matters: the two-coin trap

You flip two coins. What's the probability of getting one head and one tail?

Lots of people say $\frac{1}{3}$, since there seem to be three results: two heads, two tails, or one of each. Let's test it. Imagine one coin is a penny and the other is a dime, and list what can happen.

| Penny | Dime | Result |
|---|---|---|
| Heads | Heads | two heads |
| Heads | Tails | one of each |
| Tails | Heads | one of each |
| Tails | Tails | two tails |

There are 4 equally likely outcomes, and 2 of them are "one of each." So the probability is $\frac{2}{4}$, or $\frac{1}{2}$.

Why do we have to tell the coins apart? They're different coins even if they look the same, and they don't know about each other. Try it yourself with 40 flips of two coins. You'll see "one of each" close to half of the time, not a third.

## Example 1: The two-dice table

Think of one red die and one blue die. Each of the 6 numbers on the red die can pair with each of the 6 on the blue die, so there are $6 \times 6 = 36$ outcomes. Here's every total:

| Red \\ Blue | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **1** | 2 | 3 | 4 | 5 | 6 | 7 |
| **2** | 3 | 4 | 5 | 6 | 7 | 8 |
| **3** | 4 | 5 | 6 | 7 | 8 | 9 |
| **4** | 5 | 6 | 7 | 8 | 9 | 10 |
| **5** | 6 | 7 | 8 | 9 | 10 | 11 |
| **6** | 7 | 8 | 9 | 10 | 11 | 12 |

Count the 7s. There are 6 of them, so the probability of a total of 7 is $\frac{6}{36}$, or $\frac{1}{6}$. There's only one 12, so its probability is $\frac{1}{36}$. Rolling a 7 is **6 times** as likely as rolling a 12.

The table has a lovely pattern: the counts go 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 for the totals from 2 to 12. Those add up to 36.

Use the table for this one. What's the probability of rolling a total of 4?

<details class="check"><summary>Show the answer</summary>

The table has three 4s, so the probability is $\frac{3}{36}$, or $\frac{1}{12}$. They come from red and blue showing 1 and 3, 2 and 2, or 3 and 1.

</details>

## Example 2: Doubles and differences

What's the probability that two dice show the same number?

**What do we want?** The matching rolls run down the diagonal of the table: 1 and 1, 2 and 2, up to 6 and 6. That's 6 of the 36 outcomes, so the probability is $\frac{6}{36}$, or $\frac{1}{6}$.

**A shorter way:** Roll the red die first. Whatever it shows, the blue die has a $\frac{1}{6}$ chance to match it. Noticing that is much quicker than listing.

## Example 3: Three coins

You flip 3 coins. What's the probability of getting exactly 2 heads?

**How many outcomes are there?** Each coin has 2 options, so there are $2 \times 2 \times 2 = 8$. Here they are: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.

**Which do we want?** HHT, HTH, and THH have exactly 2 heads, so the probability is $\frac{3}{8}$.

Notice how the number of heads is another example of unequal results: 0, 1, 2, or 3 heads have probabilities of 1, 3, 3, and 1 out of 8.

## Example 4: A contest-style question

You roll two dice and multiply the numbers. What's the probability that the product is odd?

**What's the question really asking?** A product is odd only if **both** numbers are odd. If either one is even, then the product is even.

**How many outcomes do we want?** The red die has 3 odd numbers, and the blue die has 3 odd numbers. That's $3 \times 3 = 9$ outcomes.

The probability is $\frac{9}{36}$, or $\frac{1}{4}$. Notice that we didn't need to write out a table of 36 products. We used the multiply trick to count the ones we wanted.

<section data-box="deeper">

## Going deeper

Once you've listed outcomes in a table, look for a shortcut that explains the answer.

**A harder one:** Two dice are rolled. What's the probability that the product of the numbers is even?

**The long way:** Fill in a 6 by 6 table, and count the even products. You'd find 27 of the 36 outcomes.

**A faster way:** Think about when a product is **odd**. It's odd only when both numbers are odd. Each die is odd with a probability of $\frac{1}{2}$, so both are odd with a probability of $\frac{1}{4}$.

So the product is even with a probability of $1 - \frac{1}{4} = \frac{3}{4}$, and that agrees with $\frac{27}{36}$.

**What about a sum?** A sum behaves differently. It's even when the two numbers are both odd or both even, and that's a probability of $\frac{1}{4} + \frac{1}{4} = \frac{1}{2}$.

So products lean toward even, and sums don't. The table shows you the answer, and the even-and-odd reasoning shows you why.

Try this. Use the same reasoning to check the sum. How many of the 36 outcomes have an even sum?

<details class="check"><summary>Show the answer</summary>

Half of them, which is 18. Both numbers are odd in 9 outcomes, and both are even in another 9.

</details>

</section>

<section data-box="traps">

## Common traps

**Assuming that results are equally likely.** In the two-coin problem, the answer $\frac{1}{3}$ comes from treating "one of each" as a single outcome. But it can happen in 2 ways. Whenever you list results, ask, "Is each of these as likely as the others?"

**Using 11 as the total for two dice.** There are 11 possible totals, but that's not the number of equally likely outcomes. The answer for a total of 7 isn't $\frac{1}{11}$. The bottom number is 36.

**Counting 1 and 3 only once.** A red 1 with a blue 3 is different from a red 3 with a blue 1. So a total of 4 comes from 3 outcomes, not 2.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Two or more dice, coins, or spinners. Questions that mention a sum, a product, or "the same" are common.

**Learn the pattern:** Memorize the counts 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1. You won't have to draw the table on a contest.

**Check the size:** With two dice, the bottom number starts as 36. With 3 coins, it starts as 8. If your total isn't what you'd get by multiplying the options, recheck your list.

**Time:** One to two minutes.

</section>

<section data-box="connections">

## Connections

Multiplying the options comes from [the multiply trick](/pathway/counting/01-multiply-choices/). Next, you'll see [trees for several steps](/pathway/intro-probability/03-trees-and-multiplying/).

</section>

<section data-box="summary">

## Remember this

- Outcomes must be equally likely before you divide.
- Make the objects different: one red die and one blue die.
- Two dice have 36 outcomes, and two coins have 4.
- Totals from 2 to 12 occur 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 times.
- 7 is the most likely total.

</section>
