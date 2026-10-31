---
title: "Averages, Data & Chance: Think in Totals"
summary: Solve average problems by thinking about totals, read tables carefully, and work through probability with several steps.
minutes: 9
---

Contests often ask you to work with averages and to read tables and graphs. Happily, one idea handles most of these questions. After that, we'll take probability further than Level 1 did.

> **The big idea:** An average hides a **total**. Whenever you see an average, multiply to find the total, and work with that.

## Example 1: Mean, median, mode, and range

Look at these 5 quiz scores: 4, 7, 7, 9, 13.

- The **mean**, or average, is the total divided by how many numbers there are. The total is 40, so the mean is $40 \div 5 = 8$.
- The **median** is the middle number when they're in order, which is 7. With an even number of values, it's the average of the two middle ones.
- The **mode** is the most common value, which is 7.
- The **range** is the biggest minus the smallest: $13 - 4 = 9$.

> **Watch out:** You have to put the numbers in order before finding the median. In the list 9, 2, 5, the median is 5, not 2.

## Example 2: The total trick

The mean of 4 test scores is 80. What score on a 5th test would raise the mean to 82?

You don't need to know the individual scores. Think in totals:

- The total now is $4 \times 80 = 320$.
- The total needed is $5 \times 82 = 410$.
- So the 5th score must be $410 - 320 = 90$.

## Example 3: The average of averages trap

One class of 10 students has a mean of 90. Another class of 30 students has a mean of 70. What's the mean of all 40 students?

It's tempting to say 80, which is halfway between. But the larger class should count more. Use totals:

$$\frac{10 \times 90 + 30 \times 70}{40} = \frac{3000}{40} = 75$$

The answer is closer to 70, since more students have that mean.

## Example 4: Reading a table

A class surveyed students about their pets:

| Number of pets | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Number of students | 4 | 10 | 5 | 1 |

What's the mean number of pets? Read the table carefully. The 5 under "2" means that 5 students have 2 pets each, so they have 10 pets among them.

- Students: $4 + 10 + 5 + 1 = 20$.
- Pets: $0 \times 4 + 1 \times 10 + 2 \times 5 + 3 \times 1 = 23$.
- Mean: $23 \div 20 = 1.15$.

What about the median? There are 20 students, so imagine them lined up by number of pets, and look at the 10th and 11th. The first 4 students have 0 pets, and the next 10 have 1 pet. So the 10th and 11th both have 1 pet, and the median is 1.

Before answering any question about a table or graph, read its title and labels, and ask what each number really counts.

## Example 5: Probability in steps

A coin flip decides which bag you pick from. On heads, you use Bag A, with 3 red and 1 blue marble. On tails, you use Bag B, with 1 red and 1 blue marble. What's the probability you draw red?

Draw a tree, and follow each path. Multiply **along** a path, and **add** the paths that you want:

- Heads and then red: $\frac{1}{2} \times \frac{3}{4} = \frac{3}{8}$.
- Tails and then red: $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.
- In total: $\frac{3}{8} + \frac{2}{8} = \frac{5}{8}$.

## Example 6: Expected value

A game costs nothing to play. You spin a spinner with 4 equal sections, and you win \$0, \$0, \$1, or \$7. On average, how much do you win per spin?

Imagine spinning 4 times and getting each section once. You'd win $0 + 0 + 1 + 7 = 8$ dollars in 4 spins, which is $8 \div 4 = 2$ dollars per spin. We say the **expected value** is \$2.

Notice that you can never actually win \$2 on one spin. It's what you average over many spins, which is why it's the mean all over again.

## Your turn

Before you start the practice problems, try these two:

1. Find the median of 8, 3, 5, 12.
2. The mean of 3 numbers is 10. Two of them are 8 and 9. What's the third?

**Answers:** For the first, in order the list is 3, 5, 8, 12, and the two middle numbers average to $(5 + 8) \div 2 = 6.5$. For the second, the total is $3 \times 10 = 30$, so the third number is $30 - 8 - 9 = 13$.

If you got those, you're ready for the problems.
