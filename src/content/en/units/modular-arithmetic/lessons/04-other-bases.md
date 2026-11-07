---
title: "Numbers in Other Bases"
summary: See how our number system works by trying a different one. Convert between bases, and use base 2 to count and solve problems.
minutes: 12
---

What number does 101 mean? You'd say one hundred and one. But a computer would say five. Both of you are right, since you're counting in different ways. We use ten digits because humans have ten fingers, and there's nothing else special about ten. Understanding other bases shows you how numbers really work, and it often appears on contests.

> **The big idea:** In **base $b$**, each place is worth $b$ times the place to its right, and the only digits allowed are 0 through $b - 1$. All of the place-value ideas you know still work.

## Why it works

In **base 10**, the places are worth 1, 10, 100, 1000, and so on. So $352 = 3 \times 100 + 5 \times 10 + 2$. In **base 2**, also called binary, the places are worth 1, 2, 4, 8, 16, and so on, and the only digits are 0 and 1.

To say which base we mean, we write a small number after the digits. So $101_2$ means:

$$101_2 = 1 \times 4 + 0 \times 2 + 1 \times 1 = 5$$

Picture it like this: in base 10, you bundle 10 sticks to make one ten. In base 2, you bundle 2 sticks at a time, so the groups are worth 2, then 4, then 8.

## Example 1: From another base to base 10

What is $2013_5$ in base 10?

**What are the places?** In base 5, they're worth 1, 5, 25, and 125.

$$2 \times 125 + 0 \times 25 + 1 \times 5 + 3 = 258$$

Try one. What is $1011_2$ in base 10?

<details class="check"><summary>Show the answer</summary>

The places are worth 8, 4, 2, and 1. So $8 + 0 + 2 + 1 = 11$.

</details>

## Example 2: From base 10 to another base

Write 23 in base 3.

**What are the places?** In base 3, they're 1, 3, 9, 27, and so on. Start from the biggest place that fits.

- 27 is too big, so we start with 9. There are 2 nines in 23, which leaves 5.
- There is 1 three in 5, which leaves 2.
- There are 2 ones in 2, which leaves 0.

So $23 = 212_3$. **Check:** $2 \times 9 + 1 \times 3 + 2 = 23$.

**Another way:** Divide by the base, again and again, and read the remainders from the bottom up. $23 = 3 \times 7 + 2$. Then $7 = 3 \times 2 + 1$. Then $2 = 3 \times 0 + 2$. The remainders are 2, 1, 2, and reading from the bottom gives 212. Why does this work? The first remainder is the number mod 3, which is exactly the ones digit.

## Example 3: Arithmetic in other bases

What is $13_5 + 24_5$?

**What's the plan?** Add the same way you always do, but carry when you reach 5, not 10.

- The ones place: $3 + 4 = 7$. In base 5, that's one 5 and 2 left over. Write 2, and carry 1.
- The fives place: $1 + 2 + 1 = 4$.

So the answer is $42_5$. **Check in base 10:** $13_5 = 8$ and $24_5 = 14$, which add up to 22. And $42_5 = 4 \times 5 + 2 = 22$. It works.

## Example 4: Why base 2 is everywhere

Every whole number can be written as a sum of different powers of 2, in exactly one way. That's what binary means.

This solves a puzzle. You want to weigh any whole number of ounces from 1 to 63, using a balance scale and as few weights as possible, with weights on one side only. Which weights do you need?

**What's the answer?** 1, 2, 4, 8, 16, and 32. That's 6 weights. Any amount from 1 to 63 has a binary form, and each 1 in it tells you which weight to use. For example, $45 = 32 + 8 + 4 + 1$, since $45 = 101101_2$.

## Example 5: A contest-style question

How many whole numbers from 1 to 100 have exactly two 1s when written in base 2?

**What's the question really asking?** A number with exactly two 1s in binary is a sum of two different powers of 2.

**What's available?** The powers of 2 up to 100 are 1, 2, 4, 8, 16, 32, and 64. That's 7 of them.

**What's the count?** Choose 2 of the 7: $\binom{7}{2} = 21$.

**Do all of them fit?** The largest sum is $64 + 32 = 96$, which is under 100. So all 21 count.

This shows how bases connect to counting, and that's a favorite contest combination.

<section data-box="deeper">

## Going deeper

Remember that a number and its digit sum share a remainder mod 9? That's really a fact about base 10. Every base has its own version.

**The rule:** In base $b$, a number and its digit sum have the same remainder mod $b - 1$.

**Why?** Since $b \equiv 1 \pmod{b - 1}$, every power of $b$ is also 1. So each digit counts as itself.

**A harder one:** What's the remainder when $2351_7$ is divided by 6?

**The fast way:** The base is 7, so mod 6 uses the digit sum. Here, $2 + 3 + 5 + 1 = 11$, and 11 has a remainder of 5.

**Check the long way:**

$2351_7 = 2 \times 343 + 3 \times 49 + 5 \times 7 + 1 = 869$

Since $869 = 6 \times 144 + 5$, the remainder is 5. It matches.

**There's a matching rule for 11.** In base $b$, an alternating digit sum gives the remainder mod $b + 1$, since $b \equiv -1$.

Try this. What's the remainder when $1234_6$ is divided by 5?

<details class="check"><summary>Show the answer</summary>

The base is 6, so use mod 5 and the digit sum: $1 + 2 + 3 + 4 = 10$. The remainder is 0.

</details>

</section>

<section data-box="traps">

## Common traps

**Using a digit that isn't allowed.** A digit in base $b$ has to be less than $b$. So $123_3$ isn't a valid number, because 3 isn't a digit in base 3. In fact, you can use this as a clue: if you see $45_b$, then $b$ has to be at least 6.

**Getting the places backwards.** The rightmost digit is always the ones place. In $2013_5$, the 3 is worth 3, and the 2 is worth 250.

**Carrying at 10.** When adding in base 5, you carry at 5. Adding as usual gives $37_5$ in Example 3, which isn't even valid, since 7 isn't a digit in base 5.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for small numbers after digits, like $101_2$, or the words "base" and "binary."

**Convert to base 10 first:** This is almost always the safest path. Do the math, and then convert back if needed.

**Using a letter for the base:** $12_b$ means $b + 2$. So you can turn a base problem into an equation, like solving $12_b + 21_b = 40$.

**Time:** One or two minutes.

</section>

<section data-box="connections">

## Connections

Bases extend [place value](/pathway/number-sense/01-place-value/) from Level 1, and the division method uses [remainders](/pathway/modular-arithmetic/01-mod-notation/). The count uses [choosing](/pathway/counting/03-overcount-then-divide/).

</section>

<section data-box="summary">

## Remember this

- In base $b$, each place is $b$ times the place to its right.
- Digits run from 0 to $b - 1$.
- To convert to base 10, multiply by the place values.
- To convert from base 10, take out the biggest places.
- Every number is a unique sum of powers of 2.

</section>
