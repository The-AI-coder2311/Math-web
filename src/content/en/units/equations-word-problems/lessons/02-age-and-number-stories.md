---
title: "Age and Number Stories"
summary: Organize stories about ages and digits in a table, so that each sentence turns into one clean equation.
minutes: 10
---

Dana is 4 times as old as Eli. In 5 years, Dana will be 3 times as old as Eli. How old is Eli now? Try reasoning this out in your head, and you'll feel your brain juggling too many things at once. Here's the fix: a small table holds all of the information, so that your brain only has to deal with one sentence at a time.

> **The big idea:** Story problems describe the **same quantity at different times** or in different ways. Put it all in a table, using one letter. Then look for the sentence that hasn't been used, and that sentence is your equation.

## Why a table works

A story usually gives you two kinds of facts. Some facts help you **name** things, like "Dana is 4 times as old as Eli." Others connect them, like "In 5 years, Dana will be 3 times as old." The first kind goes in the table. The second kind becomes the equation.

Time adds the same amount to everyone. In 5 years, Eli and Dana will both be 5 years older. This is why age problems behave so nicely.

## Example 1: Dana and Eli

Let $e$ be Eli's age now.

| | Now | In 5 years |
|---|---|---|
| Eli | $e$ | $e + 5$ |
| Dana | $4e$ | $4e + 5$ |

**What sentence haven't we used?** In 5 years, Dana will be 3 times as old as Eli:

$$4e + 5 = 3(e + 5)$$

Multiply out the right side to get $4e + 5 = 3e + 15$. Subtract $3e$ from both sides to get $e + 5 = 15$, so $e = 10$. Eli is 10, and Dana is 40.

**Check:** In 5 years, they'll be 15 and 45, and 45 is 3 times 15.

## Example 2: Looking into the past

Ana is 6 years older than Ben. Three years ago, Ana was twice as old as Ben. How old is Ben now?

**What do we know?** Let $b$ be Ben's age now. Then Ana is $b + 6$.

| | Now | 3 years ago |
|---|---|---|
| Ben | $b$ | $b - 3$ |
| Ana | $b + 6$ | $b + 3$ |

Ana's age 3 years ago is $(b + 6) - 3$, which is $b + 3$. The unused sentence gives us:

$$b + 3 = 2(b - 3)$$

That's $b + 3 = 2b - 6$. Subtract $b$ from both sides to get $3 = b - 6$, so $b = 9$.

**Check:** Ben is 9 and Ana is 15. Three years ago, they were 6 and 12, and 12 is twice 6.

**A fact worth noticing:** The difference between two ages never changes. Ana is always 6 years older. That can give a quick shortcut: when she was twice as old, Ben's age equaled the difference, 6. So Ben was 6 three years ago, and now he's 9.

Now you try. Mo is 3 times as old as Kai. In 4 years, Mo will be twice as old as Kai. How old is Kai now?

<details class="check"><summary>Show the answer</summary>

Let $k$ be Kai's age, so Mo is $3k$. In 4 years, $3k + 4 = 2(k + 4)$, which gives $3k + 4 = 2k + 8$, so $k = 4$. Check: Kai is 4 and Mo is 12. In 4 years, they'll be 8 and 16.

</details>

## Example 3: Number stories with digits

The tens digit of a 2-digit number is 3 more than the ones digit. The number equals 7 times the sum of its digits. What's the number?

**What do we know?** Let the ones digit be $d$. Then the tens digit is $d + 3$. Using place value, the number is:

$$10(d + 3) + d = 11d + 30$$

The digits add up to $(d + 3) + d = 2d + 3$.

**What's the unused sentence?** The number is 7 times that sum:

$$11d + 30 = 7(2d + 3)$$

So $11d + 30 = 14d + 21$. Subtract $11d$ and 21 from both sides to get $9 = 3d$, and $d = 3$. The tens digit is 6, so the number is 63.

**Check:** The digits add up to 9, and $7 \times 9 = 63$.

## Example 4: Coins

A jar has only nickels and dimes. There are 3 more nickels than dimes, and the coins are worth \$1.65 in total. How many dimes are there?

**What do we know?** It's safest to work in cents. Let $d$ be the number of dimes, so there are $d + 3$ nickels.

| | How many | Cents each | Total cents |
|---|---|---|---|
| Dimes | $d$ | 10 | $10d$ |
| Nickels | $d + 3$ | 5 | $5(d + 3)$ |

**What's the unused sentence?** The total value is 165 cents:

$$10d + 5(d + 3) = 165$$

So $15d + 15 = 165$. Subtract 15 to get $15d = 150$, and $d = 10$. There are 10 dimes and 13 nickels.

**Check:** $10 \times 10 + 13 \times 5 = 100 + 65 = 165$.

## Example 5: A contest-style question

Three friends share 63 stickers. Lia gets twice as many as Mo, and Nate gets 12 fewer than Lia. How many stickers does Nate get?

**What should the letter be?** Everyone is described compared with someone else. Trace it back: Nate depends on Lia, and Lia depends on Mo. So let $m$ be Mo's stickers.

- Lia gets $2m$.
- Nate gets $2m - 12$.

Together, they get $m + 2m + (2m - 12) = 63$. That simplifies to $5m - 12 = 63$, so $5m = 75$ and $m = 15$. Mo gets 15, Lia gets 30, and Nate gets 18.

**Check:** $15 + 30 + 18 = 63$, and 18 is 12 fewer than 30. The question asks about Nate, so the answer is 18, even though $m = 15$ is the number you found first.

If you ever get a fraction of a sticker in a problem like this, treat it as a warning sign and look for a mistake in your setup.

<section data-box="traps">

## Common traps

**Adding years to only one person.** In 5 years, **everyone** is 5 years older. Writing $4e + 5 = 3e$ forgets to age Eli.

**Multiplying before adding.** "In 5 years, Dana will be 3 times as old" is $3(e + 5)$, not $3e + 5$. The "3 times" applies to Eli's future age, so it needs parentheses.

**Answering for the wrong person.** If you let $e$ be Eli's age and the question asks about Dana, you still need to do one more step. Reread the last sentence before you choose an answer.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "years ago," "in ... years," "twice as old," "more than," or stories with coins.

**Choose your letter well:** Let the letter be the thing that everything else is described in terms of.

**Test the choices:** Age problems are excellent for this. Try an answer, and run it through the story. Two checks usually take less than a minute.

**Time:** About two minutes.

</section>

<section data-box="connections">

## Connections

This uses [solving equations](/pathway/equations-word-problems/01-solving-and-translating/) and [place value](/pathway/number-sense/01-place-value/). Next, you'll apply tables to [distance and speed](/pathway/equations-word-problems/03-distance-rate-time/).

</section>

<section data-box="summary">

## Remember this

- Put everyone in a table, using one letter.
- Naming facts go in the table. The unused sentence is the equation.
- Everyone ages by the same amount.
- Age differences never change.
- Use parentheses for "3 times" a future age.

</section>
