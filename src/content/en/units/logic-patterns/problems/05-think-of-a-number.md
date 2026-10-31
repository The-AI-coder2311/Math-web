---
order: 5
difficulty: easy
choices: [3, 5, 9, 13, 23]
answer: B
verify: "range(0, 50).find((n) => (n + 4) * 3 === 27)"
---

Ty thinks of a number. Ty adds 4 to it and then multiplies the result by 3. The final answer is 27. What number did Ty start with?

## Hint

Start at 27 and undo each step in reverse order. What's the opposite of multiplying by 3?

## Solution

Work backwards from 27:

**Step 1.** Undo "multiply by 3": $27 \div 3 = 9$.

**Step 2.** Undo "add 4": $9 - 4 = 5$.

**Check:** $5 + 4 = 9$, and $9 \times 3 = 27$.

**Answer: (B) 5**
