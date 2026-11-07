---
title: "Biggest and Smallest Values: AM-GM"
summary: Use the AM-GM inequality to find the largest product for a fixed sum and the smallest sum for a fixed product, without trying every case.
minutes: 12
---

You have 40 feet of fence, and you want to enclose the largest possible rectangle. A long, skinny pen uses all of the fence and holds almost nothing. A square seems better, but how can you be sure that nothing beats it? You could test rectangles all day. There's a one-line tool that settles this question, and many harder ones, for good.

> **The big idea:** For positive numbers, the average is never less than the square root of the product: $\frac{a+b}{2} \ge \sqrt{ab}$. The two sides are equal **only when $a = b$**. So when the sum is fixed, the product is largest at equal parts. When the product is fixed, the sum is smallest at equal parts.

This is called the **AM-GM inequality**. AM stands for arithmetic mean, the usual average. GM stands for geometric mean, which is $\sqrt{ab}$.

## Why it works

First, look at a tiny case. Here are pairs of numbers that add up to 10:

| Pair | 1 and 9 | 2 and 8 | 3 and 7 | 4 and 6 | 5 and 5 |
|---|---|---|---|---|---|
| Product | 9 | 16 | 21 | 24 | 25 |

The product climbs as the numbers get closer together, and it peaks when they match.

Here's why this always happens. A square can never be negative, so:

$$(\sqrt{a} - \sqrt{b})^2 \ge 0$$

Multiply it out, and you get $a - 2\sqrt{ab} + b \ge 0$. Add $2\sqrt{ab}$ to both sides, and divide by 2:

$$\frac{a+b}{2} \ge \sqrt{ab}$$

That square equals zero only when $\sqrt{a} = \sqrt{b}$, so the two sides match only when $a = b$.

## Example 1: A fixed sum

Back to the fence. Let the sides be $l$ and $w$.

**What do we know?** The perimeter is 40, so $l + w = 20$. The sum is fixed.

**What's the plan?** We want the largest product, $lw$. AM-GM says that $\sqrt{lw} \le \frac{20}{2} = 10$. Squaring both sides gives $lw \le 100$.

**Can we reach it?** Yes, with $l = w = 10$. So the square is the best, and its area is 100 square feet.

Try one. Two positive numbers add up to 14. What's their largest possible product?

<details class="check"><summary>Show the answer</summary>

The product is largest when the numbers are equal, so both are 7. The product is $7 \times 7 = 49$.

</details>

## Example 2: A fixed product

A rectangle has an area of 36. What's its smallest possible perimeter?

**What do we know?** Now the product is fixed: $lw = 36$.

**What's the plan?** AM-GM says that $l + w \ge 2\sqrt{36} = 12$. The perimeter is $2(l + w)$, so it's at least 24.

**Can we reach it?** Yes, with $l = w = 6$. So the smallest perimeter is 24. Again, the square wins.

## Example 3: A number and its partner

For $x > 0$, what's the smallest value of $x + \frac{16}{x}$?

**What's special here?** The two terms multiply to a constant, since $x \times \frac{16}{x} = 16$. So the product is fixed, and that's what AM-GM needs.

**Apply it:** The sum is at least $2\sqrt{16} = 8$.

**When are the terms equal?** When $x = \frac{16}{x}$, so $x^2 = 16$, and $x = 4$.

**Check:** At $x = 4$, we get $4 + 4 = 8$. At $x = 2$, we get $2 + 8 = 10$. At $x = 8$, we get $8 + 2 = 10$. Both are bigger, as promised.

## Example 4: Terms with a number in front

For $x > 0$, what's the smallest value of $2x + \frac{18}{x}$?

**Which terms do we use?** Treat $2x$ and $\frac{18}{x}$ as the two numbers. Their product is $2x \times \frac{18}{x} = 36$, which is fixed.

**Apply it:** The sum is at least $2\sqrt{36} = 12$.

**When are the terms equal?** When $2x = \frac{18}{x}$, so $x^2 = 9$, and $x = 3$. Each term is then 6, and $6 + 6 = 12$.

## Example 5: A contest-style question

A farmer builds a rectangular pen against a long barn wall, so the fence only covers three sides. The farmer has 60 feet of fence. What's the largest possible area?

**What do we know?** Call the two sides that touch the wall $w$, and the side across from the wall $l$. Then $2w + l = 60$. The area is $wl$.

**What's the trap?** The answer isn't a square. The sum that's fixed is $2w + l$, so the two parts to make equal are $2w$ and $l$.

**Apply it:** Each part should be half of 60, so $2w = 30$ and $l = 30$. That gives $w = 15$, and an area of $15 \times 30 = 450$.

