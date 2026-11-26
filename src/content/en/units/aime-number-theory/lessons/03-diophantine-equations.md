---
title: "Diophantine Equations"
summary: Find all integer solutions by factoring, bounding, working modulo a number, and descent.
minutes: 15
---

How many pairs of positive integers $(x, y)$ satisfy $\frac{1}{x} + \frac{1}{y} = \frac{1}{12}$? Guessing finds a few, like $(24, 24)$ and $(13, 156)$, but the question asks for all of them, and you can't be sure you've found every one by guessing. An equation where only integer solutions count is called a **Diophantine equation**. The AIME loves them, because the answer is a count or a sum, which is a whole number.

> **The big idea:** Integer equations give you tools that ordinary equations don't. You can **factor** so that a product equals a fixed number, **bound** the variables so that only a few cases remain, or **reduce modulo** a number to rule out cases. Most AIME Diophantine problems use one of these three moves, and the hardest use two.

## Tool 1: Factor into a product equal to a constant

If $AB = N$ with $A$ and $B$ integers, then $A$ must be a divisor of $N$. A number has only a few divisors, so the equation splits into a short list of easy cases. The work is in rearranging the equation into that form.

### Simon's Favorite Factoring Trick

An expression like $xy + ax + by$ almost factors. Add $ab$ to both sides:

$$xy + ax + by + ab = (x + b)(y + a)$$

The name comes from the Art of Problem Solving community, and the trick is everywhere on the AIME.

## Example 1: Simon's trick

How many pairs of positive integers satisfy $xy - 3x - 3y = 0$?

**Complete the product.** Add 9 to both sides: $xy - 3x - 3y + 9 = 9$, so

$$(x - 3)(y - 3) = 9$$

**List the cases.** Both factors are integers whose product is 9. The positive pairs are $(1, 9)$, $(3, 3)$, and $(9, 1)$, giving $(x, y) = (4, 12)$, $(6, 6)$, and $(12, 4)$.

**Don't forget negatives.** The pair $(-1, -9)$ gives $x = 2$ and $y = -6$, which isn't positive. The pairs $(-3, -3)$ and $(-9, -1)$ also fail. So there are exactly 3 solutions.

## Example 2: The hook

Solve $\frac{1}{x} + \frac{1}{y} = \frac{1}{12}$ in positive integers.

**Clear the fractions.** Multiply both sides by $12xy$: $12y + 12x = xy$. Rearrange to $xy - 12x - 12y = 0$, then add 144:

$$(x - 12)(y - 12) = 144$$

**Which signs are possible?** Since $\frac{1}{x}$ is less than $\frac{1}{12}$, we need $x > 12$, and similarly $y > 12$. So both factors are positive.

**Count.** Each positive divisor $d$ of 144 gives one solution: $x = 12 + d$ and $y = 12 + \frac{144}{d}$. Since $144 = 2^4 \times 3^2$, it has $5 \times 3 = 15$ divisors. So there are 15 ordered pairs.

Try one. How many pairs of positive integers $(x, y)$ satisfy $x^2 - y^2 = 2025$?

<details class="check"><summary>Show the answer</summary>

Factor: $(x - y)(x + y) = 2025$. Both factors are positive, with $x - y$ smaller than $x + y$, and both are odd because 2025 is odd, so $x$ and $y$ come out as integers. Since $2025 = 3^4 \times 5^2$ has 15 divisors, and 45 pairs with itself (which would make $y = 0$), the other 14 divisors form 7 pairs. So there are 7 solutions.

</details>

## Tool 2: Bounding

When variables appear with different powers, one side often grows much faster. Then only small values can work.

## Example 3: Divisibility by bounding

Find the sum of all positive integers $n$ such that $n + 3$ divides $n^2 + 30$.

**Reduce the big expression.** Since $n \equiv -3 \pmod{n + 3}$, we get $n^2 + 30 \equiv 9 + 30 = 39 \pmod{n + 3}$. So $n + 3$ must divide 39.

