---
title: "GCF and LCM"
summary: Find the greatest common factor and least common multiple using primes, and learn how to tell which one a word problem needs.
minutes: 10
---

One bus comes every 24 minutes, and another comes every 36. They both arrive at noon. When do they next arrive together? And separately, you have 24 apples and 36 pears, and you want to make identical fruit bags, using all of the fruit. What's the largest number of bags you can make? Both problems use the same two numbers, but they need different tools. This lesson teaches you those tools, and how to tell them apart.

> **The big idea:** The **greatest common factor (GCF)** is the largest number that divides both numbers. The **least common multiple (LCM)** is the smallest number that both numbers divide into. Prime factorizations give you both immediately.

## Why primes give the answer

Write both numbers as primes:

$$24 = 2^3 \times 3^1 \qquad 36 = 2^2 \times 3^2$$

**For the GCF**, we want something that fits inside **both**. It can use only as many of each prime as **both** numbers have. So we use the **smaller** power of each: $2^2 \times 3^1 = 12$.

**For the LCM**, we want something that **both** numbers fit inside. It has to have enough of each prime for **either** number. So we use the **larger** power of each: $2^3 \times 3^2 = 72$.

Let's test those with short lists. The factors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24. The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, and 36. The largest one they share is 12. The multiples of 36 are 36, 72, and so on, and the first one that's also a multiple of 24 is 72. Both results match.

## Example 1: Which one is it?

Now for the opening problems.

- **The buses** have to line up again, so we're looking for a multiple of both 24 and 36. That's the **LCM**. They arrive together in 72 minutes.
- **The fruit bags** split things into equal groups, so the number of bags has to be a factor of both 24 and 36. That's the **GCF**. There can be at most 12 bags, each with 2 apples and 3 pears.

A rule of thumb: **splitting into the largest equal groups means GCF. Things lining up again means LCM.** The answer to an LCM question is at least as big as your numbers, while the answer to a GCF question is at most as big as your numbers.

Try one. Two lights blink every 8 seconds and every 12 seconds. They blink together now. In how many seconds will they next blink together?

<details class="check"><summary>Show the answer</summary>

They need to line up, so it's the LCM. $8 = 2^3$ and $12 = 2^2 \times 3$, so the LCM is $2^3 \times 3 = 24$ seconds.

</details>

## Example 2: A connection between them

Here's a neat fact: **GCF × LCM = the product of the two numbers.** For 24 and 36: $12 \times 72 = 864$, and $24 \times 36 = 864$.

**Why is it true?** For each prime, the GCF takes the smaller power, and the LCM takes the larger power. So between them, they use every prime exactly as often as the two original numbers do.

**How to use it:** Two numbers have a product of 180 and a GCF of 6. What's their LCM? It's $180 \div 6 = 30$.

## Example 3: Using remainders

What's the smallest whole number greater than 1 that leaves a remainder of 1 when divided by 2, 3, 4, or 5?

**What do we know?** Subtract 1 from the number we want, and that new number divides evenly by 2, 3, 4, and 5.

**What's the question really asking?** That new number is a common multiple. The LCM of 2, 3, 4, and 5 uses the highest powers: $2^2 \times 3 \times 5 = 60$.

So the number is $60 + 1 = 61$.

## Example 4: Tiling a rectangle

A floor is 90 inches by 126 inches. It's to be covered exactly with identical square tiles, with no cutting. What's the largest tile possible?

**What's the plan?** The side of the tile must divide both 90 and 126 evenly, so that the tiles fit exactly along each edge. We want the largest such side, so it's the GCF.

$$90 = 2 \times 3^2 \times 5 \qquad 126 = 2 \times 3^2 \times 7$$

They share $2 \times 3^2 = 18$, so the largest tile is 18 inches. It takes $5 \times 7 = 35$ tiles.

## Example 5: A contest-style question

Two whole numbers have a GCF of 6 and an LCM of 36. Both numbers are greater than 6. What are they?

**What do we know?** Both are multiples of 6, so let's write them as $6x$ and $6y$. If $x$ and $y$ shared a factor, the GCF would be larger than 6. So $x$ and $y$ share no factors.

**Using the connection:** GCF times LCM is the product: $6 \times 36 = 216$. So $6x \times 6y = 216$, which means $x \times y = 6$.

**What are the options?** The pairs of $x$ and $y$ that multiply to 6 and share no factors are 1 and 6, or 2 and 3. Both numbers must be greater than 6, so $x$ and $y$ must both be more than 1. That leaves 2 and 3, which gives the numbers 12 and 18.

**Check:** The GCF of 12 and 18 is 6, and the LCM is 36.

<section data-box="traps">

## Common traps

**Mixing up the two.** For the buses, some students answer with 12, the GCF. But 12 minutes after noon, the second bus hasn't arrived yet. Ask yourself, "Should the answer be bigger or smaller than my numbers?"

**Taking the wrong powers.** Using the larger powers for the GCF would give a number too big to divide either one. The GCF uses the **smaller** power of each prime, and a prime that isn't in both numbers is left out.

**Multiplying the numbers to find the LCM.** $24 \times 36 = 864$ is a common multiple, but not the least one. Multiplying only gives the LCM if the numbers share no factors.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** LCM: "again at the same time," "next together," "smallest number divisible by." GCF: "largest," "identical groups," "as many as possible."

**For small numbers,** you can list multiples of the larger number until one is divisible by the smaller. That's often the fastest way.

**Using the answer choices:** An LCM answer must be divisible by all the given numbers. Test each choice.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

These both use [prime factorization](/pathway/primes-remainders/01-prime-factorization/). The LCM counts [overlapping multiples](/pathway/smart-counting/01-overlaps/) and adds fractions in [Fractions & Ratios](/pathway/fractions-ratios/01-equal-groups/). It also appears in [Remainder Math](/pathway/modular-arithmetic/).

</section>

<section data-box="summary">

## Remember this

- GCF: use the smaller power of each shared prime.
- LCM: use the larger power of every prime.
- Equal groups or tiles: GCF. Lining up again: LCM.
- GCF × LCM = the product of the two numbers.
- Same remainder? Subtract it and use the LCM.

</section>