**Check:** A square pen with $w = l = 20$ uses all of the fence, and its area is only 400.

<section data-box="deeper">

## Going deeper

AM-GM works with three numbers too: their average is at least the cube root of their product.

$\frac{a + b + c}{3} \ge \sqrt[3]{abc}$

**A harder one:** For $x > 0$, what's the smallest value of $x^2 + \frac{16}{x}$?

**What's the problem?** With two terms, the product is $x^2 \times \frac{16}{x} = 16x$, and that isn't fixed. So plain AM-GM can't help.

**The trick:** Split the second term into two equal parts, so that the $x

## Common traps

**Using negative numbers.** AM-GM needs positive numbers. For $x = -1$, the value of $x + \frac{1}{x}$ is $-2$, which is below 2. That's why these problems say $x > 0$.

**Forgetting to check for equality.** The bound only counts if you can reach it. Suppose $x$ must be at least 4 in $x + \frac{9}{x}$. AM-GM gives 6, at $x = 3$, but 3 isn't allowed. The real smallest value is 6.25, at $x = 4$.

**Using it when the product isn't fixed.** For $x + x^2$, the product of the terms changes with $x$. So AM-GM can't give you a constant bound.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "largest," "smallest," "maximum," or "minimum," along with a fixed sum or a fixed product.

**Whole numbers:** If the parts must be whole numbers and can't be equal, pick the closest ones. With a sum of 15, the best product is $7 \times 8 = 56$.

**Using the answer choices:** The answer is often the value at equal parts. Test that value first.

**Time:** About a minute, once you've found the two parts.

</section>

<section data-box="connections">

## Connections

The proof uses [perfect squares](/pathway/algebra-toolkit/02-perfect-squares/). The "same perimeter" idea first came up in [Perimeter and Area](/pathway/basic-geometry/01-perimeter-and-area/).

</section>

<section data-box="summary">

## Remember this

- $\frac{a+b}{2} \ge \sqrt{ab}$ for positive numbers.
- The two sides match only when $a = b$.
- A fixed sum means that equal parts give the largest product.
- A fixed product means that equal parts give the smallest sum.
- Always check that equal parts are allowed.

</section>
s cancel:

$x^2 + \frac{8}{x} + \frac{8}{x}$

Now the product of the three terms is $x^2 \times \frac{8}{x} \times \frac{8}{x} = 64$, which is fixed!

**Apply it:** The sum is at least $3\sqrt[3]{64} = 3 \times 4 = 12$.

**Can we reach it?** The terms are equal when $x^2 = \frac{8}{x}$, so $x^3 = 8$, and $x = 2$. Check: $4 + 8 = 12$.

Splitting a term so that the product becomes constant is the main idea in harder AM-GM problems.

Try this. A box's length, width, and height add up to 15. What's its largest possible volume?

<details class="check"><summary>Show the answer</summary>

The product is largest when the three parts are equal, so each is 5. The volume is $5 \times 5 \times 5 = 125$.

</details>

</section>

<section data-box="traps">

## Common traps

**Using negative numbers.** AM-GM needs positive numbers. For $x = -1$, the value of $x + \frac{1}{x}$ is $-2$, which is below 2. That's why these problems say $x > 0$.

**Forgetting to check for equality.** The bound only counts if you can reach it. Suppose $x$ must be at least 4 in $x + \frac{9}{x}$. AM-GM gives 6, at $x = 3$, but 3 isn't allowed. The real smallest value is 6.25, at $x = 4$.

**Using it when the product isn't fixed.** For $x + x^2$, the product of the terms changes with $x$. So AM-GM can't give you a constant bound.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "largest," "smallest," "maximum," or "minimum," along with a fixed sum or a fixed product.

**Whole numbers:** If the parts must be whole numbers and can't be equal, pick the closest ones. With a sum of 15, the best product is $7 \times 8 = 56$.

**Using the answer choices:** The answer is often the value at equal parts. Test that value first.

**Time:** About a minute, once you've found the two parts.

</section>

<section data-box="connections">

## Connections

The proof uses [perfect squares](/pathway/algebra-toolkit/02-perfect-squares/). The "same perimeter" idea first came up in [Perimeter and Area](/pathway/basic-geometry/01-perimeter-and-area/).

</section>

<section data-box="summary">

## Remember this

- $\frac{a+b}{2} \ge \sqrt{ab}$ for positive numbers.
- The two sides match only when $a = b$.
- A fixed sum means that equal parts give the largest product.
- A fixed product means that equal parts give the smallest sum.
- Always check that equal parts are allowed.

</section>
