---
title: "Quadratics and Vieta's Formulas"
summary: Solve quadratic equations by factoring, and learn what a quadratic's solutions add up to and multiply to, without finding them.
minutes: 13
---

Let $r$ and $s$ be the solutions of $x^2 - 4x + 1 = 0$. What's $r^2 + s^2$? These solutions aren't whole numbers. They involve square roots, and you might expect a mess. But the answer is the tidy number 14, and you can find it in under a minute. The secret is that an equation's coefficients already know a lot about its solutions.

> **The big idea:** To solve a quadratic, **factor** it, and use the fact that a product is zero only if one factor is zero. And for $x^2 - bx + c = 0$, the two solutions **add up to $b$** and **multiply to $c$**. That's **Vieta's formulas**.

A **quadratic** is an expression with $x^2$ as its highest power, like $x^2 + 8x + 15$.

## Why factoring finds solutions

If two numbers multiply to give 0, at least one of them must be 0. There's no other way to get a product of zero. So if we can write the equation as a product equal to 0, we can solve each piece separately.

## Factoring a quadratic

From the first lesson, you know that $(x + 3)(x + 5) = x^2 + 8x + 15$. The middle number is the sum of 3 and 5, and the last is their product.

So, to factor $x^2 - 7x + 10$, look for two numbers that **add up to $-7$** and **multiply to 10**. Those are $-2$ and $-5$:

$$x^2 - 7x + 10 = (x - 2)(x - 5)$$

Now let's solve $x^2 - 7x + 10 = 0$. Either $x - 2 = 0$ or $x - 5 = 0$, so $x = 2$ or $x = 5$.

**Check:** $2^2 - 7 \times 2 + 10 = 4 - 14 + 10 = 0$. It works.

## Example 1: Factoring with different signs

Solve $x^2 + 2x - 15 = 0$.

**What are we looking for?** Two numbers that multiply to $-15$ and add up to 2. Since their product is negative, they have opposite signs. The numbers 5 and $-3$ work.

$$(x + 5)(x - 3) = 0$$

So $x = -5$ or $x = 3$.

Try one. Solve $x^2 - 9x + 20 = 0$.

<details class="check"><summary>Show the answer</summary>

We need two numbers that add up to $-9$ and multiply to 20: $-4$ and $-5$. So $(x - 4)(x - 5) = 0$, and $x = 4$ or $x = 5$.

</details>

## Why Vieta's formulas work

Suppose the solutions of a quadratic are $r$ and $s$. Then it factors as $(x - r)(x - s)$. Multiply it out:

$$(x - r)(x - s) = x^2 - (r + s)x + rs$$

Compare that with $x^2 - bx + c$. The number in front of $x$ is the sum of the solutions, with its sign flipped. The last number is their product. That's all Vieta's formulas say!

Let's test it: $x^2 - 7x + 10$ has solutions 2 and 5. Their sum is 7, and their product is 10. It works.

So the numbers in the equation already contain the sum and the product of its solutions.

## Example 2: The opening problem

For $x^2 - 4x + 1 = 0$, we have $r + s = 4$ and $rs = 1$.

**What's the question asking?** $r^2 + s^2$. You already know how to do this:

$$r^2 + s^2 = (r + s)^2 - 2rs = 16 - 2 = 14$$

You never needed $r$ and $s$ themselves.

## Example 3: Sum of reciprocals

Let $r$ and $s$ be the solutions of $x^2 - 6x + 3 = 0$. What's $\frac{1}{r} + \frac{1}{s}$?

**What's the plan?** Add the fractions, by giving them the same bottom number:

$$\frac{1}{r} + \frac{1}{s} = \frac{s + r}{rs} = \frac{6}{3} = 2$$

The expression turned into the sum over the product, which is exactly what Vieta gives you.

## Example 4: Finding a missing number

The equation $x^2 - 8x + k = 0$ has two solutions, and one of them is 3 times the other. What's $k$?

**What do we know?** Let the solutions be $t$ and $3t$. Their sum is 8, so $4t = 8$, and $t = 2$. The solutions are 2 and 6.

**What's the question asking?** $k$ is the product of the solutions: $2 \times 6 = 12$.

**Check:** $x^2 - 8x + 12 = (x - 2)(x - 6)$.

## Example 5: A contest-style question

For how many whole numbers $k$ does $x^2 - kx + 12 = 0$ have two different positive whole-number solutions?

**What's the question really asking?** The solutions multiply to 12, and $k$ is their sum. So we want pairs of different positive whole numbers with a product of 12.

| Solutions | Sum, which is $k$ |
|---|---|
| 1 and 12 | 13 |
| 2 and 6 | 8 |
| 3 and 4 | 7 |

There are **3** values of $k$.

<section data-box="deeper">

## Going deeper

Vieta's formulas also work in reverse: you can write a new equation from old solutions without finding them.

**A harder one:** Let $r$ and $s$ be the solutions of $x^2 - 5x + 3 = 0$. Write a quadratic whose solutions are $r + 1$ and $s + 1$.

**What do we need?** A quadratic with first number 1 is $x^2 - (\text{sum})x + (\text{product})$. So find the new sum and the new product.

**We know:** $r + s = 5$ and $rs = 3$.

**The new sum:** $(r + 1) + (s + 1) = (r + s) + 2 = 7$.

**The new product:** Multiply it out:

$(r + 1)(s + 1) = rs + r + s + 1 = 3 + 5 + 1 = 9$

So the new quadratic is $x^2 - 7x + 9 = 0$.

Those solutions involve square roots, yet the whole calculation used only whole numbers. Any combination that treats $r$ and $s$ the same way can be written using their sum and product.

Try this. Using the same $r$ and $s$, write a quadratic whose solutions are $2r$ and $2s$.

<details class="check"><summary>Show the answer</summary>

The sum is $2(r + s) = 10$, and the product is $4rs = 12$. So it's $x^2 - 10x + 12 = 0$.

</details>

</section>

<section data-box="traps">

## Common traps

**Sign mistakes with Vieta.** For $x^2 - 6x + 4 = 0$, the sum of the solutions is $+6$, not $-6$. For $x^2 + 6x + 4 = 0$, the sum is $-6$. The sign flips, and it catches many people. Test with a factored form if you're unsure.

**Dividing by $x$.** Going from $x^2 = 5x$ to $x = 5$ loses a solution, since $x = 0$ also works. Move everything to one side, and factor: $x(x - 5) = 0$.

**Setting the factors equal to the wrong number.** If $(x - 2)(x - 5) = 6$, you can't say that $x - 2 = 6$. The zero rule only works when the product equals **zero**. Move the 6 over first.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "$r$ and $s$ are the solutions" or "roots." If a question wants a combination of the solutions, use Vieta instead of finding them. ("Root" is another word for a solution.)

**A quick test:** To see if factoring will work, list the factor pairs of the last number, and check their sums.

**Using the answer choices:** You can plug answer choices into the equation.

**Time:** One or two minutes.

</section>

<section data-box="connections">

## Connections

This uses [the missing piece](/pathway/algebra-toolkit/02-perfect-squares/). Vieta's formulas extend to bigger polynomials in Level 4.

</section>

<section data-box="summary">

## Remember this

- A product is zero only if a factor is zero.
- To factor $x^2 + bx + c$, find numbers that add up to $b$ and multiply to $c$.
- For $x^2 - bx + c = 0$: sum of solutions = $b$, product = $c$.
- Watch the sign of $b$.
- Asked for a combination of solutions? Use Vieta.

</section>
