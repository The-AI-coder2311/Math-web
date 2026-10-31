---
title: "Overcount, Then Divide"
summary: When order doesn't matter, count as if it did, then divide out the repeats. This is where the "choose" formula comes from.
minutes: 10
---

Four friends each shake hands with each other once. How many handshakes is that? You might think, "Each of the 4 people shakes 3 hands, so it's $4 \times 3 = 12$." Now grab 3 friends and try it. You'll get only 6. What happened to the other 6?

> **The big idea:** Sometimes the easiest way to count is to count **too many** on purpose, in a way where everything gets counted the same number of times. Then divide by that number.

## Why dividing works

Name the friends A, B, C, and D. When we said "each person shakes 3 hands," we counted the handshake between A and B twice: once as A's handshake, and once as B's. Here's every ordered pair we counted:

| | | |
|---|---|---|
| AB | AC | AD |
| BA | BC | BD |
| CA | CB | CD |
| DA | DB | DC |

There are 12 entries, and every real handshake appears exactly twice. So the real number is half of that:

$$\frac{4 \times 3}{2} = 6$$

Here's another way to picture it. Suppose you want to count the dogs in a park, but you can only see their legs. You could count the legs and divide by 4. That works because every dog has exactly 4 legs. If some dogs had 3 legs, dividing would give the wrong answer.

The word "exactly" matters in the same way. Dividing by 2 only works because **every** handshake got counted the same number of times.

## Example 1: Picking a pair

A pizza place offers 8 toppings, and you want 2 different ones. How many pizzas can you make?

**Does order matter?** No. Mushrooms and peppers make the same pizza as peppers and mushrooms.

Count as if order did matter: 8 options for the first topping and 7 for the second, which makes $8 \times 7 = 56$. Each pizza got counted twice, so divide by 2:

$$\frac{8 \times 7}{2} = 28$$

## Example 2: Picking a group of 3

A coach picks 3 players out of 7 for a team. How many teams are possible?

Pretend the order matters: $7 \times 6 \times 5 = 210$.

**How many times was each team counted?** Take one team, such as Ana, Ben, and Cy. In the 210, it was counted once for each order in which those 3 could have been picked. You learned that 3 people can be ordered in $3! = 6$ ways. So divide by 6:

$$\frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

This is called a **combination**. We say "7 choose 3" and write it as $\binom{7}{3}$. Here's the pattern for "$n$ choose $k$":

- On top, multiply $k$ numbers, counting down from $n$.
- On the bottom, put $k!$.

So $\binom{10}{2} = \frac{10 \times 9}{2 \times 1} = 45$, and $\binom{6}{4} = \frac{6 \times 5 \times 4 \times 3}{4 \times 3 \times 2 \times 1} = 15$.

Why is the bottom always $k!$? Because $k$ chosen things can be put in order in $k!$ ways, and that's how many times the top counted each group. The top counts ordered picks, and the bottom removes the order.

Try one: a teacher picks 2 of 9 students to carry supplies. How many pairs are possible?

<details class="check"><summary>Show the answer</summary>

Order doesn't matter, so it's "9 choose 2": $\frac{9 \times 8}{2} = 36$.

</details>

## Example 3: Arranging letters with repeats

How many ways can you arrange the letters in NOON?

If all 4 letters were different, there would be $4! = 24$ arrangements. Pretend they are different by writing N1, O1, O2, N2. Now, how many times does each real word get counted? In any word, the two Ns can swap places in 2 ways, and the two Os can swap in 2 ways. That makes $2 \times 2 = 4$ versions of each word. So:

$$\frac{24}{4} = 6$$

Check by listing them: NNOO, NONO, NOON, ONNO, ONON, OONN. That's 6, so the idea holds.

## Example 4: A contest-style question

A class has 5 girls and 4 boys. A committee will have 2 girls and 2 boys. How many committees are possible?

**What do we know?** There are two separate choices: pick the girls, and then pick the boys. Within each group, order doesn't matter.

**What's the plan?** Use "choose" for each group. Then use the multiply trick, since we pick the girls **and then** the boys.

- Girls: $\binom{5}{2} = \frac{5 \times 4}{2} = 10$
- Boys: $\binom{4}{2} = \frac{4 \times 3}{2} = 6$

$$10 \times 6 = 60$$

<section data-box="traps">

## Common traps

**Dividing when order does matter.** For a president and a vice president from 8 people, the answer is $8 \times 7 = 56$, not 28. The two jobs are different, so swapping people gives a different result. Always ask, "If I swap these two, is it a new result?"

**Dividing by the wrong number.** For a team of 3, some students divide by 3 and get 70 for Example 2. But 3 people can be ordered in $3! = 6$ ways. Divide by the number of orders, not the number of people.

**Adding the groups in Example 4.** The answer $10 + 6 = 16$ is wrong, because every pair of girls can go with every pair of boys. You pick the girls **and** the boys, so multiply.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for words like "committee," "team," "pair," "group," or "handshakes." Nothing distinguishes the people within the group.

**A useful shortcut:** Choosing 2 to keep is the same as choosing the others to leave out, so $\binom{9}{7} = \binom{9}{2} = 36$. Pick whichever is shorter.

**Worth memorizing:** $\binom{n}{2}$ appears everywhere: games in a tournament, handshakes, and lines between dots. It's $n \times (n - 1)$ divided by 2.

**Time:** Under two minutes. Combinations always come out to whole numbers, so a fraction means something went wrong.

</section>

<section data-box="connections">

## Connections

This uses [lineups and factorials](/pathway/counting/02-when-order-matters/). Grid paths in [Smart Counting](/pathway/smart-counting/) and probability with groups both use "choose."

</section>

<section data-box="summary">

## Remember this

- Order doesn't matter? Count as if it did, then divide.
- $\binom{n}{k}$ means $k$ numbers counting down from $n$, divided by $k!$.
- Repeated letters: divide by the swaps that don't change the word.
- Only divide if everything was counted the same number of times.

</section>
