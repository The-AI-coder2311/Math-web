---
title: "Number Theory Constructions"
summary: Build numbers with given properties, and count solutions, by combining CRT, orders, and factorization.
minutes: 14
---

How many numbers $x$ from 1 to 1000 satisfy $x^2 \equiv 1 \pmod{1000}$? You probably know two right away: 1 and 999. But there are eight. Where do the other six come from? The answer shows how the tools from this unit fit together. CRT breaks the problem into prime powers, each prime power is easy on its own, and then you multiply the counts.

> **The big idea:** To count or build numbers modulo $n$, **split $n$ into prime powers**, solve the problem for each prime power, and combine the pieces with CRT. The number of solutions mod $n$ is the **product** of the numbers of solutions mod each prime power, because every choice of pieces glues into exactly one answer.

## Why the counts multiply

Suppose $n = 8 \times 125$. A number $x$ mod 1000 corresponds to exactly one pair (remainder mod 8, remainder mod 125). And $x^2 \equiv 1 \pmod{1000}$ holds exactly when it holds mod 8 and mod 125. So the solutions mod 1000 match up with pairs (solution mod 8, solution mod 125). If there are $a$ solutions mod 8 and $b$ mod 125, the [multiply trick](/pathway/counting/01-multiply-choices/) gives $ab$ solutions mod 1000.

## Example 1: Square roots of 1

How many $x$ from 0 to 104 satisfy $x^2 \equiv 1 \pmod{105}$?

**Split.** $105 = 3 \times 5 \times 7$.

**Solve mod each prime.** For a prime $p$, $x^2 \equiv 1$ means $p$ divides $(x - 1)(x + 1)$, so $x \equiv 1$ or $x \equiv -1$. That's 2 solutions for each odd prime.

**Multiply.** $2 \times 2 \times 2 = 8$ solutions.

Now the hook. Mod 125, the same argument works with a small twist: 5 can't divide both $x - 1$ and $x + 1$, since they differ by 2. So all three factors of 5 go into one of them, and there are 2 solutions. Mod 8, every odd number squares to 1: $1^2$, $3^2$, $5^2$ and $7^2$ are 1, 9, 25 and 49, all congruent to 1. That's 4 solutions. So mod 1000 there are $4 \times 2 = 8$ solutions.

Try one. How many $x$ from 1 to 1000 satisfy $x^4 \equiv 1 \pmod{1000}$?

<details class="check"><summary>Show the answer</summary>

Mod 8, all 4 odd remainders work, since their squares are already 1. Mod 125, the remainders coprime to 5 are the powers of a primitive root, a cycle of length 100, so $x^4 \equiv 1$ has $\gcd(4, 100) = 4$ solutions. That gives $4 \times 4 = 16$.

</details>

## Example 2: Building a number from conditions

Find the smallest positive $n$ such that 4 divides $n$, 9 divides $n + 1$, and 25 divides $n + 2$.

**Translate.** $n \equiv 0 \pmod 4$, $n \equiv 8 \pmod 9$, and $n \equiv 23 \pmod{25}$.

**Sieve from the biggest modulus.** List 23, 48, 73, 98, and so on, adding 25 each time. Keep only multiples of 4: 48, 148, 248, 348, 448, 548. Those step by 100. Now check mod 9. Their remainders are 3, 4, 5, 6, 7, 8. Each step of 100 adds 1 mod 9, since $100 = 99 + 1$. The first one with remainder 8 is 548.

**Check.** $548 = 4 \times 137$, then $549 = 9 \times 61$, and $550 = 25 \times 22$. It works.

Constructions like this prove that there are runs of consecutive numbers each divisible by a chosen square. That's how you show, for example, that there are 10 consecutive numbers, none of which is squarefree.

## Example 3: Designing a number by its divisors

What's the smallest positive integer with exactly 12 positive divisors?

**What do we know?** If $n = p^a q^b r^c \cdots$, then $n$ has $(a+1)(b+1)(c+1)\cdots$ divisors. So we need exponent patterns whose "plus one" values multiply to 12.

