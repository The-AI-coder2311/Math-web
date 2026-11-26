---
title: "Lifting the Exponent Lemma"
summary: Find exactly how many times a prime divides expressions like a^n - b^n or a^n + b^n.
minutes: 14
---

How many factors of 3 are in $4^{27} - 1$? The number has 17 digits, so dividing by 3 over and over is a miserable plan. There's a formula that answers it in one line: the answer is 4. In this lesson, you'll learn that formula, see where it comes from, and learn the one special case that trips people up, which is the prime 2.

We write $v_p(m)$ for the exponent of the prime $p$ in $m$. For example, $v_2(40) = 3$ because $40 = 2^3 \times 5$, and $v_3(40) = 0$.

> **The big idea:** If $p$ is an odd prime that divides $a - b$, but $p$ doesn't divide $a$ or $b$, then $v_p(a^n - b^n) = v_p(a - b) + v_p(n)$. The exponent of $p$ in the difference of powers is the exponent in $a - b$, "lifted" by the exponent in $n$. This is the **Lifting the Exponent Lemma**, or LTE.

## Why it works

Start with the factorization you already know:

$$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \cdots + b^{n-1})$$

The first factor contributes $v_p(a - b)$. So the question is what the second factor contributes.

Since $p$ divides $a - b$, we have $a \equiv b \pmod p$. In the long second factor, every term is then congruent to $b^{n-1}$, and there are $n$ terms. So the second factor is congruent to $n b^{n-1} \pmod p$.

- If $p$ doesn't divide $n$, the second factor isn't divisible by $p$ at all. So $v_p(a^n - b^n) = v_p(a - b)$, which matches the formula, since $v_p(n) = 0$.
- If $n = p$, a slightly longer computation shows that the second factor has exactly one factor of $p$ when $p$ is odd. So raising to the power $p$ adds exactly 1 to the exponent.

Any $n$ can be built from those two steps: raise to the power $p$ once for each factor of $p$ in $n$, and to a power coprime to $p$ for the rest. Each power of $p$ adds 1, and nothing else adds anything. That's the formula.

## Example 1: The hook

How many factors of 3 are in $4^{27} - 1$?

**Check the conditions.** Here $a = 4$, $b = 1$, $p = 3$. The prime 3 divides $4 - 1 = 3$, and it doesn't divide 4 or 1. Good.

**Apply LTE.** $v_3(4 - 1) = 1$ and $v_3(27) = 3$, so

$$v_3(4^{27} - 1) = 1 + 3 = 4$$

Try one. How many factors of 5 are in $6^{100} - 1$?

<details class="check"><summary>Show the answer</summary>

The prime 5 divides $6 - 1 = 5$ once, and $100 = 4 \times 25$ has two factors of 5. So the answer is $1 + 2 = 3$.

</details>

## Example 2: When $p$ doesn't divide $a - b$ yet

How many factors of 7 are in $2^{42} - 1$?

**What's the problem?** The prime 7 doesn't divide $2 - 1$, so we can't apply LTE directly.

**Find a power that works.** The order of 2 mod 7 is 3, since $2^3 = 8$. So rewrite:

$$2^{42} - 1 = 8^{14} - 1$$

Now 7 divides $8 - 1 = 7$ exactly once, and $v_7(14) = 1$. So the answer is $1 + 1 = 2$.

This trick is the bridge to the [previous lesson](/pathway/aime-number-theory/01-crt-and-order/): first use the order to make $a - b$ divisible by $p$, then lift.

## The sum version

When $n$ is odd, $a^n + b^n = a^n - (-b)^n$. So if an odd prime $p$ divides $a + b$, you get

$$v_p(a^n + b^n) = v_p(a + b) + v_p(n) \quad \text{for odd } n$$

## Example 3: A sum of powers

How many factors of 3 are in $2^{81} + 1$?

**Check the conditions.** The exponent 81 is odd, and 3 divides $2 + 1 = 3$ once. Also $81 = 3^4$.

$$v_3(2^{81} + 1) = 1 + 4 = 5$$

## The prime 2 is different

