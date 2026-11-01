---
order: 9
difficulty: medium
lesson: 01-pascal-and-binomials
choices: ["247","28","248","255","256"]
answer: A
mistakes:
  B: "That's $\\binom{8}{2}$, the subsets with exactly 2 things. \"At least 2\" also includes 3, 4, and more."
  C: "That removes the 8 subsets with 1 thing, but it keeps the empty subset, which has 0 things."
  D: "That removes only the empty subset. Subsets with exactly 1 thing also have fewer than 2."
  E: "That counts every subset, including those with 0 or 1 things."
verify: "sum(range(2, 8).map((k) => combos(range(1, 8), k).length))"
---

How many subsets of a set of 8 things contain at least 2 things?

## Hint

How many subsets are there in all? Which subsets don't count?

## Hint 2

There are 256 subsets. Remove the subset with 0 things and the subsets with exactly 1 thing.

## Solution

**Step 1.** There are $2^8 = 256$ subsets in all.

**Step 2.** The ones we don't want have 0 things (1 subset) or 1 thing (8 subsets).

**Step 3.** That leaves $256 - 1 - 8 = 247$.

**Answer: (A) 247**
