---
order: 1
difficulty: easy
choices: [7, 9, 12, 16, 24]
answer: C
verify: "product(range(1, 3), range(1, 4)).length"
---

A school cafeteria offers 3 kinds of sandwiches and 4 kinds of drinks. Maya picks one sandwich and one drink. How many different lunches could she choose?

## Hint

Maya makes one choice and then another. Imagine she picks a sandwich first. How many drinks could go with it?

## Solution

**Step 1.** Maya makes two choices: a sandwich (3 options) and a drink (4 options).

**Step 2.** Each of the 3 sandwiches can go with any of the 4 drinks, so we multiply:

$$3 \times 4 = 12$$

**A common mistake:** adding to get $3 + 4 = 7$. Adding counts the items on the menu, not the possible lunches.

**Answer: (C) 12**
