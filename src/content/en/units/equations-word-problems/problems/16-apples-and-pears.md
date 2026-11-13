---
order: 14
difficulty: medium
lesson: 04-two-unknowns
choices: ["2","3","4","5","6"]
answer: A
mistakes:
  B: "That's the cost of an apple. The question asks about a pear."
  C: "That's the cost of 2 pears. Divide by 2."
  D: "Check it with the second list: 2 pears would already cost 10."
  E: "That's the cost of 2 apples. Subtracting the two orders gives $13 - 7 = 6$ dollars for 2 apples, so keep going to find the price of a pear."
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

**Answer: (A) 2**
