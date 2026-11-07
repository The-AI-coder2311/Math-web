---
title: "Factors, Primes and Leftovers"
summary: Factors come in pairs, so you can find them all without missing any. Then see how primes and leftovers fit the same idea.
minutes: 12
---

Suppose you have 12 square tiles, and you want to arrange all of them into a rectangle. How many different rectangles can you make? Try to sketch them. How do you know when you've found them all?

This is really a question about **factors**. A factor of a number is a whole number that divides it with nothing left over. For example, 3 is a factor of 12, because $12 \div 3 = 4$.

> **The big idea:** Factors come in **pairs**. Whenever you find one factor, you automatically find its partner too. So you only have to search up to the middle.

## Why factors come in pairs

Here are the rectangles you can make with 12 tiles:

![Three rectangles made from 12 square tiles. One has 1 row of 12 tiles, one has 2 rows of 6 tiles, and one has 3 rows of 4 tiles.](/images/number-sense-tile-rectangles.svg)

Each rectangle has two side lengths, and those two numbers multiply to 12. Turning the rectangle sideways swaps them. So every rectangle gives a **pair** of factors:

$$1 \times 12 = 12 \qquad 2 \times 6 = 12 \qquad 3 \times 4 = 12$$

The factors of 12 are 1, 2, 3, 4, 6, and 12. That's 3 pairs, which makes 6 factors.

## Example 1: Finding every factor of 24

To make sure you don't miss any, start at 1 and count up, writing down each pair:

- 1 works, and its partner is 24.
- 2 works, and its partner is 12.
- 3 works, and its partner is 8.
- 4 works, and its partner is 6.
- 5 doesn't work.
- 6 is already on our list, so we can **stop**.

Why is stopping safe? Once you pass the middle, the smaller number in any pair would've already appeared on your list. So 24 has 4 pairs, which makes 8 factors.

Try it yourself. List all the factors of 30.

<details class="check"><summary>Show the answer</summary>

The pairs are 1 and 30, 2 and 15, 3 and 10, and 5 and 6. So the factors are 1, 2, 3, 5, 6, 10, 15, and 30, which makes 8 factors.

</details>

## Example 2: When a number pairs with itself

Now try 36. The pairs are 1 and 36, 2 and 18, 3 and 12, 4 and 9, and then $6 \times 6 = 36$.

The number 6 is its own partner, so it only counts once. That gives 36 a total of 9 factors, which is an odd number.

Here's a fact worth remembering: **only perfect squares have an odd number of factors**, since they're the only numbers with a factor that pairs with itself. Perfect squares are 1, 4, 9, 16, 25, 36, and so on. For any other number, the factors all come in matched pairs, so the total is even.

## Example 3: Numbers with only one pair

Some numbers have only one factor pair: 1 and the number itself. For example, the only pair for 7 is 1 and 7. These are called **prime numbers**. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29.

How can you test whether a number is prime? Use the pair idea. Is 91 prime? If it has a factor pair, the smaller number in the pair can't be bigger than 9, since $10 \times 10 = 100$ is already too large. So we only need to try dividing by the primes 2, 3, 5, and 7. Try them, and you'll find $91 = 7 \times 13$. So 91 isn't prime, even though it looks like it might be.

## Example 4: Leftovers are factors in disguise

Omar shares 23 stickers equally among some friends, and there are 3 stickers left over. How many friends could there be?

**What do we know?** After setting aside the 3 leftovers, the rest got shared evenly. That's $23 - 3 = 20$ stickers.

**What's the question really asking?** The number of friends must be a factor of 20: 1, 2, 4, 5, 10, or 20.

**Is there a catch?** Yes. With 1, 2, or 3 friends, the 3 leftover stickers could still be shared, so they wouldn't be left over. There must be more than 3 friends, which leaves 4, 5, 10, or 20.

## Example 5: A contest-style question

How many whole numbers from 1 to 50 have an odd number of factors?

**What's a smaller version?** Check a few. The number 1 has 1 factor, 2 has 2 factors, 3 has 2 factors, and 4 has 3 factors (1, 2, and 4). The ones with an odd count are 1, 4, 9, and so on.

**What's the key fact?** Only perfect squares have an odd number of factors. So we need to count perfect squares up to 50: 1, 4, 9, 16, 25, 36, and 49. That's 7 numbers.

Notice how a question that looks like 50 separate checks turned into a short count, because we understood **why** the pattern holds.

<section data-box="deeper">

## Going deeper

Factor pairs can solve a puzzle that seems to have nothing to do with factors.

**A harder one:** A hallway has 100 closed lockers, numbered 1 to 100. Student 1 opens every locker. Student 2 changes every 2nd locker, opening it if it's closed and closing it if it's open. Student 3 changes every 3rd locker, and so on, up to student 100. How many lockers end up open?

**Who touches locker 12?** Students 1, 2, 3, 4, 6, and 12. Those are the factors of 12. So each locker gets touched once per factor.

**When does a locker end up open?** It starts closed, so it needs an **odd** number of touches.

**Which numbers have an odd number of factors?** Factors come in pairs, such as 3 and 4 for 12. A pair only fails when a number pairs with itself, as in $6 \times 6 = 36$. So only perfect squares have an odd number of factors.

The open lockers are 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100. That's **10** lockers.

Try this. How many lockers end up open if there are 200?

<details class="check"><summary>Show the answer</summary>

We need the perfect squares up to 200. Since $14 \times 14 = 196$ and $15 \times 15 = 225$, there are 14.

</details>

</section>

<section data-box="traps">

## Common traps

**Calling 1 prime.** A prime has exactly 2 different factors, and 1 only has one. So 1 isn't prime. And 2 is prime, even though it's even. It's the only even prime.

**Trusting how a number looks.** Numbers like 51, 57, and 91 feel prime, but they aren't: $51 = 3 \times 17$, $57 = 3 \times 19$, and $91 = 7 \times 13$. Use the digit-sum test for 3, and try 7.

**Forgetting 1 and the number itself.** When asked for the factors of 12, some students list 2, 3, 4, and 6, and answer 4. But 1 and 12 are factors too, so there are 6.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "factor," "divisor," "prime," "rectangle with area," "rows," or "left over."

**How long it should take:** About a minute to list the factors of a number below 100. For bigger numbers, there's a faster way in Level 2.

**Using the answer choices:** If a problem says the answer is prime, cross out choices that are even or that pass the digit-sum test for 3.

</section>

<section data-box="connections">

## Connections

[Divisibility rules](/pathway/number-sense/03-divisibility-rules/) speed up factor hunting. [Primes & Remainders](/pathway/primes-remainders/) shows how primes let you count factors without listing them.

</section>

<section data-box="summary">

## Remember this

- Factors come in pairs, so stop when the pairs start to repeat.
- Only perfect squares have an odd number of factors.
- A prime has exactly 2 factors, and 1 isn't prime.
- To test for a prime, you only need to try primes up to the middle.
- Leftovers: subtract them, then look for factors.

</section>
