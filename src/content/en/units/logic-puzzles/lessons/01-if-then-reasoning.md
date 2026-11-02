---
title: "If-Then Reasoning"
summary: Learn which statements mean the same thing as an if-then rule, how to test a rule, and how to prove a claim false with one example.
minutes: 10
---

Four cards lie on a table. Each has a shape on the front and a color on the back. You can see a circle, a square, a blue back, and a red back. Someone claims, "If a card has a circle on the front, it has a blue back." Which cards do you have to flip to test that claim? Most people choose the circle and the blue card. One of those is a waste of time, and they've missed a card that matters.

> **The big idea:** An if-then rule only breaks in **one way**: the "if" part happens and the "then" part doesn't. To reason with a rule, ask what would break it. Then look for that exact situation.

## Why a rule breaks in only one way

Take the rule, "If it rains, the ground gets wet." Here are all four situations:

| Rain? | Wet ground? | Does this break the rule? |
|---|---|---|
| Yes | Yes | No |
| Yes | No | **Yes** |
| No | Yes | No, since a sprinkler could have done it |
| No | No | No |

The rule says nothing about days with no rain. So only one row out of the four breaks it. Keep this table in mind. Nearly all of this lesson comes from that one row.

## Four statements that sound alike

From one rule, you can build three other statements. Only one of the three means the same as the rule.

| Name | Statement | Same meaning as the rule? |
|---|---|---|
| The rule | If it rains, the ground gets wet. | |
| Flipped | If the ground is wet, it rained. | No |
| Both negated | If it doesn't rain, the ground isn't wet. | No |
| Flipped and negated | If the ground isn't wet, it didn't rain. | **Yes** |

The last one is called the **contrapositive**. It always means the same as the original. If the ground is dry, rain can't have happened, because rain would have made it wet.

## Example 1: The four cards

**What would break the rule?** A card with a circle on the front and something other than blue on the back.

**Which cards could be that card?**

- **The circle:** Its back might not be blue, so flip it.
- **The square:** The rule says nothing about squares, so leave it.
- **The blue back:** Whatever is on the front, nothing breaks. Leave it.
- **The red back:** Its front might be a circle, and that would break the rule. Flip it.

So you flip the circle and the red card. The blue card is the tempting mistake, since testing it only checks the flipped statement, and the flipped statement isn't the rule.

Try one. The rule is, "If a number is divisible by 10, it's even." What do you know about 35, using only this rule and the fact that it's odd?

<details class="check"><summary>Show the answer</summary>

The contrapositive says, "If a number isn't even, it's not divisible by 10." Since 35 is odd, it isn't divisible by 10. Knowing that a number is even wouldn't have told you anything, since 8 is even and isn't divisible by 10.

</details>

## Example 2: One example can sink a claim

Is this claim true? "If a number is prime, adding 2 to it gives another prime."

**What's the plan?** Try to break it. We need a prime where the "then" part fails. The primes 3 and 5 work, so keep going. Try 7: since $7 + 2 = 9$, and 9 isn't prime, the claim is false.

An example that breaks a claim is called a **counterexample**. It takes only one. But the examples that work, such as 3 and 5, can never prove a claim true for every number.

## Example 3: The opposite of "all"

What's the opposite of "Every student in the club plays chess"?

Many people say, "No student plays chess." But that's too strong. For the original statement to be false, you only need **one** student who doesn't play.

| Statement | Its opposite |
|---|---|
| Every student plays. | At least one student doesn't play. |
| Some student plays. | No student plays. |

## Example 4: What must be true?

All blips are zorps. Some zorps are green. Must some blips be green?

**What's the plan?** Draw it. Picture a big circle for zorps, with a smaller circle for blips inside it. The green zorps could be outside the blip circle. So a picture exists where no blip is green, and the answer is **no**.

To show that something doesn't have to be true, you only need one picture where it fails.

## Example 5: A contest-style question

Four friends are deciding who goes to a movie.

- If Ann goes, Ben goes.
- If Ben goes, Cal stays home.
- Cal or Dee goes, or both do.
- Ann goes.

Who goes?

**What do we know?** Start with the fact and follow the chain. Ann goes, so Ben goes. Ben goes, so Cal stays home. At least one of Cal and Dee goes, and Cal doesn't, so Dee goes.

So Ann, Ben, and Dee go, which makes **3** people. Notice that each step used a rule in its forward direction, or used an "or" with one choice crossed out.

<section data-box="traps">

## Common traps

**Using the flipped statement.** "If it rains, the ground gets wet" doesn't mean that wet ground proves rain. On a contest, the flipped version is often a wrong answer choice.

**Thinking that examples prove a rule.** Ten examples that work don't prove a claim about all numbers. One failure does prove it false.

**Making the opposite too strong.** The opposite of "all do" is "at least one doesn't," not "none do."

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "if," "must be true," "cannot be true," "all," and "some."

**For "which must be true":** Try to invent a situation that breaks each choice. Any choice you can break is out.

**Write chains with arrows:** Writing A → B → not C keeps the clues straight.

**Time:** About a minute or two.

</section>

<section data-box="connections">

## Connections

This builds on [logic tables](/pathway/logic-patterns/04-logic-tables-pigeonholes/) from Level 1. Next, you'll use it to work out [who is telling the truth](/pathway/logic-puzzles/02-truth-tellers-and-liars/).

</section>

<section data-box="summary">

## Remember this

- A rule breaks only when the "if" happens and the "then" doesn't.
- Flipped and negated together means the same as the rule.
- Flipped alone doesn't mean the same as the rule.
- One counterexample proves a claim false.
- The opposite of "all do" is "at least one doesn't."

</section>
