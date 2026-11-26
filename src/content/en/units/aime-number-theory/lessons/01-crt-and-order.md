---
title: "CRT and Multiplicative Order"
summary: Use the Chinese Remainder Theorem to combine conditions, and find the smallest power that returns to 1.
minutes: 15
---

What are the last three digits of $3^{2026}$? A calculator would show you a number with almost a thousand digits, and you'd need only the end of it. On the AIME, a question like this is worth the same as any other, and strong solvers finish it in a few minutes. They use two tools together. The first splits a hard modulus like 1000 into easy pieces. The second tells you exactly how often powers repeat.

> **The big idea:** The **Chinese Remainder Theorem** (CRT) says that knowing a number's remainders modulo a few pairwise coprime numbers is the same as knowing its remainder modulo their product. The **order** of $a$ modulo $n$ is the smallest positive $k$ with $a^k \equiv 1 \pmod n$, and every other power that gives 1 is a multiple of it.

## Why CRT works

Take the moduli 4 and 5. There are 20 possible pairs of remainders (one remainder mod 4, one mod 5), and there are 20 numbers from 0 to 19. Each of those 20 numbers produces one pair. If two different numbers $x$ and $y$ in that range produced the same pair, then both 4 and 5 would divide $x - y$, so 20 would divide it. That's impossible for two different numbers less than 20. So the 20 numbers produce 20 different pairs, which means every pair shows up exactly once.

The same argument works for any moduli that share no common factor. When they do share a factor, the conditions might contradict each other. For example, no number is even and also leaves remainder 1 when divided by 6.

## Example 1: Sieving for a solution

Find the smallest positive $n$ with $n \equiv 2 \pmod 3$, $n \equiv 3 \pmod 5$, and $n \equiv 2 \pmod 7$.

**What do we know?** The moduli 3, 5 and 7 are coprime, so CRT promises exactly one answer from 0 to 104.

**How do we find it fast?** Start with the largest modulus and list its numbers: 2, 9, 16, 23, 30, and so on. Now test each one against the other conditions. The number 2 leaves remainder 2 mod 5, so it fails. The number 9 fails mod 3. The number 16 leaves remainder 1 mod 3. Then 23 works for both, since $23 \equiv 2 \pmod 3$ and $23 \equiv 3 \pmod 5$.

So $n = 23$, and every solution has the form $23 + 105k$.

This method is called **sieving**. With moduli under about 20, it's often faster than any formula.

## Example 2: Splitting 1000

The modulus 1000 shows up constantly on the AIME, because "last three digits" means "remainder mod 1000." Since $1000 = 8 \times 125$ and those two factors are coprime, you can work mod 8 and mod 125 separately, then glue the answers with CRT.

Find the remainder when $7^{100}$ is divided by 1000.

**Mod 8:** $7 \equiv -1 \pmod 8$, so $7^{100} \equiv 1 \pmod 8$.

**Mod 125:** Euler's theorem from [Level 3](/pathway/modular-arithmetic/05-fermat-and-euler/) says that $a^{100} \equiv 1 \pmod{125}$ whenever $a$ is coprime to 125, because there are 100 numbers below 125 that are coprime to it. So $7^{100} \equiv 1 \pmod{125}$.

**Glue:** The number is 1 mod 8 and 1 mod 125, so it's 1 mod 1000. The last three digits of $7^{100}$ are 001.

Try one. What are the last three digits of $9^{100}$?

<details class="check"><summary>Show the answer</summary>

Mod 8, $9 \equiv 1$, so the power is 1. Mod 125, Euler gives 1 again. So the last three digits are 001. Any number coprime to 10, raised to the 100th power, ends in 001.

</details>

## What order means

List the powers of 2 mod 7: 2, 4, 1, 2, 4, 1, and so on. The cycle has length 3, so the **order** of 2 mod 7 is 3. Powers of 3 mod 7 go 3, 2, 6, 4, 5, 1, so its order is 6.

Here's the key fact. If $a^m \equiv 1 \pmod n$, then the order of $a$ divides $m$. Why? Write $m = qk + r$, where $k$ is the order and $0 \le r < k$. Then $a^m = (a^k)^q \cdot a^r \equiv a^r$. So $a^r \equiv 1$ too. But $k$ is the smallest positive power giving 1 and $r$ is smaller than $k$, so $r$ must be 0.

Combined with Euler's theorem, this means **the order always divides $\varphi(n)$**, the count of numbers from 1 to $n$ coprime to $n$. So you never need to search blindly. You only test the divisors.

## Example 3: The period of a decimal

