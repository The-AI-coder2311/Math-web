---
order: 32
difficulty: medium
lesson: 05-told-something
choices: ["$\\frac{5}{36}$","$\\frac{1}{6}$","$\\frac{5}{12}$","$\\frac{5}{11}$","$\\frac{1}{2}$"]
answer: D
mistakes:
  A: "That divides by all 36 outcomes. After the clue, only 11 outcomes are possible."
  B: "That's the chance of a total of at least 10 with no clue. The clue changes the list of outcomes."
  C: "That counts 12 outcomes with a 6. There are only 11, because (6,6) is one outcome, not two."
  E: "That counts (6,6) twice. There are 11 outcomes with a 6, and 5 of them have a total of at least 10."
verify: "(() => { const left = product(range(1, 6), range(1, 6)).filter((roll) => roll.includes(6)); return fraction(left.filter((roll) => sum(roll) >= 10).length, left.length); })()"
---

You roll two standard dice, and you're told that at least one of them shows a 6. What is the probability that the total is at least 10?

## Hint

First list the outcomes that have at least one 6. Be careful to count (6,6) only once.

## Hint 2

There are 11 outcomes with a 6. For a total of at least 10, the other die has to be a 4, a 5, or a 6.

## Solution

**Step 1.** Use the clue to shrink the list. The outcomes with at least one 6 are (6,1), (6,2), (6,3), (6,4), (6,5), (6,6), (1,6), (2,6), (3,6), (4,6), and (5,6). That's 11 outcomes.

**Step 2.** Count the ones with a total of at least 10: (6,4), (6,5), (6,6), (4,6), and (5,6). That's 5 outcomes.

**Step 3.** Divide by what's left:

$$\frac{5}{11}$$

**Answer: (D) $\frac{5}{11}$**
