---
title: "Try Small, Then Ask Why"
summary: When a problem looks huge, solve tiny versions of it and look for a pattern. Then find the reason, because patterns can fool you.
minutes: 12
---

Ten people at a party all shake hands with each other once. How many handshakes is that? Trying to imagine all 10 people at once is overwhelming. So don't. Start with a party of 2, then 3, then 4, and watch what happens.

> **The big idea:** When a problem looks too big, try **tiny versions** of it and look for a pattern. Then ask **why** the pattern happens, since a pattern without a reason is only a guess.

## Trying it on the handshakes

Make a table, starting as small as you can:

| People | Handshakes | How it grew |
|---|---|---|
| 2 | 1 | |
| 3 | 3 | added 2 |
| 4 | 6 | added 3 |
| 5 | 10 | added 4 |

**Why does it grow this way?** When a new person arrives, they shake hands with everyone who's already there. So the 5th person adds 4 handshakes, and the 10th person adds 9. That means:

$$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$$

Here's a second way to see it. Each of the 10 people shakes 9 hands, and $10 \times 9 = 90$. But that counts every handshake twice, once for each person in it, so there are $90 \div 2 = 45$ handshakes. Two different methods gave the same answer, which is excellent evidence that it's right.

## Why you can't trust a pattern alone

Put dots on a circle, connect every pair with straight lines, and count the regions inside. (Place the dots so that no three lines cross at the same point.) Here's what happens:

| Dots | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Regions | 1 | 2 | 4 | 8 | 16 | 31 |

It looks exactly like doubling, but the next number is 31, not 32! So a pattern is a clue, not a proof. On a timed contest, it's fine to choose an answer based on a strong pattern. But when you have time, look for the reason.

## Example 1: Adding the first numbers quickly

What is $1 + 2 + 3 + \cdots + 100$?

**What's a smaller version?** Try $1 + 2 + 3 + 4$. Write it forward and backward, and add each column:

| | | | | |
|---|---|---|---|---|
| Forward | 1 | 2 | 3 | 4 |
| Backward | 4 | 3 | 2 | 1 |
| Sum | 5 | 5 | 5 | 5 |

There are 4 columns of 5, which makes 20. But we wrote the list twice, so the answer is half of that: 10.

**Scaling up:** With the numbers 1 to 100, there are 100 columns of 101. So:

$$\frac{100 \times 101}{2} = 5050$$

This also explains the handshakes: $\frac{9 \times 10}{2} = 45$.

## Example 2: Why odd numbers make squares

What is $1 + 3 + 5 + 7$? Look at what happens when you arrange dots in squares:

![Squares of dots growing by an L shape. One dot, then adding 3 dots makes 4, adding 5 dots makes 9, and adding 7 dots makes 16.](/images/logic-odd-squares.svg)

Each new L shape of dots adds the next odd number and makes a bigger square. So the sum of the first 4 odd numbers is $4 \times 4 = 16$, and the first 10 odd numbers add up to $10 \times 10 = 100$. The picture shows **why**, so you can trust it for any length.

Now try one. What's the sum of the first 7 odd numbers?

<details class="check"><summary>Show the answer</summary>

The first 7 odd numbers make a 7 by 7 square of dots: $7 \times 7 = 49$. You can check: $1 + 3 + 5 + 7 + 9 + 11 + 13 = 49$.

</details>

## Example 3: A last-digit puzzle

What's the last digit of $2^{100}$? That's 2 multiplied by itself 100 times, far too big to write out.

**What's a smaller version?** Find the first few powers, and watch only the last digit: 2, 4, 8, 16, 32, 64, 128, 256. The last digits go 2, 4, 8, 6, 2, 4, 8, 6.

**Why does it repeat?** The last digit of a product depends only on the last digits you multiply, so once a last digit comes back, everything after it repeats.

The cycle has 4 digits, and 100 is a multiple of 4. A remainder of 0 means the last item in the cycle, so the last digit is **6**.

## Example 4: A contest-style question

A square grid has 3 rows and 3 columns of small squares. How many squares of all sizes can you find in it? What about a grid with 10 rows and 10 columns?

**What's a smaller version?** Let's count for a few grids.

- A 1 by 1 grid has 1 square.
- A 2 by 2 grid has 4 small squares and 1 big one, for a total of 5.
- A 3 by 3 grid has 9 small squares, 4 squares of size 2, and 1 square of size 3, for a total of 14.

**Do you see it?** The totals are 1, then $1 + 4$, then $1 + 4 + 9$. We're adding perfect squares.

**Why?** A square of size 2 in a 3 by 3 grid can slide to 2 positions across and 2 positions down, which gives $2 \times 2 = 4$ spots. That reason holds for any size. So a 10 by 10 grid has:

$$1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385$$

<section data-box="deeper">

## Going deeper

Small cases help you find a pattern, but a pattern isn't a proof. Here's one that works, and one that fails.

**A harder one:** Draw straight lines across a circle so that each pair of lines crosses inside it, and no three lines cross at one point. How many regions do 5 lines make?

| Lines | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Regions | 2 | 4 | 7 | 11 |

**What's the pattern?** The jumps are 2, 3, and 4. So 5 lines add 5 more regions: $11 + 5 = 16$.

**Why does it hold?** The 5th line crosses the 4 earlier lines, so it passes through 5 regions, and it splits each of them into two. So the pattern has a reason behind it.

**Now a warning.** Put dots on a circle, connect each pair with a line, and count the regions. With 1, 2, 3, 4, and 5 dots, you get 1, 2, 4, 8, and 16. It's surely 32 for 6 dots, right? It's actually **31**. A pattern with no reason behind it can fail.

So when you find a pattern, ask why it should continue.

Try this. How many regions do 6 lines make?

<details class="check"><summary>Show the answer</summary>

The 6th line adds 6 more regions, so $16 + 6 = 22$.

</details>

</section>

<section data-box="traps">

## Common traps

**Trusting too few cases.** The list 2, 4, ... might continue as 6 or as 8. You'd need more terms to tell. Try at least 4 small cases before you look for a pattern.

**Stopping at the table.** Students often find a pattern and extend it wrongly because they don't know the reason. If you know why the 10th person adds 9 handshakes, you won't accidentally add 10.

**Counting handshakes twice.** The answer 90 for the handshake problem counts each handshake once for each person. A handshake needs 2 people, so you have to divide by 2.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for huge numbers, like $2^{100}$, or a size that seems impossible to draw, like a 10 by 10 grid.

**Choose tiny cases:** Use 1, 2, 3, and 4. Organize them in a table so you can see how each row changes.

**Time:** Two to three minutes. Small cases take less time than you'd expect, and they're also a great way to check an answer you've already found.

**Using the answer choices:** If you have a formula in mind, test it on a tiny case that you can count by hand before using it.

</section>

<section data-box="connections">

## Connections

The sum in Example 1 counts [pairs, using "choose 2"](/pathway/counting/03-overcount-then-divide/). The last-digit idea returns in [Primes & Remainders](/pathway/primes-remainders/).

</section>

<section data-box="summary">

## Remember this

- Too big? Try tiny versions, in a table.
- Ask why the pattern happens.
- $1 + 2 + \cdots + n$ equals $n \times (n + 1)$ divided by 2.
- The first $n$ odd numbers add up to $n \times n$.
- A pattern is a clue, not a proof.

</section>
