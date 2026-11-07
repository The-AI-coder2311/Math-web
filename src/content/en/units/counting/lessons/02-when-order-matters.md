---
title: "When Order Matters"
summary: Count lineups and arrangements, where each choice uses up an option, and learn why n factorial works.
minutes: 11
---

Five friends want a photo in a straight line. They'd like one picture of every possible lineup. If each photo takes 10 seconds, how long will it take? Before reading on, take a guess. Is it about a minute? About an hour?

> **The big idea:** When you arrange things in order and can't reuse them, the options **shrink by one** at each step. You still multiply, because it's still one choice and then another.

## Why the options shrink

Let's list a tiny case in full. How many ways can 3 friends, Ana, Ben, and Cy, stand in a line?

| First | Second | Third |
|---|---|---|
| Ana | Ben | Cy |
| Ana | Cy | Ben |
| Ben | Ana | Cy |
| Ben | Cy | Ana |
| Cy | Ana | Ben |
| Cy | Ben | Ana |

There are 6 lineups. Look at how the table is built. There are 3 options for the first spot. Once that person is standing there, only 2 people are left for the second spot, and then only 1 for the last spot. So:

$$3 \times 2 \times 1 = 6$$

This kind of product shows up so often that it has its own name and symbol. The number $n!$ is read "$n$ factorial," and it means multiplying all the whole numbers from $n$ down to 1.

| Factorial | Product | Value |
|---|---|---|
| $3!$ | $3 \times 2 \times 1$ | 6 |
| $4!$ | $4 \times 3 \times 2 \times 1$ | 24 |
| $5!$ | $5 \times 4 \times 3 \times 2 \times 1$ | 120 |
| $6!$ | $6 \times 5 \times 4 \times 3 \times 2 \times 1$ | 720 |

So $n!$ counts the ways to put $n$ different things in order.

## Example 1: The photo lineups

Back to the 5 friends. There are $5! = 120$ lineups. At 10 seconds per photo, that's $120 \times 10 = 1200$ seconds, which is 20 minutes. Did you guess that high? Factorials grow quickly. With 10 friends, there would be 3,628,800 lineups, and taking the photos would take over a year.

## Example 2: Filling only some of the spots

A club has 8 members. It needs a president, a vice president, and a treasurer, and no one can hold two jobs. How many ways can it fill the jobs?

**What do we know?** There are 3 different jobs and 8 people.

**Does order matter?** Yes. Ana as president and Ben as treasurer is a different result from Ben as president and Ana as treasurer.

We don't use all 8 people, so we stop after 3 choices:

$$8 \times 7 \times 6 = 336$$

Try this one. In a race with 10 runners, how many ways can the gold, silver, and bronze medals be given out?

<details class="check"><summary>Show the answer</summary>

There are 10 options for gold, then 9 for silver, then 8 for bronze: $10 \times 9 \times 8 = 720$.

</details>

## Example 3: No repeats, with a rule

How many 3-digit numbers have all different digits?

**Which position has a rule?** The first digit can't be 0, so start there.

- The first digit has 9 options: 1 through 9.
- The second digit can be anything except the first digit. That's 10 digits minus 1, so it has 9 options. Notice that 0 is back in play here.
- The third digit must differ from the first two, so it has 8 options.

$$9 \times 9 \times 8 = 648$$

## Example 4: A contest-style question

Six students sit in a row of 6 chairs. Two of them, Dee and Eli, must sit in the two end chairs. How many seating arrangements are possible?

**What do we know?** Two people have a rule, and the other 4 don't.

**What's a smaller version?** Handle the fussy people first, and let everyone else fill in.

- Dee and Eli can take the two end chairs in 2 ways: Dee on the left, or Eli on the left.
- The other 4 students fill the 4 middle chairs in $4! = 24$ ways.

Each way of placing Dee and Eli pairs with every way of placing the rest, so we multiply:

$$2 \times 24 = 48$$

<section data-box="deeper">

## Going deeper

There's often more than one good way to count, and getting the same answer twice is the best check you have.

**A harder one:** Eight runners race, and the top 3 get gold, silver, and bronze. In how many ways can the medals go if Ana must win one?

**One way:** Choose Ana's medal, which has 3 options. Then fill the other two medals from the 7 other runners: $7 \times 6 = 42$. That gives $3 \times 42 = 126$.

**Another way:** Count all of the ways, and take away the ones with no Ana. All of the ways: $8 \times 7 \times 6 = 336$. No Ana: $7 \times 6 \times 5 = 210$. And $336 - 210 = 126$.

The two methods agree, so we can trust the answer. Notice that the first method starts with the person who has a rule. Dealing with the rule first keeps the later steps easy.

Try this. Six people run for president, vice president, and treasurer. In how many ways can the jobs be filled if Bo must get one?

<details class="check"><summary>Show the answer</summary>

Bo has 3 possible jobs, and the other two jobs can go to $5 \times 4 = 20$ pairs of people in order. So there are $3 \times 20 = 60$ ways.

</details>

</section>

<section data-box="traps">

## Common traps

**Not shrinking the options.** For 3 medals among 10 runners, the answer $10 \times 10 \times 10 = 1000$ is wrong. That would let one runner win all three medals. Ask, "Can the same thing be used twice?" If not, the options shrink.

**Shrinking when you shouldn't.** A 3-digit locker code can repeat digits, so it's $10 \times 10 \times 10$, not $10 \times 9 \times 8$. Read the problem to see whether repeats are allowed.

**Forgetting that 0 can return.** In Example 3, some students write $9 \times 8 \times 7$. But the second digit has 9 options, not 8, because 0 was banned only from the first spot.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for words like "arrange," "line up," "in a row," or jobs and prizes that are different from each other.

**The key question:** Does swapping two people change the result? If it does, order matters, and you shouldn't divide anything.

**How long it should take:** A minute or two. Handle the rule first, then multiply. Learn the factorials up to $6!$ by heart, since contests often use them.

**Eliminating answers:** The answer to a lineup of 5 must be a multiple of 5, since 5 is one of the factors. Any choice that isn't a multiple of 5 can be crossed out.

</section>

<section data-box="connections">

## Connections

This builds on [the multiply trick](/pathway/counting/01-multiply-choices/). Next, you'll see what to do [when order doesn't matter](/pathway/counting/03-overcount-then-divide/). Later, [Smart Counting](/pathway/smart-counting/) handles harder rules.

</section>

<section data-box="summary">

## Remember this

- No repeats means the options shrink by one at each step.
- $n!$ counts the ways to put $n$ different things in order.
- $3! = 6$, $4! = 24$, $5! = 120$, and $6! = 720$.
- Deal with the people or positions that have rules first.

</section>
