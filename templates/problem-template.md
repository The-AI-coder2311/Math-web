---
# Copy this file to src/content/en/units/<unit>/problems/ and name it like 21-short-name.md
# The name is also how a student's progress is saved, so don't rename a problem after launch.

order: 21                       # Where it appears in the unit (no two problems can share a number)
difficulty: easy                # easy, medium, or hard. Hard means combining two ideas, or a step students must invent.
lesson: 01-multiply-choices     # The file name of the lesson this practices, without .md
choices: [6, 7, 10, 12, 25]     # Two to six choices. List numbers from smallest to largest. Use single quotes around math: '$\frac{1}{2}$'
answer: C                       # The letter of the correct choice

# For each WRONG choice, what a student who picked it probably did. Math works here too.
mistakes:
  A: "You may have counted the fillings and forgotten the breads."
  B: "It looks like you added 2 and 5. Adding is for one choice OR another. Here you choose one AND the other."
  D: "Check your multiplication. Is there a 12 anywhere in this problem?"
  E: "You may have multiplied 5 by itself. There are 2 breads, not 5."

# A short piece of JavaScript that works out the answer on its own, without using your solution.
# `npm run verify` runs it and compares the result to the answer above.
# Counting the possibilities by brute force is the best kind of check.
# See "Writing verify code" in the README.
verify: "product(range(1, 2), range(1, 5)).length"
---

Write the question here. This example has 2 kinds of bread and 5 kinds of filling. How many different sandwiches can you make with one of each?

Please write your own original problem. Don't copy or lightly reword a real AMC, MATHCOUNTS, AoPS or textbook problem.

## Hint

A gentle nudge in the right direction. Keep the heading exactly as "## Hint".

## Hint 2

A bigger push, which still leaves the last step to the student. Keep the heading exactly as "## Hint 2".

## Solution

**Step 1.** Explain each step for a 6th grader who has never seen a problem like this. For this example: there are 2 breads and 5 fillings.

**Step 2.** Show the math between dollar signs, which also gets checked automatically:

$$2 \times 5 = 10$$

The last line below must be in exactly this format, and it must match the answer key. Keep the heading exactly as "## Solution".

**Answer: (C) 10**

## Another way

Optional. A second method, when one helps. Delete this section if not. For this example, list them all: each of the 2 breads pairs with 5 fillings, which makes 5 + 5 = 10.
