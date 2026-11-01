---
title: "Repeating and Growing Patterns"
summary: Use remainders to jump ahead in a repeating pattern, and learn how to reach the 100th term of a growing one without off-by-one mistakes.
minutes: 9
---

Today is Wednesday. What day of the week will it be 1,000 days from now? You could count on a calendar, but that would take a long time. It turns out that you can answer this with a single division, because the days of the week follow a pattern, and patterns let you skip ahead.

> **The big idea:** In a **repeating** pattern, whole cycles can be skipped, so only the remainder matters. In a **growing** pattern that adds the same amount each time, count the **steps** you take, and multiply.

## Why remainders work

The days of the week repeat every 7 days. Every 7 days later, it's Wednesday again, no matter how many times you do it. So any number of full weeks changes nothing. Only the leftover days matter.

Let's test this on a small case. What day is it 10 days from Wednesday? Counting on your fingers gets you to Saturday. Using division, $10 \div 7$ is 1 with a remainder of 3, and 3 days after Wednesday is Saturday. It matches.

For 1,000 days, we have $1000 = 7 \times 142 + 6$. So the remainder is 6, and 6 days after Wednesday is **Tuesday**.

## Example 1: A repeating pattern

Beads on a string repeat in the order red, blue, green, and then start over. What color is the 50th bead?

**What do we know?** The cycle has 3 beads.

**What's the plan?** $50 = 3 \times 16 + 2$. So the first 48 beads make 16 full cycles, ending on green. Then we go 2 more beads: red, then blue. The 50th bead is **blue**.

**A helpful way to check:** Which beads are blue? They're numbers 2, 5, 8, 11, and so on, and each has a remainder of 2 when divided by 3. The number 50 also has a remainder of 2, so it fits.

> **Watch out:** When the remainder is 0, you land on the **last** item in the cycle, not the first. The 48th bead is green.

Try this one before moving on. The letters S, T, A, R repeat in order. What's the 42nd letter?

<details class="check"><summary>Show the answer</summary>

The cycle has 4 letters, and $42 = 4 \times 10 + 2$. The remainder is 2, so it's the 2nd letter, which is T.

</details>

## Example 2: A growing pattern

What's the 30th number in the list 5, 8, 11, 14, ...?

**What do we know?** It starts at 5, and each step adds 3.

**How many steps are there?** It's tempting to say 30. But test a small case: going from the 1st number to the 2nd takes **1** step, and going to the 3rd takes **2** steps. So going to the 30th takes 29 steps.

$$5 + 29 \times 3 = 92$$

So the rule is: the $n$th number equals the first number, plus $(n - 1)$ steps.

## Example 3: How many numbers are in a list?

How many numbers are in the list 7, 11, 15, ..., 95?

**What do we know?** Each step adds 4, and the list goes from 7 to 95.

**What's the plan?** The total climb is $95 - 7 = 88$. Each step climbs 4, so there are $88 \div 4 = 22$ steps.

**Now the tricky part:** 22 steps connect **23** numbers. Think of a fence: 22 gaps need 23 posts. Test it on a small list. The list 7, 11, 15 has 2 steps and 3 numbers.

## Example 4: Patterns in pictures

Toothpicks form a row of triangles that share sides. One triangle uses 3 toothpicks, two use 5, and three use 7. How many toothpicks do 25 triangles use?

**What's the pattern?** The counts are 3, 5, 7, so each new triangle adds 2 toothpicks. **Why?** A new triangle shares one side with its neighbor, so it needs only 2 new ones.

**How many steps are there?** From 1 triangle to 25 is 24 steps.

$$3 + 24 \times 2 = 51$$

Knowing **why** the pattern works means that you can trust it for 25 triangles, without building them.

## Example 5: A contest-style question

The digits 1, 4, 2, 8, 5, 7 repeat forever to make the decimal 0.142857142857... What's the sum of the first 100 digits after the decimal point?

**What do we know?** The cycle has 6 digits, and they add up to $1 + 4 + 2 + 8 + 5 + 7 = 27$.

**How many full cycles are there?** $100 = 6 \times 16 + 4$. So there are 16 full cycles and 4 extra digits.

- The full cycles add up to $16 \times 27 = 432$.
- The 4 extra digits are 1, 4, 2, and 8, which add up to 15.

$$432 + 15 = 447$$

<section data-box="traps">

## Common traps

**Off by one.** For the 30th number in the list, using $30 \times 3$ instead of $29 \times 3$ gives 95, which is wrong. Getting to the $n$th number takes $n - 1$ steps. If you're ever unsure, test with the 2nd or 3rd number.

**Counting the gaps and not the numbers.** In Example 3, the answer 22 is the number of steps. There are 23 numbers. Fences, lists, and page numbers all have this issue. For example, pages 5 through 9 are 5 pages, not 4.

**Remainder 0 confusion.** Some students think that a remainder of 0 means the first item in the cycle. It actually means that you finished a full cycle, so you're on the last item.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for a huge position, like "the 100th" or "the 2,000th," or words like "continues in this pattern" or "repeats."

**Write out the start:** Write the first several terms to find the cycle. It costs 20 seconds and shows you the pattern. If you find the cycle, you're nearly done.

**Time:** About a minute. If you're making a long list, stop and find what's repeating.

</section>

<section data-box="connections">

## Connections

Remainders come from [Number Sense](/pathway/number-sense/). They come back as [units-digit patterns](/pathway/primes-remainders/) in Level 2. [Sequences & Series](/pathway/sequences-series/) in Level 3 builds on growing patterns.

</section>

<section data-box="summary">

## Remember this

- Repeating pattern: divide by the cycle length, and use the remainder.
- Remainder 0 means the last item in the cycle.
- Growing pattern: $n$th number = first + $(n - 1)$ steps.
- Steps connect numbers: 22 steps means 23 numbers.
- Test a small case whenever you aren't sure.

</section>
