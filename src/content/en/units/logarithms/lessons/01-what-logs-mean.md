---
title: "What Logarithms Mean"
summary: A logarithm asks what power of a base gives a number. Rewrite every log as an exponent equation.
minutes: 12
---

Suppose a bacteria colony doubles every hour. It starts with one cell. How many hours until it has 1,024 cells? You can find the answer by doubling over and over: 2, 4, 8, 16, and so on, until you reach 1,024 after 10 steps. But what if the question asked about 3 billion cells, or about a colony that triples? You need a name for "the power that gets you there." That name is **logarithm**, and once you can read it, a whole family of AMC 12 problems becomes friendly.

> **The big idea:** $\log_b x$ is **the exponent you put on $b$ to get $x$**. Every log statement is an exponent statement in disguise: $\log_b x = y$ means exactly the same thing as $b^y = x$.

## Reading the notation

In $\log_b x$, the small number $b$ is the **base**, and $x$ is the number you're trying to reach. Read $\log_2 8$ out loud as "log base 2 of 8," and then ask yourself the real question: "2 to what power is 8?" Since $2^3 = 8$, we get $\log_2 8 = 3$.

Here are a few more, each paired with its exponent form:

| Log form | Question it asks | Exponent form |
|---|---|---|
| $\log_3 81 = 4$ | 3 to what power is 81? | $3^4 = 81$ |
| $\log_{10} 1000 = 3$ | 10 to what power is 1000? | $10^3 = 1000$ |
| $\log_5 1 = 0$ | 5 to what power is 1? | $5^0 = 1$ |
| $\log_2 \frac{1}{8} = -3$ | 2 to what power is one eighth? | $2^{-3} = \frac{1}{8}$ |

Notice the last two rows. Any base to the power 0 is 1, so the log of 1 is always 0. Negative exponents make fractions, so logs of numbers between 0 and 1 are negative.

When the base is left off, as in $\log 100$, contests mean base 10. You may also see $\ln x$, the "natural log," which uses a special base called $e$, about 2.718. On the AMC you'll rarely need $e$ itself.

## Which inputs are allowed?

A positive base raised to any power always gives a positive result. So $\log_b x$ only makes sense when $x > 0$. The base must also be positive and not equal to 1, since every power of 1 is 1, and "1 to what power is 7?" has no answer. Keep these rules in mind when you solve equations, because they will throw out fake solutions.

## Example 1: Evaluating by rewriting

Find $\log_4 32$.

**What's the question really asking?** 4 to what power gives 32? That power isn't a whole number, since $4^2 = 16$ and $4^3 = 64$. So rewrite both numbers using a common base, 2.

Let $y = \log_4 32$. Then $4^y = 32$, which becomes $(2^2)^y = 2^5$, or $2^{2y} = 2^5$. Matching exponents gives $2y = 5$, so $y = \frac{5}{2}$.

**Check:** $4^{5/2}$ means the square root of 4, raised to the fifth power. That's $2^5 = 32$. It works.

Try one yourself. Find $\log_9 27$.

<details class="check"><summary>Show the answer</summary>

Let $9^y = 27$. Then $3^{2y} = 3^3$, so $2y = 3$ and $y = \frac{3}{2}$.

</details>

## Example 2: Solving for the input

Solve $\log_3 (x - 1) = 4$.

**What do we know?** Rewrite in exponent form: $3^4 = x - 1$. Since $3^4 = 81$, we get $x = 82$.

**Is it allowed?** The input is $82 - 1 = 81$, which is positive. Good.

## Example 3: Solving for the base

Solve $\log_x 64 = 3$ for $x$.

**What do we know?** In exponent form, $x^3 = 64$. The cube root of 64 is 4, since $4^3 = 64$. So $x = 4$.

**Is it allowed?** The base 4 is positive and not 1. Good. If the equation had been $\log_x 64 = 2$, then $x^2 = 64$ would give $x = 8$ or $x = -8$, and we would throw out $-8$ because a base can't be negative.

## Example 4: Logs that undo exponents

What is $5^{\log_5 7}$?

**What does $\log_5 7$ mean?** It's the power of 5 that gives 7. So if you raise 5 to that power, you get 7. The answer is 7.

This works for every allowed base: $b^{\log_b x} = x$ and $\log_b (b^y) = y$. Logs and exponents with the same base undo each other, the same way squaring and taking a square root undo each other for positive numbers.

Try one. Find $\log_2 (2^{17})$ and $10^{\log 3}$.

<details class="check"><summary>Show the answer</summary>

The first asks "2 to what power is $2^{17}$?" The answer is 17. The second is 10 raised to the power that turns 10 into 3, so it equals 3.

</details>

<section data-box="deeper">

## Going deeper

A log tells you roughly **how many digits** a number has. Since $10^2 = 100$ and $10^3 = 1000$, any number from 100 up to 999 has a base-10 log between 2 and 3. In general, a positive whole number $n$ has exactly $\lfloor \log n \rfloor + 1$ digits, where $\lfloor \cdot \rfloor$ means "round down."

**A harder one:** Between which two whole numbers does $\log_2 1000$ lie?

**What do we know?** Powers of 2 near 1000 are $2^9 = 512$ and $2^{10} = 1024$. Since 1000 is between them, $\log_2 1000$ is between 9 and 10, a bit less than 10.

This "trap it between powers" move is the quickest way to estimate any log without a calculator. You'll use it again in [the contest lesson](/pathway/logarithms/04-logs-in-contests/).

</section>

<section data-box="traps">

## Common traps

**Reading the log as a division or multiplication.** $\log_2 8$ is not $8 \div 2$ or $8 \times 2$. It is the exponent 3. Always say the question "2 to what power is 8?" in your head.

**Forgetting to check the inputs.** After solving, plug back in. If any log ends up with a zero or negative input, or a base that is negative or 1, that solution is fake.

**Thinking a log can't be negative.** The **input** must be positive, but the **output** can be anything. For example, $\log_{10} 0.01 = -2$.

**Mixing up the base and the input.** In $\log_x 64 = 3$, the unknown is the base, so the exponent form is $x^3 = 64$, not $3^x = 64$.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Any time you see "log," rewrite it as an exponent before doing anything else. Most early log problems on the AMC 12 fall apart after that one step.

**Use a common base.** When the base and the input are both powers of the same small number, such as 2 or 3, rewrite both and match exponents.

**Time:** A direct evaluation like these should take under a minute. If you're stuck, write $b^y = x$ and look again.

</section>

<section data-box="connections">

## Connections

This lesson leans on exponent rules and on the powers you met in [geometric sequences](/pathway/sequences-series/03-geometric-sequences/). Next, [the rules of logarithms](/pathway/logarithms/02-log-rules/) turn each exponent rule into a log rule.

</section>

<section data-box="summary">

## Remember this

- $\log_b x = y$ means $b^y = x$. Ask "$b$ to what power is $x$?"
- The input must be positive. The base must be positive and not 1.
- $\log_b 1 = 0$ and $\log_b b = 1$.
- $b^{\log_b x} = x$ and $\log_b (b^y) = y$.
- Rewrite with a common base to evaluate logs like $\log_4 32$.

</section>
