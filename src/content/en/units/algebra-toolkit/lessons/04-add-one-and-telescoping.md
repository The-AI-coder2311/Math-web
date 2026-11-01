---
title: "Add-One Factoring and Telescoping"
summary: Two clever tricks. Add a number to make an expression factor, and watch long products and sums collapse.
minutes: 10
---

Find all pairs of positive whole numbers with $xy + x + y = 11$. You can't factor that as it stands. But add 1 to both sides, and something magical happens: the left side factors perfectly, and the rest of the problem is a short list. You'll learn that trick here, along with another: how a sum of 99 messy fractions can collapse into a single short answer.

> **The big idea:** Sometimes you can **add something to both sides** to make an expression factor. And long lists often have parts that **cancel in a chain**, which is called **telescoping**.

## Why adding 1 works

Multiply out $(x + 1)(y + 1)$:

$$(x + 1)(y + 1) = xy + x + y + 1$$

So $xy + x + y$ is exactly 1 short of something that factors. If you add 1 to both sides of $xy + x + y = 11$, you get:

$$(x + 1)(y + 1) = 12$$

Now it's a problem about factor pairs of 12, which is something you know how to do. This trick is sometimes called **Simon's Favorite Factoring Trick**.

## Example 1: Listing the pairs

Find all pairs with $xy + x + y = 11$, where $x$ and $y$ are positive whole numbers and $x \le y$.

**What do we know?** $(x + 1)(y + 1) = 12$. Since $x$ and $y$ are at least 1, both factors are at least 2.

| $x + 1$ and $y + 1$ | $x$ and $y$ |
|---|---|
| 2 and 6 | 1 and 5 |
| 3 and 4 | 2 and 3 |

We skip 1 and 12, since that would make $x = 0$. So there are 2 pairs. **Check:** $2 \times 3 + 2 + 3 = 11$.

Now try one. How many pairs of positive whole numbers with $x \le y$ satisfy $xy + x + y = 14$?

<details class="check"><summary>Show the answer</summary>

Add 1 to get $(x + 1)(y + 1) = 15$. Both factors must be at least 2, so the only pair is 3 and 5. That gives $x = 2$ and $y = 4$, which is 1 pair.

</details>

## Example 2: A version with other numbers

Find positive whole numbers with $xy + 2x + 3y = 14$.

**What do we add this time?** We want something that looks like $(x + 3)(y + 2)$. Multiply it out: $xy + 2x + 3y + 6$. So we need to add 6:

$$(x + 3)(y + 2) = 20$$

**What are the options?** Since $x \ge 1$, the first factor is at least 4. Since $y \ge 1$, the second is at least 3. The factor pairs of 20 that fit are 4 and 5, or 5 and 4. Those give $x = 1$ and $y = 3$, or $x = 2$ and $y = 2$.

**Check the first:** $1 \times 3 + 2 \times 1 + 3 \times 3 = 3 + 2 + 9 = 14$. **Check the second:** $2 \times 2 + 2 \times 2 + 3 \times 2 = 4 + 4 + 6 = 14$.

How do you know what to add in general? Look at the number in front of $x$ and the number in front of $y$. The number in front of $x$ goes with the $y$ in the factors, and the other way around. That's a little strange at first, so it's worth multiplying your factors back out to make sure that you get what you started with.

## Why telescoping works

What is this product?

$$\frac{2}{1} \times \frac{3}{2} \times \frac{4}{3} \times \cdots \times \frac{10}{9}$$

Each top number cancels with the next bottom number, so almost everything disappears. Only the last top number and the first bottom number are left: $\frac{10}{1} = 10$. It's named after a telescope, whose sections slide into each other, making a long thing short.

Why would anyone write a problem like this? Because it looks impossible until you write out the first few terms, and then it falls apart. Whenever you see three dots in the middle of a calculation, a good first step is to write the first three terms and the last term, in full, and then look for what can cancel.

## Example 3: A product in disguise

What's $\left(1 + \frac{1}{2}\right)\left(1 + \frac{1}{3}\right)\left(1 + \frac{1}{4}\right) \cdots \left(1 + \frac{1}{9}\right)$?

