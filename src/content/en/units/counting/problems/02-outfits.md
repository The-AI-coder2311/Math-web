---
order: 2
difficulty: easy
lesson: 01-multiply-choices
choices: ["30","10","15","8","60"]
answer: A
mistakes:
  D: "That's $5 + 3$, leaving out the shoes. Choices made one after another multiply."
  B: "That's $5 + 3 + 2$. Adding counts the items, not the outfits."
  C: "That's $5 \\times 3$, which leaves out the shoes."
  E: "That's twice the right answer. Multiply $5 \\times 3 \\times 2$ once more and check."
verify: "product(range(1, 5), range(1, 3), range(1, 2)).length"
---

Andre is packing for a trip. He brings 5 shirts, 3 pairs of pants, and 2 pairs of shoes. An outfit is one shirt, one pair of pants, and one pair of shoes. How many different outfits can he make?

## Hint

There are three choices this time. The multiply trick still works, so multiply all three numbers.

## Hint 2

Multiply the numbers of shirts, pants, and shoes.

## Solution

**Step 1.** Andre makes three choices: a shirt (5 options), pants (3 options), and shoes (2 options).

**Step 2.** Multiply the number of options for each choice:

$$5 \times 3 \times 2 = 30$$

**Answer: (A) 30**
