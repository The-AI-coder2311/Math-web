---
title: "The Rules of Logarithms"
summary: Products become sums, quotients become differences, and powers come down. Every rule comes from an exponent rule.
minutes: 12
---

What is $\log_6 4 + \log_6 9$? Neither log is a nice number on its own. Four isn't a whole power of 6, and neither is 9. But their sum is exactly 2. The reason is a rule that turns adding logs into multiplying their inputs, and it comes straight from an exponent rule you already know.

> **The big idea:** Logs are exponents, so **log rules are exponent rules** in disguise. Multiplying numbers adds their exponents, so $\log_b (xy) = \log_b x + \log_b y$. Dividing subtracts, and raising to a power multiplies.

## The three rules and where they come from

Let $\log_b x = m$ and $\log_b y = n$. In exponent form, $x = b^m$ and $y = b^n$.

**Product rule.** Multiply: $xy = b^m \cdot b^n = b^{m+n}$. So the exponent that gives $xy$ is $m + n$:

$$\log_b (xy) = \log_b x + \log_b y$$

**Quotient rule.** Divide: $\frac{x}{y} = b^{m-n}$. So:

$$\log_b \frac{x}{y} = \log_b x - \log_b y$$

**Power rule.** Raise $x$ to the power $k$: $x^k = (b^m)^k = b^{mk}$. So:

$$\log_b (x^k) = k \log_b x$$

You never need to memorize these. If you forget one, write $x = b^m$ and redo the two-line argument.

Now back to the hook. By the product rule, $\log_6 4 + \log_6 9 = \log_6 36$. Since $6^2 = 36$, the answer is 2.

## Example 1: Combining into one log

Simplify $\log_2 40 - \log_2 5$.

**What's the plan?** A difference of logs with the same base is the log of a quotient:

$$\log_2 40 - \log_2 5 = \log_2 \frac{40}{5} = \log_2 8 = 3$$

Try one yourself. Simplify $\log_3 18 + \log_3 \frac{3}{2}$.

<details class="check"><summary>Show the answer</summary>

Multiply the inputs: $18 \times \frac{3}{2} = 27$. So the sum is $\log_3 27 = 3$.

</details>

## Example 2: Bringing powers down

Find $\log_5 \sqrt{125}$.

**What do we know?** A square root is the power one half, and $125 = 5^3$. So $\sqrt{125} = 5^{3/2}$, and the power rule gives

$$\log_5 5^{3/2} = \frac{3}{2} \log_5 5 = \frac{3}{2}$$

## Example 3: Writing a log in terms of given pieces

Suppose $\log 2 = a$ and $\log 3 = b$, using base 10. Write $\log 72$ and $\log 15$ in terms of $a$ and $b$.

**What's the plan?** Factor the input into the pieces you know.

For 72: $72 = 2^3 \cdot 3^2$, so $\log 72 = 3\log 2 + 2\log 3 = 3a + 2b$.

For 15: there's no 5 in our list, but $5 = \frac{10}{2}$, and $\log 10 = 1$. So $\log 15 = \log 3 + \log 10 - \log 2 = b + 1 - a$.

That trick of writing 5 as 10 over 2 shows up constantly in base-10 problems.

## Example 4: A long product that collapses

Find $\log_2 \frac{2}{1} + \log_2 \frac{3}{2} + \log_2 \frac{4}{3} + \cdots + \log_2 \frac{64}{63}$.

**What's the plan?** Adding logs means multiplying inputs, so this sum is the log of one big product:

$$\frac{2}{1} \cdot \frac{3}{2} \cdot \frac{4}{3} \cdots \frac{64}{63}$$

Every top number cancels with the next bottom number. This is [telescoping](/pathway/algebra-toolkit/04-add-one-and-telescoping/). Only 64 on top and 1 on the bottom survive. So the sum is $\log_2 64 = 6$.

Try one. Find the sum $\log_{10} \frac{2}{1} + \log_{10} \frac{3}{2} + \cdots + \log_{10} \frac{100}{99}$.

<details class="check"><summary>Show the answer</summary>

The product telescopes to $\frac{100}{1}$, so the sum is $\log_{10} 100 = 2$.

