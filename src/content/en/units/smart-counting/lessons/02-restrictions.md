---
title: "Counting With Rules"
summary: Handle lineups with rules by gluing together people who must sit together, and by placing others into gaps to keep them apart.
minutes: 12
---

Six friends sit in a row at a movie. Two of them are a couple who insist on sitting together, and two others had an argument and refuse to sit next to each other. How many seating plans are there? In Level 1, you learned to count lineups with a factorial. In this lesson, you'll learn what to do when the people have opinions.

> **The big idea:** **Deal with the rule first.** If things must stay together, **glue** them into one block. If things must stay apart, place everything else first and put them in the **gaps**.

## Why gluing works

Let's take a tiny case: A, B, and C line up, and A and B must be next to each other. By listing all 6 lineups of three people, we find these 4 that work: ABC, BAC, CAB, and CBA.

Now glue A and B into one block, written [AB]. Then there are 2 things to arrange: the block and C. That's $2! = 2$ ways. Inside the block, A and B can swap, which is another 2 ways. So there are $2 \times 2 = 4$ lineups. It matches our list!

## Example 1: Together

Five friends line up for a photo, and Ari and Bo must stand next to each other. How many lineups are there?

**What's the plan?** Glue them together, so we have 4 things to arrange: the block and 3 friends. That's $4! = 24$ ways.

**Don't forget inside the block:** Ari and Bo can stand in 2 orders.

$$24 \times 2 = 48$$

Try this one. Six books go on a shelf, and 3 of them are a set that must stay together, in any order. How many arrangements are there?

<details class="check"><summary>Show the answer</summary>

Glue the set into one block, giving 4 things to arrange: $4! = 24$. Inside the block, 3 books can be arranged in $3! = 6$ ways. So the total is $24 \times 6 = 144$.

</details>

## Example 2: Apart, using the opposite

Five friends line up, and Ari and Bo refuse to stand next to each other. How many lineups are there?

**What's the plan?** Count the opposite. There are $5! = 120$ lineups in total, and from Example 1, Ari and Bo are together in 48 of them.

$$120 - 48 = 72$$

## Example 3: Apart, using gaps

Four boys and 3 girls line up, and no two girls can stand next to each other. How many lineups are there?

The opposite doesn't help much here, since "at least two girls together" has many cases. Let's use gaps instead.

**Step 1: Place the boys.** The 4 boys line up in $4! = 24$ ways. Between and around them, there are 5 gaps, shown here with underlines:

$$\_ \ B \ \_ \ B \ \_ \ B \ \_ \ B \ \_$$

**Step 2: Place the girls.** Each girl goes in a different gap, so no two of them can touch. The first girl has 5 gaps to choose from, the second has 4, and the third has 3. That's $5 \times 4 \times 3 = 60$ ways.

$$24 \times 60 = 1440$$

**Why it works:** Putting the girls in different gaps guarantees there's at least one boy between any two of them.

## Example 4: Fixed spots

How many 4-digit even numbers use the digits 1, 2, 3, 4, 5 with no repeats?

**Which rule is strictest?** The last digit must be even, so it's 2 or 4. That's 2 options.

**What's next?** The other 3 positions use the remaining 4 digits, with no repeats: $4 \times 3 \times 2 = 24$.

$$2 \times 24 = 48$$

Now change the digits to 0, 1, 2, 3, 4, and things get trickier. The first digit can't be 0, and the last digit has to be even, and those rules affect each other: 0 is even, so whether the last digit is 0 changes the options for the first digit. In a case like that, you split it up.

- **Last digit 0:** The other 3 spots use 1, 2, 3, 4 with no repeats: $4 \times 3 \times 2 = 24$.
- **Last digit 2 or 4 (2 options):** The first digit can't be 0 or the last digit, so it has 3 options. The middle two spots then use the remaining digits, with $3 \times 2 = 6$ ways. That's $2 \times 3 \times 6 = 36$.

The total is $24 + 36 = 60$.

## Example 5: A contest-style question

Eight people sit around a circular table. Two seating plans count as the same if one can be turned to make the other. How many different plans are there?

**What's different about a circle?** A lineup has a first person, and a circle doesn't. Turning everyone one seat to the right gives the same plan.

**What's the plan?** Fix one person in place, so that turning no longer matters. Then the other 7 fill the 7 remaining seats in $7!$ ways.

$$7! = 5040$$

**Check using overcounting:** If the seats were numbered, there'd be $8!$ plans. Each circular plan gets counted 8 times, once for each way to turn it. So $8! \div 8 = 7!$. The answers match.

<section data-box="deeper">

## Going deeper

Around a round table, only positions relative to other people matter. That changes the count.

**A harder one:** Five people sit around a round table. Two seatings count as the same if one can be rotated into the other. How many seatings are there? And how many have Al and Bo side by side?

**All seatings:** Sit one person down first, as a reference point. Everyone else's seat is then decided relative to that person. So the other 4 people can be arranged in $4! = 24$ ways.

**With Al and Bo together:** Glue them into one block. That makes 4 units around the table. Fix one unit, and arrange the other 3 in $3! = 6$ ways. The block has 2 orders inside, so there are $6 \times 2 = 12$ seatings.

Half of all seatings have Al and Bo together. Does that make sense? Bo sits in one of the 4 other seats, and 2 of those are next to Al. So the chance is $\frac{2}{4}$. It matches.

Try this. Six people sit around a round table, with rotations counting as the same. How many seatings have Al and Bo side by side?

<details class="check"><summary>Show the answer</summary>

Glue them into a block, making 5 units. Fixing one, the others go in $4! = 24$ ways, and the block has 2 orders. So there are 48 seatings.

</details>

</section>

<section data-box="traps">

## Common traps

**Forgetting to arrange inside the block.** In Example 1, the answer 24 is only half of the lineups, since it treats [AB] and [BA] as the same. Always ask, "Can the glued items swap?"

**Using the wrong number of gaps.** With 4 boys, there are 5 gaps, not 3 or 4. The two ends count. Draw the underlines to be sure.

**Ignoring how rules interact.** When 0 is involved, a first-digit rule and a last-digit rule can affect each other. If you find yourself saying "it depends," split into cases.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for words like "together," "not next to," "adjacent," "even," or "first digit."

**Which method:** Together, use gluing. Apart for two people, use the opposite. Apart for many people, use gaps.

**Check with a tiny case:** Test your method on 3 people, where you can list everything. It takes 30 seconds, and it often catches a mistake.

**Time:** Two to three minutes.

</section>

<section data-box="connections">

## Connections

This builds on [lineups](/pathway/counting/02-when-order-matters/) and [cases](/pathway/counting/05-split-into-cases/). Next, you'll handle [repeated letters](/pathway/smart-counting/03-repeats/).

</section>

<section data-box="summary">

## Remember this

- Must stay together: glue, then arrange inside the block.
- Must stay apart: use the opposite, or place others and use gaps.
- $n$ things in a row have $n + 1$ gaps.
- Rules that affect each other mean cases.
- Circles: fix one person, then arrange the rest.

</section>
