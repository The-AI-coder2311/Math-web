---
title: "Count the Opposite"
summary: When what you want is messy but what you don't want is tidy, count everything and subtract.
minutes: 9
---

A pizza place has 6 toppings, and you can put any number of them on a pizza, even none. How many pizzas have at least one topping? You could count the pizzas with exactly 1 topping, then exactly 2, and so on, but that's six separate counts. There's a move that finishes this in two lines.

> **The big idea:** If the thing you want is hard to count, count the **opposite**. Then subtract it from the total.

$$\text{what you want} = \text{total} - \text{what you don't want}$$

## Why subtracting works

Every possibility is either one you want or one you don't, and never both. So the two groups add up to the total.

Here's a tiny check. How many 2-digit numbers have at least one digit that's a 9? Let's do it both ways.

**Listing them:** 19, 29, 39, 49, 59, 69, 79, 89, then 90, 91, 92, 93, 94, 95, 96, 97, 98, 99. That's 18 numbers.

**Using the opposite:** There are 90 two-digit numbers. Numbers with **no** 9 have 8 options for the first digit (not 0 or 9) and 9 options for the second digit (not 9), which makes $8 \times 9 = 72$. Subtracting gives:

$$90 - 72 = 18$$

Both ways agree, and the second way would still be quick for much bigger numbers. Suppose the question asked about 5-digit numbers. A list would be hopeless, but the opposite takes only two short multiplications.

You can think of it like taking attendance. To find out how many students are here, you could count everyone in the room. If only a few people are missing, though, it's faster to count the empty seats and subtract from the class size. Same answer, less work. The trick is noticing which group is the small, tidy one.

## Example 1: The pizza

Back to the hook. For each of the 6 toppings, you make a choice: on or off. That's 2 options, 6 times:

$$2 \times 2 \times 2 \times 2 \times 2 \times 2 = 64$$

So there are 64 pizzas in all. Exactly 1 of them has no toppings at all. The opposite of "at least one topping" is "no toppings," so the answer is $64 - 1 = 63$.

## Example 2: The words "at least one"

A lock code uses 3 letters, and only the letters A, B, C, and D are allowed. Letters can repeat. How many codes contain at least one A?

**What do we know?** Counting directly means handling one A, two As, and three As.

**What's the opposite?** The opposite of "at least one A" is "no As."

- Total codes: $4 \times 4 \times 4 = 64$
- Codes with no A use only B, C, and D: $3 \times 3 \times 3 = 27$

$$64 - 27 = 37$$

Now try one. How many 3-digit numbers have at least one even digit?

<details class="check"><summary>Show the answer</summary>

There are 900 three-digit numbers. The opposite is "all odd digits," and each digit has 5 options, which makes $5 \times 5 \times 5 = 125$. So $900 - 125 = 775$.

</details>

## Example 3: Keeping people apart

Four friends line up, but Ana and Ben refuse to stand next to each other. How many lineups are there?

**What's the opposite?** Ana and Ben **are** next to each other.

- Total lineups: $4! = 24$.
- To count lineups where they're together, pretend Ana and Ben are tied into one block. Now there are 3 things to arrange: the block and the 2 other friends. That's $3! = 6$ ways. Inside the block, they can stand in 2 orders. So there are $6 \times 2 = 12$ lineups.

$$24 - 12 = 12$$

So 12 lineups keep them apart. You can check this another way: exactly half of the lineups have them together, which seems reasonable for 4 people in a short line. With more people in the line, they'd be apart more often than together.

## Example 4: A contest-style question

How many whole numbers from 100 to 999 have at least two digits that are the same?

**What do we know?** The numbers could have exactly two matching digits, like 220 or 303, or three matching digits, like 777. Counting those takes several cases.

**What's the opposite?** The opposite of "at least two the same" is "all three different."

You counted those in the last lesson: $9 \times 9 \times 8 = 648$.

There are 900 three-digit numbers in all, so:

$$900 - 648 = 252$$

<section data-box="traps">

## Common traps

**Getting the opposite wrong.** The opposite of "at least one A" is "no As." It's not "exactly one A," since that leaves out codes with two or three As. Test your opposite: does each possibility land in exactly one of the two groups?

**The wrong total.** In the 3-digit problem, some students use 1000 as the total. That counts 000 through 099, which aren't 3-digit numbers. The right total is 900. Use the same rules for your total as for your opposite.

**Answering the opposite.** After finding that 648 numbers have all different digits, it's easy to circle 648, especially since a test writer will probably include it as a choice. Always go back and subtract.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "at least one," "at least two," "not all," "not next to each other," or "contains."

**A quick test:** If the direct way needs more than two cases, take 10 seconds to ask whether the opposite is shorter.

**How long it should take:** About two minutes, since it's really two short counts.

**Watch the answer choices:** Both the opposite and the final answer are often listed. If you get a number and it's a choice, make sure you've done the subtraction.

</section>

<section data-box="connections">

## Connections

This is the counting version of "1 minus the chance it doesn't happen" in [Intro to Probability](/pathway/intro-probability/). You'll use it again in [Smart Counting](/pathway/smart-counting/).

</section>

<section data-box="summary">

## Remember this

- Wanted = total minus unwanted.
- "At least one" has the opposite "none."
- Your total and your opposite must follow the same rules.
- Don't forget the final subtraction.

</section>
