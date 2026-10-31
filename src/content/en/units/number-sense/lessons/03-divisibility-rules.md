---
title: "Divisibility Rules and Why They Work"
summary: Tell whether a big number divides evenly without doing long division, and use place value to see why the rules are true.
minutes: 10
---

Mr. Lee has 4,572 stickers and wants to share them equally among 9 students, with none left over. Can he do it? You could do long division. Or you could add $4 + 5 + 7 + 2 = 18$, notice that 18 is a multiple of 9, and say "yes" in five seconds. This lesson shows you these shortcuts, and also why they aren't magic.

> **The big idea:** To test whether a number divides evenly, you only need to look at the part of it that matters. Place value tells you which part that is.

A number is **divisible** by another if it divides with nothing left over. For example, 12 is divisible by 3, because $12 \div 3 = 4$.

## The rules

| Divisible by | Test | Example |
|---|---|---|
| 2 | Last digit is even | 3,578 |
| 3 | Digit sum is a multiple of 3 | 1,521, since the digits add up to 9 |
| 4 | Last two digits are a multiple of 4 | 3,716, since 16 works |
| 5 | Last digit is 0 or 5 | 8,245 |
| 6 | Passes the tests for 2 **and** 3 | 1,524 |
| 8 | Last three digits are a multiple of 8 | 7,120, since 120 works |
| 9 | Digit sum is a multiple of 9 | 4,572, since the digits add up to 18 |
| 10 | Last digit is 0 | 6,130 |

## Why the rules work

**The rule for 5.** Take the number 8,245. It equals $8240 + 5$. Any number ending in 0 is a multiple of 10, so it's also a multiple of 5. That means 8,240 is already a multiple of 5, and the only part that matters is the last digit.

**The rule for 4.** Write $3716 = 3700 + 16$. Since 100 is a multiple of 4, any number of hundreds is too. So only the last two digits matter.

**The rule for 9.** This one is the most surprising. Notice that $10 = 9 + 1$, $100 = 99 + 1$, and $1000 = 999 + 1$. So:

$$4572 = 4 \times 1000 + 5 \times 100 + 7 \times 10 + 2$$

Replace each power of 10 with "a multiple of 9, plus 1." The multiples of 9 add up to something that's still a multiple of 9. What's left over is $4 + 5 + 7 + 2$, the digit sum! That's why only the digit sum matters. The rule for 3 works the same way, because 9, 99, and 999 are also multiples of 3.

## Example 1: Testing a number

Is 2,718 divisible by 6?

**What do we know?** The number 6 is $2 \times 3$, so the number has to pass both tests.

- Its last digit, 8, is even, so it passes for 2.
- Its digit sum is $2 + 7 + 1 + 8 = 18$, a multiple of 3, so it passes for 3.

So yes, it's divisible by 6. In fact, $2718 = 6 \times 453$.

Now try one. Is 5,034 divisible by 9? Is it divisible by 3?

<details class="check"><summary>Show the answer</summary>

The digit sum is $5 + 0 + 3 + 4 = 12$. That's a multiple of 3 but not of 9. So it's divisible by 3, and not by 9.

</details>

## Example 2: Filling in a missing digit

The number $47\square2$ is divisible by 9. What digit goes in the box?

**What do we know?** The digit sum has to be a multiple of 9. Without the box, the digits add up to $4 + 7 + 2 = 13$.

**What's the question really asking?** What single digit brings 13 up to a multiple of 9? The next multiple of 9 is 18, so the box is 5. The one after that is 27, which would need a 14, and that isn't a digit. So the only answer is 5.

## Example 3: Using two rules together

The 3-digit number $5\square6$ is divisible by 4 **and** by 3. How many digits could go in the box?

**What's the plan?** Do the stricter test first, then filter.

- **By 4:** The last two digits, $\square6$, must be a multiple of 4. The options are 16, 36, 56, 76, and 96. So the box can be 1, 3, 5, 7, or 9.
- **By 3:** The digit sum, $5 + \square + 6$, is 11 plus the box. Try each option: 12 works, 14 doesn't, 16 doesn't, 18 works, and 20 doesn't.

So the box can be 1 or 7, which gives 516 and 576. There are 2 possible digits.

## Example 4: A contest-style question

How many whole numbers from 1 to 100 are divisible by 6 but not by 4?

**What's a smaller version?** Let's count the multiples of 6 first. Since $6 \times 16 = 96$, there are 16 of them.

**What's the question really asking?** Remove the ones that are also multiples of 4. A number divisible by both 6 and 4 is a multiple of 12. Since $12 \times 8 = 96$, there are 8 of those.

$$16 - 8 = 8$$

Why 12 and not 24? Multiples of 12, like 12 and 36, are divisible by both 6 and 4, and 24 would miss them. You'll learn more about this idea in Level 2.

<section data-box="traps">

## Common traps

**Using the digit sum for the wrong number.** The digit-sum rule only works for 3 and 9. The number 28 has a digit sum of 10, but that doesn't tell you anything about divisibility by 2, 4, 5, or 10.

**Thinking that "divisible by 4" means "last digit is 4."** The number 24 is divisible by 4, but 14 isn't, and 16 is, despite ending in 6. You have to check the last **two** digits.

**Multiplying the wrong rules for a bigger divisor.** To test for 12, you can use 3 and 4, since those share no factors. Using 2 and 6 doesn't work: 18 is divisible by both 2 and 6, but it isn't divisible by 12.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "divisible by," "multiple of," a missing digit, or a question about sharing things equally.

**Eliminate fast:** Suppose a problem's answer has to be a multiple of 9. Run the digit-sum test on each answer choice. This often leaves only one choice, and it takes seconds.

**How long it should take:** Under a minute for a single test, and two minutes for a problem with a missing digit.

</section>

<section data-box="connections">

## Connections

These rules use [place value](/pathway/number-sense/01-place-value/). They help you find [prime factorizations](/pathway/primes-remainders/) in Level 2, and [Remainder Math](/pathway/modular-arithmetic/) in Level 3 explains them another way.

</section>

<section data-box="summary">

## Remember this

- 2, 5, and 10: look at the last digit.
- 4: look at the last two digits. 8: look at the last three.
- 3 and 9: look at the digit sum.
- 6: must pass the tests for 2 and 3.
- For a bigger divisor, use two tests that share no factors.

</section>
