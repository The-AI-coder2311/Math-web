---
order: 5
difficulty: easy
lesson: 03-working-backwards
choices: ["3","23","9","13","5"]
answer: E
mistakes:
  A: "That's $9 \\div 3$. Undo each step once: divide by 3, and then subtract 4."
  C: "That's only the first step backward. You still need to undo \"add 4.\""
  D: "That adds 4 when going back. To undo adding 4, subtract 4."
  B: "That undoes the steps in the wrong order. The last step gets undone first."
verify: "range(0, 50).find((n) => (n + 4) * 3 === 27)"
---

Ty thinks of a number. Ty adds 4 to it and then multiplies the result by 3. The final answer is 27. What number did Ty start with?

## Hint

Start at 27 and undo each step in reverse order. What's the opposite of multiplying by 3?

## Hint 2

Undo "multiply by 3" first: $27 \div 3 = 9$. Then undo "add 4."

## Solution

Work backwards from 27:

**Step 1.** Undo "multiply by 3": $27 \div 3 = 9$.

**Step 2.** Undo "add 4": $9 - 4 = 5$.

**Check:** $5 + 4 = 9$, and $9 \times 3 = 27$.

**Answer: (E) 5**