**What's the plan?** Turn each piece into a single fraction. Since $1 + \frac{1}{2} = \frac{3}{2}$, and $1 + \frac{1}{3} = \frac{4}{3}$, it becomes:

$$\frac{3}{2} \times \frac{4}{3} \times \frac{5}{4} \times \cdots \times \frac{10}{9} = \frac{10}{2} = 5$$

## Example 4: A sum that collapses

What is $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \cdots + \frac{1}{99 \times 100}$?

**What's a smaller version?** Try the first terms: $\frac{1}{2}$, then $\frac{1}{2} + \frac{1}{6} = \frac{2}{3}$, then $\frac{2}{3} + \frac{1}{12} = \frac{3}{4}$. There's a pattern here, and it suggests $\frac{99}{100}$. But why?

**What's the trick?** Each term can be split into two fractions:

$$\frac{1}{2 \times 3} = \frac{1}{2} - \frac{1}{3}$$

Check it: $\frac{1}{2} - \frac{1}{3} = \frac{3}{6} - \frac{2}{6} = \frac{1}{6}$. It works. So the whole sum is:

$$\left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{99} - \frac{1}{100}\right)$$

Every middle fraction cancels, which leaves $1 - \frac{1}{100} = \frac{99}{100}$.

## Example 5: A contest-style question

What's the value of $\left(1 - \frac{1}{4}\right)\left(1 - \frac{1}{9}\right)\left(1 - \frac{1}{16}\right) \cdots \left(1 - \frac{1}{100}\right)$?

**What's the shape?** The fractions have squares on the bottom. Each piece is a difference of squares, as in $1 - \frac{1}{4} = \left(1 - \frac{1}{2}\right)\left(1 + \frac{1}{2}\right)$.

**What's the plan?** Split each piece, and write the fractions out. The pieces go up to $1 - \frac{1}{10^2}$.

$$\left(\frac{1}{2} \times \frac{3}{2}\right) \times \left(\frac{2}{3} \times \frac{4}{3}\right) \times \left(\frac{3}{4} \times \frac{5}{4}\right) \cdots \left(\frac{9}{10} \times \frac{11}{10}\right)$$

**What cancels?** The first fractions in each pair, $\frac{1}{2} \times \frac{2}{3} \times \frac{3}{4} \cdots \frac{9}{10}$, telescope to $\frac{1}{10}$. The second fractions, $\frac{3}{2} \times \frac{4}{3} \times \cdots \times \frac{11}{10}$, telescope to $\frac{11}{2}$.

$$\frac{1}{10} \times \frac{11}{2} = \frac{11}{20}$$

<section data-box="traps">

## Common traps

**Adding to only one side.** If you add 1 to the left side alone, the equation is no longer true. It has to go on both sides, which is how the 11 became 12.

**Including factors that are too small.** In Example 1, the factor pair 1 and 12 gives $x = 0$, and $x$ has to be positive. Check the limits on your factors.

**Missing what survives.** When telescoping, more than one term may survive at each end. Write out the first three and the last three, and cross things out carefully.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** An equation that mixes $xy$ with $x$ and $y$ needs add-one factoring. A long list with a pattern, written with dots, usually telescopes.

**Check small cases:** A pattern with 2 or 3 terms is often enough to spot the answer on a contest.

**Time:** Two or three minutes. A problem with a huge list and a short answer almost always has a cancellation.

</section>

<section data-box="connections">

## Connections

This combines [factor pairs](/pathway/number-sense/04-factors-primes-leftovers/) with [difference of squares](/pathway/algebra-toolkit/01-difference-of-squares/). Telescoping appears again in [Sequences & Series](/pathway/sequences-series/04-recursive-and-special/).

</section>

<section data-box="summary">

## Remember this

- $xy + x + y + 1 = (x + 1)(y + 1)$.
- Add to both sides to make something factor.
- Then list factor pairs, watching the limits.
- Telescoping: write out a few terms, and cancel.
- $\frac{1}{n(n + 1)} = \frac{1}{n} - \frac{1}{n + 1}$.

</section>
