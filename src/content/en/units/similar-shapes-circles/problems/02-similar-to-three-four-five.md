---
order: 2
difficulty: easy
lesson: 01-similarity-tools
choices: ["5","12","15","16","20"]
answer: E
mistakes:
  A: "That's the longest side of the small triangle. The scale factor is $48 \\div 12 = 4$."
  B: "That's the shortest side of the larger triangle, or the first perimeter. The longest side is $5 \\times 4$."
  C: "You may have used a scale factor of 3. Compare the perimeters: $48 \\div 12 = 4$."
  D: "That's the middle side, $4 \\times 4$. The longest side matches the 5."
verify: "(() => { const k = range(1, 20).find((n) => (3 + 4 + 5) * n === 48); return 5 * k; })()"
---

A triangle has sides 3, 4, and 5. A similar triangle has a perimeter of 48. How long is its longest side?

## Hint

What's the perimeter of the first triangle? How many times bigger is the second one?

## Hint 2

The first perimeter is 12, so the scale factor is $48 \div 12 = 4$.

## Solution

The first perimeter is 12, so the scale factor is $48 \div 12 = 4$. The longest side is $5 \times 4 = 20$.

**Answer: (E) 20**
