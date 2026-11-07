---
title: "Several Conditions at Once"
summary: Find a number that satisfies several remainder conditions by sieving, and learn when a solution has to exist.
minutes: 12
---

A teacher tries to line up her students. In rows of 3, there's 1 left over. In rows of 5, there are 2 left over. In rows of 7, there are 3 left over. There are fewer than 100 students. How many are there? This sounds as if it needs a lot of trial and error. But there's an organized way to do it that takes under a minute, and it also tells you exactly how many answers to expect.

> **The big idea:** To satisfy several remainder conditions, start with the **largest modulus**, and step through its possibilities, checking each against the other conditions. Once you find one answer, the rest come by adding the **LCM** of the moduli.

## Why stepping works

Each condition describes a repeating list. "A remainder of 3 when divided by 7" describes 3, 10, 17, 24, and so on. We're looking for a number that's on all of the lists. Stepping through the longest-gap list means fewer numbers to check, which is why we start with the largest modulus. This method is called a **sieve**.

## Example 1: Two conditions

Find the smallest positive number with a remainder of 2 when divided by 3 and a remainder of 3 when divided by 4.

**What's the plan?** List the numbers with a remainder of 3 when divided by 4: 3, 7, 11, 15, and so on. Now test them against 3.

| Number | Remainder when divided by 3 | Good? |
|---|---|---|
| 3 | 0 | no |
| 7 | 1 | no |
| 11 | 2 | yes |

The smallest is 11.

Now try one. Find the smallest positive number with a remainder of 1 when divided by 2 and a remainder of 2 when divided by 5.

<details class="check"><summary>Show the answer</summary>

Remainder 2 when divided by 5: 2, 7, 12, and so on. The first odd number is 7.

</details>

## Example 2: Why answers repeat

We found 11 above. What's the next number that works?

**What's the reasoning?** If you add 12, the remainder when dividing by 3 doesn't change, since 12 is a multiple of 3, and the same goes for 4. So 23, 35, 47, and so on all work.

And no number between them works. So the answers are spaced by exactly the LCM, as long as the moduli share no factors. This is the core of a famous result called the **Chinese Remainder Theorem**, first described in a Chinese math book many centuries ago. It says that when the moduli share no factors, there's exactly one answer in each stretch of length equal to their product.

## Example 3: The students in rows

Now for the opening problem. Remainders of 1 when divided by 3, 2 when divided by 5, and 3 when divided by 7, with fewer than 100 students.

**Start with the largest modulus, 7:** 3, 10, 17, 24, 31, 38, 45, 52, and so on.

**Next, the condition for 5:** Numbers that leave 2 end in 2 or 7. From the list, that's 17 and 52, and then 87.

**Next, the condition for 3:** $17 = 3 \times 5 + 2$, which fails. $52 = 3 \times 17 + 1$, which works.

So there are 52 students. **How many answers are there in total?** The next would be $52 + 105 = 157$, which is too many. So 52 is the only one under 100.

## Example 4: When the remainders follow a pattern

Find the smallest positive number with a remainder of 1 when divided by 2, a remainder of 2 when divided by 3, a remainder of 3 when divided by 4, and a remainder of 4 when divided by 5.

**What do you notice?** The remainder is always 1 less than the divisor. So the number is 1 short of a multiple of each divisor.

**What's the shortcut?** If you add 1 to our number, the result is divisible by 2, 3, 4, and 5. The LCM of those is 60. So the number is $60 - 1 = 59$.

This is much quicker than sieving. Always look for a pattern before you start listing.

## Example 5: A contest-style question

A number leaves a remainder of 4 when divided by 6, and a remainder of 2 when divided by 8. How many numbers from 1 to 100 are like this?

**Be careful here!** The moduli 6 and 8 share a factor of 2. Let's list the numbers with a remainder of 2 when divided by 8: 2, 10, 18, 26, 34, 42, and so on.

**Now, testing them with 6:** 2 has a remainder of 2. 10 has a remainder of 4, which works!

**What's the spacing?** The LCM of 6 and 8 is 24, so the answers are 10, 34, 58, and 82. The next would be 106, which is over 100.

So there are **4** numbers.

**Could there be no answers?** Yes! Suppose the remainders were 1 when divided by 6, and 2 when divided by 8. The first says the number is odd, and the second says it's even. That's impossible. When moduli share a factor, the conditions might conflict, so don't assume that an answer exists.

<section data-box="deeper">

## Going deeper

When the remainders follow no pattern, check the **largest** modulus first. That leaves you the fewest numbers to test.

**A harder one:** Find the smallest positive whole number that has a remainder of 2 when divided by 3, a remainder of 3 when divided by 5, and a remainder of 2 when divided by 7.

**Start with the largest modulus.** Numbers with a remainder of 2 mod 7 are 2, 9, 16, 23, 30, and so on.

**Test mod 5.** We need a remainder of 3:

| Number | 2 | 9 | 16 | 23 |
|---|---|---|---|---|
| Mod 5 | 2 | 4 | 1 | 3 |

So 23 fits.

**Test mod 3.** $23 = 3 \times 7 + 2$, so the remainder is 2. It fits too.

The answer is **23**. And since 3, 5, and 7 share no factors, the solutions repeat every $3 \times 5 \times 7 = 105$. The next one is 128.

This puzzle is over 1,500 years old, from a Chinese math book. The fact that there's always one solution in each block is called the **Chinese Remainder Theorem**.

Try this. Find the smallest positive number with remainders of 1 mod 3, 4 mod 5, and 6 mod 7.

<details class="check"><summary>Show the answer</summary>

List the numbers that are 6 mod 7: 6, 13, 20, 27, 34. Only 34 has a remainder of 4 mod 5 and a remainder of 1 mod 3. So the answer is 34.

</details>

</section>

<section data-box="traps">

## Common traps

**Multiplying instead of using the LCM.** The spacing for 6 and 8 is the LCM, 24, not $6 \times 8 = 48$. When the moduli share no factors, the LCM and the product are the same, which is why this mistake often goes unnoticed.

**Stopping at the first number.** The question may ask for "how many," or "the largest under 100." Always read the end of the question, and use the spacing to find the others.

**Assuming that an answer always exists.** When moduli share a factor, it's possible for there to be no solutions at all, as in Example 5.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "left over" when arranging things in rows or groups, or several remainders together.

**Look for a pattern first:** Are all of the remainders the same? Then subtract. Are they all 1 less than the divisor? Then add 1.

**Test the choices:** On a multiple-choice test, you can check each answer against each condition. This is often the fastest option.

**Time:** About two minutes.

</section>

<section data-box="connections">

## Connections

This uses [GCF and LCM](/pathway/primes-remainders/03-gcf-and-lcm/) from Level 2. Sieving is similar to [counting overlaps](/pathway/smart-counting/01-overlaps/). Next, you'll write [numbers in other bases](/pathway/modular-arithmetic/04-other-bases/).

</section>

<section data-box="summary">

## Remember this

- Start with the largest modulus, and test each number.
- Answers repeat, spaced by the LCM of the moduli.
- Look for patterns: same remainders, or 1 short.
- Moduli sharing a factor can conflict.
- Read to see whether it wants one answer, or a count.

</section>
