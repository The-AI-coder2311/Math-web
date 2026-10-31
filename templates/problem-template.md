---
# Copy this file to src/content/en/units/<unit>/problems/ and name it like 11-short-name.md
# The name is also how a student's progress is saved, so don't rename a problem after launch.

order: 11                       # Where it appears in the unit (no two problems can share a number)
difficulty: easy                # easy, medium, or hard
choices: [6, 8, 10, 12, 14]     # Two to six choices. Use quotes around math: "$\\frac{1}{2}$"
answer: C                       # The letter of the correct choice

# A short piece of JavaScript that works out the answer on its own, without using your solution.
# `npm run verify` runs it and compares the result to the answer above.
# Counting the possibilities by brute force is the best kind of check.
# See "Writing verify code" in the README. You can leave this out if the answer isn't a number or
# short text, but then only a person has checked it.
verify: "product(range(1, 2), range(1, 5)).length"
---

Write the question here. This example has 2 kinds of bread and 5 kinds of filling. How many different sandwiches can you make with one of each?

Please write your own original problem. Don't copy or lightly reword a real AMC or MATHCOUNTS problem.

## Hint

Write a nudge in the right direction, without giving away the answer. Keep the heading exactly as "## Hint".

## Solution

**Step 1.** Explain each step for a 6th grader who has never seen a problem like this. For this example: there are 2 breads and 5 fillings.

**Step 2.** Show the math between dollar signs, which also gets checked automatically:

$$2 \times 5 = 10$$

The last line below must be in exactly this format, and it must match the answer key. Keep the heading exactly as "## Solution".

**Answer: (C) 10**
