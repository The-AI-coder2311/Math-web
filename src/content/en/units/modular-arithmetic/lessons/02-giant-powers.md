---
title: "Giant Powers"
summary: Find the remainder of enormous powers using cycles, stepping stones, and the trick of replacing a base with negative 1.
minutes: 12
---

What's the remainder when $2^{1000}$ is divided by 7? That number has over 300 digits. No calculator on Earth displays it exactly, and yet you can answer this in about 30 seconds, without using any big numbers. This is one of the most satisfying tricks in contest math.

> **The big idea:** Powers repeat in cycles, mod anything. Find a power that's **congruent to 1 or $-1$**. Then you can break a huge exponent into pieces of that power, and they nearly all vanish.

## Why cycles appear

There are only so many remainders. Mod 7, for instance, there are only the 7 values from 0 to 6. As you take higher powers, each one depends only on the one before it. So eventually, a value must repeat, and everything repeats after that.

| Power | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ |
|---|---|---|---|---|---|---|
| Remainder mod 7 | 2 | 4 | 1 | 2 | 4 | 1 |

The key moment is $2^3 \equiv 1 \pmod{7}$. Once you have a 1, you can raise it to any power, and it stays 1.

## Example 1: The opening problem

**What do we know?** $2^3 \equiv 1$, so the cycle has length 3.

**What's the plan?** Break up the exponent. Since $1000 = 3 \times 333 + 1$:

$$2^{1000} = (2^3)^{333} \times 2^1 \equiv 1^{333} \times 2 = 2 \pmod{7}$$

So the remainder is 2.

Try one. What's the remainder when $3^{100}$ is divided by 8? (Note that $3^2 = 9$.)

<details class="check"><summary>Show the answer</summary>

$3^2 = 9 \equiv 1 \pmod{8}$. Since 100 is even, $3^{100} = (3^2)^{50} \equiv 1$. So the remainder is 1.

</details>

Notice how little work that was. We only ever handled the small numbers 2, 4, and 1, even though the original number has hundreds of digits.

## Example 2: Replacing the base

What's the remainder when $13^{51}$ is divided by 7?

**What's the trick?** Don't look for a cycle yet. Reduce the base first. Since 13 is 1 less than 14, we have $13 \equiv -1 \pmod{7}$.

$$13^{51} \equiv (-1)^{51} = -1 \equiv 6 \pmod{7}$$

Remember that $-1$ raised to an odd power is $-1$, and raised to an even power, it's 1. So whenever the base is one less than a multiple of the modulus, the problem is nearly done before it starts.

Similarly, $8^{101}$ mod 9: $8 \equiv -1$, and the exponent is odd, so it's $-1 \equiv 8$.

## Example 3: Stepping stones

What's the remainder when $3^{20}$ is divided by 11?

**What's the plan?** Build up the powers in steps, reducing as you go. You never have to deal with a number bigger than about $11 \times 11$.

- $3^2 = 9 \equiv -2$
- $3^4 \equiv (-2)^2 = 4$
- $3^5 \equiv 4 \times 3 = 12 \equiv 1$

So $3^5 \equiv 1 \pmod{11}$. Since $20 = 5 \times 4$, we have $3^{20} = (3^5)^4 \equiv 1^4 = 1$.

**Check:** The first powers of 3 mod 11 are 3, 9, 5, 4, 1. It reaches 1 at the 5th power, as we found.

## Example 4: Last two digits

What are the last two digits of $7^{102}$?

**What's the modulus?** The last two digits are the remainder when divided by 100.

**What's the cycle?** $7^2 = 49$, $7^3 = 343 \equiv 43$, and $7^4 = 2401 \equiv 1 \pmod{100}$. So the cycle has length 4.

**What's the plan?** $102 = 4 \times 25 + 2$. So $7^{102} \equiv 1^{25} \times 7^2 = 49$. The last two digits are 49.

## Example 5: A contest-style question

What's the remainder when $1^3 + 2^3 + 3^3 + \cdots + 20^3$ is divided by 7?

**What's the plan?** Find the cubes mod 7, since cubes repeat as the base repeats.

| Base mod 7 | 1 | 2 | 3 | 4 | 5 | 6 | 0 |
|---|---|---|---|---|---|---|---|
| Cube mod 7 | 1 | 1 | 6 | 1 | 6 | 6 | 0 |

**Add up one full cycle:** $1 + 1 + 6 + 1 + 6 + 6 + 0 = 21 \equiv 0$. So every 7 bases add nothing to the remainder.

**How much is left?** The numbers from 1 to 14 make 2 full cycles, which add nothing. That leaves 15 through 20, which have the same remainders as 1 through 6:

$$1 + 1 + 6 + 1 + 6 + 6 = 21 \equiv 0$$

So the remainder is **0**.

<section data-box="deeper">

## Going deeper

What happens when the exponent itself is a huge power? Find what you need from the exponent, and nothing more.

**A harder one:** What's the last digit of $7^{7^7}$? (The exponent is $7^7$, which is a very large number.)

**What's the cycle?** The last digits of powers of 7 go 7, 9, 3, 1, with a cycle of 4. So we only need the exponent's remainder **mod 4**.

**Find that remainder.** Since $7 \equiv -1 \pmod 4$:

$7^7 \equiv (-1)^7 = -1 \equiv 3 \pmod 4$

**Use it.** The exponent acts like a 3, so the last digit matches $7^3 = 343$. The last digit is **3**.

**What are the two levels?** The base gets reduced by the modulus, 10. The exponent gets reduced by the cycle length, 4. Each level uses a different modulus. Mixing them up is the most common mistake here.

Try this. What's the last digit of $3^{3^3}$?

<details class="check"><summary>Show the answer</summary>

The exponent is $3^3 = 27$. The cycle of 3, 9, 7, 1 has length 4, and 27 has a remainder of 3. So the last digit matches $3^3 = 27$, which is 7.

</details>

</section>

<section data-box="traps">

## Common traps

**Reducing the exponent the same way as the base.** The base can be reduced mod 7, but the exponent can't be. $2^{10}$ is not the same as $2^3$ mod 7, even though 10 has a remainder of 3 when divided by 7. The exponent reduces using the **cycle length**, which is 3 here.

**Forgetting that a cycle doesn't always start at 1.** Mod 10, the powers of 2 are 2, 4, 8, 6, 2, and so on. They never reach 1, but they still cycle. In cases like that, use the pattern of remainders.

**Using the wrong sign rule.** $(-1)^{51}$ is $-1$, and $(-1)^{50}$ is $+1$. An odd exponent keeps the minus sign.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** There's a huge exponent, and a question about a remainder, a last digit, or a last two digits.

**First move:** Reduce the base. Check whether it's $\pm 1$.

**Second move:** Write out powers until you get 1 or $-1$. It rarely takes long.

**Using the answer choices:** Compute the expression mod 3 or mod 10, and compare with the choices to eliminate them.

**Time:** About a minute and a half.

</section>

<section data-box="connections">

## Connections

This grew out of [units-digit cycles](/pathway/primes-remainders/04-units-digits-and-remainders/) in Level 2 and [repeating patterns](/pathway/logic-patterns/01-repeating-and-growing/) in Level 1. Next, you'll solve [several conditions at once](/pathway/modular-arithmetic/03-several-conditions/).

</section>

<section data-box="summary">

## Remember this

- Powers cycle. Look for a power that's 1 or $-1$.
- Break up the exponent using the cycle length.
- Reduce the base, but not the exponent, by the modulus.
- $(-1)^{\text{odd}} = -1$, and $(-1)^{\text{even}} = 1$.
- Last two digits means mod 100.

</section>
