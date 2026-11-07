---
title: "Median, Mode, Tables and Graphs"
summary: Find the middle and the most common values, and read tables and graphs carefully, because that's where many points get lost.
minutes: 11
---

Five friends earn \$10, \$10, \$12, \$15, and \$953 at their jobs. What's the "typical" amount? The mean is \$200, but nobody earns anywhere near that. Here, a different kind of middle gives a far more honest picture. Choosing the right measure matters in real life too. And on contests, there's a second skill that matters as much: reading exactly what a table or graph says.

> **The big idea:** The **median** is the middle value, and the **mode** is the most common value. Before answering a question about data, ask, "**What does each number really count?**"

## The four measures

Take these 5 quiz scores: 4, 7, 7, 9, 13.

- The **mean** is the total divided by the count: $40 \div 5 = 8$.
- The **median** is the middle number when they're in order, which is 7.
- The **mode** is the most common value, which is 7.
- The **range** is the biggest minus the smallest: $13 - 4 = 9$.

Why is the median useful? It doesn't care how extreme the largest value is. Change that 13 to 1,000, and the median is still 7. That's why it told the truth about those five friends, whose median is \$12.

With an **even** count of numbers, there are two in the middle, so the median is their average. For 3, 5, 8, and 12, it's $(5 + 8) \div 2 = 6.5$.

## Example 1: Using positions

The median of 5 different whole numbers is 10, and the smallest is 3. What's the largest number that the second-smallest number could be?

**What do we know?** In order, the list is 3, ?, 10, ?, ?.

**What's the question asking?** The second number must be more than 3 and less than 10, since they're different. So it can be at most 9.

Thinking about **positions** in an ordered list is the key to most median problems.

Try one. Find the median of 8, 3, 5, 12, and 1.

<details class="check"><summary>Show the answer</summary>

In order, they're 1, 3, 5, 8, 12. The middle number is 5. Putting the numbers in order first is what makes it work.

</details>

## Example 2: Reading a table

A class surveyed students about their pets:

| Number of pets | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Number of students | 4 | 10 | 5 | 1 |

What's the mean number of pets?

**What does each number count?** The 5 under "2" means that 5 students have 2 pets each, so those students have 10 pets among them. It doesn't mean 2 students have 5 pets.

- Students: $4 + 10 + 5 + 1 = 20$.
- Pets: $0 \times 4 + 1 \times 10 + 2 \times 5 + 3 \times 1 = 23$.
- Mean: $23 \div 20 = 1.15$.

**What's the median?** Imagine the 20 students lined up by number of pets. The middle two are the 10th and 11th. The first 4 have 0 pets, and the next 10 have 1 pet, so the 10th and 11th both have 1 pet. The median is 1.

**What's the mode?** The largest number of students, 10, have 1 pet. So the mode is 1.

## Example 3: Reading a bar graph

Here's the information from a bar graph about books read in a month:

| Student | Ana | Ben | Cal | Dee |
|---|---|---|---|---|
| Books | 2 | 6 | 3 | 5 |

What percent of all of the books did Ben read?

**What's the question really asking?** Ben read 6 books out of a total of $2 + 6 + 3 + 5 = 16$. As a fraction, that's $\frac{6}{16}$, or $\frac{3}{8}$. As a percent, it's 37.5%.

On a real graph, read the **title**, the **labels**, and the **scale** on each axis first. Sometimes each mark stands for 5 or 10, not 1. A circle graph shows parts of a whole, so its slices add up to 100%.

## Example 4: What must be true?

Five numbers have a mode of 4, a median of 6, and a mean of 7. Also, 4 is the only mode. What's the largest number that could be in the list?

**Put the facts in order.** The mean gives a total of $5 \times 7 = 35$. The median means the middle number is 6. The mode means that 4 appears more than once, so the two smallest are both 4. So the list is 4, 4, 6, $x$, $y$.

**What's the plan?** Then $x + y = 35 - 14 = 21$. To make $y$ large, make $x$ small. It can't be 6, since then 6 would tie 4 as a mode. So $x = 7$, and $y = 14$.

## Example 5: A contest-style question

A list of 7 whole numbers has a median of 10. What's the smallest possible mean, if every number is at least 1 and numbers are allowed to repeat?

**What do we know?** In order, the 4th number is 10. The 5th, 6th, and 7th numbers must be at least 10.

**What makes the mean small?** Make everything as small as we can: the first 3 numbers are 1, and the last 3 numbers are 10.

$$\frac{1 + 1 + 1 + 10 + 10 + 10 + 10}{7} = \frac{43}{7}$$

That's a bit more than 6. The answer is a fraction, which is fine.

<section data-box="deeper">

## Going deeper

"Largest possible" questions about data are often solved by making everything else as small as the rules allow.

**A harder one:** Five positive whole numbers have a mean of 10 and a median of 12. What's the largest possible value of the biggest number?

**What do we know?** The mean tells us the total: $5 \times 10 = 50$. In order, call the numbers $a, b, 12, d, e$.

**What's the plan?** To make $e$ as large as possible, make the others as small as possible:

- $a$ and $b$ can be as small as 1.
- $d$ has to be at least 12, since it comes after the median.

**Solve:** $e = 50 - 1 - 1 - 12 - 12 = 24$.

**Check:** The list 1, 1, 12, 12, 24 has a median of 12 and a mean of $\frac{50}{5} = 10$.

Each time, ask what rules limit the numbers you're making small. Forgetting that $d$ must be at least the median is the usual mistake.

Try this. Five positive whole numbers have a mean of 8 and a median of 9. What's the largest possible value of the biggest number?

<details class="check"><summary>Show the answer</summary>

The total is 40. The smallest choices give 1, 1, 9, 9, so the largest is $40 - 20 = 20$.

</details>

</section>

<section data-box="traps">

## Common traps

**Not ordering the list.** In the list 9, 2, 5, the median is 5, not 2. Sort first, every time.

**Misreading a table.** The most common mistake with Example 2 is to average the numbers in the bottom row, which gives 5. That's the average number of students per column, and it doesn't answer the question.

**Ignoring the scale of a graph.** If each bar mark stands for 10 students, then a bar at 3 marks means 30 students. Always check the axis.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Any table or graph, or the words "median," "mode," and "range."

**Read twice:** Read the labels, read the question, then look at the data. Most of the mistakes on these questions happen because students start calculating too early.

**Write the blank list:** For median problems, write blanks in order, like 3, __, 10, __, __, and fill in what you can.

**Time:** A minute or less for tables. Questions like this often appear early on the AMC 8.

</section>

<section data-box="connections">

## Connections

Means use [the total trick](/pathway/data-chance/01-the-total-trick/), and percents come from [Fractions & Ratios](/pathway/fractions-ratios/04-percents/). Next, you'll combine data with [chance](/pathway/data-chance/03-multi-step-chance/).

</section>

<section data-box="summary">

## Remember this

- Median: sort first, then find the middle.
- Even count: average the two middle numbers.
- Mode: the most common. Range: biggest − smallest.
- Ask what each number in a table counts.
- Read a graph's title, labels, and scale.

</section>