Try the formula on $3^2 - 1 = 8$. It would predict $v_2(3 - 1) + v_2(2) = 1 + 1 = 2$, but $8 = 2^3$. The formula fails! When $p = 2$ and $n = 2$, the second factor is $a + b$, and $a + b$ can have several factors of 2.

The correct version for $p = 2$: if $a$ and $b$ are odd and $n$ is **even**, then

$$v_2(a^n - b^n) = v_2(a - b) + v_2(a + b) + v_2(n) - 1$$

If $n$ is odd, then $v_2(a^n - b^n) = v_2(a - b)$.

## Example 4: Powers of 3 minus 1

Find the largest $k$ such that $2^k$ divides $3^{64} - 1$.

**Which version?** The prime is 2, and the exponent 64 is even. So use the special formula with $a = 3$ and $b = 1$:

- $v_2(3 - 1) = 1$
- $v_2(3 + 1) = 2$
- $v_2(64) = 6$

That gives $1 + 2 + 6 - 1 = 8$, so $k = 8$.

**Sanity check with small cases.** $3^2 - 1 = 8$ has three factors of 2, and the formula gives $1 + 2 + 1 - 1 = 3$. And $3^4 - 1 = 80$ has four, while the formula gives $1 + 2 + 2 - 1 = 4$. Both match.

<section data-box="deeper">

## Going deeper

LTE is often used backward. Instead of computing $v_p$, you're told it and asked for $n$.

**A harder one:** Find the smallest positive $n$ such that $2^{10}$ divides $3^n - 1$.

**Think about parity first.** If $n$ is odd, then $v_2(3^n - 1) = v_2(2) = 1$, which is far too small. So $n$ is even, and

$$v_2(3^n - 1) = 1 + 2 + v_2(n) - 1 = 2 + v_2(n)$$

We need $2 + v_2(n) \ge 10$, so $v_2(n) \ge 8$. The smallest such $n$ is $2^8 = 256$.

Notice how LTE also tells you the order of 3 modulo $2^{10}$ without listing any powers. That connection between LTE and order is a favorite on the AIME.

</section>

<section data-box="traps">

## Common traps

**Using the odd formula for $p = 2$.** Always switch to the special formula with the extra $v_2(a + b) - 1$ when the prime is 2 and $n$ is even.

**Forgetting to check that $p$ divides $a - b$.** For $v_5(2^{20} - 1)$, the prime 5 doesn't divide $2 - 1$. First use the order of 2 mod 5, which is 4, and rewrite the expression as $16^5 - 1$.

**Applying the sum version with even $n$.** For $a^n + b^n$ with $n$ even, the formula doesn't apply. Often $p$ doesn't divide the sum at all. For instance, $5^2 + 1 = 26$ has no factor of 3, even though 3 divides $5 + 1$.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** "Largest $k$ such that $p^k$ divides," or "smallest $n$ such that $p^k$ divides $a^n - 1$." Expressions like $a^n \pm b^n$ with big exponents.

**How long it should take:** Once you check the conditions, the computation takes seconds. Spend your time on the conditions.

**Checking:** Test the formula on a tiny exponent first, such as $n = 1$ or $n = p$, where you can compute by hand. If it fails there, you've misapplied a condition.

</section>

<section data-box="connections">

## Connections

LTE pairs with [orders and CRT](/pathway/aime-number-theory/01-crt-and-order/). Next, you'll use $v_p$ to count prime powers in factorials in [prime powers in factorials and binomials](/pathway/aime-number-theory/04-p-adic-valuation/). For background, see [giant powers](/pathway/modular-arithmetic/02-giant-powers/).

</section>

<section data-box="summary">

## Remember this

- $v_p(m)$ is the exponent of $p$ in $m$.
- Odd $p$ dividing $a - b$: $v_p(a^n - b^n) = v_p(a - b) + v_p(n)$.
- Odd $p$ dividing $a + b$, odd $n$: $v_p(a^n + b^n) = v_p(a + b) + v_p(n)$.
- For $p = 2$ and even $n$: add $v_2(a - b)$, $v_2(a + b)$, and $v_2(n)$, then subtract 1.
- If $p$ doesn't divide $a - b$, use the order to rewrite the power first.

</section>
