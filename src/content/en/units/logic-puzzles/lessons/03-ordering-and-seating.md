---
title: "Ordering and Seating Puzzles"
summary: Turn clues about who came first or who sits where into a picture, separate what must be true from what could be true, and count the arrangements left.
minutes: 12
---

Four runners finish a race. Dee beats Ann. Ann beats Ben. Cal finishes after Ben. Nobody tells you the finishing order, and yet you can write it down in seconds. Puzzles like this feel hard when the clues sit in sentences. They get much easier once the clues sit on a line that you can look at.

> **The big idea:** Turn clues into a **picture**: a line for order, or numbered seats for seating. Start with the **most restrictive clue**. Then ask whether each fact is something that **must** be true, or only something that **could** be true.

## Why a picture helps

A sentence gives you one clue at a time, so you have to remember all of the others. A picture holds them all at once. It also shows you what you **don't** know, and that's often what the question is asking about.

## Example 1: A single line

Use the race from the opening. Write each clue with the earlier finisher first:

- Dee, then Ann
- Ann, then Ben
- Ben, then Cal

**What's the plan?** These clues chain together, since each one shares a name with the next:

$$\text{Dee} \to \text{Ann} \to \text{Ben} \to \text{Cal}$$

There's only one possible order. Dee is first, and Cal is last.

Try one. Eli is older than Fay. Gus is younger than Fay. Hana is older than Eli. Who is the youngest?

<details class="check"><summary>Show the answer</summary>

From oldest to youngest, the chain is Hana, Eli, Fay, Gus. So Gus is the youngest.

</details>

## Example 2: Must or could?

Mia is taller than Noah. Mia is also taller than Olive. Which of these must be true?

- Mia is the tallest of the three.
- Noah is taller than Olive.

**What's the picture?** Mia sits above both of the others, but the clues don't connect Noah with Olive. So this isn't a single line. It's a fork:

| Possible order, tallest first | Tallest | Noah taller than Olive? |
|---|---|---|
| Mia, Noah, Olive | Mia | Yes |
| Mia, Olive, Noah | Mia | No |

Mia is the tallest in every row, so the first statement **must** be true. The second one is true in one row only, so it only **could** be true. When a question says "must," a choice has to hold in all of the rows.

## Example 3: Numbered seats

Ari, Bo, Cy, and Dee sit in seats 1, 2, 3, and 4, in a row. Ari is in seat 2. Bo sits next to Cy. Cy isn't in seat 4. Where does each person sit?

**What's the most restrictive clue?** Ari's seat is fixed, so start there:

| Seat 1 | Seat 2 | Seat 3 | Seat 4 |
|---|---|---|---|
| | Ari | | |

**What's next?** Bo and Cy need two seats side by side. Seat 1 has no open seat beside it, since Ari is in seat 2. So Bo and Cy must take seats 3 and 4, and that puts Dee in seat 1.

**The last clue:** Cy isn't in seat 4, so Cy is in seat 3, and Bo is in seat 4.

| Seat 1 | Seat 2 | Seat 3 | Seat 4 |
|---|---|---|---|
| Dee | Ari | Cy | Bo |

**Check every clue:** Ari is in seat 2, Bo is next to Cy, and Cy isn't in seat 4. It all works.

## Example 4: Two things to match

Three houses stand in a row. They're red, blue, and green, in some order, and Kai, Lia, and Moe own them. The red house is directly to the left of the blue house. Kai's house isn't in the middle. Moe's house is green. Kai's house is blue. Who lives in the middle, and what color is that house?

**What's the plan?** The red-blue clue leaves only two color orders:

| Option | Left | Middle | Right |
|---|---|---|---|
| A | red | blue | green |
| B | green | red | blue |

**Use the owners.** Kai's house is blue, and Kai isn't in the middle. In option A, blue is in the middle, so option A is out. That leaves option B. Moe has green on the left, Kai has blue on the right, and Lia has the red house in the middle.

Writing out the options first means that each new clue only has to cross one out.

## Example 5: A contest-style question

Five runners, A, B, C, D, and E, finish a race with no ties. A finishes before B, and B finishes before C. How many finishing orders are possible?

**What's the plan?** Without any clues, there are $5! = 120$ orders. Now think about only where A, B, and C land. They can appear in $3! = 6$ relative orders, and these are all equally common among the 120. Only one of those 6 is A, then B, then C.

$$\frac{120}{6} = 20$$

So there are **20** possible orders. This is the [overcount-then-divide](/pathway/counting/03-overcount-then-divide/) idea at work.

<section data-box="deeper">

## Going deeper

Order clues can be combined, as long as they involve different people.

**A harder one:** Five tasks, A, B, C, D, and E, are done one at a time. A comes before B, B comes before C, and D comes before E. How many orders are possible?

**Start with all orders:** $5! = 120$.

**Use the first group's clue.** A, B, and C can land in 6 relative orders, all equally common. Only one of them is right. So $\frac{1}{6}$ of the orders survive, leaving 20.

**Use the second group's clue.** D and E have 2 relative orders, and this choice doesn't depend on A, B, and C. So half of those survive, leaving **10**.

In one step: $\frac{120}{6 \times 2} = 10$.

**When does this work?** The groups have to be separate. If a clue says that C comes before D, then the groups link up, and dividing no longer works. You'd need to count another way, such as with cases.

Try this. Six runners finish with no ties. A beats B, B beats C, and D beats E. How many finishing orders are possible?

<details class="check"><summary>Show the answer</summary>

There are $6! = 720$ orders. Dividing by 6 for the first group and by 2 for the second gives $\frac{720}{12} = 60$.

</details>

</section>

<section data-box="traps">

## Common traps

**Reading "before" as "right before."** "A finishes before B" allows other runners between them. "Directly before" or "next to" is a much stronger clue.

**Adding a fact that wasn't given.** If Mia is taller than Noah and Olive, nothing says that Noah is taller than Olive, even if your sketch happens to show it that way.

**Answering a "must" question with a "could."** If a choice is true in your one picture, it still might not be a "must." Look for another arrangement that breaks it.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "before," "after," "next to," "to the left of," "taller," "older," or numbered seats.

**Choose the order of your clues:** Use clues with exact positions first, then "next to" clues, and then "not" clues.

**List options early:** If a clue leaves two or three arrangements, write all of them, and cross them out as you go.

**Check at the end:** Read each clue against your final picture. It takes only 15 seconds, and it catches most mistakes.

**Time:** Two to three minutes. These are long to read, but rarely hard once they're drawn.

</section>

<section data-box="connections">

## Connections

These puzzles grow from [logic tables](/pathway/logic-patterns/04-logic-tables-pigeonholes/). Counting the arrangements uses [ideas from Counting](/pathway/counting/02-when-order-matters/). Harder versions of "must be true" appear in [Pigeonhole Power](/pathway/pigeonholes-invariants/01-pigeonhole-power/) in Level 3.

</section>

<section data-box="summary">

## Remember this

- Draw a line for order, or numbered seats for seating.
- Start with the most restrictive clue.
- List the options, then let clues cross them out.
- "Must" has to hold in every arrangement.
- "Before" doesn't mean "right before."

</section>