**List the patterns.** $12 = 12$, $6 \times 2$, $4 \times 3$, and $3 \times 2 \times 2$. Those give exponents $(11)$, $(5, 1)$, $(3, 2)$, and $(2, 1, 1)$.

**Use the smallest primes, biggest exponent on 2.** The candidates are $2^{11} = 2048$, $2^5 \times 3 = 96$, $2^3 \times 3^2 = 72$, and $2^2 \times 3 \times 5 = 60$. The smallest is 60.

## Example 4: A cube ending in 111

Find the smallest positive integer whose cube ends in the digits 111.

**Split.** We need $x^3 \equiv 111$ mod 8 and mod 125.

**Mod 8.** $111 \equiv 7 \pmod 8$, and the odd cubes mod 8 are 1, 3, 5, 7 for $x$ = 1, 3, 5, 7. So $x \equiv 7 \pmod 8$.

**Mod 125, digit by digit.** Work up through powers of 5, or equivalently, find the last digit, then the last two, then three. Mod 10, a cube ending in 1 needs $x$ to end in 1. Write $x = 10a + 1$. Then $x^3 \equiv 30a + 1 \pmod{100}$, and we need it to end in 11, so $3a$ ends in 1, which forces $a$ to end in 7. Write $x = 100b + 71$. Since $71^3 = 357911$, we need $300b + 911$ to end in 111, so $3b$ ends in 2, giving $b = 4$. Then $x = 471$.

**Check.** 471 is $7 \bmod 8$, as required, and $471^3$ ends in 111.

<section data-box="deeper">

## Going deeper

**Idempotents.** How many $n$ from 1 to 1000 satisfy $n^2 \equiv n \pmod{1000}$? We need $n(n - 1) \equiv 0$ mod 8 and mod 125. Since $n$ and $n - 1$ are coprime, the whole prime power must divide one of them. So $n \equiv 0$ or $1$ mod 8, and $n \equiv 0$ or $1$ mod 125. That's $2 \times 2 = 4$ solutions: 1000, 1, 376, and 625.

Those are the numbers whose squares end in themselves. For example, $376^2 = 141376$ and $625^2 = 390625$. Every pair of remainders, like "0 mod 8 and 1 mod 125," builds one of them.

**Counting pairs with a given lcm.** How many ordered pairs $(a, b)$ have lcm 1000? For the prime 2, the exponents $(i, j)$ must have maximum 3, which happens in $4 \times 4 - 3 \times 3 = 7$ ways. The prime 5 also gives 7. So there are $7 \times 7 = 49$ pairs.

</section>

<section data-box="traps">

## Common traps

**Assuming 2 square roots of 1 for every modulus.** That's true for odd prime powers, but mod 8 there are 4, and mod 4 there are 2. Powers of 2 always need separate care.

**Gluing before checking each piece.** If a condition has no solution mod one prime power, it has no solution at all. Check each piece first.

**Putting the biggest exponent on the biggest prime.** To make a number small, give the largest exponent to 2.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** "How many residues," "smallest positive integer such that," "ends in the digits," or a list of divisibility conditions on consecutive numbers.

**First move:** Factor the modulus into prime powers and write one line for each.

**Checking:** For "smallest" answers, verify the final number against every original condition. For counts, test the method on a smaller modulus where you can list everything, such as 15 instead of 105.

</section>

<section data-box="connections">

## Connections

This lesson uses [CRT and order](/pathway/aime-number-theory/01-crt-and-order/), [counting divisors](/pathway/primes-remainders/02-counting-divisors/), and [Diophantine thinking](/pathway/aime-number-theory/03-diophantine-equations/). The same "split and multiply" idea powers [the roots of unity filter](/pathway/advanced-trig-complex/03-roots-of-unity-filter/) later in this level.

</section>

<section data-box="summary">

## Remember this

- Split the modulus into prime powers, solve each, and glue with CRT.
- Solution counts multiply across prime powers.
- $x^2 \equiv 1$ has 2 solutions mod an odd prime power, but 4 mod 8.
- For a given divisor count, give the largest exponent to the smallest prime.
- Solve "ends in these digits" problems one digit at a time.

</section>
