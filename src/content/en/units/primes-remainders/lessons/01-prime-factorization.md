---
title: "Primes & Remainders: The Building Blocks"
summary: Every whole number is built from primes. Use that to count factors, find GCF and LCM, and see the patterns in remainders and last digits.
minutes: 10
---

In Level 1, you found factors by listing pairs. That works for small numbers, but how many factors does 720 have? Listing would take a while. This lesson shows you a much faster way, using one fact about primes.

> **The big idea:** Every whole number greater than 1 can be built by multiplying primes, and there's only one way to do it. Those primes are like the number's DNA. Once you have them, many questions become quick.

## Example 1: Prime factorization

To break a number into primes, split it into any factor pair and keep going until only primes are left. For 72:

- $72 = 8 \times 9$
- $8 = 2 \times 2 \times 2$, and $9 = 3 \times 3$

So $72 = 2 \times 2 \times 2 \times 3 \times 3$. We can write this in shorter form using exponents, as $72 = 2^3 \times 3^2$.

You could have started with $72 = 6 \times 12$ instead, and you'd end up with the same primes. That's always true.

## Example 2: Counting factors quickly

Any factor of 72 is built from the same primes, using up to three 2s and up to two 3s.

- For the 2s, you can use 0, 1, 2, or 3 of them, which is 4 options.
- For the 3s, you can use 0, 1, or 2 of them, which is 3 options.

This is the multiply trick again: $4 \times 3 = 12$ factors.

> **The rule:** Add 1 to each exponent, and then multiply. For $720 = 2^4 \times 3^2 \times 5^1$, there are $5 \times 3 \times 2 = 30$ factors.

## Example 3: GCF and LCM

The **greatest common factor (GCF)** of two numbers is the biggest number that divides both. The **least common multiple (LCM)** is the smallest number that both divide into.

Take 24 and 36. Write them as primes:

$$24 = 2^3 \times 3^1 \qquad 36 = 2^2 \times 3^2$$

- For the GCF, use the **smaller** power of each prime: $2^2 \times 3^1 = 12$.
- For the LCM, use the **larger** power of each prime: $2^3 \times 3^2 = 72$.

How do you know which to use in a word problem?

- **GCF** problems are about splitting things into the **largest equal groups**. You have 24 apples and 36 pears, and you want identical fruit bags with nothing left over. The most bags you can make is 12.
- **LCM** problems are about things that **line up again**. One bus comes every 24 minutes and another comes every 36. If they arrive together now, they'll next arrive together in 72 minutes.

There's also a neat connection: GCF times LCM equals the product of the two numbers. Here, $12 \times 72 = 24 \times 36$.

## Example 4: Divisibility shortcuts

These rules let you test big numbers without dividing:

| Divisible by | Test | Example |
|---|---|---|
| 2 | The last digit is even | 538 |
| 3 | The digits add up to a multiple of 3 | 411, since $4 + 1 + 1 = 6$ |
| 4 | The last two digits are a multiple of 4 | 1,732, since 32 works |
| 5 | The last digit is 0 or 5 | 945 |
| 9 | The digits add up to a multiple of 9 | 2,916, since $2 + 9 + 1 + 6 = 18$ |

For 6, a number must pass the tests for both 2 and 3.

## Example 5: Remainders you can do math with

Suppose a number leaves a remainder of 3 when divided by 7, and another leaves a remainder of 5. What remainder does their **sum** leave?

Pick examples: 10 and 12 work. Their sum is 22, and $22 = 3 \times 7 + 1$, so the remainder is 1. Now look at just the remainders: $3 + 5 = 8$, and 8 leaves a remainder of 1 when divided by 7. It matches.

> **The rule:** To find the remainder of a sum or a product, you can use just the remainders. This makes huge numbers much easier to handle.

## Example 6: Last digits repeat

What's the last digit of $3^{50}$? The number is enormous, but only last digits matter when multiplying. Let's try small powers:

| Power | $3^1$ | $3^2$ | $3^3$ | $3^4$ | $3^5$ | $3^6$ |
|---|---|---|---|---|---|---|
| Last digit | 3 | 9 | 7 | 1 | 3 | 9 |

The last digits repeat every 4 powers: 3, 9, 7, 1. And $50 \div 4$ is 12 with a remainder of 2. So $3^{50}$ lands on the 2nd spot in the pattern, and its last digit is **9**.

## Example 7: Zeros at the end

How many zeros does $15!$ end with? (Remember that $15! = 15 \times 14 \times \cdots \times 1$.)

Each zero at the end comes from a factor of 10, and $10 = 2 \times 5$. There are plenty of 2s, so count the 5s. The multiples of 5 up to 15 are 5, 10, and 15, and each one contributes one 5. So $15!$ ends in **3** zeros.

> **Watch out:** Some numbers contribute more than one 5. For example, $25 = 5 \times 5$ contributes two.

## Your turn

Before you start the practice problems, try these two:

1. How many factors does $200 = 2^3 \times 5^2$ have?
2. What's the LCM of 6 and 10?

**Answers:** For the first, $4 \times 3 = 12$ factors. For the second, $6 = 2 \times 3$ and $10 = 2 \times 5$, so the LCM is $2 \times 3 \times 5 = 30$.

If you got those, you're ready for the problems.
