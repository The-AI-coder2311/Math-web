---
title: "Counting Divisors Without Listing Them"
summary: Count a number's factors in seconds without listing them, pick out the odd, even, or square ones, and add all of the factors up with one multiplication.
minutes: 12
---

How many factors does 720 have? In Level 1, you listed factor pairs, and that works for 24 or 36. But 720 has quite a few, and you might easily miss one. You'd need to test every number from 1 to 26. There's a beautiful shortcut that gives the answer in about 10 seconds, and it combines two ideas you already know.

> **The big idea:** Every factor of a number is built from that number's own primes. Choosing how many of each prime to use is a series of choices, so the **multiply trick** counts them. Add 1 to each exponent, and multiply.

Contests often say **divisor** instead of factor. The two words mean the same thing.

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

## Example 4: Odd, even, and square factors

How many of the factors of 360 are odd? How many are even? How many are perfect squares?

**What's the plan?** Use the same choices, but limit the options. Start with $360 = 2^3 \times 3^2 \times 5$, which has $4 \times 3 \times 2 = 24$ factors in all.

**Odd factors:** An odd factor can't use any 2s, so the 2s have only 1 option. That leaves $1 \times 3 \times 2 = 6$ odd factors.

**Even factors:** Take the rest: $24 - 6 = 18$. Or count them directly. An even factor uses 1, 2, or 3 twos, which gives $3 \times 3 \times 2 = 18$.

**Square factors:** A perfect square needs every exponent to be even. The 2s can be used 0 or 2 times, the 3s can be used 0 or 2 times, and the 5 can't be used at all. That's $2 \times 2 \times 1 = 4$ square factors. They are 1, 4, 9, and 36.

## Example 5: A contest-style question

How many of the factors of 600 are multiples of 6?

**What do we know?** $600 = 2^3 \times 3 \times 5^2$, and a multiple of 6 must use at least one 2 and at least one 3.

**Count the options:**

- The 2s: use 1, 2, or 3 of them. That's 3 options.
- The 3s: the factor must use the only 3. That's 1 option.
- The 5s: use 0, 1, or 2 of them. That's 3 options.

$$3 \times 1 \times 3 = 9$$

**Another way to see it:** Every multiple of 6 that divides 600 is 6 times a factor of $600 \div 6 = 100$. Since $100 = 2^2 \times 5^2$ has $3 \times 3 = 9$ factors, the two methods agree.

<section data-box="deeper">

## Going deeper

The same table that counts the factors can also **add them up**.

Look at the table for 12 again. The first column is $1 + 2 + 4$. The second column is the same three numbers, each times 3. So the sum of all of the factors is:

$$(1 + 2 + 4) \times (1 + 3) = 7 \times 4 = 28$$

Let's check: $1 + 2 + 3 + 4 + 6 + 12 = 28$. It works. For any number, make one sum for each prime, using all of its powers starting from 1, and multiply the sums.

**A harder one:** What is the sum of all of the factors of 200?

**Factor it:** $200 = 2^3 \times 5^2$.

**One sum for each prime:** The powers of 2 give $1 + 2 + 4 + 8 = 15$. The powers of 5 give $1 + 5 + 25 = 31$.

**Multiply:** $15 \times 31 = 465$. That's far faster than listing all 12 factors and adding them.

Try this. What is the sum of all of the factors of 45?

<details class="check"><summary>Show the answer</summary>

$45 = 3^2 \times 5$. The sums are $1 + 3 + 9 = 13$ and $1 + 5 = 6$, so the total is $13 \times 6 = 78$.

</details>

</section>

<section data-box="traps">

## Common traps

**Multiplying the exponents, not the exponents plus 1.** For $2^4 \times 3^2$, the count isn't $4 \times 2 = 8$. It's $5 \times 3 = 15$. You have to include the choice of using zero copies.

**Forgetting an exponent of 1.** In $2^4 \times 3^2 \times 5$, the 5 has an exponent of 1, even though it isn't written. Skipping it gives 15 instead of 30.

**Leaving the 1 out of a sum.** When you add up the factors of 200, the sum for the 5s is $1 + 5 + 25$, not $5 + 25$. The 1 stands for using zero 5s.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "how many factors," "how many divisors," "exactly $n$ factors," or "the sum of the divisors."

**Memorize:** The number 1 has 1 factor, primes have 2, and squares of primes have 3.

**Using the answer choices:** The factor count of a non-square must be even. So if your number isn't a perfect square, cross out the odd answers.

**Time:** Under a minute, once you've factored the number.

</section>

<section data-box="connections">

## Connections

This combines [prime factorization](/pathway/primes-remainders/01-prime-factorization/) with [the multiply trick](/pathway/counting/01-multiply-choices/). Counting the primes inside a factorial gets its own lesson, [Zeros at the End of a Factorial](/pathway/primes-remainders/05-factorial-zeros/).

</section>

<section data-box="summary">

## Remember this

- Factor count: add 1 to each exponent, and multiply.
- Don't forget exponents of 1.
- Exactly 3 factors means the square of a prime.
- For odd, even, or square factors, limit the options for each prime.
- Sum of the factors: multiply sums like $(1 + 2 + 4)(1 + 3)$.

</section>
