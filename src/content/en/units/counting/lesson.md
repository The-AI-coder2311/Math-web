---
title: "Counting: The Multiply Trick"
summary: Learn the one idea behind most counting problems. When you make choices one after another, multiply.
minutes: 5
---

"Counting" sounds too easy for a math competition. You learned to count when you were little, right?

Competition counting is different. It asks questions like, "How many different locker codes are possible?" The answer might be in the thousands, so listing them all would take forever. In this lesson, you'll learn one idea that gets you the answer in seconds.

> **The big idea:** When you make one choice and then another choice, **multiply** the number of options for each choice.

## Example 1: Getting dressed

You have 2 shirts (red and blue) and 3 pairs of pants (jeans, shorts, and khakis). How many different outfits can you make?

Let's draw it. For each shirt, you could pick any of the 3 pairs of pants.

![A tree diagram. The red shirt branches to jeans, shorts, and khakis. The blue shirt also branches to jeans, shorts, and khakis. That makes 6 outfits in all.](/images/counting-outfit-tree.svg)

There are 2 groups of 3, so there are $2 \times 3 = 6$ outfits. That's why we multiply: every option for the first choice gets paired with every option for the second.

## Example 2: Three choices work the same way

An ice cream shop has 4 flavors, 3 sauces, and 2 toppings. You pick one of each. How many different sundaes can you make?

Just keep multiplying:

$$4 \times 3 \times 2 = 24$$

That's 24 sundaes, and we didn't have to list a single one.

## Example 3: When your choices shrink

Five students are on a team. The team picks a captain, and then a different student as co-captain. How many ways can this happen?

- **Captain:** any of the 5 students, so 5 options.
- **Co-captain:** anyone except the captain, so 4 options.

The answer is $5 \times 4 = 20$ ways.

Here's what to remember: **if something can't be used twice, the next choice has one fewer option.**

## Example 4: Start with the pickiest choice

How many two-digit numbers are there? (These are the numbers from 10 to 99.)

Think of building the number one digit at a time. Some digits have a rule, so handle those first:

- **Tens digit:** it can't be 0, because 07 is not really a two-digit number. That leaves 1 through 9, so 9 options.
- **Ones digit:** anything from 0 through 9, so 10 options.

The answer is $9 \times 10 = 90$ two-digit numbers.

You can check this another way. Counting from 10 to 99 gives $99 - 10 + 1 = 90$ numbers. The two methods match!

> **Tip:** Whenever one choice has a special rule, deal with it first. Competition problems often hide a rule like this, and it's the most common place to slip up.

## Don't mix these up

Multiply when you make **one choice and then another**. But if you're making just **one choice** from several groups, you add.

- A sandwich **and** a drink, from 3 sandwiches and 4 drinks: two choices, so $3 \times 4 = 12$ lunches.
- A sandwich **or** a soup, from 3 sandwiches and 4 soups: just one choice, so $3 + 4 = 7$ options.

## Your turn

Before you start the practice problems, try this one in your head:

A bike has 3 colors and 2 seat styles. How many different bikes are possible?

If you said $3 \times 2 = 6$, you've got the big idea, and you're ready to practice. If not, that's okay. Read Example 1 once more, then go on. The practice problems have hints whenever you need them.
