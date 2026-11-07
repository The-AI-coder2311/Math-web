---
title: "Geometric Sequences"
summary: Work with lists that multiply by the same number each time, add them up with a neat trick, and even add up lists that never end.
minutes: 13
---

Would you rather have one million dollars today, or a penny today, two pennies tomorrow, four the next day, and so on for 30 days? Most people pick the million, and most people lose out. Those doubling pennies add up to more than ten million dollars. Lists that multiply grow astonishingly fast, and you need your own tools for working with them.

> **The big idea:** A **geometric sequence** multiplies by the same number, called the **common ratio**, at each step. The $n$th term is the first term times the ratio, used $n - 1$ times.

## Why the formula works

Take the list 3, 6, 12, 24, 48, where the ratio is 2. Write each term using the first one:

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Term | 3 | 6 | 12 | 24 | 48 |
| Built from the first term | $3$ | $3 \times 2$ | $3 \times 2^2$ | $3 \times 2^3$ | $3 \times 2^4$ |

It's the same step-counting idea as before, except that each step multiplies rather than adds. If the first term is $a$ and the ratio is $r$, then:

$$n\text{th term} = a \times r^{n - 1}$$

To find the ratio, divide any term by the one before it. A ratio can be a fraction, which makes the list shrink: 81, 27, 9, 3 has a ratio of $\frac{1}{3}$.

## Example 1: A far-away term

What's the 8th term of 3, 6, 12, ...?

**What do we know?** The first term is 3, and the ratio is 2. There are 7 steps to the 8th term.

$$3 \times 2^7 = 3 \times 128 = 384$$

Try one. A ball is dropped from a height of 81 feet. Each bounce reaches $\frac{2}{3}$ of the height before it. How high does it go on its 2nd bounce?

<details class="check"><summary>Show the answer</summary>

The first bounce reaches $81 \times \frac{2}{3} = 54$ feet. The second reaches $54 \times \frac{2}{3} = 36$ feet.

</details>

## Example 2: Working from two terms

In a geometric sequence, the 2nd term is 12, and the 5th term is 96. What's the first term?

**What's the plan?** From the 2nd term to the 5th is 3 steps, so the term gets multiplied by $r$ three times. The total change is $96 \div 12 = 8$. So $r \times r \times r = 8$, which means $r = 2$.

**Going backwards:** The first term is one step before the 2nd, so it's $12 \div 2 = 6$.

Notice the parallel with arithmetic sequences: where you subtracted and divided there, you divide and take a root here.

## Why the sum trick works

What is $1 + 2 + 4 + 8 + 16$? Call that sum $S$. Now double it:

$$2S = 2 + 4 + 8 + 16 + 32$$

Look at what happens if you subtract the original from the doubled version. Nearly everything matches and cancels. Only the 32 and the 1 are left:

$$2S - S = 32 - 1$$

So $S = 31$. Check by adding: $1 + 2 + 4 + 8 + 16 = 31$. It works. This trick of **multiplying by the ratio and subtracting** works for every geometric sequence. Notice that the sum of powers of 2 is always one less than the next power of 2.

## Example 3: A sum of powers

What is $1 + 2 + 4 + \cdots + 512$?

**What's the shortcut?** Since 512 is a power of 2, and the next power of 2 is 1024, the sum is $1024 - 1 = 1023$.

The same trick works with other ratios. For $1 + 3 + 9 + 27$, multiplying by 3 and subtracting gives $3S - S = 81 - 1$, so $2S = 80$ and $S = 40$.

## Example 4: A list that never ends

Can you add up a list that goes on forever? Picture walking toward a wall. First you walk half of the way, then half of the remaining distance, then half of that. You take infinitely many steps, but you never pass the wall, so:

$$\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = 1$$

If the ratio is between $-1$ and 1, the terms shrink toward zero, and the sum settles at a value. To find it, use the same trick. Let $S = \frac{1}{3} + \frac{1}{9} + \frac{1}{27} + \cdots$. Multiply by 3:

