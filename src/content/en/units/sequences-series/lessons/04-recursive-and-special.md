---
title: "Lists Built From a Rule"
summary: Follow rules that build each term from the ones before it, find hidden cycles, and watch sums collapse when terms cancel.
minutes: 10
---

A list starts with 3 and 5. Each new term equals the previous term minus the one before that. What's the 100th term? You might expect to need all 99 terms before it. But write out only a few, and you'll get a surprise: the list starts over again after a while. Rules like this one are common on contests, because they reward people who write out a few terms instead of panicking.

> **The big idea:** A **recursive** rule builds each term from earlier terms. Don't look for a formula right away. **Write out the first several terms, and look for a pattern or a cycle.**

## Why writing terms out works

A rule like "each term is the sum of the two before it" tells you how to take one step, and nothing more. So take a few. Often, you'll find one of two things:

- **A cycle:** If the rule depends only on the last two terms, then once any two neighbors repeat, the whole list must repeat from there. That's the same reasoning as [last-digit cycles](/pathway/primes-remainders/04-units-digits-and-remainders/).
- **A familiar shape:** The terms might turn out to be squares, or one less than powers of 2, and so on.

Let's get used to the notation: $a_1$ means the first term, $a_2$ means the second, and $a_n$ means the $n$th. A rule like $a_{n + 1} = 2a_n + 1$ says that each term is twice the one before it, plus 1.

## Example 1: Following a rule

The first term is 2, and each new term is twice the previous term, plus 1. What's the 5th term?

**What's the plan?** Follow the rule, one step at a time.

- $a_2 = 2 \times 2 + 1 = 5$
- $a_3 = 2 \times 5 + 1 = 11$
- $a_4 = 2 \times 11 + 1 = 23$
- $a_5 = 2 \times 23 + 1 = 47$

Do you see a pattern? Add 1 to each term, and you get 3, 6, 12, 24, 48. That's a geometric sequence! So the $n$th term is $3 \times 2^{n - 1} - 1$. Adding a small number to reveal a pattern is a useful trick.

Try one. In the list 1, 3, 4, 7, 11, ..., each term is the sum of the two before it. What's the next term after 11?

<details class="check"><summary>Show the answer</summary>

Add the two before it: $7 + 11 = 18$.

</details>

## Example 2: A list with a cycle

Back to the opening. Start with 3 and 5, with each new term being the previous term minus the one before it.

$$3, \ 5, \ 2, \ -3, \ -5, \ -2, \ 3, \ 5, \ \ldots$$

**What happened?** After 6 terms, we're back at 3 and 5. Since each term depends only on the two before it, everything now repeats.

**Finding the 100th term:** The cycle has length 6, and $100 = 6 \times 16 + 4$. So the 100th term matches the 4th term, which is $-3$.

**Bonus:** One full cycle adds up to $3 + 5 + 2 - 3 - 5 - 2 = 0$. So the sum of the first 100 terms is only the sum of 4 extra terms: $3 + 5 + 2 - 3 = 7$.

## Example 3: Differences that grow

Look at the list 2, 5, 10, 17, 26, ... What's the 20th term?

**What's a smaller step?** The differences are 3, 5, 7, 9. Those are the odd numbers, and you know that odd numbers build up perfect squares. Compare the terms to the squares 1, 4, 9, 16, 25. Each term is one more than a square.

So the $n$th term is $n^2 + 1$, and the 20th term is $20 \times 20 + 1 = 401$.

**In general:** If the differences form an arithmetic sequence, the list follows a formula with $n^2$ in it.

## Example 4: Sums that collapse

What is $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \cdots + \frac{1}{19 \times 20}$?

**What's a smaller version?** The first term is $\frac{1}{2}$. Adding the second gives $\frac{2}{3}$. Adding the third gives $\frac{3}{4}$. That suggests the answer is $\frac{19}{20}$, but let's see why.

**What's the reason?** Each term splits into two pieces:

$$\frac{1}{n(n + 1)} = \frac{1}{n} - \frac{1}{n + 1}$$

So the sum is $\left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots$, and each middle piece cancels. This is the [telescoping](/pathway/algebra-toolkit/04-add-one-and-telescoping/) you've seen before. What's left is $1 - \frac{1}{20} = \frac{19}{20}$.

## Example 5: A contest-style question

A list starts with 4. Each later term is the sum of the digits of the previous term, squared. So the second term is $4^2 = 16$, and the third is $(1 + 6)^2 = 49$. What's the 50th term?

**What's the plan?** Write out terms until something repeats.

| Term | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th |
|---|---|---|---|---|---|---|---|---|
| Value | 4 | 16 | 49 | 169 | 256 | 169 | 256 | 169 |

The digits of 49 add up to 13, and $13^2 = 169$. The digits of 169 add up to 16, and $16^2 = 256$. The digits of 256 add up to 13 again, so it returns to 169.

**Finding the 50th:** From the 4th term on, even positions are 169, and odd positions are 256. Since 50 is even, the 50th term is **169**.

Note that the start of a list doesn't have to be part of the cycle. Here, the cycle starts at the 4th term.

<section data-box="traps">

## Common traps

**Starting the count wrong.** In Example 5, the cycle doesn't start at the first term. If you use the remainder without accounting for that, you land on the wrong spot. Check your rule on a term that you've already written.

**Remainder 0.** If the position is a multiple of the cycle length, you land on the **last** term in the cycle, not the first.

**Trusting two or three terms.** The list 2, 4 could go on as 6, 8, or 8, 16, or 16, 256. Write enough terms to see the rule actually working, and find out why it works when you can.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** You see a rule that defines a term using earlier ones, and a huge position, like the 100th or the 2,000th term.

**Write terms neatly:** Use a table, so that a repeat stands out. It usually appears within about 10 terms.

**Time:** Two minutes. If no pattern shows up after 8 or 10 terms, try looking at differences, or at the terms plus 1.

**Using the answer choices:** Once you have a cycle, the answer has to be one of the values in it. That can eliminate most of the choices right away.

</section>

<section data-box="connections">

## Connections

Cycles come from [repeating patterns](/pathway/logic-patterns/01-repeating-and-growing/), and telescoping comes from the [Algebra Toolkit](/pathway/algebra-toolkit/04-add-one-and-telescoping/). Rules like these also count things in [Advanced Counting](/pathway/advanced-counting/03-counting-step-by-step/).

</section>

<section data-box="summary">

## Remember this

- A recursive rule builds each term from earlier ones.
- Write out terms, and look for a pattern.
- If two neighbors repeat, the whole list cycles.
- Use a remainder to jump ahead in a cycle.
- Check differences, or add 1, to reveal a shape.

</section>
