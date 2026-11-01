---
title: "Overlaps and Venn Diagrams"
summary: Count groups that overlap without double counting, using Venn diagrams filled in from the middle out.
minutes: 10
---

In a class of 30 students, 18 play soccer, 15 are in band, and 8 do both. How many do neither? You might notice right away that $18 + 15 = 33$, which is more than the whole class. That's your clue that someone's been counted twice. This lesson gives you a way to keep everyone straight, even with three groups.

> **The big idea:** When groups overlap, adding them counts the overlap twice. So **add the groups, then subtract the overlap**. A Venn diagram lets you see every part.

## Why subtracting the overlap works

When you add 18 and 15, each student who does only soccer is counted once, and each one who does only band is counted once. But each of the 8 students who do both is counted **twice**. Subtracting 8 fixes that, so each student is counted exactly once:

$$18 + 15 - 8 = 25$$

So 25 students do at least one activity, and $30 - 25 = 5$ students do neither. Here's what that looks like:

![Two overlapping circles in a box of 30 students. Ten students are in soccer only, 8 are in both, and 7 are in band only. Five students are in neither.](/images/smart-counting-venn.svg)

Fill in a Venn diagram **from the middle out**. Start with the 8 in both. Then soccer-only is $18 - 8 = 10$, and band-only is $15 - 8 = 7$. Finally, neither is what's left: $30 - 10 - 8 - 7 = 5$.

## Example 1: Finding the overlap

A club has 40 members. There are 25 who like pizza and 22 who like tacos, and everyone likes at least one of them. How many like both?

**What do we know?** We have the groups and the total. The overlap is the unknown.

**What's the question really asking?** Since $25 + 22 = 47$ is 7 more than 40, those 7 extra counts must come from people counted twice. So 7 people like both.

Try one. Out of 50 students, 32 take art, 28 take music, and 5 take neither. How many take both?

<details class="check"><summary>Show the answer</summary>

There are $50 - 5 = 45$ students taking at least one. Since $32 + 28 = 60$, the overlap is $60 - 45 = 15$.

</details>

## Example 2: Counting multiples

How many whole numbers from 1 to 100 are divisible by 2 or by 5?

**What are the groups?** Multiples of 2 and multiples of 5.

- Multiples of 2: there are 50.
- Multiples of 5: there are 20.

**What's the overlap?** A number divisible by both 2 and 5 is a multiple of 10. There are 10 of those.

$$50 + 20 - 10 = 60$$

So how many are divisible by **neither**? That's $100 - 60 = 40$.

Counting multiples quickly is a useful skill. How many multiples of 7 are there from 1 to 100? Divide $100 \div 7$, which gives 14 with some left over, so there are 14.

## Example 3: Three groups

Now there are three overlapping circles. How many numbers from 1 to 30 are divisible by 2, 3, or 5?

**Counting each group:** There are 15 multiples of 2, 10 multiples of 3, and 6 multiples of 5. Adding them gives 31.

**Subtracting the overlaps:**
- Multiples of 6 (both 2 and 3): 5.
- Multiples of 10 (both 2 and 5): 3.
- Multiples of 15 (both 3 and 5): 2.

That brings us to $31 - 5 - 3 - 2 = 21$.

**Adding back the center:** Look at 30, which is divisible by all three. We added it 3 times, and then subtracted it 3 times, so now it isn't counted at all! So we need to add back the numbers that are in all three groups. Only 30 fits that here.

$$21 + 1 = 22$$

**The pattern for three groups:** add the groups, subtract the pairs, and add back the triple. This is called **inclusion-exclusion**.

## Example 4: A contest-style question

In a survey of 60 students, 30 like math, 28 like science, and 26 like art. Also, 12 like both math and science, 10 like both math and art, and 9 like both science and art. Exactly 4 like all three. How many like none of the three?

**What's the plan?** Use the pattern to count those who like at least one.

$$30 + 28 + 26 - 12 - 10 - 9 + 4 = 57$$

So $60 - 57 = 3$ students like none of the three.

**A check, from the middle out:** Those who like math and science but not art are $12 - 4 = 8$. The others are $10 - 4 = 6$ and $9 - 4 = 5$. Those who like only math are $30 - 8 - 6 - 4 = 12$, only science is $28 - 8 - 5 - 4 = 11$, and only art is $26 - 6 - 5 - 4 = 11$. Adding all seven regions gives $4 + 8 + 6 + 5 + 12 + 11 + 11 = 57$. It matches.

<section data-box="traps">

## Common traps

**Treating "both" as separate.** In the opening example, some students say that 18 students play only soccer. But the 18 includes the 8 who also do band. Only soccer is $18 - 8 = 10$.

**Forgetting to add back the center.** With three groups, the answer 21 in Example 3 is one too small, since the middle got subtracted out completely. Check with a number in all three groups, and count how many times it's included.

**Answering "at least one" when asked for "neither."** In the opening example, 25 is the number who do something. The question asks for 5. Reread the question once you have your number.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "both," "neither," "at least one," or "or," along with a few groups that overlap.

**Draw the circles:** A quick diagram catches most mistakes. Start in the middle.

**Finding the most overlap possible:** If 25 of 40 like pizza and 22 of 40 like tacos, the overlap is at least 7. It could be as high as 22, but no higher, since that's the size of the smaller group. Bounds like that help you eliminate answer choices.

**Time:** One minute for two groups, and up to three minutes for three groups.

</section>

<section data-box="connections">

## Connections

This sharpens [counting the opposite](/pathway/counting/04-count-the-opposite/) from Level 1. [Probability](/pathway/intro-probability/04-one-minus/) problems use the same overlap fix, and it returns in [Advanced Counting](/pathway/advanced-counting/) in Level 3.

</section>

<section data-box="summary">

## Remember this

- Two groups: add them, then subtract the overlap.
- Three groups: add the groups, subtract the pairs, add back the triple.
- Fill in a Venn diagram from the middle out.
- Multiples of both $a$ and $b$ are multiples of their LCM.
- Neither = total minus at least one.

</section>
