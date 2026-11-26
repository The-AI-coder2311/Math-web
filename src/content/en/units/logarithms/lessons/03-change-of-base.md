---
title: "Change of Base and Log Equations"
summary: Switch between bases to compare logs, and solve equations where the unknown is in the exponent.
minutes: 13
---

What is $\log_2 3 \cdot \log_3 4 \cdot \log_4 5 \cdots \log_{31} 32$? That's thirty logs, each with a different base, and none of them is a whole number. Yet the whole product equals 5. The tool that reveals this is the change of base formula, which lets you rewrite any log using whatever base you like.

> **The big idea:** You can rewrite any log in any base you choose: $\log_b x = \dfrac{\log_c x}{\log_c b}$. Pick the base $c$ that makes the problem easiest, and logs with different bases start talking to each other.

## Why change of base works

Let $y = \log_b x$, so $b^y = x$. Now take the log base $c$ of both sides, and use the power rule:

$$\log_c (b^y) = \log_c x \quad\text{so}\quad y \log_c b = \log_c x$$

Divide by $\log_c b$, and you get $y = \dfrac{\log_c x}{\log_c b}$. The new base $c$ can be anything allowed: 10, 2, or whatever is convenient.

Two special cases come up constantly:

- **Flipping:** $\log_b x = \dfrac{1}{\log_x b}$. For example, $\log_8 2 = \frac{1}{3}$ because $\log_2 8 = 3$.
- **Chaining:** $\log_a b \cdot \log_b c = \log_a c$. The middle base cancels, like units in a conversion.

Now the hook. Write every factor with base 10. The product becomes

$$\frac{\log 3}{\log 2} \cdot \frac{\log 4}{\log 3} \cdot \frac{\log 5}{\log 4} \cdots \frac{\log 32}{\log 31}$$

Everything telescopes, leaving $\frac{\log 32}{\log 2} = \log_2 32 = 5$.

## Example 1: Evaluating with a common base

Find $\log_{27} 9$.

**What's the plan?** Both numbers are powers of 3. Change to base 3:

$$\log_{27} 9 = \frac{\log_3 9}{\log_3 27} = \frac{2}{3}$$

Try one yourself. Find $\log_{16} 8$.

<details class="check"><summary>Show the answer</summary>

Change to base 2: $\frac{\log_2 8}{\log_2 16} = \frac{3}{4}$.

</details>

## Example 2: Unknown in the exponent

Solve $2^{x+1} = 8^{x-1}$.

**What's the plan?** Both sides are powers of 2. Since $8 = 2^3$, the right side is $2^{3(x-1)}$. Equal powers of the same base have equal exponents:

$$x + 1 = 3x - 3 \quad\text{so}\quad x = 2$$

**Check:** $2^3 = 8$ and $8^1 = 8$. It works.

When the bases don't share a power, take a log of both sides. For instance, $3^x = 7$ gives $x = \log_3 7$, which you can leave in that form or write as $\frac{\log 7}{\log 3}$.

## Example 3: Mixed bases in one equation

Solve $\log_2 x + \log_4 x = 6$.

**What do we know?** The bases differ, so convert $\log_4 x$ to base 2:

$$\log_4 x = \frac{\log_2 x}{\log_2 4} = \frac{\log_2 x}{2}$$

Let $u = \log_2 x$. The equation becomes $u + \frac{u}{2} = 6$, so $\frac{3u}{2} = 6$ and $u = 4$. Then $x = 2^4 = 16$.

**Check:** $\log_2 16 = 4$ and $\log_4 16 = 2$, which add up to 6.

## Example 4: A quadratic in disguise

Solve $(\log_3 x)^2 - 3\log_3 x + 2 = 0$.

**What's the plan?** Replace $\log_3 x$ by a single letter $u$. Then $u^2 - 3u + 2 = 0$, which factors as $(u - 1)(u - 2) = 0$. So $u = 1$ or $u = 2$, which means $x = 3$ or $x = 9$.

**Check the inputs.** Both are positive, so both are real solutions. Their product is 27. That's no accident: the two values of $u$ add up to 3 by [Vieta's formulas](/pathway/algebra-toolkit/03-quadratics-and-vieta/), so the two values of $x$ multiply to $3^3 = 27$.

Try one. Solve $\log_x 16 = \log_2 x$ for $x > 1$.

