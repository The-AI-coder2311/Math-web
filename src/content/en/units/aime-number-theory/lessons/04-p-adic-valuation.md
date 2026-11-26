---
title: "Prime Powers in Factorials and Binomials"
summary: Track the exact power of a prime in a product, a factorial, or a binomial coefficient with Legendre's and Kummer's theorems.
minutes: 14
---

Is $\binom{100}{50}$ divisible by 9? By 27? By 81? The number has 30 digits, but you can answer all three questions in about a minute without computing it. The trick is to stop thinking about the number itself and think only about how many factors of 3 it contains.

As in the [LTE lesson](/pathway/aime-number-theory/02-lifting-the-exponent/), $v_p(m)$ means the exponent of the prime $p$ in $m$. Its most useful property is that it turns products into sums: $v_p(ab) = v_p(a) + v_p(b)$. That's why it's perfect for factorials, which are long products.

> **The big idea:** **Legendre's formula** counts the factors of $p$ in $n!$ by adding $\lfloor n/p \rfloor + \lfloor n/p^2 \rfloor + \lfloor n/p^3 \rfloor + \cdots$. **Kummer's theorem** says $v_p\binom{m+n}{m}$ equals the number of **carries** when you add $m$ and $n$ in base $p$.

## Why Legendre's formula works

In [Level 2](/pathway/primes-remainders/05-factorial-zeros/), you counted factors of 5 in a factorial. Here's the same idea in general. Each number from 1 to $n$ contributes its own factors of $p$. Picture giving each multiple of $p$ one token, each multiple of $p^2$ a second token, each multiple of $p^3$ a third, and so on. A number like $p^2 \times 7$ gets exactly two tokens, which is exactly its number of factors of $p$.

Now count the tokens by round instead of by number. In round 1, every multiple of $p$ gets a token, and there are $\lfloor n/p \rfloor$ of them. In round 2, there are $\lfloor n/p^2 \rfloor$, and so on. Adding the rounds gives the formula.

## Example 1: Factors of 2 in 50 factorial

Find the largest $k$ such that $2^k$ divides $50!$.

**Add the rounds.** The quotients are 25, 12, 6, 3, and 1, for powers 2, 4, 8, 16, and 32. Then 64 is larger than 50, so we stop.

$$25 + 12 + 6 + 3 + 1 = 47$$

So $k = 47$.

**A shortcut.** There's a beautiful second formula: $v_p(n!) = \frac{n - s_p(n)}{p - 1}$, where $s_p(n)$ is the sum of the digits of $n$ written in base $p$. In base 2, 50 is written 110010, with digit sum 3. So $v_2(50!) = 50 - 3 = 47$. It matches.

Try one. How many zeros are at the end of $1000!$?

<details class="check"><summary>Show the answer</summary>

Count factors of 5, since there are always more factors of 2. The quotients are 200, 40, 8, and 1, so the answer is $200 + 40 + 8 + 1 = 249$.

</details>

## Example 2: Working backward

What's the smallest $n$ such that $n!$ ends in at least 100 zeros?

**Estimate.** Each block of 5 numbers gives one factor of 5, plus extra ones from multiples of 25 and 125. So $v_5(n!)$ is a little less than $\frac{n}{4}$, and $n$ is a bit more than 400.

**Test.** For $n = 400$: $80 + 16 + 3 = 99$. That's one short. The next multiple of 5 is 405, which adds one more factor: $81 + 16 + 3 = 100$. Since $v_5(n!)$ only changes at multiples of 5, the answer is 405.

Notice that the count jumped from 99 straight to 100 here, but at 425 it would jump by 2, since 425 is a multiple of 25. Some zero counts are skipped entirely, which is a classic AIME question.

## Binomial coefficients

Since $\binom{m+n}{m} = \frac{(m+n)!}{m!\,n!}$, Legendre's formula gives

$$v_p\binom{m+n}{m} = v_p((m+n)!) - v_p(m!) - v_p(n!)$$

That's three sums to compute. Kummer's theorem gives the same answer faster.

## Example 3: The hook

Find the largest $k$ such that $3^k$ divides $\binom{100}{50}$.

