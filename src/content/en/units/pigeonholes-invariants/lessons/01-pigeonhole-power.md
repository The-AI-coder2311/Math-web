---
title: "Pigeonhole Power"
summary: Use the stronger form of the pigeonhole principle, choose clever boxes such as pairs and remainders, and prove that an answer is the smallest possible.
minutes: 13
---

Pick any six whole numbers you like. Make them huge, or random, or as strange as you want. Two of them will always differ by a multiple of 5. You don't need to know a single one of your numbers to be certain of that. The reason is a simple-sounding idea, used in an unexpected place, and it's one of the most surprising tools in contest math.

> **The big idea:** To prove that something must happen, **choose the right boxes**. If you have more things than boxes, some box has to hold more than one. The stronger form says that if $n$ things go into $k$ boxes, some box holds at least $\frac{n}{k}$ things, **rounded up**.

## Why the stronger form works

Suppose 25 things go into 4 boxes. Could every box hold 6 or fewer? Then the boxes would hold at most $4 \times 6 = 24$ things, and we have 25. So some box holds at least 7. That's $\frac{25}{4} = 6.25$, rounded up.

This is an argument by contradiction: spread things out as evenly as you can, and see that they still don't fit.

## Example 1: The stronger form

A school has 100 students in a club. Must some birth month have at least 9 of them?

**What are the boxes?** The 12 months.

**What does the rule say?** Since $\frac{100}{12} \approx 8.33$, rounding up gives 9.

**Check by spreading out:** If each month had at most 8 students, there would be at most $12 \times 8 = 96$ students. There are 100, so **yes**.

Try one. A bag holds marbles in 5 colors. How many marbles must you pull out to be sure that 4 have the same color? Assume that each color has plenty of marbles.

<details class="check"><summary>Show the answer</summary>

You could pull 3 of each color, which is $3 \times 5 = 15$ marbles, with no color reaching 4. The next marble forces it, so you need 16.

</details>

## Example 2: Boxes made of pairs

You pick numbers from 1 to 10. How many must you pick to be sure that two of them add up to 11?

**What's the clever part?** Choose boxes so that two picks in one box give the sum you want:

| Box | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Numbers | 1, 10 | 2, 9 | 3, 8 | 4, 7 | 5, 6 |

**How many picks?** There are 5 boxes. With 6 picks, two land in one box, and those two add up to 11.

**Is 5 enough?** No. The picks 1, 2, 3, 4, 5 have no pair that adds up to 11. So the answer is exactly **6**.

Notice that there are two parts: the boxes show that 6 is **enough**, and an example shows that 5 is **not**. A full answer needs both.

## Example 3: Boxes made of remainders

Back to the opening. Why do two of any 6 whole numbers differ by a multiple of 5?

**What are the boxes?** When you divide by 5, the remainder is 0, 1, 2, 3, or 4. That makes 5 boxes.

**What happens?** With 6 numbers, two have the same remainder. Their difference then has a remainder of 0, so it's a multiple of 5. For instance, 17 and 42 both have a remainder of 2, and $42 - 17 = 25$.

This works for any number. Among any $m + 1$ whole numbers, two differ by a multiple of $m$. Remainder boxes solve a lot of "must be divisible" problems.

## Example 4: Boxes made of regions

Five points sit inside a square with sides of length 2. Show that two of them are at most $\sqrt{2}$ apart.

**What are the boxes?** Cut the square into 4 smaller squares with sides of length 1. With 5 points and 4 small squares, two points land in the same small square.

**How far apart can they be?** The farthest two points in a square are opposite corners. By the Pythagorean Theorem, that distance is $\sqrt{1^2 + 1^2} = \sqrt{2}$.

So the two points are at most $\sqrt{2}$ apart. The problem told you the distance, and that was the hint for how big the boxes should be.

## Example 5: A contest-style question

You pick whole numbers from 1 to 20. How many must you pick to be sure that two of them are consecutive?

**What are the boxes?** We want two picks in a box to be neighbors. So use the 10 pairs: 1 and 2, 3 and 4, and so on up to 19 and 20.

**Is 11 enough?** With 11 picks and 10 boxes, two picks share a pair, and they're consecutive.

**Is 10 enough?** No. The numbers 1, 3, 5, and so on up to 19 are 10 picks with no two consecutive.

So the answer is **11**.

<section data-box="deeper">

## Going deeper

Sometimes the boxes are hard to spot, since you have to rule out a box first.

**A harder one:** In a group of 6 people, some pairs are friends, and friendship goes both ways. Show that two people in the group have the same number of friends in the group.

**What are the boxes?** The number of friends. Each person could have 0, 1, 2, 3, 4, or 5 friends. That's 6 boxes for 6 people, so pigeonhole doesn't apply yet.

**The key step:** Look at boxes 0 and 5. If someone has 5 friends, they're friends with everyone. Then nobody can have 0 friends. So boxes 0 and 5 can't **both** be used.

**So how many boxes are really available?** At most 5. Six people in 5 boxes means that two people share a box. So two people have the same number of friends.

This argument works for a group of any size.

When a pigeonhole count falls short by one, look for two boxes that can't both be used.

Try this. In a group of 10 people, what's the largest number of different friend counts that can appear?

<details class="check"><summary>Show the answer</summary>

The counts could be 0 through 9, but 0 and 9 can't both appear. So at most 9 different counts can appear.

</details>

</section>

<section data-box="traps">

## Common traps

**Rounding the wrong way.** With $\frac{25}{4} = 6.25$, the guarantee is 7, not 6. Rounding down gives you a true statement, but a weaker one, and it's not what the question wants.

**Skipping the "not enough" check.** The boxes show that some number of picks works. Without an example, you don't know that it's the smallest. Try to build the worst case with one fewer.

**Using boxes that don't force the result.** Two picks in one box must give what you want. If boxes were 1 to 5 and 6 to 10, two picks in one box wouldn't have to add up to 11.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "must," "guarantee," "at least," and "how many to be sure," especially when the problem gives no specific values.

**Pick boxes from the goal:** Ask what two things in one box would give you. For a sum, use pairs. For a difference divisible by $m$, use remainders mod $m$. For a distance, use regions.

**Using the answer choices:** The choices usually include the number of boxes and one more than it. Build the worst case to see which one is right.

**Time:** One to two minutes, once you've found the boxes.

</section>

<section data-box="connections">

## Connections

This extends the [pigeonhole principle](/pathway/logic-patterns/04-logic-tables-pigeonholes/) from Level 1 and uses [modular arithmetic](/pathway/modular-arithmetic/01-mod-notation/). Next, you'll prove that things can **never** happen with [parity and invariants](/pathway/pigeonholes-invariants/02-parity-and-invariants/).

</section>

<section data-box="summary">

## Remember this

- $n$ things in $k$ boxes: some box has at least $\frac{n}{k}$, rounded up.
- Choose boxes from the goal: pairs, remainders, or regions.
- Worst case plus 1 is the guarantee.
- Show that it's enough, and show that one fewer isn't.

</section>
