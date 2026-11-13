---
order: 8
difficulty: medium
lesson: 03-repeats
choices: ["10","24","30","60","90"]
answer: D
mistakes:
  A: "That's the number of ways to pick the 2 spots for the Zs. The letters P, I, and A still need to be arranged in the other 3 spots."
  B: "That's $4!$. There are 5 letters."
  C: "That divides by 4. Only one letter repeats, so divide by $2! = 2$."
  E: "Check your division: $120 \\div 2$."
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

**Answer: (D) 60**
