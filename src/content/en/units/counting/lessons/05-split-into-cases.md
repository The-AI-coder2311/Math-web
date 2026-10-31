---
title: "Split Into Cases"
summary: When one rule makes a problem awkward, break it into separate cases, count each one, and add.
minutes: 9
---

How many 3-digit numbers have digits that add up to 3? There's no single multiplication that gives the answer, because the options for each digit depend on the others. But if you pick an organized way to split the problem, each piece is small.

> **The big idea:** When choices affect each other, split the problem into **cases** that don't overlap and that cover every possibility. Count each case, then **add**.

## Why adding works

Multiplying was for one choice **and then** another. Cases are different: each possibility belongs to one case **or** another. If 3 of your books are on one shelf and 4 are on another, you have $3 + 4 = 7$ books. Adding works as long as no book is on both shelves and none is left off.

So cases need to pass two tests:

1. **No overlap.** Nothing gets counted twice.
2. **Nothing missing.** Everything lands in some case.

## Example 1: Digits that add up to 3

**What's a good way to split?** The first digit can't be 0, so the first digit could be 1, 2, or 3. Let's make that our cases.

| First digit | The other two digits must add up to | Numbers | Count |
|---|---|---|---|
| 1 | 2 | 102, 111, 120 | 3 |
| 2 | 1 | 201, 210 | 2 |
| 3 | 0 | 300 | 1 |

Add them: $3 + 2 + 1 = 6$. Every number has exactly one first digit, so the cases don't overlap and nothing is missing.

## Example 2: Making change

How many ways can you make 30 cents using only dimes and nickels?

**What's a good way to split?** Once you know the number of dimes, the nickels are decided. So use the number of dimes as your cases.

| Dimes | Cents left | Nickels |
|---|---|---|
| 0 | 30 | 6 |
| 1 | 20 | 4 |
| 2 | 10 | 2 |
| 3 | 0 | 0 |

There are 4 ways. Each row is a single way, because the nickels are forced.

Now try this one yourself. How many ways can you make 25 cents using only dimes and nickels?

<details class="check"><summary>Show the answer</summary>

With 0, 1, or 2 dimes, the leftover 25, 15, or 5 cents is made of nickels. Three dimes would be too much. So there are 3 ways.

</details>

## Example 3: Using multiplication inside a case

Cases and multiplication often work together. A meal deal lets you pick **either** a sandwich and a drink **or** a soup and a dessert. There are 4 sandwiches, 3 drinks, 2 soups, and 5 desserts. How many meals are possible?

- Case 1, sandwich and drink: $4 \times 3 = 12$
- Case 2, soup and dessert: $2 \times 5 = 10$

$$12 + 10 = 22$$

Inside a case, you do one thing and then another, so you multiply. Between the cases, it's one or the other, so you add.

## Example 4: A contest-style question

How many 2-digit numbers have a tens digit greater than their ones digit?

**What's a good way to split?** Use the tens digit.

- If the tens digit is 1, the ones digit can only be 0. That's 1 number.
- If the tens digit is 2, the ones digit can be 0 or 1. That's 2 numbers.
- The pattern continues: a tens digit of $d$ gives $d$ numbers.
- If the tens digit is 9, the ones digit can be 0 through 8. That's 9 numbers.

$$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$$

**Is there a check?** Yes. Numbers that end in 0, like 30 or 70, always have a larger tens digit, and there are 9 of them. Now take the numbers with no zeros and two different digits. They come in swapped pairs, like 34 and 43, and there are $9 	imes 8 = 72$ of them. Exactly one number in each pair has the larger tens digit, so that's half of 72, or 36. And $9 + 36 = 45$. It matches.

<section data-box="traps">

## Common traps

**Overlapping cases.** Suppose you count numbers from 1 to 20 with a case for "even" and a case for "multiples of 3." Then you've counted 6, 12, and 18 twice, so adding gives 16 instead of 13. Choose cases where each possibility can only be in one, or subtract the overlap.

**Missing a case.** In Example 1, it's easy to forget 300, where the other two digits add up to 0. Going in order, from the smallest case to the largest, helps you catch these.

**Multiplying the cases.** In Example 3, the answer $12 \times 10 = 120$ is wrong. You don't pick a sandwich meal **and** a soup meal. You pick one or the other, so you add.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for words like "or," "at most," or a rule that makes the options depend on earlier choices.

**Choosing cases:** Split on the thing that decides the most. It's often the most restricted item, like the number of the largest coin or the first digit.

**When to stop and rethink:** If you need more than about 5 cases, look for a pattern in the cases, as in Example 4, or use the opposite.

**Time:** Two to three minutes. Write each case on its own line, so that when you check your work, you can see what you did.

</section>

<section data-box="connections">

## Connections

Casework comes back in [probability](/pathway/intro-probability/) and [Smart Counting](/pathway/smart-counting/). Sometimes [counting the opposite](/pathway/counting/04-count-the-opposite/) is shorter, so try both.

</section>

<section data-box="summary">

## Remember this

- Choices affect each other? Split into cases.
- Cases must not overlap, and must cover everything.
- Add between cases, and multiply inside a case.
- Split on the most restricted thing.
- Go in order, so you don't miss a case.

</section>
