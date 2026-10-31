---
title: "Prime Factorization"
summary: Every whole number is built from primes in exactly one way. Learn to find a number's prime factors, and use them to answer questions quickly.
minutes: 10
---

What's the smallest whole number you can multiply 12 by to get a perfect square? You could try: $12 \times 2 = 24$, no. $12 \times 3 = 36$, yes! But why did 3 work? And what would you do for 180, or 2,000? There's a way to look inside a number and see the answer immediately, and it uses the numbers that everything else is built from: the primes.

> **The big idea:** Every whole number greater than 1 can be written as a product of primes in **exactly one way**. That list of primes is the number's **prime factorization**, and it tells you nearly everything about the number.

## Why primes are the building blocks

In Level 1, you learned that a prime has exactly 2 factors: 1 and itself. Any other number, called a **composite** number, can be split into smaller factors. If you keep splitting, you can't go on forever, since the numbers keep getting smaller. So you must end up with only primes.

The surprising part is that it doesn't matter how you start. Take 72:

- Starting with $8 \times 9$: $2 \times 2 \times 2 \times 3 \times 3$.
- Starting with $6 \times 12$: $(2 \times 3) \times (2 \times 2 \times 3)$, which is the same primes.

Either way, you get three 2s and two 3s. We write this using exponents, so $72 = 2^3 \times 3^2$. An exponent tells you how many copies to multiply: $2^3 = 2 \times 2 \times 2 = 8$.

## Example 1: Finding a factorization

Find the prime factorization of 360.

**What's the plan?** Split off an easy factor, and then keep going. A factor tree can help you organize it.

- $360 = 10 \times 36$
- $10 = 2 \times 5$
- $36 = 4 \times 9 = 2 \times 2 \times 3 \times 3$

Gather them up: three 2s, two 3s, and one 5. So $360 = 2^3 \times 3^2 \times 5$.

**Check:** $8 \times 9 \times 5 = 360$. The [divisibility rules](/pathway/number-sense/03-divisibility-rules/) from Level 1 help you find small factors quickly.

Try one. What's the prime factorization of 84?

<details class="check"><summary>Show the answer</summary>

$84 = 4 \times 21 = 2 \times 2 \times 3 \times 7$, so $84 = 2^2 \times 3 \times 7$.

</details>

## Example 2: How to spot a perfect square

Back to the opening puzzle. What do perfect squares look like inside?

$$36 = 6 \times 6 = (2 \times 3) \times (2 \times 3) = 2^2 \times 3^2$$

A perfect square is a number multiplied by itself, so its primes come in matching pairs. That means **every exponent in a perfect square is even**.

Now $12 = 2^2 \times 3$. The 2s are fine, but the 3 has no partner. So multiply by one more 3 to get $2^2 \times 3^2 = 36$. That's why 3 was the answer!

What about 180? We have $180 = 2^2 \times 3^2 \times 5$. Only the 5 has an odd exponent, so the smallest multiplier is 5, which gives $900 = 30 \times 30$.

## Example 3: Perfect cubes

What's the smallest whole number you can multiply 180 by to get a perfect **cube**?

**What's different?** A perfect cube is a number multiplied by itself 3 times, so its exponents must all be multiples of 3.

**What do we need?** $180 = 2^2 \times 3^2 \times 5^1$. To reach exponents of 3, we need one more 2, one more 3, and two more 5s:

$$2 \times 3 \times 5 \times 5 = 150$$

**Check:** $180 \times 150 = 27000$, and $30 \times 30 \times 30 = 27000$.

## Example 4: Does one number divide another?

Is $2^4 \times 3^2 \times 5$ divisible by 36? Is it divisible by 27?

**What's the plan?** Compare the factorizations. A number can only divide another if the other number contains all of its primes.

- $36 = 2^2 \times 3^2$. Our number has at least two 2s and two 3s, so **yes**.
- $27 = 3^3$. Our number has only two 3s, so **no**.

You didn't have to multiply anything or do any long division. This is like checking whether your kitchen has all of the ingredients for a recipe.

## Example 5: A contest-style question

The product of three different whole numbers, each greater than 1, is 30. What's their sum?

**What do we know?** The prime factorization of 30 is $2 \times 3 \times 5$. There are exactly 3 primes to share among 3 numbers. Each number has to be greater than 1, so each needs at least one prime, and each gets exactly one.

So the numbers are 2, 3, and 5, and the sum is $2 + 3 + 5 = 10$.

Notice how the factorization forced the answer. If the product were 60, there would be several options, like 3, 4, and 5, or 2, 5, and 6, which is why contests choose their numbers carefully.

<section data-box="traps">

## Common traps

**Stopping too soon.** Writing $72 = 8 \times 9$ isn't a prime factorization, since 8 and 9 aren't prime. Keep going until every factor is prime.

**Calling 1 a prime, or leaving it in.** A factorization never includes 1. It doesn't change anything, and it's not a prime. This is actually why 1 isn't considered prime: if it were, then factorizations wouldn't be unique, since you could add as many 1s as you wanted.

**Mixing up exponents and multiplication.** $2^3$ is $2 \times 2 \times 2 = 8$, not $2 \times 3 = 6$. This is the most common slip with exponents.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "perfect square," "perfect cube," "smallest number," "product of," or anything involving a big number's factors.

**Make it automatic:** Practice until you can factor numbers below 200 quickly. Divide out 2s first, then 3s, then 5s, then 7s.

**Using the answer choices:** If an answer must be a perfect square, check that each exponent is even, or look at the last digit: perfect squares never end in 2, 3, 7, or 8.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

This builds on [factors and primes](/pathway/number-sense/04-factors-primes-leftovers/) from Level 1. Next, you'll use factorizations to [count divisors](/pathway/primes-remainders/02-counting-divisors/) and find [GCF and LCM](/pathway/primes-remainders/03-gcf-and-lcm/).

</section>

<section data-box="summary">

## Remember this

- Every number has exactly one prime factorization.
- Split until every factor is prime.
- Perfect square: all of the exponents are even.
- Perfect cube: all of the exponents are multiples of 3.
- To divide evenly, a number needs all of the other's primes.

</section>