$$3S = 1 + \frac{1}{3} + \frac{1}{9} + \cdots = 1 + S$$

So $2S = 1$, and $S = \frac{1}{2}$. In general, an endless sum with first term $a$ and ratio $r$ equals $\frac{a}{1 - r}$. Test that here: $\frac{1}{3} \div \frac{2}{3}$ is $\frac{1}{2}$. It matches.

## Example 5: A contest-style question

A square has an area of 64. Join the midpoints of its sides to make a smaller square inside it. Do the same to that square, and keep going forever. If you add up the areas of all of the squares, counting each one in full, what's the sum?

![A square with a second square drawn by joining the midpoints of its sides, and a third square inside that one. Each new square has half the area of the one around it: 64, then 32, then 16.](/images/sequences-midpoint-squares.svg)

**What's the ratio?** Each new square has half of the area of the one around it. You can see it in the picture: the four corner triangles exactly match the four triangles inside the new square.

**What's the sum?** The areas are 64, 32, 16, and so on, with $a = 64$ and $r = \frac{1}{2}$:

$$\frac{64}{1 - \frac{1}{2}} = 128$$

<section data-box="deeper">

## Going deeper

A repeating decimal is a geometric series in disguise, and that lets you turn it into a fraction.

**A harder one:** Write $0.272727...$ as a fraction.

**See the series.** Split the decimal into its repeating blocks:

$0.272727... = 0.27 + 0.0027 + 0.000027 + \cdots$

Each term is $\frac{1}{100}$ of the one before. So the first term is $\frac{27}{100}$, and the ratio is $\frac{1}{100}$.

**Use the formula:**

$\frac{\frac{27}{100}}{1 - \frac{1}{100}} = \frac{\frac{27}{100}}{\frac{99}{100}} = \frac{27}{99} = \frac{3}{11}$

**The pattern:** A repeating block of 2 digits sits over 99. A block of 3 digits sits over 999. That's why $0.\overline{1} = \frac{1}{9}$, and it even explains something strange: $0.\overline{9} = \frac{9}{9} = 1$. So 0.999... and 1 are exactly the same number.

Try this. Write $0.454545...$ as a fraction in lowest terms.

<details class="check"><summary>Show the answer</summary>

It's $\frac{45}{99} = \frac{5}{11}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Using $n$ instead of $n - 1$ for the exponent.** The 8th term of 3, 6, 12 is $3 \times 2^7$. Using $2^8$ gives 768, which is the 9th term.

**Multiplying before using the exponent.** $3 \times 2^7$ means to find $2^7$ first, and then multiply by 3. It isn't $6^7$, which is far too large.

**Using the endless formula when the ratio is too big.** The list $1 + 2 + 4 + \cdots$ grows forever, so it has no sum. The formula only works if the terms shrink.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "doubles," "triples," "half of the remaining," "each bounce," or areas that shrink by the same fraction.

**Is it arithmetic or geometric?** Check the differences, and then check the ratios. Three numbers $a$, $b$, $c$ are geometric when $b^2 = ac$.

**Time:** One to two minutes. Knowing the powers of 2 up to $2^{10} = 1024$ saves a lot of time.

**Estimating:** Doubling 10 times is about 1,000 times as much.

</section>

<section data-box="connections">

## Connections

This uses [exponents](/pathway/primes-remainders/01-prime-factorization/) and [fractions of fractions](/pathway/fractions-ratios/01-equal-groups/). The next lesson covers lists built by [other kinds of rules](/pathway/sequences-series/04-recursive-and-special/).

</section>

<section data-box="summary">

## Remember this

- Each step multiplies by the common ratio.
- $n$th term = first × ratio to the power of $(n - 1)$.
- To add one up: multiply by the ratio and subtract.
- $1 + 2 + \cdots + 2^n$ is one less than $2^{n + 1}$.
- Endless sum = $\frac{a}{1 - r}$, if the terms shrink.

</section>
