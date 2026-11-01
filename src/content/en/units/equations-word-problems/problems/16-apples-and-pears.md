---
order: 14
difficulty: medium
lesson: 04-two-unknowns
choices: ["1","2","3","4","5"]
answer: B
mistakes:
  A: "Check it with the second list: if a pear costs 1, then an apple costs 5, which doesn't fit the first list."
  C: "That's the cost of an apple. The question asks about a pear."
  D: "That's the cost of 2 pears. Divide by 2."
  E: "Check it with the second list: 2 pears would already cost 10."
verify: "product(range(1, 10), range(1, 10)).find(([a, p]) => 3 * a + 2 * p === 13 && a + 2 * p === 7)[1]"
---

Three apples and 2 pears cost 13 dollars. One apple and 2 pears cost 7 dollars. How many dollars does one pear cost?

## Hint

Compare the two shopping lists. What's the difference between them?

## Hint 2

The first list has 2 more apples, and it costs 6 dollars more. So an apple costs 3 dollars.

## Solution

**Step 1.** The first list has 2 more apples and costs $13 - 7 = 6$ more, so an apple costs 3 dollars.

**Step 2.** Then $3 + 2p = 7$, so $2p = 4$ and $p = 2$.

**Answer: (B) 2**
