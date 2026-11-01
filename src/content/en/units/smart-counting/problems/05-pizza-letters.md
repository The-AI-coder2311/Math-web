---
order: 8
difficulty: medium
lesson: 03-repeats
choices: ["24","30","60","90","120"]
answer: C
mistakes:
  A: "That's $4!$. There are 5 letters."
  B: "That divides by 4. Only one letter repeats, so divide by $2! = 2$."
  D: "Check your division: $120 \\div 2$."
  E: "That treats the two Zs as different. Swapping them doesn't make a new word."
verify: "new Set(perms([...'PIZZA']).map((p) => p.join(''))).size"
---

How many different ways can you arrange the letters in the word PIZZA?

## Hint

Arrange 5 letters as if they were all different. Then think about what swapping the two Zs does.

## Hint 2

There are $5! = 120$ orders if the letters are all different. Only the two Zs can swap.

## Solution

**Step 1.** If all 5 letters were different, there would be $5 \times 4 \times 3 \times 2 \times 1 = 120$ arrangements.

**Step 2.** Swapping the two Zs doesn't change the word, so each arrangement got counted twice. Divide by 2: $120 \div 2 = 60$.

**Answer: (C) 60**