</details>

## Example 5: Breaking an expression apart

Suppose $\log_{10} a = 2$ and $\log_{10} b = 6$. Find $\log_{10} \dfrac{a^3}{\sqrt{b}}$.

**What's the plan?** This time we run the rules forward, splitting one log into pieces we know. The quotient rule separates top and bottom, and the power rule brings each exponent down. Remember that a square root is the power one half.

$$\log_{10} \frac{a^3}{\sqrt{b}} = 3\log_{10} a - \frac{1}{2}\log_{10} b$$

Now substitute: $3 \times 2 - \frac{1}{2} \times 6 = 6 - 3 = 3$.

**Check it another way.** The given facts say $a = 100$ and $b = 10^6$. Then $a^3 = 10^6$ and $\sqrt{b} = 10^3$, so the fraction is $10^3$, whose log is 3. Both routes agree.

This "split, then substitute" move is the reverse of combining. Use combining when the separate logs are ugly, and splitting when the separate logs are what you were given.

## Why there's no sum rule

It's tempting to think $\log (x + y)$ should break apart somehow. Test it with numbers. Take $x = y = 50$ in base 10. Then $\log (50 + 50) = \log 100 = 2$. But $\log 50 + \log 50 = \log 2500$, which is between 3 and 4. They don't match, so no simple sum rule exists. The rules work for products because multiplying powers of the same base adds exponents. Adding powers has no such shortcut, since $10^2 + 10^3$ is not a power of 10 at all.

<section data-box="deeper">

## Going deeper

The rules also run in reverse, which is often the more useful direction on contests. When you see a coefficient in front of a log, you can push it into the input as a power.

**A harder one:** Solve $2\log_3 x = \log_3 (x + 6)$.

**What's the plan?** Move the 2 inside: $\log_3 (x^2) = \log_3 (x + 6)$. Two logs with the same base are equal only when their inputs are equal, so $x^2 = x + 6$. That's $x^2 - x - 6 = 0$, which factors as $(x - 3)(x + 2) = 0$.

**Check the inputs.** $x = 3$ works. But $x = -2$ would make $\log_3 x$ the log of a negative number, which isn't allowed in the original equation. So the only solution is $x = 3$.

Notice what happened: the rewritten equation $\log_3 (x^2)$ accepts $x = -2$, but the original doesn't. Rewriting can quietly widen the allowed inputs, so always check in the **original** equation.

</section>

<section data-box="traps">

## Common traps

**The log of a sum.** There's no rule for $\log (x + y)$. It is not $\log x + \log y$. The product rule is about $\log (xy)$.

**The quotient of logs.** $\frac{\log 8}{\log 2}$ is not $\log 4$. A **quotient of logs** is a different idea, which you'll meet in [change of base](/pathway/logarithms/03-change-of-base/). In fact, $\frac{\log 8}{\log 2} = 3$.

**Squaring the log instead of the input.** $\log (x^2) = 2\log x$, but $(\log x)^2$ is something else entirely. Watch the parentheses.

**Mixing bases.** The rules only combine logs with the **same** base. To add $\log_2 x$ and $\log_4 y$, first convert one of them.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Several logs with the same base that aren't nice numbers alone. Combine them into one log, and the input often turns out to be a perfect power.

**Factor into primes.** When a problem gives you $\log 2$ and $\log 3$, factor every input into 2s, 3s, and 10s.

**Always check.** In equations, list the allowed inputs before you start, and test every answer at the end.

</section>

<section data-box="connections">

## Connections

These rules come from [what logarithms mean](/pathway/logarithms/01-what-logs-mean/). Telescoping products come from the [algebra toolkit](/pathway/algebra-toolkit/04-add-one-and-telescoping/). Next, [change of base](/pathway/logarithms/03-change-of-base/) lets you work with logs that have different bases.

</section>

<section data-box="summary">

## Remember this

- $\log_b (xy) = \log_b x + \log_b y$
- $\log_b \frac{x}{y} = \log_b x - \log_b y$
- $\log_b (x^k) = k \log_b x$
- There is no rule for the log of a sum.
- Rewriting can let in fake solutions, so check in the original equation.

</section>
