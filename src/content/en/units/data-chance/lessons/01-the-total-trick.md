---
title: "The Total Trick"
summary: An average hides a total. Multiply to find it, and most average problems become one or two lines.
minutes: 8
---

The mean of 4 test scores is 80. What score on a 5th test would raise the mean to 82? It seems as if you need to know the four scores. But you don't. There's a hidden number inside every average, and once you find it, these problems take about 20 seconds.

> **The big idea:** An average hides a **total**. Whenever you see an average, **multiply** to find the total, and work with the total.

## Why totals are the key

The **mean**, or average, is the total divided by how many numbers there are. So the formula can be turned around:

$$\text{total} = \text{mean} \times \text{count}$$

Here's a good way to picture the mean: it's what everyone would have if they pooled everything and shared it equally. If 3 friends have 2, 4, and 9 stickers, the pool holds 15. Shared equally, each gets $15 \div 3 = 5$. Notice that nobody actually had 5 stickers. The mean doesn't have to be one of the numbers.

## Example 1: A missing score

Back to the opening. The total now is $4 \times 80 = 320$. The total needed for a mean of 82 across 5 tests is $5 \times 82 = 410$. So the 5th score must be:

$$410 - 320 = 90$$

**A second way to think about it:** Each of the 4 old scores is 2 below the new mean, a shortage of 8 in total. The new score has to cover that and be at the mean itself, so it's $82 + 8 = 90$.

Try one. The mean of 3 numbers is 10. Two of them are 8 and 9. What's the third?

<details class="check"><summary>Show the answer</summary>

The total is $3 \times 10 = 30$. The third number is $30 - 8 - 9 = 13$.

</details>

## Example 2: Removing a number

The mean of 6 scores is 80. The lowest score, 70, is dropped. What's the new mean?

**What do we know?** The total is $6 \times 80 = 480$. Removing 70 leaves 410, with 5 scores.

$$410 \div 5 = 82$$

Removing a below-average score raises the mean, so the answer should be more than 80. It is.

## Example 3: The average of averages trap

One class of 10 students has a mean of 90. Another class of 30 students has a mean of 70. What's the mean of all 40 students?

It's tempting to say 80, which is halfway between. But the larger class should count more. Use totals:

$$\frac{10 \times 90 + 30 \times 70}{40} = \frac{3000}{40} = 75$$

This is called a **weighted average**. The answer is closer to 70, since more students have that mean. You can picture it as a balance. The class sizes are in a ratio of 1 to 3, so the 20-point gap between 70 and 90 splits into 4 parts of 5 points each. The balance point sits 1 part from 70, where the bigger class is, and 3 parts from 90. That gives 75.

This is the same as the [average speed](/pathway/equations-word-problems/03-distance-rate-time/) trap: you can't average averages unless they're equally weighted.

## Example 4: Consecutive numbers

What's the mean of the whole numbers from 1 to 99?

**What's the shortcut?** In an evenly spaced list, the mean is the middle number, and it's also the average of the first and last. Pair the outer numbers: 1 and 99 average to 50, 2 and 98 average to 50, and so on. So the mean is **50**.

This works in reverse as well. Five consecutive numbers add up to 100. What are they? The mean is $100 \div 5 = 20$, which is the middle one. So they're 18, 19, 20, 21, and 22. You didn't need an equation.

## Example 5: A contest-style question

A class of 25 students has a mean test score of 72. When one student's score of 45 is corrected to 95, what's the new mean?

**What do we know?** You could find the old total and go from there. But notice what changes: the total increases by $95 - 45 = 50$.

**What's the shortcut?** That 50 extra points gets shared among all 25 students, so the mean rises by $50 \div 25 = 2$.

The new mean is $72 + 2 = 74$.

<section data-box="traps">

## Common traps

**Averaging the means.** For two classes of different sizes, the halfway number is wrong. You can only do this if the groups are the same size. Use totals.

**Forgetting to change the count.** In Example 2, if you divide 410 by 6, you get the wrong answer, since one score is gone. When you add or remove a number, update the count.

**Averaging the two scores given.** To get a mean of 82, some students think that the next test only needs to be 82, or the average of 80 and 82. A new score of 82 wouldn't raise the mean to 82, since the first 4 scores are below it.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "mean," "average," or "arithmetic mean." These are the same thing on contests.

**Multiply first.** It should almost be a reflex. Write the total before you do anything else.

**Eliminate:** A mean must be between the smallest and largest numbers. A weighted mean is closer to the bigger group's mean.

**Time:** Under a minute. These are some of the quickest points on a contest.

</section>

<section data-box="connections">

## Connections

The middle of an evenly spaced list comes back in Sequences & Series in Level 3. Next, you'll look at [median, mode, and tables](/pathway/data-chance/02-median-tables-graphs/).

</section>

<section data-box="summary">

## Remember this

- Total = mean × count.
- Work with totals, then divide.
- Don't average averages unless the groups are equal.
- Evenly spaced list: the mean is the middle number.
- A change to one number changes the mean by the change ÷ count.

</section>
