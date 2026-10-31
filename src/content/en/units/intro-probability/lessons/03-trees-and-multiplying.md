---
title: "Tree Diagrams and Multiplying"
summary: Draw a tree for chance with several steps. Multiply along a path, add between paths, and account for what changes when a marble isn't put back.
minutes: 10
---

You pull 2 marbles from a bag of 3 red and 2 blue marbles, and you don't put the first one back. What's the chance that they're both red? It feels like the chance should be $\frac{3}{5}$ each time. But after the first marble is gone, the bag has changed. A tree diagram keeps track of exactly what's happening at each step.

> **The big idea:** For chance with several steps, draw a **tree**. **Multiply** along a path to get the chance of that whole path. **Add** the paths you want.

## Why multiplying works

Suppose you flip a coin, and then roll a die. What's the chance of getting heads and then a 6? Imagine that you do this 120 times. About half of the time, 60 times, you'll get heads. Of those 60, about one sixth, or 10 times, will also have a 6. So it happens 10 times out of 120, which is:

$$\frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$$

Multiplying fractions means "a fraction of a fraction." We're finding $\frac{1}{6}$ **of** the $\frac{1}{2}$ of the time when we get heads. This is the same reason the multiply trick works in counting.

When one result doesn't affect another, as with a coin and a die, we call the two events **independent**. A coin has no memory, so even after 5 heads in a row, the next flip is still $\frac{1}{2}$. Many people feel that tails is "due," but the coin doesn't know what happened before.

## Example 1: The marbles, with a tree

Here's every path for pulling 2 marbles from a bag of 3 red and 2 blue, without putting the first one back.

![A tree diagram for drawing 2 marbles from a bag of 3 red and 2 blue. The first draw is red with probability 3 fifths, or blue with probability 2 fifths. After red, the second draw is red 2 fourths or blue 2 fourths. After blue, the second draw is red 3 fourths or blue 1 fourth. The four paths have probabilities of 6, 6, 6 and 2 twentieths.](/images/probability-tree.svg)

Look at the second step. After a red marble comes out, 4 marbles are left, and only 2 of them are red. That's why the branch says $\frac{2}{4}$. For both red, follow the top path:

$$\frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$$

Here's a good habit: all of the paths should add up to 1, and they do: $\frac{6}{20} + \frac{6}{20} + \frac{6}{20} + \frac{2}{20} = 1$. If they don't, something's wrong.

## Example 2: Adding paths

Using the same tree, what's the probability of getting one marble of each color?

**Which paths do we want?** Red and then blue, or blue and then red. That's two paths, each with $\frac{6}{20}$.

$$\frac{6}{20} + \frac{6}{20} = \frac{12}{20} = \frac{3}{5}$$

Multiply **along** a path, since it's one step **and then** another. Add **between** paths, since it's one path **or** another.

Now try one. A bag has 2 red and 2 blue marbles. You pull out 2 without putting the first one back. What's the probability that both are blue?

<details class="check"><summary>Show the answer</summary>

The first is blue with probability $\frac{2}{4}$. Then 3 marbles are left, with 1 blue, so the second is blue with probability $\frac{1}{3}$. Multiply: $\frac{2}{4} \times \frac{1}{3} = \frac{2}{12} = \frac{1}{6}$.

</details>

## Example 3: Putting it back, or not

A box has 4 good batteries and 1 dead battery. What's the probability of picking 2 good batteries in a row? Solve it both ways.

**Putting the first one back:** The box is the same for each pick, so $\frac{4}{5} \times \frac{4}{5} = \frac{16}{25}$.

**Not putting it back:** After a good one comes out, 3 of the 4 left are good, so $\frac{4}{5} \times \frac{3}{4} = \frac{3}{5}$.

Those are different answers. Read the problem carefully to see which one it's asking about.

## Example 4: A contest-style question

Spinner A lands on 1, 2, or 3, each equally likely. Spinner B lands on 1 or 2, each equally likely. You spin both and add. What's the probability that the sum is even?

**What's a way to count?** A tree has $3 \times 2 = 6$ equally likely paths, so let's list the sums.

| A \\ B | 1 | 2 |
|---|---|---|
| **1** | 2 | 3 |
| **2** | 3 | 4 |
| **3** | 4 | 5 |

The even sums are 2, 4, and 4, which is 3 of the 6. So the probability is $\frac{1}{2}$.

**Why is it exactly half?** Whatever spinner A shows, spinner B is odd half of the time and even half of the time, so it decides whether the sum is even. Spotting a reason like that can save a lot of time.

<section data-box="traps">

## Common traps

**Forgetting that the bag changes.** For both red without putting the first back, the answer $\frac{3}{5} \times \frac{3}{5} = \frac{9}{25}$ is wrong. Once a red marble is gone, there are fewer marbles and fewer reds. Update both numbers.

**"Tails is due."** After a run of heads, the next flip is still $\frac{1}{2}$. This mistake is common enough to have a name: the **gambler's fallacy**. A coin doesn't balance things out in the short run.

**Adding along a path.** To find the chance of red and then red, some students add $\frac{3}{5} + \frac{2}{4}$. That gives more than 1, which is impossible. If a probability comes out greater than 1, you've probably added when you should have multiplied.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for a sequence of events: "then," "without replacement," "two in a row," or "first ... second ...".

**Don't always draw the entire tree.** Draw only the paths you want. If there's only one path, you can write it as a single line of multiplication.

**Eliminate:** The chance of two things both happening must be less than the chance of either one alone.

**Time:** Two minutes, or less if there's only one path.

</section>

<section data-box="connections">

## Connections

This is the probability version of [the multiply trick](/pathway/counting/01-multiply-choices/). In Level 2, [Averages, Data & Chance](/pathway/data-chance/) uses bigger trees.

</section>

<section data-box="summary">

## Remember this

- Multiply along a path, and add between paths.
- All paths in a tree add up to 1.
- Coins have no memory. Bags do, if you don't put things back.
- Update the top and bottom after a draw.
- A probability above 1 means there's a mistake.

</section>