**Write 50 in base 3.** $50 = 27 + 2 \times 9 + 3 + 2$, so 50 is $1212$ in base 3.

**Add $1212 + 1212$ in base 3, column by column from the right.**

- $2 + 2 = 4$, which is 1 with a carry.
- $1 + 1 + 1 = 3$, which is 0 with a carry.
- $2 + 2 + 1 = 5$, which is 2 with a carry.
- $1 + 1 + 1 = 3$, which is 0 with a carry.

That's 4 carries, so $v_3\binom{100}{50} = 4$. So the number is divisible by 81 but not by 243.

**Check with Legendre.** $v_3(100!) = 33 + 11 + 3 + 1 = 48$ and $v_3(50!) = 16 + 5 + 1 = 22$. Then $48 - 22 - 22 = 4$. The two methods agree.

## Example 4: Odd binomial coefficients

How many of the numbers $\binom{20}{0}, \binom{20}{1}, \ldots, \binom{20}{20}$ are odd?

**Use Kummer with $p = 2$.** $\binom{20}{k}$ is odd exactly when adding $k$ and $20 - k$ in base 2 has no carries. That happens exactly when every 1 in $k$ sits where 20 also has a 1. This is called **Lucas's theorem**.

In base 2, 20 is written 10100, which has two 1s. Each of those positions can be on or off in $k$, so there are $2^2 = 4$ choices: $k = 0, 4, 16, 20$.

In general, row $n$ of Pascal's triangle has $2^{(\text{number of 1s in } n)}$ odd entries. That explains the fractal pattern you get by coloring odd entries.

<section data-box="deeper">

## Going deeper

**A harder one:** For how many $n$ from 1 to 100 is $\binom{2n}{n}$ not divisible by 3?

By Kummer, we need no carries when adding $n + n$ in base 3. A carry happens in a column exactly when that digit of $n$ is 2. So we need every base 3 digit of $n$ to be 0 or 1.

Numbers below $81 = 3^4$ have at most four base 3 digits, which gives $2^4 = 16$ choices including 0, so 15 positive ones. From 81 to 100, the base 3 form is $1abcd$ with value at most $10201$. That forces $a = 0$, and $b$, $c$, $d$ can each be 0 or 1, giving 8 more. The answer is 23.

</section>

<section data-box="traps">

## Common traps

**Counting only multiples of $p$.** In $50!$, the number 48 has four factors of 2, not one. Legendre's later rounds account for that.

**Forgetting carries that come from a carry.** In Example 3, the second column was $1 + 1 + 1$, because of the carry from the first column. Include the carry when deciding whether the next column carries.

**Using a composite $p$.** Legendre and Kummer work only for primes. For powers of 6, compute $v_2$ and $v_3$ separately and take the smaller one, after dividing by the needed exponents.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** "Largest power of $p$ dividing," "how many zeros at the end," or "how many entries are odd" in Pascal's triangle.

**How long it should take:** Legendre sums take under a minute. Converting to base $p$ is usually the slowest step, so practice it.

**Checking:** Use both Legendre and Kummer on binomial coefficients. They're independent methods, so if they agree, you're right.

</section>

<section data-box="connections">

## Connections

This lesson grows out of [zeros at the end of a factorial](/pathway/primes-remainders/05-factorial-zeros/) and [Pascal's triangle](/pathway/advanced-counting/01-pascal-and-binomials/). Base conversion comes from [numbers in other bases](/pathway/modular-arithmetic/04-other-bases/). Next, put everything together in [number theory constructions](/pathway/aime-number-theory/05-nt-constructions/).

</section>

<section data-box="summary">

## Remember this

- $v_p$ turns products into sums.
- Legendre: $v_p(n!)$ is the sum of $\lfloor n/p^i \rfloor$ over all $i \ge 1$.
- Shortcut: $v_p(n!) = \frac{n - s_p(n)}{p - 1}$, with $s_p$ the base $p$ digit sum.
- Kummer: $v_p\binom{m+n}{m}$ is the number of carries in $m + n$ in base $p$.
- $\binom{n}{k}$ is odd exactly when the 1s of $k$ in base 2 are a subset of the 1s of $n$.

</section>
