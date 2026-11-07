---
title: "Pascal's Triangle and Binomials"
summary: See how choosing groups builds a famous triangle of numbers, and use it to count subsets and multiply out powers without doing the algebra.
minutes: 13
---

How many different pizzas can you make if there are 8 toppings to choose from, and you may use any number of them? You could work it out by counting the pizzas with 0 toppings, then 1, then 2, and so on, using "choose" each time. Or you could notice something much quicker. Hiding behind this question is a triangle of numbers that connects counting, algebra, and even probability.

> **The big idea:** **Pascal's triangle** lists every "choose" value. Each number is the sum of the two above it, because of a simple way of splitting a group. The numbers in row $n$ add up to $2^n$, and they're the numbers that appear when you multiply out $(x + 1)^n$.

## Why each number is a sum of two

Remember that $\binom{n}{k}$ counts the ways to choose $k$ things out of $n$. Now picture a group of 5 students, one of whom is you. How many ways are there to choose a team of 3? Split it into two cases:

- **You're on the team.** Then the other 2 spots come from the other 4 students, which is $\binom{4}{2} = 6$ ways.
- **You aren't on the team.** Then all 3 spots come from the other 4 students, which is $\binom{4}{3} = 4$ ways.

Every team falls into exactly one of those cases, so $\binom{5}{3} = 6 + 4 = 10$. Stack these results into rows, and you get the triangle:

![Pascal's triangle with rows 0 through 5. The rows are 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1; and 1 5 10 10 5 1. Each number is the sum of the two numbers above it, such as 4 plus 6 making 10.](/images/counting-pascal-triangle.svg)

We count rows and positions **starting from 0**. So row 5 is 1, 5, 10, 10, 5, 1, and those are $\binom{5}{0}$, $\binom{5}{1}$, and so on, up to $\binom{5}{5}$. The rows are symmetric, since choosing 2 people to include is the same as choosing 3 to leave out.

## Example 1: Reading the triangle

What's $\binom{6}{2}$?

**What's the plan?** Build row 6 from row 5. Each number is the sum of the two above it: $1 + 5 = 6$, $5 + 10 = 15$, $10 + 10 = 20$, and then it mirrors.

Row 6 is 1, 6, 15, 20, 15, 6, 1. Starting from position 0, $\binom{6}{2}$ is the third number, 15.

**Check with the formula:** $\frac{6 \times 5}{2} = 15$.

## Example 2: The row adds up to a power of 2

Back to the pizzas. For each of the 8 toppings, you have 2 choices: on or off. So there are $2^8 = 256$ pizzas in all.

But you could also count by the number of toppings: $\binom{8}{0} + \binom{8}{1} + \cdots + \binom{8}{8}$. Both count the same pizzas, so they must be equal. That's why **row $n$ adds up to $2^n$**.

Each choice of toppings is called a **subset** of the toppings. A set of $n$ things has $2^n$ subsets, including the empty one and the whole set.

Try one. How many subsets does $\{1, 2, 3, 4, 5\}$ have?

<details class="check"><summary>Show the answer</summary>

Each of the 5 numbers is either in or out, so there are $2^5 = 32$ subsets. You can check using row 5: $1 + 5 + 10 + 10 + 5 + 1 = 32$.

</details>

## Example 3: Why the triangle multiplies out powers

What's $(x + 1)^3$? Write it as $(x + 1)(x + 1)(x + 1)$. To multiply it out, you pick either $x$ or 1 from each of the 3 groups, in every possible way.

**How many ways give $x^2$?** You need to pick $x$ from exactly 2 of the 3 groups. That's $\binom{3}{2} = 3$ ways. So the coefficient of $x^2$ is 3.

Repeating this for each power gives row 3 of the triangle:

$$(x + 1)^3 = x^3 + 3x^2 + 3x + 1$$

This is called the **binomial theorem**, and it's why "choose" numbers are also called binomial coefficients. What about $(x + 2)^3$? Each time you pick from a group and don't choose $x$, you pick up a 2. So the coefficient of $x^2$ is $\binom{3}{2} \times 2 = 6$.

## Example 4: A contest-style question

How many subsets of $\{1, 2, 3, \ldots, 10\}$ have an even number of elements? (Having 0 elements counts as even.)

**What's a smaller version?** Check row 4: 1, 4, 6, 4, 1. The even positions add up to $1 + 6 + 1 = 8$, and the odd positions add up to $4 + 4 = 8$. They match!

**Why is that?** Here's a neat argument. Set the number 10 aside for a moment. Choose any subset of the other 9 numbers. There are $2^9$ ways. Now the number 10 is decided for you: include it if your subset has an odd size, and leave it out if your subset has an even size. Either way, you end up with an even size, and each even-sized subset arises in exactly one way.

So the answer is $2^9 = 512$, which is half of all of the subsets.

<section data-box="deeper">

## Going deeper

You can add up a polynomial's coefficients without expanding it, by plugging in clever numbers.

**The idea:** When you put $x = 1$ into a polynomial, each power of $x$ becomes 1, so only the coefficients are left. So the coefficients add up to $p(1)$.

**A harder one:** Let $p(x) = (2x + 1)^4$. What do all of its coefficients add up to? What do the coefficients of the even powers add up to?

**All of them:** $p(1) = 3^4 = 81$.

**The even powers:** Put in $x = -1$. Even powers stay positive, and odd powers turn negative. So $p(-1)$ is the even coefficients minus the odd ones, and that's $(-1)^4 = 1$.

Now add the two results. The odd coefficients cancel, and the even ones double:

$\frac{p(1) + p(-1)}{2} = \frac{81 + 1}{2} = 41$

**Check by expanding:** $(2x + 1)^4 = 16x^4 + 32x^3 + 24x^2 + 8x + 1$, and $16 + 24 + 1 = 41$.

Try this. Let $p(x) = (x + 2)^3$. What do the coefficients of the even powers add up to? (The constant counts as an even power.)

<details class="check"><summary>Show the answer</summary>

Here, $p(1) = 27$ and $p(-1) = 1$. So the answer is $\frac{27 + 1}{2} = 14$.

</details>

</section>

<section data-box="traps">

## Common traps

**Counting rows from 1.** The top of the triangle is row 0. So 1, 5, 10, 10, 5, 1 is row 5, not row 6. A quick check: the second number in a row is the row number.

**Forgetting the empty subset.** A set of 3 things has 8 subsets, including the one with nothing in it. If a question says "at least one," then subtract 1.

**Forgetting the 2 in $(x + 2)^n$.** The coefficients only match the triangle when the second number is 1. For $(x + 2)^3$, the coefficient of $x^2$ is $3 \times 2 = 6$, not 3.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "subsets," "coefficient," "any number of," or a sum of "choose" values.

**Know the first rows by heart:** Knowing rows 0 through 6 lets you read off values and check your work.

**Use symmetry:** $\binom{20}{18}$ equals $\binom{20}{2}$, which is only $\frac{20 \times 19}{2} = 190$.

**Time:** One to two minutes. If you're adding many "choose" values, stop and ask whether a whole row, or half of one, is what you're adding.

</section>

<section data-box="connections">

## Connections

This grows out of [overcounting and dividing](/pathway/counting/03-overcount-then-divide/). The grid-path adding in [Smart Counting](/pathway/smart-counting/04-grid-paths/) is this same triangle, tipped on its side.

</section>

<section data-box="summary">

## Remember this

- Each number is the sum of the two above it.
- Rows and positions start from 0.
- Row $n$ adds up to $2^n$, which counts subsets.
- $(x + 1)^n$ has row $n$ as its coefficients.
- Half of the subsets have an even size.

</section>