<details class="check"><summary>Show the answer</summary>

Let $u = \log_2 x$. Then $\log_x 16 = \frac{\log_2 16}{\log_2 x} = \frac{4}{u}$. The equation $\frac{4}{u} = u$ gives $u^2 = 4$. Since $x > 1$, $u$ is positive, so $u = 2$ and $x = 4$.

</details>

## Example 5: Logs with letters for values

Suppose $\log_2 3 = t$. Write $\log_{12} 18$ in terms of $t$.

**What's the plan?** The problem gives us a fact in base 2, so change everything to base 2. Then factor each input into 2s and 3s:

$$\log_{12} 18 = \frac{\log_2 18}{\log_2 12}$$

Since $18 = 2 \cdot 3^2$, the top is $1 + 2t$. Since $12 = 2^2 \cdot 3$, the bottom is $2 + t$. So

$$\log_{12} 18 = \frac{1 + 2t}{2 + t}$$

**Sanity check.** We know $\log_2 3$ is a bit more than 1.5, since $2^{1.5}$ is about 2.83. Try $t = 1.6$: the formula gives $\frac{4.2}{3.6}$, about 1.17. And $12^{1.17}$ should be about 18, which is reasonable since $12^1 = 12$ and 18 is a little more. A quick estimate like this catches a flipped fraction.

## Choosing the best base

You can change to **any** base, but some choices make the work much shorter. Here's a rule of thumb that works on nearly every contest problem:

- If all the numbers are powers of one prime, use that prime as the base. Every log becomes a fraction of whole numbers.
- If the problem tells you the value of one log, such as $\log_2 3 = t$, use that log's base.
- If nothing is shared, use base 10 and keep the logs as symbols, hoping for cancellation, as in the hook.

The base is a tool you choose, not something the problem forces on you.

<section data-box="deeper">

## Going deeper

Change of base also proves a surprising identity that contests love: $a^{\log_b c} = c^{\log_b a}$. Take $\log_b$ of each side. The left side gives $\log_b c \cdot \log_b a$. The right side gives $\log_b a \cdot \log_b c$. They match.

**A harder one:** Find $4^{\log_2 3}$ and $9^{\log_3 5}$.

For the first, $4^{\log_2 3} = (2^2)^{\log_2 3} = (2^{\log_2 3})^2 = 3^2 = 9$. For the second, $9^{\log_3 5} = (3^{\log_3 5})^2 = 25$.

The pattern: when the outside base is a power of the log's base, pull that power out, and the log and exponent cancel.

</section>

<section data-box="traps">

## Common traps

**Flipping the fraction.** It's $\frac{\log x}{\log b}$, the log of the **input** on top. A quick test: $\log_2 8$ should be 3, and $\frac{\log 8}{\log 2}$ is 3, while $\frac{\log 2}{\log 8}$ is one third.

**Dividing inputs.** $\frac{\log 8}{\log 2}$ is not $\log 4$. Change of base divides **logs**, not inputs.

**Losing solutions when you divide by a log.** If $\log_2 x$ could be 0, don't divide by it. Move everything to one side and factor instead.

**Forgetting the base restriction.** In $\log_x 16$, the base $x$ can't be 1 or negative. Discard such answers.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Different bases in the same problem, or a product of logs whose bases and inputs overlap. Convert everything to one base, usually the smallest prime involved, or base 10 if nothing is shared.

**Substitute.** When the same log appears several times, call it $u$. Most log equations become linear or quadratic.

**Chain products.** A product like $\log_a b \cdot \log_b c \cdot \log_c d$ collapses to $\log_a d$ instantly.

</section>

<section data-box="connections">

## Connections

This builds on [the rules of logarithms](/pathway/logarithms/02-log-rules/) and uses [Vieta's formulas](/pathway/algebra-toolkit/03-quadratics-and-vieta/). Next, [logs in contest problems](/pathway/logarithms/04-logs-in-contests/) puts every tool together.

</section>

<section data-box="summary">

## Remember this

- $\log_b x = \dfrac{\log_c x}{\log_c b}$ for any allowed base $c$.
- $\log_b x = \dfrac{1}{\log_x b}$ and $\log_a b \cdot \log_b c = \log_a c$.
- Equal powers of the same base have equal exponents.
- Substitute $u$ for a repeated log to get a simpler equation.
- Check every answer against the base and input rules.

</section>
