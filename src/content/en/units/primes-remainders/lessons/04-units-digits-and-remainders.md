---
title: "Units Digits and Remainder Arithmetic"
summary: Find the last digit of enormous powers, and do arithmetic using only remainders.
minutes: 9
---

What's the last digit of $3^{50}$? That number has 24 digits, and your calculator wouldn't show it exactly even if you were allowed to use one. But you don't need any of the other 23 digits. In fact, this kind of question is one of the easiest ways to pick up points on a contest, once you know how it works.

> **The big idea:** When you add or multiply, the last digit of the result depends only on the last digits you started with. More generally, you can **add and multiply using only remainders**. Powers then fall into repeating patterns.

The last digit of a number is also called its **units digit**.

## Why only the last digit matters

Take $47 \times 86$. Split each number into its tens and ones: $47 = 40 + 7$ and $86 = 80 + 6$. When you multiply, every part with a 40 or an 80 ends in 0, so only the $7 \times 6$ can affect the last digit. Since $7 \times 6 = 42$, the product ends in 2. Check: $47 \times 86 = 4042$. It ends in 2.

Similar reasoning works for other remainders. Suppose $a$ has a remainder of 3 when divided by 7, and $b$ has a remainder of 5. Then $a = 7x + 3$ and $b = 7y + 5$ for some whole numbers $x$ and $y$. When you add or multiply, all of the parts that contain a 7 are multiples of 7, and they don't affect the remainder. So only the 3 and the 5 matter.

- The sum has the remainder of $3 + 5 = 8$, which is 1 when divided by 7.
- The product has the remainder of $3 \times 5 = 15$, which is also 1 when divided by 7.

Let's test it with real numbers: $a = 10$ and $b = 12$. The sum is 22, and $22 = 3 \times 7 + 1$. The product is 120, and $120 = 17 \times 7 + 1$. It works.

## Example 1: A last-digit pattern

What's the last digit of $3^{50}$?

**What's a smaller version?** Find small powers, and keep only the last digit each time.

| Power | $3^1$ | $3^2$ | $3^3$ | $3^4$ | $3^5$ | $3^6$ |
|---|---|---|---|---|---|---|
| Last digit | 3 | 9 | 7 | 1 | 3 | 9 |

**Why does it repeat?** Each last digit depends only on the one before it, so once a digit returns, the pattern must repeat from there.

**Where does 50 land?** The cycle is 3, 9, 7, 1, which has length 4. And $50 = 4 \times 12 + 2$. So $3^{50}$ lands in the 2nd spot, and its last digit is **9**.

Try one. What's the last digit of $7^{10}$? (The last digits of the powers of 7 are 7, 9, 3, 1, and then they repeat.)

<details class="check"><summary>Show the answer</summary>

The cycle has length 4, and $10 = 4 \times 2 + 2$, which is the 2nd spot. So the last digit is 9.

</details>

## Example 2: All of the last-digit cycles

You don't need to memorize these, because you can always work them out in a few seconds. But they're useful to see once.

| Last digit of the base | Cycle | Length |
|---|---|---|
| 0, 1, 5, 6 | stays the same | 1 |
| 4 | 4, 6 | 2 |
| 9 | 9, 1 | 2 |
| 2 | 2, 4, 8, 6 | 4 |
| 3 | 3, 9, 7, 1 | 4 |
| 7 | 7, 9, 3, 1 | 4 |
| 8 | 8, 4, 2, 6 | 4 |

So only the last digit of the base matters. The last digit of $23^{50}$ is the same as that of $3^{50}$, which is 9.

## Example 3: Last digit of a sum of powers

What's the last digit of $2^{100} + 3^{100}$?

**What's the plan?** Find each last digit, and add them.

- Powers of 2 cycle through 2, 4, 8, 6. Since 100 is a multiple of 4, we land on the last spot, which is 6.
- Powers of 3 cycle through 3, 9, 7, 1. Again, 100 is a multiple of 4, which gives 1.

Then $6 + 1 = 7$, so the sum ends in 7.

## Example 4: Remainders of large products

What's the remainder when $101 \times 102 \times 103$ is divided by 5?

**What's the plan?** Replace each number by its remainder when divided by 5: 1, 2, and 3.

$$1 \times 2 \times 3 = 6$$

And 6 has a remainder of 1 when divided by 5. So the answer is 1. You didn't have to multiply any large numbers.

## Example 5: A contest-style question

Which whole numbers from 1 to 20 make $2^n + 1$ divisible by 5?

**What's a smaller version?** Divisible by 5 means that it ends in 0 or 5. Since $2^n + 1$ is always odd, it must end in 5. So we need $2^n$ to end in 4.

**Using the cycle:** The last digits of $2^n$ are 2, 4, 8, 6. It ends in 4 when $n$ has a remainder of 2 when divided by 4. So $n$ can be 2, 6, 10, 14, or 18.

That's 5 values. **Check one:** for $n = 6$, $2^6 + 1 = 65$, which is divisible by 5.

<section data-box="traps">

## Common traps

**Thinking that a remainder of 0 means the first spot.** It actually means the **last** spot in the cycle. For example, $3^{4}$ ends in 1, which is the 4th spot in the cycle, not the 1st. Check with a small power whenever you aren't sure.

**Using the exponent's digits.** To find where 50 lands, divide 50 by the cycle length. Don't use only the last digit of 50.

**Treating $n$ as starting at 0.** The first spot in the table is for the exponent 1. If you line up your table wrong, you'll be off by one spot. Write out the first 2 or 3 powers to line it up.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "units digit," "last digit," "remainder," or a very large exponent.

**Eliminate fast:** If you can compute the last digit of an answer, compare it with the choices. Even in a harder problem, this may leave only one choice. It's often worth 20 seconds.

**Time:** Under a minute. Writing out four powers is all it takes.

</section>

<section data-box="connections">

## Connections

Cycles come from [repeating patterns](/pathway/logic-patterns/01-repeating-and-growing/) in Level 1. [Remainder Math & Bases](/pathway/modular-arithmetic/) gives this a new notation and goes much further.

</section>

<section data-box="summary">

## Remember this

- Last digits depend only on last digits.
- You can add and multiply using only remainders.
- Powers cycle. Divide the exponent by the cycle length.
- A remainder of 0 means the last spot in the cycle.
- Checking the last digit can eliminate answer choices.

</section>
