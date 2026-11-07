---
title: "Arithmetic Sequences"
summary: Find any term of a list that grows by the same amount each time, and work out the pattern from only two of its terms.
minutes: 12
---

The 3rd number in a list is 14, and the 7th number is 30. The list grows by the same amount at every step. What's the 100th number? You aren't told how the list starts or how much it grows by, and it might look as if something is missing. But two terms are enough to rebuild the entire list.

> **The big idea:** An **arithmetic sequence** adds the same amount, called the **common difference**, at every step. To get from one term to another, count the **steps** between them. The $n$th term is the first term plus $n - 1$ steps.

## Why the formula works

Let's look at the list 5, 8, 11, 14, 17. The common difference is 3. Write each term in terms of the first one:

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Term | 5 | 8 | 11 | 14 | 17 |
| Built from the first term | $5$ | $5 + 1 \times 3$ | $5 + 2 \times 3$ | $5 + 3 \times 3$ | $5 + 4 \times 3$ |

The number of 3s is always one less than the position. That's because the first term needs no steps at all. So if the first term is $a$ and the common difference is $d$:

$$n\text{th term} = a + (n - 1) \times d$$

You don't have to memorize this if you remember the idea of counting steps. It's the same fence-post thinking you used in [Logic & Patterns](/pathway/logic-patterns/01-repeating-and-growing/): 4 gaps connect 5 posts.

A sequence can also shrink. In 50, 44, 38, 32, the common difference is $-6$. Everything else works the same way.

## Example 1: Finding a far-away term

What's the 40th term of 7, 11, 15, 19, ...?

**What do we know?** The first term is 7, and each step adds 4.

**How many steps are there?** Going from the 1st term to the 40th takes 39 steps.

$$7 + 39 \times 4 = 163$$

**A quick check on the method:** Use it on a term you can see. For the 3rd term, it gives $7 + 2 \times 4 = 15$. That matches the list.

Try one before going on. What's the 25th term of 100, 97, 94, ...?

<details class="check"><summary>Show the answer</summary>

Each step subtracts 3, and there are 24 steps. So the term is $100 - 24 \times 3 = 28$.

</details>

## Example 2: How many terms are there?

How many numbers are in the list 12, 17, 22, ..., 97?

**What's the question really asking?** We know where the list starts and ends, and we want a count.

**What's the plan?** The total climb is $97 - 12 = 85$. Each step climbs 5, so there are $85 \div 5 = 17$ steps. Then 17 steps connect 18 numbers.

Test the idea on a tiny list: 12, 17, 22 has 2 steps and 3 numbers. So the number of terms is always one more than the number of steps.

## Example 3: Working from two terms

Back to the opening problem. The 3rd term is 14, and the 7th term is 30.

**What's the common difference?** From the 3rd term to the 7th is 4 steps, and the list climbs $30 - 14 = 16$ over those steps. So each step is $16 \div 4 = 4$.

**What's the first term?** Go back 2 steps from the 3rd term: $14 - 2 \times 4 = 6$.

**What's the 100th term?** There are 99 steps from the first term: $6 + 99 \times 4 = 402$.

You didn't need any equations, but they'd work too. The two facts give you $a + 2d = 14$ and $a + 6d = 30$. Subtracting them gives $4d = 16$.

## Example 4: The middle term is an average

If three numbers in a row form an arithmetic sequence, the middle one is the **average** of the other two. Why? The middle term is one step above the first and one step below the third, so it sits exactly halfway.

**How to use it:** The numbers $x + 1$, $3x$, and $4x + 3$ form an arithmetic sequence, in that order. What's $x$?

Twice the middle term equals the sum of the other two:

$$2 \times 3x = (x + 1) + (4x + 3)$$

That simplifies to $6x = 5x + 4$, so $x = 4$. The terms are 5, 12, and 19, which go up by 7 each time. It works.

## Example 5: A contest-style question

List A is 3, 7, 11, 15, and so on. List B is 5, 11, 17, 23, and so on. What's the third number that appears in both lists?

**What's a smaller version?** Write out the start of each list until they match.

- List A: 3, 7, 11, 15, 19, 23, 27, 31, 35, ...
- List B: 5, 11, 17, 23, 29, 35, ...

The shared numbers are 11, 23, and 35. Notice that they form an arithmetic sequence of their own! The common difference is 12, which is the LCM of the two step sizes, 4 and 6. That makes sense: to stay in both lists, you have to move by a multiple of 4 and a multiple of 6.

