---
title: "Harder Probability With Counting"
summary: Combine all of your counting tools with probability, so that hard-looking chance questions become two counts and a fraction.
minutes: 10
---

Six friends sit in a row at random. What's the chance that Ana and Ben end up next to each other? You could try to draw a tree, but it would be huge. Or you could notice that this is really two counting problems, and you've already done harder versions of both. Most hard probability problems on contests are counting problems wearing a costume.

> **The big idea:** When outcomes are equally likely, probability is **a count divided by a count**. So use your best counting tools for both the top and the bottom, and make sure they count the **same kind of thing**.

## Why counting works, and what to watch for

The formula is the one you know: what you want, divided by the total. The tricky part is staying consistent. If the bottom counts ordered lineups, then the top must count ordered lineups too. If the bottom counts unordered groups, then so must the top.

**Let's test this on a small case.** Pick 2 marbles from a bag with 2 red and 1 blue marble. What's the chance that both are red?

- **Counting groups:** There are $\binom{3}{2} = 3$ groups, and 1 of them is both red. So it's $\frac{1}{3}$.
- **Counting in order:** There are $3 \times 2 = 6$ ordered draws, and $2 \times 1 = 2$ of them are red then red. So it's $\frac{2}{6} = \frac{1}{3}$.

Both are right, since each one uses a single way of counting throughout.

## Example 1: Exactly some of them

You flip 4 coins. What's the probability of exactly 2 heads?

**What's the total?** Each coin has 2 outcomes, so there are $2^4 = 16$.

**What do we want?** Choose which 2 of the 4 flips are heads: $\binom{4}{2} = 6$.

The probability is $\frac{6}{16} = \frac{3}{8}$. Notice that this is row 4 of Pascal's triangle over 16.

Try one yourself. You flip 5 coins. What's the probability of exactly 1 head?

<details class="check"><summary>Show the answer</summary>

Choose which flip is heads: $\binom{5}{1} = 5$ ways out of $2^5 = 32$. The probability is $\frac{5}{32}$.

</details>

## Example 2: Choosing a group

A committee of 3 is chosen at random from 5 boys and 4 girls. What's the probability that it has exactly 2 girls?

**What's the total?** Order doesn't matter in a committee: $\binom{9}{3} = 84$.

**What do we want?** Pick 2 girls and 1 boy: $\binom{4}{2} \times \binom{5}{1} = 6 \times 5 = 30$.

The probability is $\frac{30}{84} = \frac{5}{14}$.

## Example 3: Seating, using gluing

Back to the opening problem. Six friends sit at random in a row. What's the chance that Ana and Ben are next to each other?

**What's the total?** There are $6! = 720$ lineups.

**What do we want?** Glue Ana and Ben together, which leaves 5 things to arrange, in $5! = 120$ ways. Inside the block, they can sit in 2 orders, so there are $120 \times 2 = 240$ lineups.

The probability is $\frac{240}{720} = \frac{1}{3}$.

**A slicker way:** Wherever Ana sits, there are 5 seats left for Ben. If Ana is on an end (with a chance of $\frac{2}{6}$), one seat is next to her. Otherwise (with a chance of $\frac{4}{6}$), two seats are. So the probability is $\frac{2}{6} \times \frac{1}{5} + \frac{4}{6} \times \frac{2}{5} = \frac{10}{30} = \frac{1}{3}$. It's good to have two methods.

## Example 4: The largest number

You roll two dice. What's the probability that the **larger** of the two numbers is exactly 4?

**What's the trick?** "The largest is exactly 4" is messy. But "the largest is **at most** 4" is easy: both dice show 1, 2, 3, or 4, so there are $4 \times 4 = 16$ outcomes.

**How do we get to exactly 4?** Take the outcomes with a largest number of at most 4, and remove those with a largest number of at most 3, which is $3 \times 3 = 9$ outcomes.

$$16 - 9 = 7$$

The probability is $\frac{7}{36}$. **Check by listing:** (4,1), (4,2), (4,3), (4,4), (3,4), (2,4), and (1,4). That's 7.

## Example 5: A contest-style question

You roll 3 dice. What's the probability that at least two of them show the same number?

**What's the opposite?** All three are different. That's much cleaner than counting "exactly two the same" and "all three the same."

**How many are all different?** The first die can be anything (6 options), the second has 5 options, and the third has 4 options. That's $6 \times 5 \times 4 = 120$.

**What's the total?** $6^3 = 216$.

So the probability of all different is $\frac{120}{216} = \frac{5}{9}$, and the probability of at least two matching is $1 - \frac{5}{9} = \frac{4}{9}$.

This idea leads to the famous birthday puzzle. In a room of only 23 people, it's more likely than not that two people share a birthday!

<section data-box="traps">

## Common traps

**Mixing ordered and unordered counts.** If you use $\binom{9}{3}$ on the bottom, then the top must also count groups, not ordered picks. Mixing them gives an answer that's off by a factor such as 6.

**Forgetting to count the positions.** For exactly 2 heads in 4 flips, the answer $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{16}$ is only the chance of one particular order. There are 6 orders, so multiply by 6.

**Forgetting the swap inside a glued block.** In Example 3, using 120 gives $\frac{1}{6}$. Ana and Ben can sit in 2 orders.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** It looks like a probability question, but there are too many cases to draw a tree.

**Choose a counting method first:** Decide whether order matters, and stick with it.

**Try the opposite:** "At least" questions almost always get easier that way.

**Time:** Two to three minutes. Simplifying fractions at the end is where people lose time, so cancel as you go.

</section>

<section data-box="connections">

## Connections

This uses [choosing groups](/pathway/counting/03-overcount-then-divide/), [gluing](/pathway/smart-counting/02-restrictions/), and [one minus](/pathway/intro-probability/04-one-minus/). Pascal's triangle comes from [the first lesson of this unit](/pathway/advanced-counting/01-pascal-and-binomials/).

</section>

<section data-box="summary">

## Remember this

- Probability = count ÷ count.
- Count the top and bottom the same way.
- Exactly $k$ in $n$ flips: $\binom{n}{k}$ over $2^n$.
- "Exactly" can be "at most" minus "at most."
- "At least" usually means using the opposite.

</section>
