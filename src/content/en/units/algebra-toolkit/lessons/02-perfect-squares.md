---
title: "Perfect Squares and the Missing Piece"
summary: Squaring a sum has a middle part that people forget. Use that middle part to find values without ever solving for x or y.
minutes: 12
---

If $x + y = 6$ and $xy = 5$, what's $x^2 + y^2$? You could try to figure out $x$ and $y$ first, and in this case they're 1 and 5. But in harder versions of this problem, they aren't whole numbers. They might even be messy. Here's a surprising fact: you don't need them at all. There's a pattern that goes straight from what you know to what you want.

> **The big idea:** $(x + y)^2 = x^2 + 2xy + y^2$. That middle part, $2xy$, is the **missing piece**. Rearranging this pattern lets you find one thing from the others, with no need to solve for $x$ and $y$.

## Why the middle part is there

Picture a square with sides of $x + y$. Cut it along the $x$ and $y$ marks on both sides. You get four pieces: an $x$ by $x$ square, a $y$ by $y$ square, and two $x$ by $y$ rectangles. That's why:

$$(x + y)^2 = x^2 + 2xy + y^2$$

You can also multiply it out: $(x + y)(x + y) = x^2 + xy + xy + y^2$.

Test it with numbers: $(3 + 4)^2 = 49$, and $3^2 + 2 \times 3 \times 4 + 4^2 = 9 + 24 + 16 = 49$. It works. The difference version is similar, but the middle is subtracted:

$$(x - y)^2 = x^2 - 2xy + y^2$$

Why learn this, when you could multiply it out every time? Because contest problems are written so that the pattern shows up **backwards**. You won't be asked to expand $(x + y)^2$. You'll be handed a sum and a product and asked about squares, and you'll need to recognize which piece is missing. So spend a moment with the picture until the three parts of the pattern feel familiar: two squares, and two matching rectangles.

## Example 1: The opening problem

**What do we know?** $x + y = 6$ and $xy = 5$.

**What's the plan?** Rearrange the pattern:

$$x^2 + y^2 = (x + y)^2 - 2xy = 36 - 10 = 26$$

**Check:** With $x = 1$ and $y = 5$, we get $1 + 25 = 26$.

Try one. If $a + b = 5$ and $ab = 3$, what's $a^2 + b^2$?

<details class="check"><summary>Show the answer</summary>

$a^2 + b^2 = (a + b)^2 - 2ab = 25 - 6 = 19$.

</details>

## Example 2: Finding the product

If $x + y = 10$ and $x^2 + y^2 = 58$, what's $xy$?

**What's the plan?** Use the same pattern, but solve for a different piece. We know that $(x + y)^2 = x^2 + y^2 + 2xy$, so:

$$100 = 58 + 2xy$$

That means $2xy = 42$, and $xy = 21$.

**Why does this matter?** The pattern connects three things: the sum, the product, and the sum of squares. If you know any two, you can find the third.

Here's a good way to remember what's going on here, and it works every time: think of the sum, the product, and the sum of squares as three linked facts. A problem usually gives you two of them, and the pattern hands you the third.

## Example 3: Using the difference

If $x - y = 3$ and $xy = 10$, what's $x + y$? Assume that both numbers are positive.

**What's the plan?** Let's find how the two square patterns connect. $(x + y)^2$ and $(x - y)^2$ differ only in the sign of their middle part. So:

$$(x + y)^2 = (x - y)^2 + 4xy = 9 + 40 = 49$$

So $x + y = 7$. **Check:** The numbers are 5 and 2. Their difference is 3, and their product is 10.

## Example 4: Strange-looking problems

If $x + \frac{1}{x} = 3$, what's $x^2 + \frac{1}{x^2}$?

**What's the shape?** It's a sum, with an unusual second term. The pattern still works, with $\frac{1}{x}$ in the place of $y$.

**What's the middle part?** Here, $2 \times x \times \frac{1}{x} = 2$, since $x$ and $\frac{1}{x}$ cancel.