**Bound.** The divisors of 39 are 1, 3, 13, and 39. Since $n \ge 1$, we need $n + 3 \ge 4$. So $n + 3$ is 13 or 39, which makes $n$ equal to 10 or 36.

**Check.** For $n = 10$: $n^2 + 30 = 130$, which is $13 \times 10$. For $n = 36$: $n^2 + 30 = 1326$, which is $39 \times 34$. The sum is 46.

This "replace $n$ by its remainder" move turns any polynomial divisibility problem into a divisor problem.

## Tool 3: Work modulo a small number

Sometimes the fastest way to count solutions is to see which remainders are allowed.

## Example 4: Linear equations

How many pairs of nonnegative integers satisfy $3x + 5y = 100$?

**Reduce mod 3.** We need $5y \equiv 100 \pmod 3$, which simplifies to $2y \equiv 1$, so $y \equiv 2 \pmod 3$.

**Bound.** Since $5y \le 100$, we have $y \le 20$. The values $y = 2, 5, 8, \ldots, 20$ all work, and each gives a nonnegative $x$. That's 7 values.

In general, once you find one solution of $ax + by = c$ with $\gcd(a, b) = 1$, every other solution comes from adding $b$ to $x$ and subtracting $a$ from $y$, or the reverse.

Mod arguments also prove that some equations have **no** solutions. Squares are always 0 or 1 mod 4, so $x^2 + y^2 = 2027$ is impossible, since 2027 leaves remainder 3.

<section data-box="deeper">

## Going deeper

**Counting with exponents.** How many ordered pairs of positive integers satisfy $m^2 n = 12^{10}$?

**What's really being chosen?** Since $12^{10} = 2^{20} \times 3^{10}$, write $m = 2^a 3^b$. Then $n$ is forced to be $2^{20 - 2a} 3^{10 - 2b}$, which is an integer exactly when $2a \le 20$ and $2b \le 10$. So $a$ has 11 choices and $b$ has 6, for a total of 66 pairs.

**Infinite descent.** To show that $x^2 = 2y^2$ has no positive solutions, suppose one exists with $x$ as small as possible. Then $x$ is even, say $x = 2u$, so $y^2 = 2u^2$. That's a smaller solution $(y, u)$, which is a contradiction. The same idea proves that $\sqrt 2$ is irrational.

</section>

<section data-box="traps">

## Common traps

**Forgetting negative factor pairs.** In Simon's trick, both factors can be negative. Check them, even if they usually fail.

**Counting unordered pairs when the problem says ordered.** The pairs $(4, 12)$ and $(12, 4)$ are different ordered pairs. Read the question twice.

**Parity mismatch.** In $(x - y)(x + y) = N$, both factors have the same parity. If $N \equiv 2 \pmod 4$, there are no solutions at all.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** "Positive integers," "ordered pairs," and an equation with products or reciprocals.

**First move:** Try to make one side a product of two expressions and the other side a constant. If that's not possible, look for a modulus or a bound.

**Checking:** Plug one solution back into the original equation. Rearranging introduces sign errors, and one check catches most of them.

</section>

<section data-box="connections">

## Connections

Simon's trick is a cousin of [add-one factoring](/pathway/algebra-toolkit/04-add-one-and-telescoping/). Counting divisors comes from [counting divisors without listing them](/pathway/primes-remainders/02-counting-divisors/). For prime powers inside factorials, continue to [prime powers in factorials and binomials](/pathway/aime-number-theory/04-p-adic-valuation/).

</section>

<section data-box="summary">

## Remember this

- Rearrange into (product) = (constant), then list divisor pairs.
- Simon's trick: $xy + ax + by + ab = (x + b)(y + a)$.
- To test whether $n + c$ divides a polynomial in $n$, replace $n$ by $-c$.
- Reduce mod a small number to restrict remainders or prove impossibility.
- Bound the variables so that only a few cases are left.

</section>
