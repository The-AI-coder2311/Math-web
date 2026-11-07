---
title: "Adding Long Lists Fast"
summary: Add an arithmetic sequence in one step by pairing the outside terms, and see why the average of the list does all of the work.
minutes: 12
---

What is $1 + 2 + 3 + \cdots + 100$? A well-known story says that a young student named Gauss solved this in moments, while his class expected to be busy for an hour. Whether or not the story is exactly true, his method is real, and it works on far more than this one list. By the end of this lesson, you'll be able to add a list of 20 messy numbers with one multiplication.

> **The big idea:** In an arithmetic sequence, the first and last terms add up to the same amount as the second and second-to-last, and so on. So the **sum is the number of terms times the average of the first and last terms**.

## Why pairing works

Write the list forward, and write it again backward underneath. Here's a small one, 4, 7, 10, 13, 16:

| | | | | | |
|---|---|---|---|---|---|
| Forward | 4 | 7 | 10 | 13 | 16 |
| Backward | 16 | 13 | 10 | 7 | 4 |
| Sum | 20 | 20 | 20 | 20 | 20 |

Every column adds up to 20. Going from left to right, the top number climbs by 3 while the bottom one falls by 3, so their sum never changes. There are 5 columns of 20, which makes 100. But we wrote the list twice, so the sum is half of that, or 50.

So here's the rule:

$$\text{sum} = \frac{\text{number of terms} \times (\text{first} + \text{last})}{2}$$

There's another way to read this. The average of an evenly spaced list is exactly halfway between its first and last terms. Here, the average is $(4 + 16) \div 2 = 10$. In [the total trick](/pathway/data-chance/01-the-total-trick/), you learned that total = mean × count. So the sum is $10 \times 5 = 50$. It's the same rule, and it's a fact you already knew.

## Example 1: The numbers from 1 to 100

**What do we know?** There are 100 terms. The first is 1, and the last is 100.

$$\frac{100 \times 101}{2} = 5050$$

Now try one. What's the sum of the whole numbers from 1 to 40?

<details class="check"><summary>Show the answer</summary>

There are 40 terms, so the sum is $\frac{40 \times 41}{2} = 820$.

</details>

## Example 2: A list that doesn't start at 1

What is $4 + 7 + 10 + \cdots + 61$?

**What's missing?** We need the number of terms, which the problem doesn't state.

**Finding the count:** The climb is $61 - 4 = 57$, and each step is 3, so there are 19 steps. That means 20 terms.

**Finding the sum:**

$$\frac{20 \times (4 + 61)}{2} = 650$$

Most mistakes on these problems come from a wrong count, so spend your care there.

## Example 3: Using the middle

Seven consecutive whole numbers add up to 98. What's the middle one?

**What's the shortcut?** The average of an evenly spaced list is its middle term. So the middle term is $98 \div 7 = 14$. The numbers are 11, 12, 13, 14, 15, 16, and 17.

This works whenever a list has an odd number of terms. With an even number of terms, the average falls halfway between the two middle ones. For example, if 4 consecutive numbers add up to 50, then the average is 12.5, so the numbers are 11, 12, 13, and 14.

## Example 4: Grouping a list with mixed signs

What is $1 - 2 + 3 - 4 + \cdots + 99 - 100$?

**Is this an arithmetic sequence?** Not as it's written, since the signs keep changing. So the formula doesn't apply directly.

**What's the plan?** Group the terms in pairs: $(1 - 2) + (3 - 4) + \cdots + (99 - 100)$. Each pair equals $-1$, and there are 50 pairs.

$$50 \times (-1) = -50$$

**Is that reasonable?** Each pair is slightly negative, so a negative total makes sense. A good grouping can turn a strange list into a simple multiplication.

## Example 5: A contest-style question

A theater has 12 seats in its first row. Each row has 3 more seats than the row in front of it. The theater has 297 seats in all. How many rows does it have?

**What do we know?** With $n$ rows, the last row has $12 + (n - 1) \times 3$ seats. The sum has to be 297.

**How should we solve it?** Setting up the equation leads to a quadratic, which you could solve. But on a contest, you can test the answer choices, or make a running total:

| Rows | 8 | 9 | 10 | 11 |
|---|---|---|---|---|
| Last row | 33 | 36 | 39 | 42 |
| Total seats | 180 | 216 | 255 | 297 |

So there are 11 rows. **Check:** $\frac{11 \times (12 + 42)}{2} = 297$.

Notice that you can find any total in the table directly with the rule. You don't have to add up every row.

<section data-box="deeper">

## Going deeper

A sum with alternating squares looks awful, until you see that each pair is a difference of squares.

**A harder one:** What's the value of $100^2 - 99^2 + 98^2 - 97^2 + \cdots + 2^2 - 1^2$?

**Group the terms in pairs:** Each pair is a difference of squares.

$100^2 - 99^2 = (100 - 99)(100 + 99) = 199$

Since the numbers differ by 1, the first factor is always 1. So each pair equals the **sum** of its two numbers:

$100 + 99 + 98 + 97 + \cdots + 2 + 1$

**So the whole thing is the sum from 1 to 100:**

$\frac{100 \times 101}{2} = 5050$

You turned squares into a plain sum, and the numbers stayed small. Contest writers love this kind of problem, because the direct calculation looks impossible on a timed test.

Try this. What's the value of $20^2 - 19^2 + 18^2 - 17^2 + \cdots + 2^2 - 1^2$?

<details class="check"><summary>Show the answer</summary>

It equals $20 + 19 + \cdots + 1 = \frac{20 \times 21}{2} = 210$.

</details>

</section>

<section data-box="traps">

## Common traps

**Forgetting to divide by 2.** The number of terms times first plus last gives $20 \times 65 = 1300$ in Example 2. That's the two-copies total. The real sum is half of it.

**Using the last term as the count.** In Example 2, the list ends at 61, but it doesn't have 61 terms. That only happens in the special list that starts at 1 and goes up by 1.

**Using the formula when a list isn't evenly spaced.** The rule depends on equal steps. For example, 1, 2, 4, 8 doubles each time, so you need a different method, which you'll see in the next lesson.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for a long sum with three dots in it, or words like "consecutive" and "each row has more."

**Multiples:** To add the multiples of 7 up to 98, pull out the 7: $7 \times (1 + 2 + \cdots + 14)$. Pulling out a common factor keeps the numbers small.

**Remember these:** The sum of the first $n$ whole numbers is $\frac{n(n + 1)}{2}$, and the sum of the first $n$ odd numbers is $n^2$.

**Time:** About a minute. Find the count first, and check it with a tiny version.

</section>

<section data-box="connections">

## Connections

This comes from [trying small cases](/pathway/logic-patterns/02-small-cases/) and [the total trick](/pathway/data-chance/01-the-total-trick/). Next up are [geometric sequences](/pathway/sequences-series/03-geometric-sequences/), which grow by multiplying.

</section>

<section data-box="summary">

## Remember this

- Sum = terms × (first + last) ÷ 2.
- It's the same as count × average.
- The average of an evenly spaced list is its middle.
- Find the number of terms first.
- Mixed signs? Try grouping into pairs.

</section>
