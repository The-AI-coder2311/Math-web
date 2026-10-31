---
title: "Mental Math Shortcuts"
summary: Calculators aren't allowed on these contests. Learn to rearrange problems so that the arithmetic gets easy and you make fewer mistakes.
minutes: 9
---

What is $25 \times 37 \times 4$? If you start from the left, you'll have to work out $25 \times 37$, which is messy. But look at the 25 and the 4. Since $25 \times 4 = 100$, the whole thing is $100 \times 37 = 3700$. You can do that in your head. Calculators aren't allowed on most contests for beginners, and problems are written so that you won't need one, as long as you look for the easy path.

> **The big idea:** Before you calculate, look for a way to **rearrange** the numbers. Addition and multiplication let you change the order and grouping, and splitting numbers into friendly pieces makes hard products easy.

## Why rearranging is allowed

When you multiply, order doesn't matter: a rectangle with 3 rows of 5 tiles has the same number of tiles as one with 5 rows of 3. You can also regroup: $(2 \times 3) \times 4$ and $2 \times (3 \times 4)$ both equal 24. The same is true for addition. It's **not** true for subtraction or division. For example, $10 - 3$ isn't the same as $3 - 10$.

There's one more tool, and a picture explains it. Suppose a rectangle is 7 tall and 23 wide. Cut it into two parts, one 20 wide and one 3 wide. The area hasn't changed, so:

$$7 \times 23 = 7 \times 20 + 7 \times 3 = 140 + 21 = 161$$

This is called the **distributive property**. It's how you multiply big numbers in your head. You can cut the rectangle anywhere you like, so choose cuts that give friendly numbers. For $7 	imes 23$, cutting at 20 and 3 is natural. For $7 	imes 19$, you could cut a 20-wide rectangle and take away a 1-wide strip instead, which gives $140 - 7 = 133$.

## Example 1: Friendly pairs

Compute $4 \times 17 \times 25$, and then compute $2 \times 13 \times 5 \times 7$.

**What's the shortcut?** Look for pairs that make 10 or 100.

- $4 \times 25 = 100$, so the first is $100 \times 17 = 1700$.
- $2 \times 5 = 10$, so the second is $10 \times 13 \times 7$. And $13 \times 7 = 91$, so the answer is 910.

Pairs worth knowing are $2 \times 5 = 10$, $4 \times 25 = 100$, and $8 \times 125 = 1000$.

## Example 2: Using a nearby round number

Compute $6 \times 99$ and $48 + 197$.

**What's the shortcut?** 99 is 1 less than 100, and 197 is 3 less than 200. Use the round number and then fix it.

$$6 \times 99 = 6 \times 100 - 6 = 594$$

For the addition, $48 + 200 = 248$. We added 3 too many, so take them back: $248 - 3 = 245$.

Your turn. Compute $15 \times 98$ in your head.

<details class="check"><summary>Show the answer</summary>

$15 \times 100 = 1500$, and then subtract 2 fifteens: $1500 - 30 = 1470$.

</details>

## Example 3: Pulling out a common factor

Compute $37 \times 14 + 37 \times 86$.

**What do we know?** Both parts have 37 in them. Picture 37 rows of 14 tiles sitting next to 37 rows of 86 tiles. That's 37 rows of 100 tiles.

$$37 \times 14 + 37 \times 86 = 37 \times 100 = 3700$$

When a contest shows you something that looks tedious, the writers usually left a door open. If two numbers add up to something round, like 14 and 86, that's a clue.

## Example 4: Pairing up long lists

Compute $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10$.

**What's the shortcut?** Pair the outside numbers: 1 and 10 make 11, 2 and 9 make 11, and so on. There are 5 pairs, so the sum is $5 \times 11 = 55$.

The same pairing works for subtraction patterns. What is $100 - 98 + 96 - 94 + 92 - 90$? Group it as $(100 - 98) + (96 - 94) + (92 - 90)$. Each group is 2, and there are 3 groups, so the answer is $3 \times 2 = 6$.

## Example 5: A contest-style question

What is $\frac{2 \times 4 \times 6 \times 8}{1 \times 2 \times 3 \times 4}$?

**What's the shortcut?** Don't multiply it all out. Each top number is twice a bottom number: 2 over 1, 4 over 2, 6 over 3, and 8 over 4. Each of those fractions equals 2.

$$2 \times 2 \times 2 \times 2 = 16$$

Multiplying everything out would give 384 on top and 24 on the bottom, and then you would still have to divide. Canceling before multiplying is one of the most useful habits in contest math. It keeps the numbers small, and small numbers lead to fewer mistakes.

<section data-box="traps">

## Common traps

**Ignoring order of operations.** What is $6 + 4 \times 5$? Going from left to right gives $10 \times 5 = 50$, which is wrong. Multiplication comes before addition, so the answer is $6 + 20 = 26$.

**Rearranging subtraction.** In $20 - 7 + 3$, some students add first and get $20 - 10 = 10$. But the minus sign only belongs to the 7, so the answer is $13 + 3 = 16$. You may move a number if you take its sign with it.

**Fixing in the wrong direction.** For $6 \times 99$, you used 100, which was too many. So you subtract. A student who adds gets 606, which can't be right, since $6 \times 99$ must be less than $6 \times 100$. A quick size check catches this.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Any problem with large numbers on a test without calculators probably has a shortcut. Look for pairs that make round numbers, numbers close to round numbers, and factors that repeat.

**Spend 5 seconds looking first.** That small pause saves a lot of time, and it also prevents mistakes.

**Estimate to eliminate:** $49 \times 21$ is close to $50 \times 20 = 1000$. If the answer choices are 69, 609, 1029, and 10,290, then you only have one sensible answer. Its last digit also helps: $9 \times 1$ ends in 9, and 1029 ends in 9.

</section>

<section data-box="connections">

## Connections

Pulling out a common factor becomes [factoring](/pathway/algebra-toolkit/) in Level 3. Canceling helps in [fractions](/pathway/fractions-ratios/) and in [counting with "choose"](/pathway/counting/03-overcount-then-divide/).

</section>

<section data-box="summary">

## Remember this

- Look for $2 \times 5$, $4 \times 25$, and $8 \times 125$.
- Use a round number nearby, then fix it.
- Common factor? Pull it out.
- Cancel before you multiply.
- Do multiplication before addition, and check the size of your answer.

</section>
