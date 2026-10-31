---
title: "The Multiply Trick"
summary: Learn the one idea behind most counting problems. When you make choices one after another, multiply.
minutes: 9
---

A school locker uses a code with 3 digits, such as 4-0-7. How many different codes are there?

"Counting" sounds too easy for a math competition, since you learned to count when you were little. But nobody wants to write out every locker code. In this lesson, you'll learn an idea that gets the answer in seconds.

> **The big idea:** When you make one choice **and then** another choice, multiply the number of options for each choice.

## Why multiplying works

You have 2 shirts (red and blue) and 3 pairs of pants (jeans, shorts, and khakis). How many outfits can you make? Let's draw every one of them.

![A tree diagram. The red shirt branches to jeans, shorts, and khakis. The blue shirt also branches to jeans, shorts, and khakis. That makes 6 outfits in all.](/images/counting-outfit-tree.svg)

Look at the shape of the tree. Each of the 2 shirts grows the same 3 branches. That's 2 groups of 3, and "groups of" is exactly what multiplication means:

$$2 \times 3 = 6$$

This only works because the number of pants doesn't depend on which shirt you picked. Every first choice leads to the same number of second choices.

## Example 1: Three choices in a row

An ice cream shop has 4 flavors, 3 sauces, and 2 toppings. You pick one of each. How many sundaes can you make?

**What do we know?** There are three separate choices, and you make all of them.

**What's the question really asking?** How many complete sundaes are possible.

Imagine the tree again. Each flavor has 3 sauce branches, which makes $4 \times 3 = 12$ branches. Each of those has 2 topping branches. So there are:

$$4 \times 3 \times 2 = 24$$

Try one yourself before going on. A cafeteria offers 3 sandwiches, 4 drinks, and 2 fruits, and you take one of each. How many different lunches are possible?

<details class="check"><summary>Show the answer</summary>

There are $3 \times 4 \times 2 = 24$ lunches. It's the same answer as the sundaes, because the same three numbers get multiplied. The order you multiply them in doesn't matter.

</details>

## Example 2: The locker code

Now back to the hook. Each of the 3 digits can be anything from 0 to 9, which gives 10 options.

**What's a smaller version we can try?** With a 1-digit code, there are 10 codes. With a 2-digit code, the codes run from 00 to 99, which makes 100. That agrees with $10 \times 10 = 100$, so the trick is working.

For 3 digits:

$$10 \times 10 \times 10 = 1000$$

Those codes are 000 through 999. You can check that by counting: 999 numbers from 1 to 999, plus the code 000, makes 1,000.

## Example 3: When a position has a rule

How many 3-digit numbers have only even digits? Remember that a number can't start with 0, or it wouldn't really have 3 digits.

**What do we know?** The even digits are 0, 2, 4, 6, and 8.

**Which choice has a rule?** The first digit can't be 0, so handle it first.

- The first digit has 4 options: 2, 4, 6, or 8.
- The second digit has 5 options.
- The third digit also has 5 options.

$$4 \times 5 \times 5 = 100$$

> **Tip:** Start with the position that has the strictest rule. Then the rest are often easy to count.

## Example 4: A contest-style question

A license tag has one letter from A to Z, followed by two digits. The two digits can't be the same, and the first digit can't be 0. How many tags are possible?

**What do we know?** There are three choices: a letter, a first digit, and a second digit.

**Which choices have rules?** The first digit can't be 0, so it has 9 options. The second digit can be anything except the first digit. That removes 1 of the 10 digits, which leaves 9 options. This time 0 is allowed, since only the first digit bans it.

$$26 \times 9 \times 9 = 2106$$

Notice something important. We don't know **which** digit the first one was, but we do know that **exactly one** digit gets ruled out. The number of options stays the same, and that's all the trick needs.

<section data-box="traps">

## Common traps

**Adding instead of multiplying.** For 2 shirts and 3 pants, some students answer $2 + 3 = 5$. That counts the items, not the outfits. Add only when you do one thing **or** another, such as picking either a shirt or a hat. Multiply when you do one thing **and** another.

**Forgetting that a number can't start with 0.** How many 2-digit numbers are there? Saying $10 \times 10 = 100$ is wrong, because that includes 00 through 09. The right count is $9 \times 10 = 90$, and it matches the list from 10 to 99.

**Doing the rule last.** Suppose you want 3-digit odd numbers. If you start with the first digit and ignore the rule until later, it's easy to get lost. Choose the last digit first, since it must be odd. That gives 5 options, and then there are 9 options for the first digit and 10 for the middle.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** The question asks "how many" and describes codes, outfits, numbers, or routes built from several choices.

**How long it should take:** Early questions like this take about a minute. If you find yourself writing a long list, stop and look for the choices.

**Using the answer choices:** Multiplying often leaves clues. If every choice in an answer must be even, the final answer can't be odd. You can also check last digits: the last digit of $26 \times 9 \times 9$ comes from $6 \times 1$, so it ends in 6. If only one answer choice ends in 6, you're done.

</section>

<section data-box="connections">

## Connections

Next, you'll use this trick for [arrangements, when order matters](/pathway/counting/02-when-order-matters/). It also powers [probability](/pathway/intro-probability/) and [counting factors](/pathway/primes-remainders/) later on.

</section>

<section data-box="summary">

## Remember this

- One choice **and then** another means multiply.
- It works because each first choice leads to the same number of second choices.
- A number can't start with 0.
- Start with the position that has the strictest rule.

</section>
