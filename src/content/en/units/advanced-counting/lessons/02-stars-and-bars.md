---
title: "Stars and Bars"
summary: Count the ways to share identical things among people, by turning the problem into choosing spots in a row.
minutes: 10
---

You have 5 identical cookies to share among 3 kids. Some kids might get none. How many ways can you do it? The multiply trick doesn't work here, because the cookies are identical, and the number one kid gets affects what the others can get. You could list the cases, but what if you had 20 cookies? A clever picture turns this into a problem you can solve in one line.

> **The big idea:** To share $n$ identical things among $k$ groups, line up the things and add $k - 1$ dividers. Each arrangement is one way of sharing. So the count is the number of ways to choose where the dividers go, which is $\binom{n + k - 1}{k - 1}$.

## Why the picture works

Draw the cookies as dots in a row. Now draw 2 bars to split them among 3 kids. The first kid gets everything left of the first bar, the second kid gets everything between the bars, and the third kid gets the rest.

![Five identical cookies shared by three kids, drawn as a row of 5 dots and 2 bars. Two dots, then a bar, then one dot, then a bar, then two dots means the kids get 2, 1 and 2 cookies. A bar, then 4 dots, then a bar, then one dot means the kids get 0, 4 and 1 cookies.](/images/counting-stars-and-bars.svg)

Every way of sharing matches exactly one row of dots and bars, and every row matches exactly one way of sharing. So we only need to count the rows.

A row has 7 symbols in it: 5 dots and 2 bars. A row is decided by which 2 of the 7 spots hold bars. That's:

$$\binom{7}{2} = \frac{7 \times 6}{2} = 21$$

**Let's test it on a tiny case.** Share 2 cookies between 2 kids. Listing them, the kids could get 2 and 0, 1 and 1, or 0 and 2. That's 3 ways. The formula gives 2 dots and 1 bar, so $\binom{3}{1} = 3$. It matches.

The method is called **stars and bars**, since the dots are often drawn as stars.

## Example 1: Choosing kinds of things

A shop sells 3 kinds of donuts. You want to buy 4 donuts, and you can buy any number of each kind. How many different boxes are possible?

**Does this fit?** It doesn't look like sharing at first. But the 4 donuts are like the cookies, and the 3 kinds are like the kids. Each "kid" receives however many donuts of that kind you bought. Two boxes with the same counts look the same.

**How many symbols are there?** There are 4 stars and 2 bars, which makes 6 symbols.

$$\binom{6}{2} = 15$$

Now you try. How many ways can you share 3 identical stickers among 4 friends?

<details class="check"><summary>Show the answer</summary>

There are 3 stars and 3 bars, since 4 friends need 3 bars. So the count is $\binom{6}{3} = 20$.

</details>

## Example 2: Everyone gets at least one

Share 10 identical cookies among 3 kids, so that each kid gets at least 1. How many ways are there?

**What's the trick?** Get the rule out of the way first. Give each kid 1 cookie right away. Now 7 cookies are left, and those can be shared with no rules at all.

**How many symbols?** There are 7 stars and 2 bars:

$$\binom{9}{2} = 36$$

The same trick works for any minimum: hand out what's required, and share the rest freely.

## Example 3: Equations in disguise

How many solutions does $a + b + c + d = 5$ have, where each letter is a whole number that's 0 or more?

**What's the question really asking?** Think of 5 as 5 identical cookies, and the 4 letters as 4 kids. Each solution is a way of sharing.

**How many symbols?** There are 5 stars and 3 bars:

$$\binom{8}{3} = 56$$

**With different minimums:** Suppose $x + y + z = 12$, with $x$ at least 2 and $y$ at least 1. Hand out those amounts first, which uses 3 of the 12. Then 9 are left to share among 3 letters: $\binom{11}{2} = 55$.

## Example 4: A contest-style question

How many 3-digit numbers have digits that add up to 5?

**What do we know?** Call the digits $a$, $b$, and $c$. They add up to 5. The first digit $a$ has to be at least 1.

**What's the trick?** Hand out the required 1 to $a$. Now 4 are left to share among the 3 digits, with no rules:

$$\binom{6}{2} = 15$$

**Is there another catch?** Digits can't be bigger than 9, but we're only sharing 5 in total, so that never comes up here. If the digits had to add up to 20, you'd have to subtract the cases with a digit above 9.

**A quick check by listing the first digit:** A first digit of 5 gives 500, which is 1 number. A first digit of 4 gives 410 and 401, which is 2 numbers. Keeping on, the counts are 1, 2, 3, 4, 5, which add up to 15. It matches!

<section data-box="traps">

## Common traps

**Using too many bars.** For $k$ groups, you need $k - 1$ bars. Three kids need only 2 bars, since 2 cuts make 3 pieces. Using 3 bars would give the answer for 4 kids.

**Using this when things are different.** Stars and bars is for **identical** things. If the 5 cookies are all different, then each cookie picks one of the 3 kids, which gives $3^5 = 243$ ways. Ask yourself, "Would swapping two of these change anything?"

**Forgetting about "at least one."** Read the wording closely. Without a minimum, 10 cookies and 3 kids gives $\binom{12}{2} = 66$. With a minimum of 1 each, it's 36.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "identical," "indistinguishable," "how many ways to distribute," or an equation with several unknowns and a fixed total.

**Handle minimums first:** It's always the first move. After that, you're looking at the plain problem.

**Upper limits are harder:** If a group has a maximum, count without the limit, and then subtract the cases that break it.

**Time:** About a minute, once you recognize it. Writing out a small example of dots and bars is a good way to check that your count of symbols is right.

</section>

<section data-box="connections">

## Connections

This turns sharing into [choosing spots](/pathway/smart-counting/03-repeats/) from Smart Counting. Handing out minimums first is the same idea as dealing with rules first in [Counting With Rules](/pathway/smart-counting/02-restrictions/).

</section>

<section data-box="summary">

## Remember this

- $n$ identical things, $k$ groups: $n$ stars and $k - 1$ bars.
- Count by choosing where the bars go.
- Each group needs a minimum? Hand it out first.
- Equations with a fixed total work the same way.
- Different things? Then this doesn't apply.

</section>
