---
title: "Fermat's and Euler's Theorems"
summary: Skip the search for a cycle by using Fermat's Little Theorem and Euler's theorem, which tell you a power that always leaves a remainder of 1.
minutes: 11
---

What's the remainder when $7^{200}$ is divided by 101? You know how to hunt for a cycle, but mod 101 you might have to write out dozens of powers before anything repeats. Here's the amazing part: the answer is 1, and you can know that before you do any calculation. A French lawyer named Pierre de Fermat noticed why in the 1600s.

> **The big idea:** If $p$ is prime, and $p$ doesn't divide $a$, then $a^{p-1} \equiv 1 \pmod p$. That's **Fermat's Little Theorem**. For a modulus that isn't prime, **Euler's theorem** does the same job, using a number called $\varphi(n)$.

## Why Fermat's theorem works

Take $p = 7$ and $a = 3$. Multiply each of the numbers 1 through 6 by 3, and look at the remainders mod 7:

| Number | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Times 3, mod 7 | 3 | 6 | 2 | 5 | 1 | 4 |

The bottom row is the top row, shuffled. Why can't a remainder repeat? If two numbers in the top row had the same remainder after multiplying by 3, then 3 times their difference would be a multiple of 7. But 7 is prime, and neither 3 nor that small difference has a factor of 7. So all six remainders are different, and both rows have the same product mod 7:

$$(3 \times 1)(3 \times 2)\cdots(3 \times 6) \equiv 1 \times 2 \times \cdots \times 6 \pmod 7$$

The left side has six 3s, so it's $3^6 \times 6!$. The right side is $6!$. Since 7 is prime, $6!$ has no factor of 7, so we're allowed to divide it away. That leaves $3^6 \equiv 1 \pmod 7$.

**Check:** $3^6 = 729 = 7 \times 104 + 1$. It works.

## Example 1: Using Fermat

What's the remainder when $3^{100}$ is divided by 7?

**What do we know?** Since 7 is prime, $3^6 \equiv 1$.

**What's the plan?** Break up the exponent, using 6. Since $100 = 6 \times 16 + 4$:

$$3^{100} = (3^6)^{16} \times 3^4 \equiv 1 \times 81 \pmod 7$$

Since $81 = 7 \times 11 + 4$, the remainder is 4.

Try one. What's the remainder when $5^{42}$ is divided by 11?

<details class="check"><summary>Show the answer</summary>

Since 11 is prime, $5^{10} \equiv 1$. And $42 = 10 \times 4 + 2$, so $5^{42} \equiv 5^2 = 25 \equiv 3 \pmod{11}$. The remainder is 3.

</details>

## Example 2: The opening problem

What's the remainder when $7^{200}$ is divided by 101?

**Is 101 prime?** Yes. And 101 doesn't divide 7.

**Apply it:** $7^{100} \equiv 1 \pmod{101}$. So $7^{200} = (7^{100})^2 \equiv 1$. The remainder is 1.

Notice that we didn't need to find the actual cycle. The cycle could be shorter than 100, but that doesn't matter: the theorem still gives a power that equals 1.

## Example 3: Counting with $\varphi$

Fermat's theorem needs a prime. For other numbers, we need a new tool.

The number $\varphi(n)$, said "fee of $n$," counts the numbers from 1 to $n$ that share no factor with $n$ other than 1.

For $n = 12$, those numbers are 1, 5, 7, and 11, so $\varphi(12) = 4$.

**A faster way:** For each prime $p$ that divides $n$, multiply by $\left(1 - \frac{1}{p}\right)$. Since 36 has the prime factors 2 and 3:

$$\varphi(36) = 36 \times \frac{1}{2} \times \frac{2}{3} = 12$$

**What about a prime?** Every number below a prime $p$ shares no factor with it, so $\varphi(p) = p - 1$. That's the exponent from Fermat's theorem.

## Example 4: Using Euler for last digits

**Euler's theorem** says that if $a$ and $n$ share no factors, then $a^{\varphi(n)} \equiv 1 \pmod n$.

What are the last two digits of $3^{85}$?

**What's the modulus?** The last two digits mean mod 100.

**What's $\varphi(100)$?** The primes are 2 and 5, so $100 \times \frac{1}{2} \times \frac{4}{5} = 40$.

**Apply it:** 3 shares no factors with 100, so $3^{40} \equiv 1$. Since $85 = 40 \times 2 + 5$:

$$3^{85} \equiv 3^5 = 243 \equiv 43 \pmod{100}$$

The last two digits are 43.

## Example 5: A contest-style question

What's the remainder when $1^6 + 2^6 + 3^6 + 4^6 + 5^6 + 6^6$ is divided by 7?

**What's the trick?** These numbers look too big to add comfortably, though you could. But each base from 1 to 6 shares no factor with 7, and the exponent is exactly $7 - 1$. So by Fermat's theorem, each term is 1 mod 7.

**Add them up:** That's six 1s, and the remainder is **6**.

**Check:** The real sum is 67,171, and $67{,}171 = 7 \times 9595 + 6$.

<section data-box="traps">

## Common traps

**Using a base that the prime divides.** The theorem requires that $p$ doesn't divide $a$. For example, $14^6$ mod 7 is 0, not 1.

**Using Fermat's theorem with a non-prime.** The number 9 isn't prime, and $2^8 = 256 = 9 \times 28 + 4$, so it's 4 mod 9, not 1. For 9, use $\varphi(9) = 6$ instead, and $2^6 = 64 = 9 \times 7 + 1$.

**Skipping the "no shared factors" check for Euler.** Since 2 and 12 share a factor, $2^4 = 16$ is 4 mod 12, not 1, even though $\varphi(12) = 4$.

**Reducing the exponent by $p$.** Divide the exponent by $p - 1$, not $p$.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for a giant exponent and a modulus that's prime, or a modulus such as 100.

**Try small first:** A short cycle is often faster than these theorems. Mod 8 or mod 10, write out the powers. Save Fermat's theorem for large primes such as 101.

**Know a few values:** $\varphi(10) = 4$, $\varphi(100) = 40$, and $\varphi(p) = p - 1$.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

This extends [giant powers](/pathway/modular-arithmetic/02-giant-powers/) from earlier in this unit. The count of numbers that share no factor uses [prime factorization](/pathway/primes-remainders/01-prime-factorization/).

</section>

<section data-box="summary">

## Remember this

- Fermat: $a^{p-1} \equiv 1 \pmod p$, if $p$ is prime and doesn't divide $a$.
- $\varphi(n)$ counts the numbers up to $n$ that share no factor with $n$.
- Euler: $a^{\varphi(n)} \equiv 1 \pmod n$, if $a$ and $n$ share no factors.
- Break the exponent into pieces of that size.
- A cycle might be shorter, and that's fine.

</section>
