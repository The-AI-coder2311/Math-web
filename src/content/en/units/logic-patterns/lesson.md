---
title: "Logic & Patterns: Try Small, Then Reason"
summary: When a problem looks huge, try a smaller version and look for a pattern. Then learn to work backwards and to test every possibility.
minutes: 8
---

Imagine that 10 people at a party all shake hands with each other once. How many handshakes is that? You could try to picture it all at once, but there's a better way: **start with a smaller party**.

> **The big idea:** When a problem looks too big, try tiny versions of it and look for a pattern. Then ask **why** the pattern happens.

## Example 1: Patterns that repeat

Beads on a string repeat in the order red, blue, green, and then start over. What color is the 50th bead?

The pattern repeats every 3 beads, so you can skip whole groups of 3. Divide: $50 \div 3$ is 16 with a remainder of 2. That means 16 full groups take you to bead 48, and then you go 2 more beads: red, then blue. The 50th bead is **blue**.

The remainder tells you where you land inside the pattern. This same idea works for days of the week, since they repeat every 7 days.

## Example 2: Patterns that grow by the same amount

What's the 30th number in the list 5, 8, 11, 14, ...?

Each step adds 3. To get from the 1st number to the 30th, how many steps do you take? It's tempting to say 30, but look at a small case: getting from the 1st number to the 2nd takes **1** step, and getting to the 3rd takes **2** steps. So getting to the 30th takes 29 steps:

$$5 + 29 \times 3 = 92$$

> **Watch out:** Off-by-one mistakes are very common. A fence with 4 posts has only 3 gaps. Test a small case whenever you aren't sure.

## Example 3: Try small cases

Now for the handshakes. Let's make a table:

| People | Handshakes | How it grew |
|---|---|---|
| 2 | 1 | |
| 3 | 3 | added 2 |
| 4 | 6 | added 3 |
| 5 | 10 | added 4 |

Why does it grow this way? When a new person walks in, they shake hands with everyone already there. The 5th person shakes 4 hands. So for 10 people, the total is:

$$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$$

There's another way to see it. Each of the 10 people shakes 9 hands, and $10 \times 9 = 90$. But that counts every handshake twice, once for each person in it. So there are $90 \div 2 = 45$ handshakes. Two different methods gave the same answer, which is a great sign.

## Example 4: Adding a long list quickly

What is $1 + 3 + 5 + 7$? Look at what happens when you arrange dots in a square:

![Squares of dots growing by an L shape. One dot, then adding 3 dots makes 4, adding 5 dots makes 9, and adding 7 dots makes 16.](/images/logic-odd-squares.svg)

Each new L shape of dots adds the next odd number and makes a bigger square. So the sum of the first 4 odd numbers is $4 \times 4 = 16$. This picture shows **why** the pattern works, so you can trust it for any length.

## Example 5: A pattern is only a clue

Patterns can fool you. Put dots on a circle, connect every pair with a straight line, and count the regions inside the circle (with the dots placed so that no three lines cross at one point). Here's what you get:

| Dots | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Regions | 1 | 2 | 4 | 8 | 16 | 31 |

It looks like the number doubles each time, but the next number is 31, not 32! That's why you should always ask why a pattern works. On a timed multiple-choice contest, a strong pattern is still a good reason to choose an answer. You should just know it's a clue, not a proof.

## Example 6: Work backwards

Leo spends half of his money on lunch. Then he spends \$3 on a snack. He has \$5 left. How much did he start with?

When a problem tells you how something **ended**, start at the end and undo each step in reverse:

- He ended with \$5. Before the snack, he had $5 + 3 = 8$ dollars.
- He had \$8 after spending half. So before lunch, he had $8 \times 2 = 16$ dollars.

**Check it forward:** Half of \$16 is \$8, and $8 - 3 = 5$.

## Example 7: Test every possibility

One of three students broke a window. Exactly one of these statements is true:

- Ana says, "Ben did it."
- Ben says, "I didn't do it."
- Cy says, "Ana didn't do it."

Who did it? There are only 3 possibilities, so test each one and count the true statements.

| If the student is... | Ana's statement | Ben's statement | Cy's statement | True statements |
|---|---|---|---|---|
| Ana | false | true | false | 1 |
| Ben | true | false | true | 2 |
| Cy | false | true | true | 2 |

Only the first row has exactly 1 true statement, so Ana did it. The method is the important part: **make a table, test each case, and don't guess.**

## Your turn

Before you start the practice problems, try these two:

1. What's the 12th number in the list 4, 9, 14, 19, ...?
2. I double a number and then add 3, and I get 17. What was my number?

**Answers:** For the first, there are 11 steps of 5, so the number is $4 + 11 \times 5 = 59$. For the second, undo each step: $17 - 3 = 14$, and $14 \div 2 = 7$.

If you got those, you're ready. If not, reread Examples 2 and 6, then go on.
