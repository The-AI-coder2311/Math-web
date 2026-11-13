---
order: 20
difficulty: hard
lesson: 03-counting-step-by-step
choices: ["6","8","9","13","21"]
answer: A
mistakes:
  B: "You may have started the table like a staircase, with 2 ways to reach pad 2. The frog can only reach pad 2 in 1 way."
  C: "You may have used 3 ways from pad 6 to pad 8. There are only 2: 6-7-8 or 6-8."
  D: "That's the count for pad 8 if nothing were broken. Pad 5 removes many routes."
  E: "That's a later Fibonacci number. Put a 0 at pad 5, and rebuild the table from there."
verify: "(() => { const w = { 1: 1 }; range(2, 8).forEach((p) => { w[p] = p === 5 ? 0 : (w[p - 1] || 0) + (w[p - 2] || 0); }); return w[8]; })()"
---

A frog sits on pad 1, in a row of pads numbered 1 to 8. It hops forward by 1 or 2 pads at a time. Pad 5 is broken, so the frog can't land on it. How many ways can the frog reach pad 8?

## Hint

Make a table. How many ways can the frog reach each pad? What should you write for pad 5?

## Hint 2

Pad 5 gets 0. The first pads go 1, 1, 2, 3. Then pad 6 gets $0 + 3$.

## Solution

Build the table. Pads 1 to 4 get 1, 1, 2, and 3 ways. Pad 5 gets 0. Pad 6 gets $0 + 3 = 3$. Pad 7 gets $3 + 0 = 3$. Pad 8 gets $3 + 3 = 6$.

**Answer: (A) 6**

## Another way

The frog has to jump over pad 5, so it must go from pad 4 to pad 6. There are 3 ways to reach pad 4 and 2 ways to go from pad 6 to pad 8, which gives $3 \times 2 = 6$.
