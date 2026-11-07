---
title: "Linearity of Expectation"
summary: Find an expected count by splitting it into simple yes-or-no pieces and adding their probabilities, even when the pieces depend on each other.
minutes: 12
---

Ten people toss their hats into a pile, and each one grabs a hat at random. On average, how many people get their own hat back? Counting all of the ways to hand out 10 hats means working with over 3 million arrangements, and it gets messy fast. But the answer is exactly 1, and it takes one line to find. And with 100 people, or 1,000, the answer is still 1.

> **The big idea:** The expected value of a sum is the sum of the expected values: $E[X + Y] = E[X] + E[Y]$. This holds **even when $X$ and $Y$ depend on each other**. So split a count into yes-or-no pieces, find each one's probability, and add.

## Why yes-or-no pieces work

Think of one person and one question: did this person get their own hat? Give that a score of 1 for yes, and 0 for no. If the chance of yes is $p$, the expected score is:

$$1 \times p + 0 \times (1 - p) = p$$

So the expected value of a yes-or-no piece is its probability. The total count is the sum of all of the pieces. So the expected count is the sum of the probabilities.

Let's test this with 3 hats. Here are all 6 ways to hand them out, with people A, B, and C:

| Hats given to A, B, C | Number of matches |
|---|---|
| A, B, C | 3 |
| A, C, B | 1 |
| C, B, A | 1 |
| B, A, C | 1 |
| B, C, A | 0 |
| C, A, B | 0 |

The average is $\frac{3 + 1 + 1 + 1 + 0 + 0}{6} = 1$. With pieces, each person has a $\frac{1}{3}$ chance, and $\frac{1}{3} + \frac{1}{3} + \frac{1}{3} = 1$. They match, even though the pieces aren't independent: if A and B match, C has to match too.

## Example 1: Adding dice

Two dice are rolled. What's the expected sum?

**What's the plan?** One die averages $\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$. So the sum averages $3.5 + 3.5 = 7$. You don't need a table of 36 outcomes.

Try one. What's the expected sum of 4 dice?

<details class="check"><summary>Show the answer</summary>

Each die averages 3.5, so the sum averages $4 \times 3.5 = 14$.

</details>

## Example 2: The opening problem

Ten people each grab a hat at random. What's the expected number who get their own hat?

**What are the pieces?** There's one piece for each person: did this person get their own hat?

**What's each probability?** Any one person is equally likely to get any of the 10 hats, so the chance is $\frac{1}{10}$.

**Add them:** $10 \times \frac{1}{10} = 1$.

These pieces depend on each other, and it doesn't matter. With $n$ people, the answer is $n \times \frac{1}{n} = 1$.

## Example 3: Guessing on a test

A test has 25 questions, each with 5 choices. You guess on all of them. How many do you expect to get right?

**What are the pieces?** There's one for each question, with a chance of $\frac{1}{5}$.

**Add them:** $25 \times \frac{1}{5} = 5$.

Notice that the expected number can be found without knowing the chance of getting exactly 5 right. Those are different questions, and the second one is much harder.

## Example 4: Counting neighbors

You flip a coin 10 times. How many times do you expect to see two heads in a row? For example, H H H T has 2 of these, since the middle coin is part of both.

**What are the pieces?** There are 9 spots where two neighboring flips can go: flips 1 and 2, flips 2 and 3, and so on up to flips 9 and 10.

**What's each probability?** Both flips are heads with chance $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.

**Add them:** $9 \times \frac{1}{4} = \frac{9}{4}$.

Neighboring pieces share a flip, so they depend on each other. That would ruin a calculation with multiplication, but adding doesn't care.

**Check with a small case:** With 3 flips, the outcomes HHH, HHT, and THH have 2, 1, and 1 pairs, and the other 5 outcomes have none. The average is $\frac{4}{8} = \frac{1}{2}$, and the method gives $2 \times \frac{1}{4} = \frac{1}{2}$.

## Example 5: A contest-style question

Three boys and three girls line up in a row at random. How many times, on average, does a boy stand next to a girl?

**What are the pieces?** There are 5 neighboring pairs of spots in a row of 6.

**What's each probability?** Take one pair of spots. The first spot has some child. Say it's a boy. Of the 5 children left, 3 are girls, so the chance of a mismatch is $\frac{3}{5}$. If the first spot is a girl, the same reasoning gives $\frac{3}{5}$.

**Add them:** $5 \times \frac{3}{5} = 3$.

Listing all 20 boy-and-girl patterns would give the same answer, and it would take far longer.

<section data-box="deeper">

## Going deeper

Sometimes the right pieces aren't the obvious objects. Here, the pieces are the **faces** of the die, not the rolls.

**A harder one:** You roll 3 dice. What's the expected number of **different** numbers showing?

**The tempting pieces:** One piece per die? That doesn't work, since a die doesn't know whether its number is new.

**Better pieces:** Make one piece for each of the 6 faces. Did this face show up at least once?

**What's each probability?** A face fails to show if all 3 dice miss it, which has a chance of $\left(\frac{5}{6}\right)^3 = \frac{125}{216}$. So it shows up with a chance of $1 - \frac{125}{216} = \frac{91}{216}$.

**Add up the 6 pieces:**

$6 \times \frac{91}{216} = \frac{91}{36}$

That's about 2.5, which seems right for 3 dice that sometimes match.

**How to choose pieces:** Ask what you're really counting. If you're counting different values, then each value is a piece.

Try this. You roll 2 dice. What's the expected number of different numbers showing?

<details class="check"><summary>Show the answer</summary>

Each face shows up with a chance of $1 - \frac{25}{36} = \frac{11}{36}$. Six faces give $6 \times \frac{11}{36} = \frac{11}{6}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Multiplying instead of adding.** Multiplying probabilities needs independence. Adding expected values doesn't.

**Miscounting the pieces.** A row of 6 has 5 neighboring pairs, not 6. A circle of 6 has 6. Write out a small example.

**Thinking that the expected value has to be possible.** An expected count of $\frac{9}{4}$ pairs can't happen on any one try. It's an average.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "expected number of," "on average, how many," or a count of things that seems too tangled to list.

**The four steps:** Name the pieces. Count the pieces. Find one piece's probability. Multiply. By symmetry, the pieces usually share one probability.

**Using the answer choices:** A surprisingly clean answer, such as 1 or 3, is often a sign that this method was intended.

**Time:** About a minute, once you've named the pieces.

</section>

<section data-box="connections">

## Connections

This builds on [expected value](/pathway/data-chance/04-expected-value/) from Level 2 and on [harder probability](/pathway/advanced-counting/04-harder-probability/). Level 4 will go further with games that could go on forever.

</section>

<section data-box="summary">

## Remember this

- $E[X + Y] = E[X] + E[Y]$, always.
- A yes-or-no piece has an expected value equal to its probability.
- Expected count = number of pieces times one probability.
- The pieces can depend on each other.
- The answer doesn't need to be a possible outcome.

</section>
