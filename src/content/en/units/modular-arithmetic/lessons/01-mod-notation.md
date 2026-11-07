---
title: "Mod Notation and the Rules"
summary: Learn the language of remainders, and find out which operations you can do with remainders alone, and which one you can't.
minutes: 12
---

It's 9 o'clock. What time will it be in 5 hours? You say 2 o'clock, without blinking, even though $9 + 5 = 14$. You've been doing a kind of math called **modular arithmetic** ever since you learned to read a clock. In Level 2, you saw that you can add and multiply using only remainders. In this lesson, we'll give that idea a proper language, and that's what makes much harder problems possible.

> **The big idea:** If you only care about the remainder, then any number can be replaced by a **smaller number with the same remainder**. We write $17 \equiv 2 \pmod{5}$, which means that 17 and 2 leave the same remainder when divided by 5.

## The notation

We say "17 is congruent to 2, mod 5." Here are three ways of saying the same thing:

- 17 and 2 leave the same remainder when divided by 5.
- $17 - 2$ is a multiple of 5.
- 17 can be written as 2 plus some multiple of 5.

So mod 5, the numbers 2, 7, 12, 17, and 22 are all interchangeable, as are the numbers $-3$ and $-8$. The number after "mod" is called the **modulus**. On a clock, the modulus is 12. For days of the week, it's 7.

## Why the rules work

If $a \equiv b$ and $c \equiv d$ with the same modulus, then:

- $a + c \equiv b + d$
- $a - c \equiv b - d$
- $a \times c \equiv b \times d$

Here's why it works for multiplication. Say $a = b + 5m$ and $c = d + 5n$. Multiply these: every part of the product other than $b \times d$ contains a factor of 5. So those parts don't affect the remainder.

**Test:** Mod 5, $17 \equiv 2$ and $13 \equiv 3$. Then $17 \times 13 = 221$, which has a remainder of 1. And $2 \times 3 = 6$, which also has a remainder of 1. It works.

## Example 1: Shrinking a big product

What's the remainder when $1003 \times 2006$ is divided by 10?

**What's the plan?** Mod 10 keeps only the last digit, so replace the numbers with 3 and 6.

$$1003 \times 2006 \equiv 3 \times 6 = 18 \equiv 8 \pmod{10}$$

So the remainder is 8.

Try one. What's the remainder when $24 \times 25$ is divided by 7?

<details class="check"><summary>Show the answer</summary>

$24 \equiv 3$ and $25 \equiv 4$, mod 7. So the product is $3 \times 4 = 12 \equiv 5$. The remainder is 5.

</details>

## Example 2: Negative numbers are allowed

What's the remainder when $27 \times 34$ is divided by 7?

**What's the trick?** We can use negatives if they're simpler. Since 27 is 1 less than 28, it's $27 \equiv -1$. And since 34 is 1 less than 35, $34 \equiv -1$.

$$27 \times 34 \equiv (-1) \times (-1) = 1 \pmod{7}$$

So the remainder is 1. **Check:** $27 \times 34 = 918$, and $918 = 7 \times 131 + 1$.

## Example 3: What division can't do

Since $20 \equiv 8 \pmod{12}$, can we divide both sides by 4, to get $5 \equiv 2 \pmod{12}$? No! The difference between 5 and 2 is 3, which isn't a multiple of 12. So division doesn't work freely.

This is why we use the rules for adding, subtracting, and multiplying, and we're careful about dividing. There are correct ways to divide, but they require more care, and you can solve most contest problems without them.

## Example 4: Explaining the divisibility rules

Why does the digit-sum test for 9 work? Since $10 \equiv 1 \pmod{9}$, multiplying gives $100 \equiv 1$, $1000 \equiv 1$, and so on.

$$352 = 3 \times 100 + 5 \times 10 + 2 \equiv 3 + 5 + 2 \pmod{9}$$

So a number and the sum of its digits always have the same remainder mod 9. It's a one-line proof of a rule that you've used since Level 1. Similarly, the test for 11 uses $10 \equiv -1 \pmod{11}$, which leads to an alternating digit sum: a number is divisible by 11 if the digits, added and subtracted in turn, give a multiple of 11.

**Example:** For 2,728, $8 - 2 + 7 - 2 = 11$, so it's divisible by 11.

## Example 5: A contest-style question

Today is Tuesday. What day of the week will it be $5 \times 13 \times 22 \times 37$ days from now?

**What's the modulus?** Days of the week repeat every 7, so we work mod 7.

**Replace each number:** $5 \equiv 5$, $13 \equiv -1$, $22 \equiv 1$, and $37 \equiv 2$.

$$5 \times (-1) \times 1 \times 2 = -10 \equiv 4 \pmod{7}$$

To get from $-10$ to a remainder from 0 to 6, add 14. So we move 4 days forward from Tuesday, and that's **Saturday**.

<section data-box="deeper">

## Going deeper

To prove something about **every** whole number, you only need to test each remainder. There are only a few of them.

**A harder one:** Can $n^2 + 1$ ever be divisible by 3?

**What's the plan?** Any whole number has a remainder of 0, 1, or 2 when divided by 3. So check all three:

| $n$ mod 3 | $n^2$ mod 3 | $n^2 + 1$ mod 3 |
|---|---|---|
| 0 | 0 | 1 |
| 1 | 1 | 2 |
| 2 | 1 | 2 |

The last column never shows a 0. So $n^2 + 1$ is **never** divisible by 3, for any of the infinitely many whole numbers. Three small checks settled all of them.

**Another use:** The product $n(n + 1)(n + 2)$ is always divisible by 6. Among three numbers in a row, one is a multiple of 3, and at least one is even.

This is the same "test every case" idea from [logic tables](/pathway/logic-patterns/04-logic-tables-pigeonholes/), made possible because remainders cycle.

Try this. Can $n^2 + n + 1$ ever be divisible by 5? Test the remainders 0 through 4.

<details class="check"><summary>Show the answer</summary>

The values are 1, 3, 7, 13, and 21. Their remainders mod 5 are 1, 3, 2, 3, and 1. None is 0, so it's never divisible by 5.

</details>

</section>

<section data-box="traps">

## Common traps

**Thinking that $\equiv$ means equals.** The number 17 doesn't equal 2. They're congruent, which means they leave the same remainder. You also have to keep track of the modulus, and only combine numbers with the same one.

**Leaving a negative remainder.** An answer of $-3$ mod 7 isn't a remainder yet. Add 7 to get 4. Contests want a remainder from 0 up to one less than the modulus.

**Dividing both sides.** As you saw in Example 3, that can give false statements. Avoid it until you've learned how.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "remainder," "divisible," "last digit" (which is mod 10), "last two digits" (mod 100), or days of the week.

**Reduce early and often:** Replace numbers with small ones after every step. Use negatives when they're smaller.

**Eliminate:** Testing an answer mod 3 or mod 9 is fast, because of the digit sum, and it can rule out many choices.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

This is the next step after [remainder arithmetic](/pathway/primes-remainders/04-units-digits-and-remainders/) in Level 2. It explains [divisibility rules](/pathway/number-sense/03-divisibility-rules/) from Level 1. Next, it takes on [giant powers](/pathway/modular-arithmetic/02-giant-powers/).

</section>

<section data-box="summary">

## Remember this

- $a \equiv b \pmod{n}$ means that $a - b$ is a multiple of $n$.
- You can add, subtract, and multiply by replacing numbers.
- Don't divide freely.
- Negative replacements are fine, but finish with a real remainder.
- Reduce early, to keep the numbers small.

</section>
