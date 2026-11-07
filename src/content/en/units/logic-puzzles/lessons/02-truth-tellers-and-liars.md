---
title: "Truth-Tellers and Liars"
summary: Solve puzzles about people who always lie or always tell the truth by assuming a case, following it, and watching for a contradiction.
minutes: 13
---

On a certain island, everyone is either a truth-teller, who always tells the truth, or a liar, who always lies. You meet two people, Ari and Bo. Ari says, "We are both liars." You haven't heard a word from Bo, and yet you can work out exactly who is who. It feels like a magic trick, but it comes down to one careful question: what happens if we assume Ari is telling the truth?

> **The big idea:** Pick a case and **assume it's true**. Follow it step by step. If you reach something impossible, called a **contradiction**, that case is out. When only one case survives, it's the answer.

## Why assuming works

A contradiction can't happen in a real situation. So if an assumption leads to one, the assumption must be wrong. You're using a wrong idea to find the right one. And since each person has only two possible types, there are few cases to test.

Here's the rule that drives each puzzle: a statement made by a truth-teller is true, and a statement made by a liar is false.

## Example 1: The opening puzzle

Ari says, "We are both liars."

**Case 1: Ari is a truth-teller.** Then the statement is true, so Ari is a liar. But we assumed that Ari is a truth-teller. That's a contradiction, so this case is out.

**Case 2: Ari is a liar.** Then the statement is false, so they aren't both liars. Since Ari is one, Bo must not be. This works without a problem.

So Ari is a liar, and Bo is a truth-teller.

Try one. Cy says, "At least one of us is a liar," speaking about Cy and Dee. What are they?

<details class="check"><summary>Show the answer</summary>

If Cy is a liar, then the statement is false, so neither is a liar. But Cy is one, which is a contradiction. So Cy is a truth-teller, and the statement is true. Since Cy isn't the liar, Dee is.

</details>

## Example 2: A sentence nobody can say

Can anyone on the island say, "I am a liar"?

**Test both types.** A truth-teller who said it would be saying something false, which can't happen. A liar who said it would be saying something true, which can't happen either.

So nobody can say it. Both types will tell you, "I am a truth-teller."

**Here's how that helps.** Eve says, "Fay told me that Fay is a liar." We now know that Fay couldn't have said that. So Eve's statement is false, and Eve is a liar. We don't learn anything about Fay.

## Example 3: Statements about each other

Exactly one statement in this list is true:

| Statement | It says |
|---|---|
| 1 | Exactly one of these statements is false. |
| 2 | Exactly two of these statements are false. |
| 3 | Exactly three of these statements are false. |
| 4 | Exactly four of these statements are false. |

Which one is true?

**What do we know?** We were told that one statement is true, so the other 3 are false. Exactly three are false, and that's what statement 3 says. So statement 3 is the true one.

**What if we weren't told?** The statements disagree with each other, so at most one can be true. If none were true, all four would be false, and that makes statement 4 true. That's a contradiction. So exactly one is true, and we get the same answer. A list that talks about itself can settle its own puzzle.

## Example 4: Using a table

One of four friends won a race. Exactly one of them is lying.

- Gia says, "Hal won."
- Hal says, "Kim won."
- Ivy says, "I didn't win."
- Kim says, "Hal is lying."

**What's the plan?** There are only 4 possible winners, so test each one. In each row, mark each statement as true or false, and count the lies.

| If the winner is... | Gia | Hal | Ivy | Kim | Lies |
|---|---|---|---|---|---|
| Gia | false | false | true | true | 2 |
| Hal | true | false | true | true | 1 |
| Ivy | false | false | false | true | 3 |
| Kim | false | true | true | false | 2 |

Only one row has exactly 1 lie, so **Hal** won. And Hal's statement is the lie, which agrees with Kim's statement. Filling in the whole table protects you against a second row that also works.

## Example 5: A contest-style question

Six people sit around a round table. Each person says, "The person on my left is a liar." How many of them are liars?

**What do we know?** Think about what each statement tells us.

- If you're a truth-teller, the person on your left is a liar.
- If you're a liar, your statement is false, so the person on your left is a truth-teller.

**What's the pattern?** Going around the table, each person is the opposite type from the next. So the types must alternate: truth-teller, liar, truth-teller, liar, and so on. With 6 seats, that works perfectly, so there are **3** liars.

**What about 5 seats?** Going around an odd number of seats, alternating can't work, since you'd come back to the start with the wrong type. So 5 people couldn't all say this.

<section data-box="deeper">

## Going deeper

Here's a famous puzzle, where the solution is a question that forces the answer you need.

**A harder one:** Two doors stand in front of you, and one is safe. Two guards know which one. One guard always tells the truth, and the other always lies, but you don't know which is which. You can ask one guard one question. What do you ask?

**The trick:** Ask, "If I asked the other guard which door is safe, what would he say?"

**Follow both cases.** Say the left door is safe.

| Who you ask | What the other guard would say | What you hear |
|---|---|---|
| Truth-teller | The liar would say right. | Right, reported truthfully |
| Liar | The truth-teller would say left. | Right, since the liar flips it |

Either way, you hear the **wrong door**. So you go through the other one.

**Why does it work?** The answer passes through both guards, so it gets flipped exactly once, whichever one you ask.

Try this. Using this question, a guard answers, "The left door." Which door should you take?

<details class="check"><summary>Show the answer</summary>

The answer always names the wrong door. So take the right door.

</details>

</section>

<section data-box="traps">

## Common traps

**Making a liar's statement too strong.** If a liar says, "We are both liars," the truth is "not both." That doesn't mean that both are truth-tellers. Only one has to be.

**Stopping at the first case that works.** Another case might work too, and that changes the answer. Test all of them, unless a problem promises that only one works and you're short on time.

**Mixing up "exactly one is lying" with "exactly one is true."** With 4 people, those are very different counts. Underline the words in the problem, and write the target number at the top of your table.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "always lies," "exactly one is true," or a list of people accusing each other.

**Find the most useful person:** Start with someone who talks about themself, or a pair whose statements disagree. If two statements disagree, one of them must be false.

**Table or chain?** If one thing is unknown, such as a winner, make a table. If each person has a type, assume a type for one person and follow the chain.

**Time:** Two to three minutes. The table is rarely wasted time.

</section>

<section data-box="connections">

## Connections

This uses [if-then reasoning](/pathway/logic-puzzles/01-if-then-reasoning/). Assuming a case and finding a contradiction is also how the impossibility proofs in [Parity and Invariants](/pathway/pigeonholes-invariants/02-parity-and-invariants/) work.

</section>

<section data-box="summary">

## Remember this

- Assume a case, and follow it.
- A contradiction rules out that case.
- Nobody on the island can say, "I am a liar."
- "Not both" doesn't mean "neither."
- With one unknown, build a table, and test every row.

</section>