So the third shared number is 35. Using the same idea, you could find the 100th shared number: $11 + 99 \times 12 = 1199$.

<section data-box="deeper">

## Going deeper

A good choice of letters saves work.

**A harder one:** Three numbers form an arithmetic sequence. Their sum is 24, and their product is 440. What are they?

**The setup:** Call them $a - d$, $a$, and $a + d$.

**Use the sum.** The $d

## Common traps

**Using $n$ steps instead of $n - 1$.** For the 40th term of 7, 11, 15, the answer $7 + 40 \times 4 = 167$ is one step too far. That's actually the 41st term. Test your method on the 2nd term to catch this.

**Answering with the number of steps.** In Example 2, 17 is the number of steps, and 18 is the number of terms. Test writers usually include both as answer choices.

**Dividing by the position.** In Example 3, some students compute $30 \div 7$ or $14 \div 3$. The common difference comes from the change between two terms, so divide the climb by the number of steps.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "arithmetic sequence," or a list where the differences stay the same. Sometimes the problem is disguised as seats in rows, or as saving the same amount each week.

**Find the difference first:** Almost everything else comes from it. If you know two terms, you know the difference.

**How long it should take:** One to two minutes.

**Using the answer choices:** Every term in a sequence has the same remainder when divided by the common difference. For 7, 11, 15, each term leaves a remainder of 3 when divided by 4. So you can cross out any choice that doesn't.

</section>

<section data-box="connections">

## Connections

This builds on [growing patterns](/pathway/logic-patterns/01-repeating-and-growing/) from Level 1, and shared terms use [the LCM](/pathway/primes-remainders/03-gcf-and-lcm/). Next, you'll [add up these lists quickly](/pathway/sequences-series/02-fast-sums/).

</section>

<section data-box="summary">

## Remember this

- Each step adds the common difference.
- $n$th term = first term + $(n - 1)$ steps.
- Number of terms = number of steps + 1.
- Two terms give the difference: climb ÷ steps.
- A middle term is the average of its neighbors.

</section>
s cancel: $(a - d) + a + (a + d) = 3a = 24$. So $a = 8$.

**Use the product.** Now $(8 - d) \times 8 \times (8 + d) = 440$. Divide by 8 to get $(8 - d)(8 + d) = 55$. So $64 - d^2 = 55$, and $d = 3$.

The numbers are **5, 8, and 11**.

Try this. Three such numbers have a sum of 21 and a product of 231. What's the largest?

<details class="check"><summary>Show the answer</summary>

The middle is 7, and $7(49 - d^2) = 231$ gives $d = 4$. So the largest is 11.

</details>

</section>

<section data-box="traps">

## Common traps

**Using $n$ steps instead of $n - 1$.** For the 40th term of 7, 11, 15, the answer $7 + 40 \times 4 = 167$ is one step too far. That's actually the 41st term. Test your method on the 2nd term to catch this.

**Answering with the number of steps.** In Example 2, 17 is the number of steps, and 18 is the number of terms. Test writers usually include both as answer choices.

**Dividing by the position.** In Example 3, some students compute $30 \div 7$ or $14 \div 3$. The common difference comes from the change between two terms, so divide the climb by the number of steps.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "arithmetic sequence," or a list where the differences stay the same. Sometimes the problem is disguised as seats in rows, or as saving the same amount each week.

**Find the difference first:** Almost everything else comes from it. If you know two terms, you know the difference.

**How long it should take:** One to two minutes.

**Using the answer choices:** Every term in a sequence has the same remainder when divided by the common difference. For 7, 11, 15, each term leaves a remainder of 3 when divided by 4. So you can cross out any choice that doesn't.

</section>

<section data-box="connections">

## Connections

This builds on [growing patterns](/pathway/logic-patterns/01-repeating-and-growing/) from Level 1, and shared terms use [the LCM](/pathway/primes-remainders/03-gcf-and-lcm/). Next, you'll [add up these lists quickly](/pathway/sequences-series/02-fast-sums/).

</section>

<section data-box="summary">

## Remember this

- Each step adds the common difference.
- $n$th term = first term + $(n - 1)$ steps.
- Number of terms = number of steps + 1.
- Two terms give the difference: climb ÷ steps.
- A middle term is the average of its neighbors.

</section>
