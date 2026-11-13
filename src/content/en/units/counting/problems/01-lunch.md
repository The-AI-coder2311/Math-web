---
order: 1
difficulty: easy
lesson: 01-multiply-choices
choices: ["7","9","12","16","24"]
answer: C
mistakes:
  A: "That's $3 + 4$. Adding counts the items on the menu. Maya picks a sandwich **and** a drink, so multiply."
  B: "That's $3 \\times 3$. There are 4 drinks, not 3."
  D: "That's $4 \\times 4$. There are 3 sandwiches, not 4."
  E: "That's $3 \\times 4 \\times 2$. There are only two choices here, so stop at $3 \\times 4$."
verify: "product(range(1, 3), range(1, 4)).length"
---

A school cafeteria offers 3 kinds of sandwiches and 4 kinds of drinks. Maya picks one sandwich and one drink. How many different lunches could she choose?

## Hint

Maya makes one choice and then another. Imagine she picks a sandwich first. How many drinks could go with it?

## Hint 2

For each of the 3 sandwiches, there are 4 drinks. That's 3 groups of 4.

## Solution

**Step 1.** Maya makes two choices: a sandwich (3 options) and a drink (4 options).

**Step 2.** Each of the 3 sandwiches can go with any of the 4 drinks, so we multiply:

$$3 \times 4 = 12$$

**A common mistake:** adding to get $3 + 4 = 7$. Adding counts the items on the menu, not the possible lunches.

**Answer: (C) 12**
