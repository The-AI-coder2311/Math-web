---
title: "Multiplying Out and Difference of Squares"
summary: Learn how two sums multiply, and then use the most useful pattern in contest algebra to turn huge calculations into quick ones.
minutes: 10
---

What is $63^2 - 37^2$? Without a calculator, you'd have to square two numbers and subtract. Or you could notice a pattern and write down 2,600 in about five seconds. Welcome to Level 3, where problems that look like monster calculations are built around a small set of patterns. Getting stuck is normal here. The goal is to learn to spot the shortcut hiding inside.

> **The big idea:** Before you calculate, look at the **shape** of the problem. The most useful shape of all is the **difference of squares**: $a^2 - b^2 = (a + b)(a - b)$.

## Why multiplying sums works

What's $(x + 3)(x + 5)$? Picture a rectangle with a width of $x + 3$ and a height of $x + 5$. Cut it along the 3 and the 5, and you get four smaller rectangles, with areas $x^2$, $5x$, $3x$, and 15. So:

$$(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$$

Each part of the first sum multiplies each part of the second. Look closely at the result. The 8 is the **sum** of 3 and 5, and the 15 is their **product**. You'll need that fact later in this unit.

## Why the difference of squares works

Now multiply $(a + b)(a - b)$, the same way:

$$(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$$

The middle parts cancel! Here's a picture of why. Take a big square with sides of $a$, and cut a small square with sides of $b$ out of its corner. The area left over is $a^2 - b^2$. Now cut that L shape into two rectangles, and rearrange them into one long rectangle. It's $a + b$ long and $a - b$ wide.

Test it with small numbers: $5^2 - 3^2 = 25 - 9 = 16$, and $(5 + 3)(5 - 3) = 8 \times 2 = 16$. It works.

This pattern works for any numbers at all, including fractions and letters, since the reasoning never used specific values.

## Example 1: A quick calculation

Back to the opening problem. We have the shape $a^2 - b^2$, with $a = 63$ and $b = 37$.

$$63^2 - 37^2 = (63 + 37)(63 - 37) = 100 \times 26 = 2600$$

**Why did it work so well?** The contest writers chose numbers whose sum is round. That's a strong clue that this pattern is what they had in mind.

Try one. What's $27^2 - 23^2$?

<details class="check"><summary>Show the answer</summary>

$(27 + 23)(27 - 23) = 50 \times 4 = 200$.

</details>

## Example 2: Going the other way

What's $98 \times 102$?

**What's the shape?** These numbers are the same distance from 100, one below and one above. That matches $(a - b)(a + b)$, with $a = 100$ and $b = 2$.

$$98 \times 102 = 100^2 - 2^2 = 10000 - 4 = 9996$$

You can multiply lots of pairs in your head this way. What about $47 \times 53$? They're 3 away from 50, so it's $2500 - 9 = 2491$.

## Example 3: Using a known factor

The numbers $a$ and $b$ satisfy $a + b = 12$ and $a^2 - b^2 = 72$. What's $a - b$?

**What do we know?** Factor the second fact: $(a + b)(a - b) = 72$. We know the first factor is 12.

**What's the question asking?** $12 \times (a - b) = 72$, so $a - b = 6$.

**If you need $a$ too:** Add $a + b = 12$ and $a - b = 6$, which gives $2a = 18$, so $a = 9$ and $b = 3$. **Check:** $81 - 9 = 72$.

## Example 4: A chain of differences

What is $(2 + 1)(2^2 + 1)(2^4 + 1)$?

You could multiply it out: $3 \times 5 \times 17 = 255$. But let's see a surprising way that scales up to much bigger versions.

**What's the trick?** Multiply by $(2 - 1)$, which equals 1, so nothing changes:

$$(2 - 1)(2 + 1)(2^2 + 1)(2^4 + 1)$$

The first two parts are a difference of squares: $(2 - 1)(2 + 1) = 2^2 - 1$. Then $(2^2 - 1)(2^2 + 1) = 2^4 - 1$. Then $(2^4 - 1)(2^4 + 1) = 2^8 - 1$. The whole thing collapses to $256 - 1 = 255$.

## Example 5: A contest-style question

How many pairs of positive whole numbers $(x, y)$ satisfy $x^2 - y^2 = 15$?

**What's the shape?** It's a difference of squares, so $(x + y)(x - y) = 15$. Both factors are positive whole numbers, and $x + y$ is the larger one.

**What are the options?** The factor pairs of 15 are 15 and 1, or 5 and 3.

- $x + y = 15$ and $x - y = 1$: Adding gives $2x = 16$, so $x = 8$ and $y = 7$. Check: $64 - 49 = 15$.
- $x + y = 5$ and $x - y = 3$: Adding gives $2x = 8$, so $x = 4$ and $y = 1$. Check: $16 - 1 = 15$.

There are **2** pairs. Turning a hard equation into a list of factor pairs is one of the great tricks in contest math.

<section data-box="traps">

## Common traps

**Thinking that $(a - b)^2$ is $a^2 - b^2$.** For example, $(5 - 3)^2 = 4$, but $5^2 - 3^2 = 16$. Squaring a difference is a different pattern, which you'll see in the next lesson.

**Trying to factor a sum of squares.** $a^2 + b^2$ doesn't factor like this. There isn't a matching pattern for a plus sign. Test it: $3^2 + 4^2 = 25$, and $(3 + 4)(3 + 4) = 49$.

**Not checking the sizes of factors.** In Example 5, you can't use $x + y = 1$ and $x - y = 15$, because $x + y$ has to be larger for positive numbers.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for two squares being subtracted, or two numbers multiplied that are the same distance from a round number.

**Clues:** If an answer would be big to compute directly, and the two numbers add up to something round, this is probably the pattern.

**Time:** Under a minute. If you're squaring big numbers, stop and look for a shape.

**Using the answer choices:** Since $(a + b)$ and $(a - b)$ are both factors, the answer must be divisible by them. That can eliminate choices quickly.

</section>

<section data-box="connections">

## Connections

Pulling out factors builds on [mental math](/pathway/number-sense/02-mental-math/) and [solving equations](/pathway/equations-word-problems/01-solving-and-translating/). Next, you'll see the [pattern for squaring a sum](/pathway/algebra-toolkit/02-perfect-squares/).

</section>

<section data-box="summary">

## Remember this

- Each part of one sum multiplies each part of the other.
- $a^2 - b^2 = (a + b)(a - b)$.
- Numbers near a round number: use it in reverse.
- $a^2 + b^2$ doesn't factor this way.
- Factor pairs turn hard equations into short lists.

</section>
