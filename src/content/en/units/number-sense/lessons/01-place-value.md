---
title: "Place Value: What Digits Really Mean"
summary: See that a number is a sum of its place values. That one idea solves digit puzzles and explains why many shortcuts work.
minutes: 9
---

Take any 2-digit number with two different digits, like 73. Swap the digits to get 37, and subtract the smaller from the larger: $73 - 37 = 36$. Now try 82 and 28: $82 - 28 = 54$. Try 91 and 19: $91 - 19 = 72$. Do you notice anything? All of the answers, 36, 54, and 72, are multiples of 9. Try a few more on your own. It always happens, and by the end of this lesson, you'll know why.

> **The big idea:** A digit's value depends on **where it sits**. The number 352 really means 3 hundreds, 5 tens, and 2 ones. When a problem talks about digits, write the number out as a sum of its places.

## Why it works

Our number system groups things by tens. Ten ones make a ten, ten tens make a hundred, and so on. So the 3 in 352 isn't really worth 3. It's worth 300.

$$352 = 3 \times 100 + 5 \times 10 + 2$$

This is called **expanded form**. Letters let us talk about every 2-digit number at once. If a number has tens digit $a$ and ones digit $b$, then its value is $10a + b$, **not** $a + b$ and not $a \times b$. For example, with $a = 7$ and $b = 3$, we get $10 \times 7 + 3 = 73$.

Now we can solve the opening mystery. The number with digits $a$ and $b$ is $10a + b$, and the swapped number is $10b + a$. Subtract them, and you get $9a - 9b$, which is 9 times the difference of the digits. So the answer is always a multiple of 9. Check it with 73 and 37: the digits differ by 4, and $9 \times 4 = 36$.

## Example 1: Biggest and smallest

Using each of the digits 4, 0, 7, and 2 exactly once, what's the difference between the largest and smallest 4-digit numbers you can make?

**What do we know?** A digit counts for more when it sits farther left.

**What's the plan?** For the largest number, put the biggest digits on the left: 7420. For the smallest, put the smallest digits on the left. But a 4-digit number can't start with 0, so the first digit must be 2. Then the 0 goes next, which gives 2047.

$$7420 - 2047 = 5373$$

Try this one before going on. What's the largest 3-digit number you can make using the digits 5, 1, and 8 once each? What's the smallest?

<details class="check"><summary>Show the answer</summary>

The largest is 851, and the smallest is 158. The biggest digit goes where it's worth the most for the largest number, and the smallest digit goes there for the smallest number.

</details>

## Example 2: Counting how often a digit appears

How many times do you write the digit 7 when you write the numbers from 1 to 100?

**What's a smaller version?** Split it by place. Handling one place at a time keeps us organized.

- **In the ones place:** 7, 17, 27, and so on up to 97. That's 10 times.
- **In the tens place:** 70, 71, 72, and so on up to 79. That's another 10 times.

The number 77 was counted in both groups, and that's correct, since it uses the digit 7 twice. So the total is $10 + 10 = 20$.

## Example 3: Which digit is missing?

A 2-digit number is 4 times the sum of its digits. What's one such number?

**What do we know?** With digits $a$ and $b$, the number is $10a + b$, and the sum of its digits is $a + b$.

**What's the question really asking?** We need $10a + b = 4(a + b)$. Multiplying out the right side gives $10a + b = 4a + 4b$. Taking $4a$ and $b$ away from both sides leaves $6a = 3b$, so $b = 2a$.

So the ones digit must be twice the tens digit. That gives 12, 24, 36, and 48. Check one: for 36, the digits add up to 9, and $4 \times 9 = 36$. It works. (The next one would need a ones digit of 10, which isn't a digit.)

If you haven't used letters like this before, don't worry. You could also test numbers one by one from a short list. The Level 2 unit on equations practices this skill.

## Example 4: A contest-style question

How many 3-digit numbers have a hundreds digit that's 3 more than their ones digit? For example, 502 is one, because 5 is 3 more than 2.

**What do we know?** The hundreds and ones digits are linked. The tens digit is free.

**What's the plan?** Count the choices. The hundreds digit can be 3 through 9. (It can't be 0, 1, or 2, because the ones digit would have to be negative.) That's 7 options, and each one decides the ones digit. The tens digit can be any of 10 digits.

$$7 \times 10 = 70$$

<section data-box="traps">

## Common traps

**Treating digits as their face value.** If a number has digits 4 and 6, the number isn't $4 + 6$ or $4 \times 6$. It's 46, which is $10 \times 4 + 6$. Whenever a problem says "a number with digits," write the expanded form.

**Starting a number with 0.** In Example 1, some students say that the smallest number is 0247, which gives the wrong difference of 7173. But 0247 isn't a 4-digit number. The first digit has to be at least 1.

**Undercounting a repeated digit.** In Example 2, some students think that 77 should only be counted once and answer 19. The question asks how many times you **write** the digit, so 77 counts twice. If the question were "how many numbers contain a 7," the answer would be 19. Read the wording closely.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for the words "digit," "tens digit," "sum of the digits," or "reversed."

**How long it should take:** One to two minutes. If you can't see the algebra, make a list. With only 90 two-digit numbers, a rule often narrows it to a few that you can test.

**Using the answer choices:** On a digit puzzle, you can often test the answer choices directly, since each one is a real number with real digits. This is often faster than solving.

</section>

<section data-box="connections">

## Connections

Place value explains [divisibility rules](/pathway/number-sense/03-divisibility-rules/) in this unit. It also leads to [other number bases](/pathway/modular-arithmetic/) in Level 3.

</section>

<section data-box="summary">

## Remember this

- A digit's value depends on where it sits.
- A 2-digit number with digits $a$ and $b$ equals $10a + b$.
- Numbers can't start with 0.
- Count digits one place at a time.
- A number minus its reversal is always a multiple of 9.

</section>
