---
order: 20
difficulty: hard
lesson: 04-recursive-and-special
choices: ["-5","-3","-2","2","5"]
answer: B
mistakes:
  A: "That's the 5th term in the cycle. Check your remainder: 100 divided by 6 leaves 4."
  C: "That's the 6th term in the cycle, which is what you'd get if 100 were a multiple of 6."
  D: "That's the 3rd term in the cycle. Check your remainder: 100 divided by 6 leaves 4."
  E: "That's the 2nd term in the cycle. You may have used a cycle of the wrong length. Write out 8 terms to see it."
verify: "range(3, 100).reduce(([a, b]) => [b, b - a], [3, 5])[1]"
---

A list starts with 3 and 5. Each later term equals the term before it minus the term before that. What is the 100th term?

## Hint

Write out the first 8 or so terms. What do you notice?

## Hint 2

The list goes 3, 5, 2, $-3$, $-5$, $-2$, and then repeats. Divide 100 by the length of the cycle.

## Solution

**Step 1.** Write out the terms: 3, 5, 2, $-3$, $-5$, $-2$, 3, 5. After 6 terms, the list repeats.

**Step 2.** Since $100 = 6 \times 16 + 4$, the 100th term matches the 4th term, which is $-3$.

**Answer: (B) -3**
