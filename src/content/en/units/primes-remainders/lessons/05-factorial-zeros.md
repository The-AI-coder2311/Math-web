---
title: "Zeros at the End of a Factorial"
summary: Count the zeros at the end of a huge factorial by counting factors of 5, and find how many times any prime divides a factorial.
minutes: 9
---

The number $100!$ means $100 \times 99 \times 98 \times \cdots \times 2 \times 1$. It has 158 digits, and no ordinary calculator can show all of them. How many zeros does it end with? You can answer that in about 20 seconds, with no calculator. The tempting answer is 20, and that's wrong.

> **The big idea:** Each zero at the end of a number comes from a factor of 10, and $10 = 2 \times 5$. A factorial has far more 2s than 5s. So **count the 5s**: the multiples of 5, then the multiples of 25, then 125, and so on.

## Why we count the 5s

Let's test it on a small case. Here's $10!$ written out:

$$10! = 3{,}628{,}800$$

It ends with 2 zeros. Now look for 5s in the product $1 \times 2 \times \cdots \times 10$. Only 5 and 10 have a factor of 5, so there are two 5s. Each one pairs with a 2 to make a 10, and there are plenty of 2s to go around. That gives 2 zeros.

## Why 25 counts twice

Multiples of 5 each give one 5. But $25 = 5 \times 5$ holds **two** 5s. So after you count the multiples of 5, you have to go back and count the multiples of 25, which adds their second 5. In the same way, 125 holds three 5s, so multiples of 125 add a third.

| Number | Factors of 5 | Counted as a multiple of |
|---|---|---|
| 20 | 1 | 5 |
| 25 | 2 | 5 and 25 |
| 50 | 2 | 5 and 25 |
| 125 | 3 | 5, 25, and 125 |

To count the multiples of 5 up to $n$, divide $n$ by 5, and drop any remainder.

## Example 1: A first count

How many zeros does $30!$ end with?

**Multiples of 5 up to 30:** $30 \div 5 = 6$. These are 5, 10, 15, 20, 25, and 30.

**Multiples of 25 up to 30:** There's only 25, so that's 1 more.

**Total:** $6 + 1 = 7$ zeros.

Try one. How many zeros does $12!$ end with?

<details class="check"><summary>Show the answer</summary>

The multiples of 5 are 5 and 10, which makes 2. There are no multiples of 25 up to 12. So $12!$ ends with 2 zeros. In fact, $12! = 479{,}001{,}600$.

</details>

## Example 2: The opening problem

How many zeros does $100!$ end with?

- Multiples of 5: $100 \div 5 = 20$
- Multiples of 25: $100 \div 25 = 4$
- Multiples of 125: none, since 125 is bigger than 100

**Total:** $20 + 4 = 24$. The answer of 20 misses the second 5s in 25, 50, 75, and 100.

## Example 3: Any prime works

How many times does 3 divide $30!$? In other words, what's the largest power of 3 that divides it?

**What's the plan?** Use the same steps, with powers of 3 this time.

- Multiples of 3: $30 \div 3 = 10$
- Multiples of 9: $30 \div 9$ gives 3, dropping the remainder
- Multiples of 27: $30 \div 27$ gives 1, dropping the remainder

**Total:** $10 + 3 + 1 = 14$. So $3^{14}$ divides $30!$, and $3^{15}$ doesn't.

Let's see how many 2s there are in $20!$, too: $10 + 5 + 2 + 1 = 18$. And it has only $4$ fives. So the claim that 2s are more common holds up.

## Example 4: Working in reverse

Which number $n$ is the smallest for which $n!$ ends with at least 10 zeros?

**What's the plan?** The count only goes up at multiples of 5. Each multiple of 5 adds one zero, or more at a multiple of 25. Let's estimate and then adjust.

| $n$ | Multiples of 5 | Multiples of 25 | Zeros |
|---|---|---|---|
| 40 | 8 | 1 | 9 |
| 45 | 9 | 1 | 10 |

So the answer is $n = 45$, since $44!$ still has 9 zeros.

**A surprise:** $24!$ ends with 4 zeros, and $25!$ ends with 6. So no factorial ends with exactly 5 zeros. The count skips a number at each multiple of 25.

## Example 5: A contest-style question

How many zeros does the product $5 \times 10 \times 15 \times \cdots \times 100$ end with?

**What's different?** This isn't a factorial. There are 20 numbers, each a multiple of 5. We can pull a 5 out of each one:

$$5 \times 10 \times 15 \times \cdots \times 100 = 5^{20} \times 20!$$

**Count the 5s:** There are 20 from the $5^{20}$, and 4 from the $20!$. That makes 24.

**Count the 2s:** All of the 2s come from the $20!$. We found 18 of those in Example 3.

**Which is scarcer?** This time, it's the 2s! Each zero needs one of each, so there are **18** zeros. The rule about counting 5s is only for factorials. In other products, count both.

<section data-box="traps">

## Common traps

**Stopping at the multiples of 5.** For $100!$, that gives 20 instead of 24. Keep going through 25, 125, and so on, until the power is bigger than $n$.

**Dividing by 10.** $100 \div 10 = 10$ only counts the numbers that already end in 0. It misses pairs such as $4 \times 5$ and $25 \times 4$, which also make zeros.

**Rounding up.** $30 \div 25$ is 1.2, and there's only 1 multiple of 25 up to 30. Always drop the remainder.

**Trusting the 5s in a product that isn't a factorial.** As in Example 5, count both 2s and 5s.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "how many zeros," "ends with," "largest power of," or a factorial in a divisibility question.

**Do it in one line:** Keep dividing by 5, and add up the results. For $100$, it's 20, then 4. Dividing the last result by 5 gives the next term, which saves time.

**Using the answer choices:** Multiples of 5 are the lowest possible count. Any choice below that can be crossed out.

**Time:** Under a minute.

</section>

<section data-box="connections">

## Connections

This uses [prime factorization](/pathway/primes-remainders/01-prime-factorization/). The next step up is [giant powers](/pathway/modular-arithmetic/02-giant-powers/) in Level 3, which also finds what's at the end of a huge number.

</section>

<section data-box="summary">

## Remember this

- Each zero at the end needs a 2 and a 5.
- In a factorial, count the 5s.
- Add up the multiples of 5, 25, 125, and so on.
- Drop the remainders.
- Outside of factorials, count both 2s and 5s.

</section>