$$\left(x + \frac{1}{x}\right)^2 = x^2 + 2 + \frac{1}{x^2}$$

**Square both sides** of the given fact. The left side becomes 9, so $x^2 + 2 + \frac{1}{x^2} = 9$. That means the answer is $9 - 2 = 7$.

You never had to find $x$, which is a good thing, since it isn't a nice number.

## Example 5: A contest-style question

For how many whole numbers $n$ from 1 to 50 is $n^2 + 6n + 9$ a multiple of 16?

**What's the shape?** Do the numbers look familiar? It's $n^2 + 2 \times 3 \times n + 3^2$, so it equals $(n + 3)^2$.

**What's the question really asking?** When is a perfect square a multiple of 16? Since $16 = 4^2$, the square is a multiple of 16 exactly when $n + 3$ is a multiple of 4.

**How many are there?** As $n$ goes from 1 to 50, $n + 3$ goes from 4 to 53. The multiples of 4 from 4 to 53 are 4, 8, and so on up to 52, and there are $52 \div 4 = 13$ of them.

So there are **13** values.

<section data-box="deeper">

## Going deeper

Perfect squares give you two powerful moves: finding a smallest value, and proving a recipe.

**Finding a smallest value:** What's the smallest possible value of $x^2 - 6x + 13$?

Complete the square. Half of 6 is 3, and $(x - 3)^2 = x^2 - 6x + 9$. So:

$x^2 - 6x + 13 = (x - 3)^2 + 4$

A square is never negative, so the smallest value of $(x - 3)^2$ is 0, at $x = 3$. So the smallest value of the whole expression is **4**.

**Proving a recipe:** In [The Pythagorean Theorem](/pathway/triangles/02-pythagoras-why/), the numbers $m^2 - n^2$, $2mn$, and $m^2 + n^2$ always make a triple. Now we can show why. Expand the squares of the two shorter sides:

$(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = m^4 + 2m^2n^2 + n^4$

That last expression is exactly $(m^2 + n^2)^2$. So the recipe works for every choice of $m$ and $n$.

Try this. What's the smallest possible value of $x^2 + 10x + 30$?

<details class="check"><summary>Show the answer</summary>

Since $(x + 5)^2 = x^2 + 10x + 25$, the expression is $(x + 5)^2 + 5$. Its smallest value is 5.

</details>

</section>

<section data-box="traps">

## Common traps

**Dropping the middle part.** $(x + y)^2$ is **not** $x^2 + y^2$. This is one of the most common algebra errors of all. Test with numbers: $(3 + 4)^2 = 49$, but $3^2 + 4^2 = 25$.

**Forgetting the 2.** The middle part is $2xy$, not $xy$. The picture shows why: there are **two** rectangles.

**Solving for $x$ and $y$ when you don't need to.** In Example 4, solving for $x$ gives ugly numbers that invite mistakes. If a problem gives a sum and a product, reach for the pattern first.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** You're given a sum and a product, or you're asked about $x^2 + y^2$. Also look for three-part expressions, like $n^2 + 6n + 9$. Check whether the first and last parts are squares, and whether the middle is twice their roots.

**What to memorize:** the pattern for the square of a sum, and its rearranged form.

**Using the answer choices:** You can sometimes test with simple values of $x$ and $y$ that fit the conditions.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

This follows [difference of squares](/pathway/algebra-toolkit/01-difference-of-squares/). The picture is [split it or subtract it](/pathway/basic-geometry/04-split-or-subtract/) from Level 1. Next, these patterns unlock [quadratic equations](/pathway/algebra-toolkit/03-quadratics-and-vieta/).

</section>

<section data-box="summary">

## Remember this

- $(x + y)^2 = x^2 + 2xy + y^2$.
- $(x - y)^2 = x^2 - 2xy + y^2$.
- $x^2 + y^2 = (x + y)^2 - 2xy$.
- You often don't need to find $x$ and $y$.
- Look for hidden squares like $n^2 + 6n + 9$.

</section>
