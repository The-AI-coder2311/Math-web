---
order: 2
difficulty: easy
lesson: 01-solving-and-translating
choices: ["16","10","11","8","22"]
answer: D
mistakes:
  B: "That's from $2n = 20$. Check by putting it back: $2 \\times 10 + 3$ is 23."
  C: "That adds 3 to 19 before halving. To undo \"plus 3,\" subtract 3."
  A: "That's $2n$. You still need to divide by 2."
  E: "That's $19 + 3$. Undo the steps in reverse: subtract 3, and then divide by 2."
verify: "range(1, 50).find((n) => 2 * n + 3 === 19)"
---

Three more than twice a number is 19. What is the number?

## Hint

Call the number $n$. How would you write "twice a number"? Then how would you write "three more than" that?

## Hint 2

Write $2n + 3 = 19$, and subtract 3 from both sides.

## Solution

**Step 1.** Translate the sentence: $2n + 3 = 19$.

**Step 2.** Subtract 3 from both sides: $2n = 16$.

**Step 3.** Divide both sides by 2: $n = 8$.

**Answer: (D) 8**
