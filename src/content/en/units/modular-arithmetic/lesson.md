---
title: "Remainder Math: Modular Arithmetic & Bases"
summary: Do arithmetic with remainders alone, tame giant powers, solve remainder puzzles, and write numbers in other bases.
minutes: 11
---

In Level 2, you saw that you can add and multiply using just the remainders. Mathematicians have a whole system for this, called **modular arithmetic**. It's the same math as a clock: 5 hours after 9 o'clock, it's 2 o'clock, even though $9 + 5 = 14$.

> **The big idea:** If you only care about the remainder, you can replace any number with a smaller one that has the same remainder. Huge problems shrink to tiny ones.

## Tool 1: The notation

We write $17 \equiv 2 \pmod{5}$, and we say "17 is congruent to 2, mod 5." It means that 17 and 2 leave the same remainder when divided by 5. Another way to say it is that their difference, 15, is a multiple of 5.

So, mod 5, the numbers 2, 7, 12, 17, and 22 all act the same.

## Tool 2: Add, subtract, and multiply freely

Within mod arithmetic, you can swap any number for a smaller one with the same remainder, at any time.

What's the remainder when $1{,}003 \times 2{,}006$ is divided by 10? Those numbers have remainders of 3 and 6, so:

$$3 \times 6 = 18$$

And 18 has a remainder of 8 when divided by 10. So the answer is 8.

> **Watch out:** Division doesn't work so freely. Since $20 \equiv 8 \pmod{12}$, you might think you can divide both by 4 and get $5 \equiv 2 \pmod{12}$. But that's false. Stick to adding, subtracting, and multiplying.

## Tool 3: Giant powers

What's the remainder when $2^{100}$ is divided by 7? Try small powers, and take remainders as you go:

| Power | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ |
|---|---|---|---|---|---|---|
| Remainder mod 7 | 2 | 4 | 1 | 2 | 4 | 1 |

The pattern repeats every 3 steps, and $2^3 \equiv 1 \pmod{7}$. Since $99 = 3 \times 33$, the power $2^{99}$ also has a remainder of 1. One more factor of 2 gives $2^{100} \equiv 2 \pmod{7}$.

## Tool 4: Negative remainders are allowed

What's the remainder when $13^{51}$ is divided by 7? Since 13 is 1 less than 14, we can write $13 \equiv -1 \pmod{7}$. And $-1$ raised to an odd power is just $-1$:

$$13^{51} \equiv (-1)^{51} = -1 \pmod{7}$$

A remainder of $-1$ means "1 short of a multiple of 7," which is the same as a remainder of 6. So the answer is 6. When a number is just below a multiple, this trick saves a lot of work.

## Tool 5: Why the divisibility rules work

Here's a surprise: you can now explain the digit-sum rule for 9. Since $10 \equiv 1 \pmod{9}$, every power of 10 also has a remainder of 1. So:

$$352 = 3 \times 100 + 5 \times 10 + 2 \equiv 3 + 5 + 2 \pmod{9}$$

A number and the sum of its digits always have the same remainder mod 9. That's why the rule works.

## Tool 6: Several conditions at once

Find the smallest positive number with a remainder of 2 when divided by 3 and a remainder of 3 when divided by 4.

The simplest approach is a **sieve**. List the numbers that fit the second rule, and test them against the first:

- Remainder of 3 when divided by 4: 3, 7, 11, 15, ...
- Now check them against 3: 3 has remainder 0, 7 has remainder 1, and 11 has remainder 2. It works!

So the answer is 11. And since $3 \times 4 = 12$, the next solutions are 23, 35, and so on, going up by 12.

## Tool 7: Other bases

We write numbers in **base 10**: in 352, the places are worth 100, 10, and 1. Other bases work the same way, using a different place value. In **base 2**, also called binary, the places are worth 1, 2, 4, 8, 16, and so on, and the only digits are 0 and 1.

**From another base to base 10:** multiply each digit by its place value. A small number after the digits tells you the base:

$$1011_2 = 1 \times 8 + 0 \times 4 + 1 \times 2 + 1 \times 1 = 11$$

**From base 10 to another base:** take out the biggest place value that fits, again and again. Let's write 23 in base 3, where the places are worth 27, 9, 3, and 1:

- 27 is too big, so we start at 9. There are 2 nines in 23, which leaves 5.
- There is 1 three in 5, which leaves 2.
- There are 2 ones in 2, which leaves 0.

So $23 = 212_3$. **Check:** $2 \times 9 + 1 \times 3 + 2 = 23$.

## Your turn

Before you start the practice problems, try these two:

1. What's the remainder when $24 \times 25$ is divided by 7?
2. What is $110_2$ in base 10?

**Answers:** For the first, 24 has remainder 3 and 25 has remainder 4. Since $3 \times 4 = 12$, the remainder is 5. For the second, $4 + 2 = 6$.

If you got those, you're ready. These are some of the toughest problems on the site so far, so take your time.