How many digits are in the repeating block of the decimal for $\frac{1}{41}$?

**What's the question really asking?** The decimal for $\frac{1}{41}$ repeats with period $k$ exactly when $10^k \equiv 1 \pmod{41}$ for the first time. So we want the order of 10 mod 41.

**Which values can it be?** The order divides 40, so it's one of 1, 2, 4, 5, 8, 10, 20, 40. Test them in increasing order. $10^2 = 100 \equiv 18$. $10^4 \equiv 18^2 = 324 \equiv 37$. And $10^5 = 100000$, which is $41 \times 2439 + 1$. So the order is 5. Indeed, $\frac{1}{41} = 0.\overline{02439}$.

## Example 4: Order modulo a composite number

Find the smallest positive $k$ with $3^k \equiv 1 \pmod{1000}$.

**Split with CRT.** We need $3^k \equiv 1$ mod 8 and mod 125. The answer is the least common multiple of the two orders.

**Mod 8:** $3^2 = 9 \equiv 1$, so the order is 2.

**Mod 125:** The order divides 100. Mod 5, the powers of 3 go 3, 4, 2, 1, so the order mod 5 is already 4. That forces the order mod 125 to be a multiple of 4: one of 4, 20, or 100. Check $3^{20}$ mod 125. We have $3^5 = 243 \equiv -7$, so $3^{20} \equiv (-7)^4 = 2401 \equiv 26 \pmod{125}$. That's not 1, so the order is 100.

The answer is the least common multiple of 2 and 100, which is 100.

Now back to the hook. Since $3^{100} \equiv 1 \pmod{1000}$ and $2026 = 20 \times 100 + 26$, we have $3^{2026} \equiv 3^{26} \pmod{1000}$, which you can finish by repeated squaring.

<section data-box="deeper">

## Going deeper

Sometimes the order modulo $p$ equals $p - 1$, the largest it can be. Then the powers of $a$ run through every nonzero remainder before repeating, and $a$ is called a **primitive root**. For example, 3 is a primitive root mod 7. Primitive roots exist for every prime, which explains a useful fact: the equation $x^d \equiv 1 \pmod p$ has exactly $\gcd(d, p - 1)$ solutions.

**A harder one:** How many $x$ from 1 to 100 satisfy $x^{10} \equiv 1 \pmod{101}$? Since 101 is prime, the count is the greatest common divisor of 10 and 100.

<details class="check"><summary>Show the answer</summary>

There are 10 solutions. Every remainder is a power of a primitive root $g$, say $x = g^j$, and $g^{10j} \equiv 1$ exactly when 100 divides $10j$. That happens for $j = 0, 10, 20, \ldots, 90$, which is 10 values.

</details>

</section>

<section data-box="traps">

## Common traps

**Using CRT with moduli that share factors.** You can't split 24 as $4 \times 6$. Use prime powers: $24 = 8 \times 3$.

**Assuming the order equals $\varphi(n)$.** Euler's theorem tells you $a^{\varphi(n)} \equiv 1$, but a smaller power may work. The order of 10 mod 41 is 5, not 40.

**Forgetting that $a$ must be coprime to $n$.** Powers of 2 never return to 1 mod 8. For a number like $2^{50}$ mod 1000, handle the mod 8 part directly: it's 0.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** "Last three digits," "remainder when divided by 1000," and "smallest $n$ such that $n$ divides $a^n - 1$" all point here.

**How long it should take:** Splitting 1000 into 8 and 125 and gluing should take 3 or 4 minutes with practice. Sieving is fastest when you list multiples of the biggest modulus first.

**Checking:** After gluing, plug your answer back into each condition. That catches the most common slip, which is mixing up which remainder goes with which modulus.

</section>

<section data-box="connections">

## Connections

This lesson builds on [several conditions at once](/pathway/modular-arithmetic/03-several-conditions/) and [Fermat's and Euler's theorems](/pathway/modular-arithmetic/05-fermat-and-euler/). Next, the [Lifting the Exponent Lemma](/pathway/aime-number-theory/02-lifting-the-exponent/) tells you exactly how many times a prime divides $a^n - 1$. Orders come back in [number theory constructions](/pathway/aime-number-theory/05-nt-constructions/).

</section>

<section data-box="summary">

## Remember this

- Coprime moduli: remainders mod each one determine the remainder mod the product.
- Last three digits: work mod 8 and mod 125, then glue.
- The order of $a$ mod $n$ divides every exponent that gives 1, including $\varphi(n)$.
- To find an order, test only the divisors of $\varphi(n)$.
- The order mod a product is the least common multiple of the orders mod each prime power.

</section>
