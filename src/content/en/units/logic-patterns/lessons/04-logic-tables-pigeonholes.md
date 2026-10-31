---
title: "Logic Tables and Pigeonholes"
summary: Organize clues in a table, test every case when someone may be lying, and use the pigeonhole principle to prove that something must happen.
minutes: 10
---

Your sock drawer holds a jumble of black, white, and blue socks, and the room is dark. How many socks do you have to pull out to be **sure** of having a matching pair? It can't be 3, since you might get one of each color. But with 4, you're guaranteed a match. That's real logic: you didn't need to know anything about which socks you got.

> **The big idea:** Logic problems reward **organization**, not guessing. Put clues in a table, test every possible case, and think about the **worst case** when something has to be guaranteed.

## Why tables work

Your brain can only hold a few facts at once. A table holds them for you. Each "no" in a table is progress too, since ruling things out often forces the answer.

## Example 1: A clue grid

Maya, Ned, and Ola each own a different pet: a cat, a dog, or a fish. Maya is allergic to fur. Ned's pet can't swim. Ned doesn't own the cat. Who owns what?

**What do we know?** Put a **no** in the table for each clue.

- Cats and dogs have fur, so Maya doesn't have a cat or a dog.
- Ned's pet can't swim, so Ned doesn't have the fish.
- Ned doesn't have the cat.

| | Cat | Dog | Fish |
|---|---|---|---|
| Maya | no | no | **yes** |
| Ned | no | **yes** | no |
| Ola | **yes** | no | no |

Each row and each column can only have one "yes." Maya has only one choice left, the fish. Ned has only one choice left, the dog. So Ola has the cat.

## Example 2: Who's telling the truth?

One of three students broke a window. Exactly one of these statements is true:

- Ana says, "Ben did it."
- Ben says, "I didn't do it."
- Cy says, "Ana didn't do it."

**What's the plan?** There are only 3 possibilities. For each, count the true statements.

| If the student is... | Ana's statement | Ben's statement | Cy's statement | True statements |
|---|---|---|---|---|
| Ana | false | true | false | 1 |
| Ben | true | false | true | 2 |
| Cy | false | true | true | 2 |

Only the first row has exactly 1 true statement, so **Ana** did it. Testing all cases feels slow, but it's fast when the number of cases is small, and it can't go wrong if you're careful.

Now try one. Al, Bea, and Cal each play a different instrument: flute, drum, or piano. Al doesn't play the piano or the drum. Bea doesn't play the drum. Who plays the drum?

<details class="check"><summary>Show the answer</summary>

Al must play the flute, since that's all that's left for him. Bea doesn't play the drum, and the flute is taken, so she plays the piano. That leaves the drum for Cal.

</details>

## Example 3: The pigeonhole principle

If 5 pigeons fly into 4 holes, at least one hole must hold 2 or more pigeons. Why? If every hole held at most 1 pigeon, the holes would hold at most 4 pigeons, and we have 5. This is the **pigeonhole principle**.

**How to use it:** A class has 30 students. Must 3 of them share a birthday month?

**What's the worst case?** Spread the students out as evenly as possible. With 12 months and 2 students in each, that accounts for only 24 students. There are 6 more, so some month gets a 3rd student. So **yes**, it's guaranteed. In fact, this works from 25 students up.

**Back to the socks:** The "holes" are the 3 colors, and the "pigeons" are the socks. With 4 socks and 3 colors, two must match.

## Example 4: Even and odd

Here's another kind of logic: looking at whether numbers are even or odd. This is called **parity**.

You have the numbers 1 through 5 on a board. You can erase any two numbers and write their sum. You keep going until one number is left. Can that number be even?

**What do we know?** Their total is $1 + 2 + 3 + 4 + 5 = 15$. When you replace two numbers with their sum, the total doesn't change at all!

**So what's left?** The last number must equal the total, 15. It's always 15, so it's always odd. No matter what you do, the outcome is set. Looking for something that **never changes** is a very powerful trick.

## Example 5: A contest-style question

A bag holds 6 red, 5 blue, and 3 green marbles. You pull out marbles without looking. How many must you pull out to be sure that you have 2 marbles of the same color and at least 1 blue marble?

**What's the worst case?** We need to think like the unluckiest person alive. To avoid blue as long as possible, you pull all 6 red and all 3 green first. That's 9 marbles with no blue. The next marble must be blue, which makes 10.

**Do you also have a matching pair?** With that many red marbles, yes. So the answer is **10**.

<section data-box="traps">

## Common traps

**Thinking about the lucky case.** "How many to be sure?" asks about the worst case, not the best. Saying "2 socks could match" doesn't guarantee a match. Imagine you have the worst luck in the world.

**Off by one with pigeonholes.** The worst case is one less than the answer. With 3 colors, 3 socks **can** avoid a match, so you need 4. Don't stop at the worst case. Add the one that forces it.

**Guessing and not testing.** For a truth-teller puzzle, stopping once one case seems to work can miss a second case that also works. Check every row.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "must be true," "guarantee," "be sure," "at least how many," or a list of clues and names.

**Draw the table right away.** A clue grid takes 20 seconds to draw, and it stops you from going in circles.

**Time:** Two to three minutes for a clue grid. If there are many clues and few points, you can skip it and come back later.

**Using the answer choices:** For "which must be true," try to find one example that makes a choice false. A single example eliminates it.

</section>

<section data-box="connections">

## Connections

Testing all cases is [casework](/pathway/counting/05-split-into-cases/) from Counting. Parity and remainders go much deeper in [Remainder Math](/pathway/modular-arithmetic/) in Level 3.

</section>

<section data-box="summary">

## Remember this

- Put clues in a table. Each "no" is progress.
- With few cases, test all of them.
- "To be sure" means to think about the worst case, and add 1.
- More pigeons than holes means some hole gets 2.
- Look for what never changes.

</section>
