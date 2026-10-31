---
title: "Algebra Toolkit: Factor to Win"
summary: Learn the factoring patterns that make hard-looking problems quick. Find differences of squares, use sums and products, and watch long products collapse.
minutes: 11
---

Welcome to Level 3. These problems are a real step up, and getting stuck is part of the deal. Here's the good news: many problems that look like monster calculations are built around a small set of patterns. Spot the pattern, and the monster falls apart.

> **The big idea:** Before you calculate, look at the **shape** of the problem. If it matches a pattern you know, rewrite it. Contest problems are designed so that the clever path is short.

## Tool 1: Multiplying out

Everything here starts with multiplying two sums, where each part of the first sum multiplies each part of the second:

$$(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$$

Look closely at the result. The 8 is the **sum** of 3 and 5, and the 15 is their **product**. We'll use that in Tool 4.

## Tool 2: Difference of squares

This is the most useful pattern in contest algebra:

$$a^2 - b^2 = (a + b)(a - b)$$

Try it on a calculation: what's $63^2 - 37^2$? Squaring both would take a while. Using the pattern:

$$63^2 - 37^2 = (63 + 37)(63 - 37) = 100 \times 26 = 2600$$

It also works in reverse, which lets you multiply numbers near a round number in your head:

$$98 \times 102 = (100 - 2)(100 + 2) = 100^2 - 2^2 = 9996$$

## Tool 3: Perfect squares and "the missing piece"

Multiplying out $(x + y)^2$ gives a pattern you should know by heart:

$$(x + y)^2 = x^2 + 2xy + y^2$$

> **Watch out:** $(x + y)^2$ is **not** $x^2 + y^2$. Test it with numbers: $(3 + 4)^2 = 49$, but $3^2 + 4^2 = 25$. The difference is the middle part, $2xy$, which is 24.

This pattern lets you find things without knowing $x$ and $y$. Suppose $x + y = 6$ and $xy = 5$. What's $x^2 + y^2$? You could find $x$ and $y$ first, but there's no need. Rearranging the pattern gives:

$$x^2 + y^2 = (x + y)^2 - 2xy = 36 - 10 = 26$$

The same move works on stranger-looking problems. If $x + \frac{1}{x} = 3$, what's $x^2 + \frac{1}{x^2}$? Square both sides. The middle part is $2 \times x \times \frac{1}{x}$, which is just 2. So the answer is $9 - 2 = 7$.

## Tool 4: Factoring quadratics

Going backwards from Tool 1, we can factor $x^2 - 7x + 10$ by looking for two numbers that **add to** $-7$ and **multiply to** 10. Those are $-2$ and $-5$:

$$x^2 - 7x + 10 = (x - 2)(x - 5)$$

Why is that helpful? If two things multiply to zero, one of them must be zero. So the equation $x^2 - 7x + 10 = 0$ has the solutions $x = 2$ and $x = 5$.

Notice that the solutions add up to 7 and multiply to 10. That's always how it goes for $x^2 - bx + c = 0$: the solutions add to $b$ and multiply to $c$. This is called **Vieta's formulas**. It means you can often answer questions about the solutions without finding them.

For example, say $r$ and $s$ are the solutions of $x^2 - 4x + 1 = 0$. These solutions aren't whole numbers, but what's $r^2 + s^2$? We know $r + s = 4$ and $rs = 1$. So, using Tool 3, $r^2 + s^2 = 16 - 2 = 14$.

## Tool 5: Add one to factor

Some equations mix products and sums, such as $xy + x + y = 11$, where $x$ and $y$ are positive whole numbers. Add 1 to both sides, and the left side factors:

$$xy + x + y + 1 = (x + 1)(y + 1) = 12$$

Now you just need factor pairs of 12. For example, $3 \times 4$ gives $x = 2$ and $y = 3$. Check: $2 \times 3 + 2 + 3 = 11$. Each of the factors must be at least 2, since $x$ and $y$ are positive.

## Tool 6: Watch products collapse

What is this product?

$$\frac{2}{1} \times \frac{3}{2} \times \frac{4}{3} \times \cdots \times \frac{10}{9}$$

Each top number cancels with the next bottom number, so almost everything disappears. Only the last top number and the first bottom number are left: $\frac{10}{1} = 10$. This collapse is called **telescoping**. When a problem has a long list that follows a pattern, write out the first few terms and look for what cancels.

## Your turn

Before you start the practice problems, try these two:

1. What is $27^2 - 23^2$?
2. If $a + b = 5$ and $ab = 3$, what is $a^2 + b^2$?

**Answers:** For the first, $(27 + 23)(27 - 23) = 50 \times 4 = 200$. For the second, $25 - 6 = 19$.

If you got those, you're ready. Expect some of these problems to take several tries, and remember that the hints are there to be used.
