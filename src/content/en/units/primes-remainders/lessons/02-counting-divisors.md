---
title: "Counting Divisors and Factorial Zeros"
summary: Count a number's factors in seconds, without listing them, and find how many zeros a huge factorial ends with.
minutes: 12
---

How many factors does 720 have? In Level 1, you listed factor pairs, and that works for 24 or 36. But 720 has quite a few, and you might easily miss one. You'd need to test every number from 1 to 26. There's a beautiful shortcut that gives the answer in about 10 seconds, and it combines two ideas you already know.

> **The big idea:** Every factor of a number is built from that number's own primes. Choosing how many of each prime to use is a series of choices, so the **multiply trick** counts them. Add 1 to each exponent, and multiply.

## Why the rule works

Let's use a small number we can check: $12 = 2^2 \times 3^1$. A factor of 12 can only use the primes 2 and 3, and no more of them than 12 has.

- For the 2s, you can use 0, 1, or 2 of them. That's **3** options, which is 1 more than the exponent 2.
- For the 3s, you can use 0 or 1 of them. That's **2** options, which is 1 more than the exponent 1.

So there are $3 \times 2 = 6$ factors. Here's a table of all of them:

| | No 3s | One 3 |
|---|---|---|
| **No 2s** | 1 | 3 |
| **One 2** | 2 | 6 |
| **Two 2s** | 4 | 12 |

Those are exactly the 6 factors of 12. Why is it 1 more than the exponent? Because using **zero** copies is also an option.

## Example 1: The opening question

How many factors does 720 have?

**What's the plan?** Find the prime factorization. $720 = 72 \times 10 = 2^3 \times 3^2 \times 2 \times 5 = 2^4 \times 3^2 \times 5^1$.

**Add 1 to each exponent, and multiply:**

$$5 \times 3 \times 2 = 30$$

Now it's your turn. How many factors does $200 = 2^3 \times 5^2$ have?

<details class="check"><summary>Show the answer</summary>

Add 1 to each exponent to get 4 and 3. So there are $4 \times 3 = 12$ factors.

</details>

## Example 2: Going backwards

What's the smallest whole number with exactly 6 factors?

**What's the question really asking?** The factor count comes from multiplying (exponent + 1) values. How can we get 6? Either $6$ alone, or $3 \times 2$.

- **6 alone** means one prime with an exponent of 5. The smallest is $2^5 = 32$.
- **$3 \times 2$** means two primes with exponents 2 and 1. To keep it small, put the bigger exponent on the smaller prime: $2^2 \times 3 = 12$.

The smallest is 12. Let's check: its factors are 1, 2, 3, 4, 6, and 12. That's 6 factors.

## Example 3: Exactly 3 factors

Which numbers have exactly 3 factors?

**What do we know?** The only way to get 3 is an exponent of 2 on a single prime. So these numbers are **squares of primes**: 4, 9, 25, 49, 121, and so on. For example, 25 has the factors 1, 5, and 25.

This also connects to Level 1, where you found that only perfect squares have an odd number of factors. Now you can see why: every exponent is even, so every (exponent + 1) is odd, and multiplying odd numbers gives an odd number.

## Example 4: Zeros at the end of a factorial

How many zeros does $15!$ end with?

**What's a zero at the end?** Each one comes from a factor of 10, and $10 = 2 \times 5$. So we need to count pairs of a 2 and a 5 in the prime factorization of $15!$.

**Which runs out first?** There are lots of 2s, since every other number is even. The 5s are rarer, so they limit the pairs.

**Counting the 5s:** Only multiples of 5 contribute: 5, 10, and 15. Each contributes one 5, so there are 3 of them. So $15!$ ends in **3** zeros.

**Checking with a small one:** $5! = 120$ has one 5, and it ends in one zero. It works.

## Example 5: A contest-style question

How many zeros does $100!$ end with?

**What's the plan?** Count the 5s in the numbers from 1 to 100.

- There are 20 multiples of 5. Each contributes at least one 5.
- But some contribute **two** 5s, because $25 = 5 \times 5$. The numbers 25, 50, 75, and 100 each have an extra 5. There are 4 of those.

The total is $20 + 4 = 24$ zeros.

**Why don't we need more steps?** The next power of 5 is 125, which is greater than 100. For $200!$, you'd count multiples of 5, 25, and 125.

<section data-box="deeper">

## Going deeper

You can count special kinds of factors by restricting the exponents.

**A harder one:** How many of the factors of 360 are odd? How many are even?

**Factor it:** $360 = 2^3 \times 3^2 \times 5$.

**All factors:** Each factor picks a power of 2, a power of 3, and a power of 5. That's $4 \times 3 \times 2 = 24$ factors.

**Odd factors:** An odd factor can't have any 2s, so its power of 2 is fixed. That leaves $3 \times 2 = 6$ odd factors.

**Even factors:** Take the rest: $24 - 6 = 18$. Or count directly: an even factor has 1, 2, or 3 twos, which gives $3 \times 3 \times 2 = 18$.

**How about perfect-square factors?** A square needs even exponents. So 2 can have power 0 or 2, 3 can have power 0 or 2, and 5 can only have power 0. That's $2 \times 2 \times 1 = 4$: they're 1, 4, 9, and 36.

Try this. How many even factors does 180 have?

<details class="check"><summary>Show the answer</summary>

$180 = 2^2 \times 3^2 \times 5$. An even factor has 1 or 2 twos, so there are $2 \times 3 \times 2 = 12$.

</details>

</section>

<section data-box="traps">

## Common traps

**Multiplying the exponents, not the exponents plus 1.** For $2^4 \times 3^2$, the count isn't $4 \times 2 = 8$. It's $5 \times 3 = 15$. You have to include the choice of using zero copies.

**Forgetting an exponent of 1.** In $2^4 \times 3^2 \times 5$, the 5 has an exponent of 1, even though it isn't written. Skipping it gives 15 instead of 30.

**Forgetting extra 5s.** For $100!$, the answer 20 misses that 25, 50, 75, and 100 each hold a second 5. Count again for each higher power of 5.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "how many factors," "how many divisors," "ends in how many zeros," or "exactly $n$ factors."

**Memorize:** The number 1 has 1 factor, primes have 2, and squares of primes have 3.

**Using the answer choices:** The factor count of a non-square must be even. So if your number isn't a perfect square, cross out the odd answers.

**Time:** Under a minute, once you've factored the number.

</section>

<section data-box="connections">

## Connections

This combines [prime factorization](/pathway/primes-remainders/01-prime-factorization/) with [the multiply trick](/pathway/counting/01-multiply-choices/). It's one of many places where counting and number theory meet.

</section>

<section data-box="summary">

## Remember this

- Factor count: add 1 to each exponent, and multiply.
- Don't forget exponents of 1.
- Exactly 3 factors means the square of a prime.
- Zeros at the end of a factorial: count the 5s.
- Multiples of 25 give an extra 5.

</section>
